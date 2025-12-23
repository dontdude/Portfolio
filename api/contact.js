const path = require('path');
// Load .env.local for local development
try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
} catch (e) {
  // Ignore in production
}

const nodemailer = require('nodemailer');

module.exports = async (req, res) => {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { name, email, message } = req.body;

  if (!name || !email || !message) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  // Configure Transporter (Gmail)
  // User must set GMAIL_USER and GMAIL_PASS in Vercel Environment Variables
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER, // Your Gmail address
      pass: process.env.GMAIL_PASS, // Your App Password
    },
  });

  try {
    // Send email
    await transporter.sendMail({
      from: `"${name}" <${process.env.GMAIL_USER}>`, // Authenticated sender
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER, // Send to primary email (or self if not set)
      replyTo: email, // Valid Reply-To so you can hit reply directly
      subject: `Portfolio Contact: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        
        Message:
        ${message}
      `,
      html: `
        <h3>New Contact from Portfolio</h3>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <blockquote style="background: #f9f9f9; padding: 10px; border-left: 5px solid #ccc;">
          ${message.replace(/\n/g, '<br>')}
        </blockquote>
      `
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully!' });
  } catch (error) {
    console.error('Email send error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
};
