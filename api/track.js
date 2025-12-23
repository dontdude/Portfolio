const { sanitize, createTransporter } = require('./_utils');

module.exports = async (req, res) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { event, meta = {} } = req.body;

  if (!event) return res.status(400).json({ error: 'Missing event name' });

  try {
    const transporter = createTransporter();

    // Capture IP & Geolocation
    const ip = req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'Unknown';
    const city = req.headers['x-vercel-ip-city'] || 'Unknown City';
    const country = req.headers['x-vercel-ip-country'] || 'Unknown Country';
    
    // Sanitize Data
    const safeEvent = sanitize(event);
    const safeIP = sanitize(ip.split(',')[0].trim());
    const safeUA = sanitize(meta.userAgent || 'Unknown');
    const safeScreen = sanitize(meta.screen || 'Unknown');
    const safeTZ = sanitize(meta.timezone || 'Unknown');
    const safeRef = sanitize(meta.referrer || 'Unknown');
    const safeLocation = city !== 'Unknown City' ? `${city}, ${country}` : safeTZ;

    await transporter.sendMail({
      from: `"Portfolio Tracker" <${process.env.GMAIL_USER}>`,
      to: process.env.RECEIVER_EMAIL || process.env.GMAIL_USER,
      subject: `🔔 Activity: ${safeEvent}`,
      text: `Event: ${safeEvent}\n\n[Lead Intelligence]\nIP: ${safeIP}\nLocation: ${safeLocation}\nDevice: ${safeUA}`,
      html: `
        <div style="font-family: Arial, sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #6c5ce7;">🔔 New Activity Detected</h2>
          <p style="font-size: 18px;"><strong>Event:</strong> ${safeEvent}</p>
          
          <div style="background: #eef2f5; padding: 15px; margin-top: 30px; border-radius: 5px; font-size: 13px; color: #555; border-left: 4px solid #6c5ce7;">
            <h3 style="margin-top: 0; color: #333;">🕵️‍♂️ Lead Intelligence</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <div><strong>IP Address:</strong><br>${safeIP}</div>
                <div><strong>Location:</strong><br>${safeLocation}</div>
                <div><strong>Screen:</strong><br>${safeScreen}</div>
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

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Tracking Error:', error);
    return res.status(500).json({ error: 'Failed to track.' });
  }
};
