const crypto = require("crypto");

const COOKIE_NAME = "razom_admin_session";
const SESSION_TTL_SECONDS = 60 * 60 * 12;

function parseCookies(req) {
  const header = req.headers.cookie || "";
  return header.split(";").reduce((cookies, part) => {
    const index = part.indexOf("=");
    if (index === -1) return cookies;
    const key = part.slice(0, index).trim();
    const value = part.slice(index + 1).trim();
    if (key) cookies[key] = decodeURIComponent(value);
    return cookies;
  }, {});
}

function isSecureRequest(req) {
  const forwardedProto = req.headers["x-forwarded-proto"];
  const host = req.headers.host || "";
  return process.env.NODE_ENV === "production" || forwardedProto === "https" || host.endsWith(".vercel.app");
}

function sign(value) {
  const secret = process.env.SESSION_SECRET || "";
  return crypto.createHmac("sha256", secret).update(value).digest("base64url");
}

function safeEqual(a, b) {
  const left = crypto.createHash("sha256").update(String(a || "")).digest();
  const right = crypto.createHash("sha256").update(String(b || "")).digest();
  return crypto.timingSafeEqual(left, right);
}

function buildCookie(value, req, maxAge = SESSION_TTL_SECONDS) {
  const parts = [
    `${COOKIE_NAME}=${encodeURIComponent(value)}`,
    "Path=/",
    "HttpOnly",
    "SameSite=Strict",
    `Max-Age=${maxAge}`
  ];

  if (maxAge === 0) {
    parts.push("Expires=Thu, 01 Jan 1970 00:00:00 GMT");
  }

  if (isSecureRequest(req)) {
    parts.push("Secure");
  }

  return parts.join("; ");
}

function createSessionCookie(req) {
  const now = Date.now();
  const payload = Buffer.from(JSON.stringify({
    iat: now,
    exp: now + SESSION_TTL_SECONDS * 1000,
    scope: "honor-admin"
  })).toString("base64url");

  return buildCookie(`${payload}.${sign(payload)}`, req);
}

function clearSessionCookie(req) {
  return buildCookie("", req, 0);
}

function verifySession(req) {
  if (!process.env.SESSION_SECRET) return false;

  const token = parseCookies(req)[COOKIE_NAME];
  if (!token || !token.includes(".")) return false;

  const [payload, signature] = token.split(".");
  if (!payload || !signature || !safeEqual(signature, sign(payload))) return false;

  try {
    const parsed = JSON.parse(Buffer.from(payload, "base64url").toString("utf8"));
    return parsed.scope === "honor-admin" && Number(parsed.exp) > Date.now();
  } catch {
    return false;
  }
}

module.exports = {
  clearSessionCookie,
  createSessionCookie,
  safeEqual,
  verifySession
};
