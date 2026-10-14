import { createHmac, randomUUID, timingSafeEqual } from "node:crypto";

export const CONTACT_LIMIT_COOKIE = "skyra-contact-limit";
export const CONTACT_DAILY_LIMIT = 5;
export const CONTACT_LIMIT_MESSAGE =
  "You've reached the daily limit of 5 submissions from this browser. Please try again tomorrow (after midnight IST).";

type Allowance = { device: string; day: string; count: number };

const sign = (payload: string, secret: string) =>
  createHmac("sha256", secret).update(`contact-limit:${payload}`).digest("base64url");

function decode(value: string | undefined, secret: string): Allowance | null {
  if (!value || value.length > 512) return null;
  const [payload, signature, extra] = value.split(".");
  if (!payload || !signature || extra !== undefined) return null;
  const expected = Buffer.from(sign(payload, secret));
  const actual = Buffer.from(signature);
  if (actual.length !== expected.length || !timingSafeEqual(actual, expected)) return null;
  try {
    const data = JSON.parse(Buffer.from(payload, "base64url").toString());
    return typeof data.device === "string" &&
      /^[0-9a-f-]{36}$/.test(data.device) &&
      typeof data.day === "string" &&
      /^\d{4}-\d{2}-\d{2}$/.test(data.day) &&
      Number.isInteger(data.count) && data.count >= 0 && data.count <= CONTACT_DAILY_LIMIT
      ? data : null;
  } catch {
    return null;
  }
}

/** Signed cookies persist the allowance; the ledger also serializes requests in this process. */
export function createContactLimiter() {
  const ledger = new Map<string, number>();
  let ledgerDay = "";

  return (cookie: string | undefined, secret: string, now = new Date()) => {
    // Calendar days in India, independent of the browser/server timezone.
    const day = new Date(now.getTime() + 330 * 60_000).toISOString().slice(0, 10);
    if (day !== ledgerDay) {
      ledger.clear();
      ledgerDay = day;
    }
    const previous = decode(cookie, secret);
    const device = previous?.device ?? randomUUID();
    const count = Math.max(
      previous?.day === day ? previous.count : 0,
      ledger.get(device) ?? 0,
    );
    const allowed = count < CONTACT_DAILY_LIMIT;
    const nextCount = allowed ? count + 1 : count;
    ledger.set(device, nextCount);
    const payload = Buffer.from(JSON.stringify({ device, day, count: nextCount })).toString("base64url");
    return { allowed, cookie: `${payload}.${sign(payload, secret)}` };
  };
}

export const reserveContactSubmission = createContactLimiter();
