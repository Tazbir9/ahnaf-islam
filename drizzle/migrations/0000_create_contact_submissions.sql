CREATE TABLE public.contact_submissions (
 id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
 created_at timestamptz NOT NULL DEFAULT now(),
 name text NOT NULL CHECK (char_length(name) BETWEEN 1 AND 100),
 email text NOT NULL CHECK (char_length(email) BETWEEN 3 AND 255),
 subject text NOT NULL CHECK (char_length(subject) BETWEEN 1 AND 160),
 message text NOT NULL CHECK (char_length(message) BETWEEN 1 AND 5000)
);
GRANT ALL ON public.contact_submissions TO service_role;
REVOKE ALL ON public.contact_submissions FROM anon, authenticated;
ALTER TABLE public.contact_submissions ENABLE ROW LEVEL SECURITY;
COMMENT ON TABLE public.contact_submissions IS 'Private portfolio messages; owner reads through Lovable Cloud Database. No visitor read access.';