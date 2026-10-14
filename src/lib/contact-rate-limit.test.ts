import assert from "node:assert/strict";
import { test } from "node:test";
// @ts-expect-error Node's type stripping uses the source extension.
import { createContactLimiter } from "./contact-rate-limit.ts";

const secret = "test-only-secret";
const today = new Date("2026-10-14T12:00:00Z");

test("allows five submissions and rejects the sixth, including after a restart", () => {
  const reserve = createContactLimiter();
  let cookie: string | undefined;
  for (let i = 0; i < 5; i++) {
    const result = reserve(cookie, secret, today);
    assert.equal(result.allowed, true);
    cookie = result.cookie;
  }
  assert.equal(reserve(cookie, secret, today).allowed, false);
  assert.equal(createContactLimiter()(cookie, secret, today).allowed, false);
});

test("resets at midnight IST", () => {
  const reserve = createContactLimiter();
  let cookie: string | undefined;
  for (let i = 0; i < 5; i++) cookie = reserve(cookie, secret, today).cookie;
  assert.equal(reserve(cookie, secret, new Date("2026-10-14T18:29:59Z")).allowed, false);
  assert.equal(reserve(cookie, secret, new Date("2026-10-14T18:30:00Z")).allowed, true);
});

test("separate browsers have independent allowances", () => {
  const reserve = createContactLimiter();
  let cookie: string | undefined;
  for (let i = 0; i < 5; i++) cookie = reserve(cookie, secret, today).cookie;
  assert.equal(reserve(cookie, secret, today).allowed, false);
  assert.equal(reserve(undefined, secret, today).allowed, true);
});

test("requests with the same stale cookie cannot exceed five in one process", () => {
  const reserve = createContactLimiter();
  const first = reserve(undefined, secret, today);
  const attempts = Array.from({ length: 10 }, () => reserve(first.cookie, secret, today));
  assert.equal(attempts.filter((result) => result.allowed).length, 4);
});

test("tampering cannot forge a blocked allowance for a new browser", () => {
  const reserve = createContactLimiter();
  const first = reserve(undefined, secret, today);
  const [payload, signature] = first.cookie.split(".");
  const data = JSON.parse(Buffer.from(payload, "base64url").toString());
  data.count = 5;
  const forged = `${Buffer.from(JSON.stringify(data)).toString("base64url")}.${signature}`;
  assert.equal(createContactLimiter()(forged, secret, today).allowed, true);
});

test("malformed cookies do not crash submissions", () => {
  for (const cookie of ["garbage", "a.b.c", ".", "x".repeat(1000)]) {
    assert.equal(createContactLimiter()(cookie, secret, today).allowed, true);
  }
});
