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

  const { name, email, message, company, sourceUrl, meta = {} } = req.body;

  // Anti-Spam: Honeypot Check (If 'company' is filled, it's a bot)
  if (company) {
    return res.status(200).json({ success: true, message: 'Sent!' }); // Fake success
  }

  // Anti-Spam: Speed Check (Humans take > 2 seconds)
  const seconds = parseInt((meta.timeOnPage || '0').split(' ')[0]); // "10 seconds" -> 10
  if (seconds < 2) {
    return res.status(429).json({ error: 'Too fast! Please relax.' });
  }

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

    // Capture IP & Geolocation (Vercel Headers)
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
    const city = req.headers['x-vercel-ip-city'] || 'Unknown City';
    const country = req.headers['x-vercel-ip-country'] || 'Unknown Country';
    
    // Sanitize Data
    const safeName = sanitize(name);
    const safeEmail = sanitize(email);
    const safeMessage = sanitize(message);
    const safeSource = sourceUrl ? sanitize(sourceUrl) : 'Unknown';
    
    // Sanitize Meta Intelligence
    const safeIP = sanitize(ip.split(',')[0].trim());
    const safeUA = sanitize(meta.userAgent || 'Unknown');
    const safeScreen = sanitize(meta.screen || 'Unknown');
    const safeTZ = sanitize(meta.timezone || 'Unknown');
    const safeRef = sanitize(meta.referrer || 'Unknown');
    // Advanced
    const safeRam = sanitize(meta.ram || '?');
    const safeCores = sanitize(meta.cores || '?');
    const safeNet = sanitize(meta.network || '?');
    const safeTime = sanitize(meta.timeOnPage || '?');
    const safeLocation = city !== 'Unknown City' ? `${city}, ${country}` : safeTZ;

    await transporter.sendMail({
      from: `"${safeName}" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      replyTo: email,
      subject: `Portfolio Contact: ${safeName}`,
      text: `Name: ${safeName}\nEmail: ${safeEmail}\nSource: ${safeSource}\n\nMessage:\n${safeMessage}\n\n[Lead Intelligence]\nIP: ${safeIP}\nLocation: ${safeLocation}\nDevice: ${safeUA}\nHardware: ${safeRam}, ${safeCores} Cores\nTime on Page: ${safeTime}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #00bfff;">New Contact Request</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Source:</strong> <a href="${safeSource}" style="color: #00bfff;">${safeSource}</a></p>
          
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          
          <p><strong>Message:</strong></p>
          <div style="background: #f4f6f8; padding: 15px; border-radius: 5px; white-space: pre-wrap;">${safeMessage}</div>

          <div style="background: #eef2f5; padding: 15px; margin-top: 30px; border-radius: 5px; font-size: 13px; color: #555; border-left: 4px solid #00bfff;">
            <h3 style="margin-top: 0; color: #333;">🕵️‍♂️ Lead Intelligence</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div><strong>IP Address:</strong><br>${safeIP}</div>
                <div><strong>Location:</strong><br>${safeLocation}</div>
                <div><strong>Hardware:</strong><br>${safeRam} RAM / ${safeCores} Cores</div>
                <div><strong>Network/Speed:</strong><br>${safeNet.toUpperCase()}</div>
                <div><strong>Screen:</strong><br>${safeScreen}</div>
                <div><strong>Time on Page:</strong><br>${safeTime}</div>
                <div><strong>Referrer:</strong><br>${safeRef.substring(0, 50)}</div>
                <div><strong>Timezone:</strong><br>${safeTZ}</div>
            </div>
            <div style="margin-top: 10px;">
                <strong>Device / User Agent:</strong><br>
                <span style="font-family: monospace; color: #777; font-size: 11px;">${safeUA}</span>
            </div>
          </div>
        </div>
      `
    });

    return res.status(200).json({ success: true, message: 'Sent!' });
  } catch (error) {
    console.error('Email Error:', error);
    return res.status(500).json({ error: 'Failed to send email.' });
  }
};
