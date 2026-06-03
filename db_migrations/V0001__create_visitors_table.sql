CREATE TABLE t_p97150707_website_development_.visitors (
  id SERIAL PRIMARY KEY,
  visited_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);