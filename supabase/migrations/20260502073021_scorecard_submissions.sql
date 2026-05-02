-- Kapes Adventures · Impact Scorecard submissions table
-- Created for the prototype scorecard flow. Public-facing insert via anon key, RLS-locked.

CREATE TABLE IF NOT EXISTS public.scorecard_submissions (
  id           uuid          PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at   timestamptz   NOT NULL    DEFAULT now(),
  -- Recipient
  name         text,
  email        text          NOT NULL,
  school       text,
  country      text,
  -- Scoring
  score        int           NOT NULL    CHECK (score >= 0 AND score <= 100),
  band         text,
  band_color   text,
  total        int,
  max_score    int,
  -- Detail
  sections     jsonb,        -- [{title, score, max, pct}, ...]
  answers      jsonb,        -- {qid: option_index, ...}
  -- Light context (for analysis later)
  user_agent   text,
  referrer     text,
  source       text          DEFAULT 'web'
);

CREATE INDEX IF NOT EXISTS scorecard_submissions_created_at_idx ON public.scorecard_submissions (created_at DESC);
CREATE INDEX IF NOT EXISTS scorecard_submissions_email_idx      ON public.scorecard_submissions (email);

-- Enable RLS
ALTER TABLE public.scorecard_submissions ENABLE ROW LEVEL SECURITY;

-- Anon may INSERT only (so the public LP can submit), but never SELECT/UPDATE/DELETE.
-- Reads are reserved for the service role and authenticated admin users.
CREATE POLICY "scorecard_submissions_anon_insert"
  ON public.scorecard_submissions
  FOR INSERT
  TO anon
  WITH CHECK (true);

-- Authenticated users (admin) can read everything.
CREATE POLICY "scorecard_submissions_authed_select"
  ON public.scorecard_submissions
  FOR SELECT
  TO authenticated
  USING (true);

COMMENT ON TABLE  public.scorecard_submissions IS 'Impact Scorecard lead submissions from the public-facing assessment.';
COMMENT ON COLUMN public.scorecard_submissions.sections IS 'Array of {title, score, max, pct} per assessment section.';
COMMENT ON COLUMN public.scorecard_submissions.answers IS 'Raw question-id → option-index map for later analysis.';
