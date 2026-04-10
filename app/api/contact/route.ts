import { resend } from '@/lib/resend';
import { renderContactEmail } from '@/emails/ContactEmail';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

export async function POST(request: Request) {
  let body: unknown;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: 'Invalid request body.' }, { status: 400 });
  }

  const { name, email, message } = body as Record<string, unknown>;

  // ── Server-side validation ──────────────────
  if (!name || typeof name !== 'string' || !name.trim()) {
    return Response.json({ error: 'Name is required.' }, { status: 400 });
  }
  if (!email || typeof email !== 'string' || !email.trim()) {
    return Response.json({ error: 'Email is required.' }, { status: 400 });
  }
  if (!EMAIL_REGEX.test(email.trim())) {
    return Response.json(
      { error: 'Please enter a valid email address.' },
      { status: 400 },
    );
  }
  if (!message || typeof message !== 'string' || !message.trim()) {
    return Response.json({ error: 'Message is required.' }, { status: 400 });
  }

  const safeName = name.trim();
  const safeEmail = email.trim();
  const safeMessage = message.trim();

  // ── Send email ──────────────────────────────
  try {
    const html = await renderContactEmail({
      name: safeName,
      email: safeEmail,
      message: safeMessage,
    });

    const { error } = await resend.emails.send({
      // Replace with a verified sending domain before going live.
      // onboarding@resend.dev works in test/sandbox mode.
      from: 'DKG Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_EMAIL!,
      replyTo: safeEmail,
      subject: `New message from ${safeName}`,
      html,
    });

    if (error) {
      console.error('[contact] Resend error:', error);
      return Response.json({ error: 'Failed to send message.' }, { status: 500 });
    }

    return Response.json({ success: true });
  } catch (err) {
    console.error('[contact] Unexpected error:', err);
    return Response.json({ error: 'Failed to send message.' }, { status: 500 });
  }
}
