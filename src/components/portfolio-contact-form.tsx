import { useState } from 'react';
import { useServerFn } from '@tanstack/react-start';
import { Send, LoaderCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactSchema } from '@/lib/contact-schema';
import { storeContactMessage } from '@/lib/contact.functions';

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
    try {
      await saveMessage({ data: parsed.data });
      setFeedback('Message saved securely. Email delivery is not configured yet.');
      form.reset();
    } catch { setFeedback('Your message could not be saved. Please try again later.'); }
    finally { setPending(false); }
  }}>
    <div className="form-row"><div className="form-field"><label className="form-label" htmlFor="name">Your name</label><input className="form-input" id="name" name="name" placeholder="What's your name?" maxLength={100} required /></div><div className="form-field"><label className="form-label" htmlFor="email">Email address</label><input className="form-input" id="email" name="email" type="email" placeholder="you@example.com" maxLength={255} required /></div></div>
    <div className="form-field"><label className="form-label" htmlFor="subject">Subject</label><input className="form-input" id="subject" name="subject" placeholder="What do you have in mind?" maxLength={160} required /></div>
    <div className="form-field"><label className="form-label" htmlFor="message">Your message</label><textarea className="form-input" id="message" name="message" placeholder="Tell me a little about your idea…" maxLength={5000} required /></div>
    <input type="text" name="website" tabIndex={-1} autoComplete="off" className="hidden" aria-hidden="true" />
    <Button type="submit" disabled aria-describedby="contact-delivery-notice">{pending ? <LoaderCircle className="animate-spin" size={14}/> : <Send size={14}/>} Send Message</Button>
    <p id="contact-delivery-notice" className="form-notice">Messages open once my contact email is connected.</p>
    {feedback && <p className="form-notice" role="status">{feedback}</p>}
  </form>;
}