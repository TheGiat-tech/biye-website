import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to escape HTML to prevent XSS
function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}

// Helper function to sanitize email header to prevent header injection
function sanitizeHeader(text: string): string {
  // Remove newlines and carriage returns to prevent header injection
  return text.replace(/[\r\n]/g, ' ').trim();
}

export async function POST(request: NextRequest) {
  try {
    // Parse request body
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields: name, email, and message are required' },
        { status: 400 }
      );
    }

    // Validate field lengths to prevent abuse
    if (name.length > 200 || email.length > 200 || (subject && subject.length > 500) || message.length > 10000) {
      return NextResponse.json(
        { error: 'One or more fields exceed maximum length' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Get environment variables
    const contactEmail = process.env.CONTACT_EMAIL;
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT;
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;

    // Validate SMTP configuration
    if (!contactEmail || !smtpHost || !smtpPort || !smtpUser || !smtpPass) {
      console.error('Missing SMTP configuration in environment variables');
      return NextResponse.json(
        { error: 'Email service is not configured. Please contact support.' },
        { status: 500 }
      );
    }

    // Create nodemailer transporter with timeout
    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: parseInt(smtpPort),
      secure: smtpSecure,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
      connectionTimeout: 10000, // 10 seconds
      greetingTimeout: 10000,
      socketTimeout: 10000,
    });

    // Sanitize user inputs for HTML email
    const sanitizedName = escapeHtml(name);
    const sanitizedEmail = escapeHtml(email);
    const sanitizedSubject = escapeHtml(subject || 'N/A');
    const sanitizedMessage = escapeHtml(message);

    // Sanitize for email headers to prevent header injection
    const headerSafeName = sanitizeHeader(name);
    const headerSafeEmail = sanitizeHeader(email);
    const headerSafeSubject = sanitizeHeader(subject || `Contact Form Submission from ${headerSafeName}`);

    // Prepare email content
    const mailOptions = {
      from: smtpUser,
      to: contactEmail,
      replyTo: headerSafeEmail,
      subject: headerSafeSubject,
      text: `
Name: ${name}
Email: ${email}
Subject: ${subject || 'N/A'}

Message:
${message}
      `,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
    .container { max-width: 600px; margin: 0 auto; padding: 20px; }
    .header { background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin-bottom: 20px; }
    .field { margin-bottom: 15px; }
    .label { font-weight: bold; color: #666; }
    .value { margin-top: 5px; }
    .message { background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin-top: 10px; white-space: pre-wrap; }
  </style>
</head>
<body>
  <div class="container">
    <div class="header">
      <h2 style="margin: 0; color: #333;">New Contact Form Submission</h2>
    </div>
    
    <div class="field">
      <div class="label">From:</div>
      <div class="value">${sanitizedName}</div>
    </div>
    
    <div class="field">
      <div class="label">Email:</div>
      <div class="value"><a href="mailto:${sanitizedEmail}">${sanitizedEmail}</a></div>
    </div>
    
    <div class="field">
      <div class="label">Subject:</div>
      <div class="value">${sanitizedSubject}</div>
    </div>
    
    <div class="field">
      <div class="label">Message:</div>
      <div class="message">${sanitizedMessage}</div>
    </div>
  </div>
</body>
</html>
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    // Log success (without personal data for privacy)
    console.log('Contact form submission sent successfully');

    return NextResponse.json(
      { success: true, message: 'Email sent successfully' },
      { status: 200 }
    );
  } catch (error) {
    // Log error details server-side
    console.error('Error sending contact form email:', error);

    // Return generic error to client
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}
