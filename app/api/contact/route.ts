import nodemailer from 'nodemailer';

type ReqBody = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

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

export async function POST(request: Request) {
  try {
    const body: ReqBody = await request.json();

    const name = (body.name || '').trim();
    const email = (body.email || '').trim();
    const subject = (body.subject || 'New contact message').trim();
    const message = (body.message || '').trim();

    if (!name || !email || !message) {
      return new Response(JSON.stringify({ error: 'Missing required fields' }), {
        status: 400,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT || 587);
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;
    const secure = process.env.SMTP_SECURE === 'true';
    const to = process.env.CONTACT_EMAIL || process.env.SMTP_USER || 'info@biye.com';

    if (!host || !user || !pass) {
      console.error('SMTP env not configured');
      return new Response(JSON.stringify({ error: 'Server email not configured' }), {
        status: 500,
        headers: { 'Content-Type': 'application/json' },
      });
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure,
      auth: { user, pass },
    });

    const mailOptions = {
      from: `"${name}" <${user}>`,
      to,
      replyTo: email,
      subject: `${subject}`,
      text: `${message}\n\nFrom: ${name} <${email}>`,
      html: `<p>${escapeHtml(message).replace(/\n/g, '<br/>')}</p><hr/><p>From: ${escapeHtml(name)} &lt;${escapeHtml(email)}&gt;</p>`,
    };

    await transporter.sendMail(mailOptions);

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    console.error('contact route error', err);
    return new Response(JSON.stringify({ error: err?.message || 'Server error' }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
