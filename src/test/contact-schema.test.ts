import { describe, expect, it } from 'vitest';
import { contactSchema } from '@/lib/contact-schema';

const valid = { name: 'Test visitor', email: 'visitor@example.com', subject: 'Project question', message: 'Can we discuss a project?' };
describe('Contact validation', () => {
  it('accepts and trims a complete message', () => {
    expect(contactSchema.parse({ ...valid, name: ' Test visitor ' }).name).toBe('Test visitor');
  });
  it.each(['name', 'email', 'subject', 'message'])('requires %s', field => {
    expect(contactSchema.safeParse({ ...valid, [field]: '' }).success).toBe(false);
  });
  it('rejects malformed emails and oversized messages', () => {
    expect(contactSchema.safeParse({ ...valid, email: 'not-an-email' }).success).toBe(false);
    expect(contactSchema.safeParse({ ...valid, message: 'a'.repeat(5001) }).success).toBe(false);
  });
  it('rejects a filled spam trap', () => {
    expect(contactSchema.safeParse({ ...valid, website: 'spam' }).success).toBe(false);
  });
});