import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Send, LoaderCircle } from 'lucide-react';
import emailjs from '@emailjs/browser';
import { Button } from '@/components/ui/button';
import { contactSchema } from '@/lib/contact-schema';
import { storeContactMessage } from '@/lib/contact.functions';

// EmailJS public identifiers (safe to ship in the browser).
const EMAILJS = { serviceId: 'service_rx7239c', templateId: 'template_ls9uc7z', publicKey: 'fdDbFNCUBEu0NM0Sb' };

export function PortfolioContactForm() {
  const saveMessage = useServerFn(storeContactMessage);
  const [pending, setPending] = useState(false);
  const [feedback, setFeedback] = useState('');
  return <form className="contact-form" onSubmit={async event => {
    event.preventDefault();
    const form = event.currentTarget;
    const parsed = contactSchema.safeParse(Object.fromEntries(new FormData(form)));
    if (!parsed.success) { setFeedback(parsed.error.issues[0]?.message ?? 'Please check your message.'); return; }
    setPending(true); setFeedback('');
    const { name, email, subject, message } = parsed.data;
    try {
      await emailjs.send(EMAILJS.serviceId, EMAILJS.templateId, {
        name, email, subject, message,
        from_name: name, from_email: email, reply_to: email, title: subject,
        time: new Date().toLocaleString(),
      }, { publicKey: EMAILJS.publicKey });
      saveMessage({ data: parsed.data }).catch(() => {});
      setFeedback('Thanks! Your message was sent — I’ll reply soon.');
      form.reset();
    } catch { setFeedback('Your message could not be sent. Please try again or email me directly.'); }
    finally { setPending(false); }
  }}>
    <div className="form-row"><div className="form-field"><label className="form-label" htmlFor="name">Your name</label><input className="form-input" id="name" name="name" placeholder="What's your name?" maxLength={100} required /></div><div className="form-field"><label className="form-label" htmlFor="email">Email address</label><input className="form-input" id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} required /></div></div>
    <div className="form-field"><label className="form-label" htmlFor="subject">Subject</label><input className="form-input" id="subject" name="subject" placeholder="What do you have in mind?" maxLength={160} required /></div>
    <div className="form-field"><label className="form-label" htmlFor="message">Your message</label><textarea className="form-input" id="message" name="message" placeholder="Tell me a little about your idea…" maxLength={5000} required /></div>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    <Button type="submit" disabled={pending}>{pending ? <LoaderCircle className="animate-spin" size={14}/> : <Send size={14}/>} {pending ? 'Sending…' : 'Send Message'}</Button>
    {feedback && <p className="form-notice" role="status" aria-live="polite">{feedback}</p>}
  </form>;
}