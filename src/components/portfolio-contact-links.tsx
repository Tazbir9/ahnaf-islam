import { Mail, MessageCircle, Github, Linkedin, Facebook } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { contactDetails, whatsappUrl } from '@/lib/portfolio-data';

export function PortfolioContactLinks() {
  const links = [
    { name: 'Email', icon: Mail, href: contactDetails.email ? `mailto:${encodeURIComponent(contactDetails.email)}` : null },
    { name: 'WhatsApp', icon: MessageCircle, href: whatsappUrl(contactDetails.whatsapp) },
    { name: 'GitHub', icon: Github, href: contactDetails.github },
    { name: 'LinkedIn', icon: Linkedin, href: contactDetails.linkedin },
    { name: 'Facebook', icon: Facebook, href: contactDetails.facebook },
  ];
  return <div className="contact-channels">{links.map(link => <div className="contact-channel" key={link.name}>
    {link.href ? <Button asChild variant="outline" size="icon" title={link.name}><a href={link.href} aria-label={link.name} target="_blank" rel="noreferrer"><link.icon size={19}/></a></Button> : <Button variant="outline" size="icon" disabled aria-label={`${link.name} — not configured`} title={`${link.name} — not configured`}><link.icon size={19}/></Button>}
    <span>{link.name}<small>{link.href ? 'Connect' : 'Not added yet'}</small></span>
  </div>)}</div>;
}