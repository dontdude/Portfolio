const nodemailer = require('nodemailer');
const path = require('path');

// Load .env.local for local development
try {
  require('dotenv').config({ path: path.resolve(__dirname, '../.env.local') });
} catch (e) {
  // Ignore in production
}

// Sanitize inputs to prevent HTML injection
const sanitize = (str) => {
  return String(str).replace(/[&<>"'/]/g, (char) => ({
    '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;', '/': '&#x2F;'
  })[char]);
};

// Create Transporter
const createTransporter = () => {
    return nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASS,
      },
    });
};

module.exports = {
    sanitize,
    createTransporter
};
