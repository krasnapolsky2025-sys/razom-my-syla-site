const MAX_ATTEMPTS = 5;
const WINDOW_MS = 15 * 60 * 1000;
const LOCK_MS = 10 * 60 * 1000;

const attempts = globalThis.__razomLoginAttempts || new Map();
globalThis.__razomLoginAttempts = attempts;

function clientIp(req) {
  const forwardedFor = req.headers["x-forwarded-for"];
  if (typeof forwardedFor === "string" && forwardedFor.trim()) {
    return forwardedFor.split(",")[0].trim();
  }
  return req.headers["x-real-ip"] || req.socket?.remoteAddress || "unknown";
}

function getRecord(ip) {
  const now = Date.now();
  const record = attempts.get(ip);
  if (!record || record.resetAt < now) {
    return { count: 0, resetAt: now + WINDOW_MS, lockedUntil: 0 };
  }
  return record;
}

function isAllowed(ip) {
  const record = getRecord(ip);
  attempts.set(ip, record);
  return record.lockedUntil <= Date.now();
}

function recordFailure(ip) {
  const now = Date.now();
  const record = getRecord(ip);
  record.count += 1;
  if (record.count >= MAX_ATTEMPTS) {
    record.lockedUntil = now + LOCK_MS;
  }
  attempts.set(ip, record);
}

function recordSuccess(ip) {
  attempts.delete(ip);
}

module.exports = {
  clientIp,
  isAllowed,
  recordFailure,
  recordSuccess
};
