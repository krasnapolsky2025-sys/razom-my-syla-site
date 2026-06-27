const { createSessionCookie, safeEqual } = require("./_lib/auth");
const { clientIp, isAllowed, recordFailure, recordSuccess } = require("./_lib/rate-limit");
const { methodNotAllowed, readJsonBody, sendJson } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return methodNotAllowed(res, ["POST"]);
  }

  const ip = clientIp(req);
  if (!isAllowed(ip)) {
    return sendJson(res, 401, { ok: false, error: "Invalid credentials" });
  }

  if (!process.env.ADMIN_PASSWORD || !process.env.SESSION_SECRET) {
    return sendJson(res, 503, { ok: false, error: "Service unavailable" });
  }

  try {
    const body = await readJsonBody(req);
    const password = typeof body.password === "string" ? body.password : "";

    if (!safeEqual(password, process.env.ADMIN_PASSWORD)) {
      recordFailure(ip);
      return sendJson(res, 401, { ok: false, error: "Invalid credentials" });
    }

    recordSuccess(ip);
    res.setHeader("Set-Cookie", createSessionCookie(req));
    return sendJson(res, 200, { ok: true });
  } catch {
    recordFailure(ip);
    return sendJson(res, 401, { ok: false, error: "Invalid credentials" });
  }
};
