import { createServerFn } from '@tanstack/react-start';
import { contactSchema } from './contact-schema';

// Public append-only intake: validated fields only, no message reads or updates.
// Kept available for storage verification; UI remains disabled pending recipient setup.
export const storeContactMessage = createServerFn({ method: 'POST' })
  .inputValidator((input: unknown) => contactSchema.parse(input))
  .handler(async ({ data }) => {
    const { supabaseAdmin } = await import('@/integrations/supabase/client.server');
    const { error } = await supabaseAdmin.from('contact_submissions').insert({
      name: data.name, email: data.email, subject: data.subject, message: data.message,
    });
    if (error) throw new Error('Your message could not be saved. Please try again later.');
    return { stored: true, emailed: false };
  });