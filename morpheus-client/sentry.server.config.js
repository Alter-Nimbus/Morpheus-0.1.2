import * as Sentry from "@sentry/nextjs";

const SENTRY_DSN = process.env.SENTRY_DSN_CLIENT || process.env.NEXT_PUBLIC_SENTRY_DSN_CLIENT || "";
const SENTRY_ENV = process.env.SENTRY_ENV || process.env.NEXT_PUBLIC_SENTRY_ENV || "development";

Sentry.init({
  dsn: SENTRY_DSN,
  debug: true,
  environment: SENTRY_ENV
});
