const path = require('path');
// Load .env.local for local development
try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
} catch (e) {
  // Ignore in production
}

const nodemailer = require('nodemailer');

// Sanitize inputs to prevent HTML injection
const sanitize = (str) => {
  return String(str).replace(/[&<>"'/]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;'
  })[char]);
};

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { name, email, message, sourceUrl } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });

    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);
    const safeSource = sourceUrl ? sanitize(sourceUrl) : 'Unknown';

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nSource: ${safeSource}\n\nMessage:\n${safeMessage}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00bfff;">New Contact Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Source:</strong> <a href="${safeSource}" style="color: #00bfff;">${safeSource}</a></p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <p><strong>Message:</strong></p>
          <div style="background: #f4f6f8; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safeMessage}</div>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: 'Sent!' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
};
