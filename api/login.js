const { createSessionCookie, safeEqual } = require("./_lib/auth");
const { clientIp, isAllowed, recordFailure, recordSuccess } = require("./_lib/rate-limit");
const { methodNotAllowed, readJsonBody, sendJson } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return methodNotAllowed(res, ["POST"]);
  }

  const ip = clientIp(req);
  if (!isAllowed(ip)) {
    return sendJson(res, 401, { ok: false, error: "Invalid password" });
  }

  const configuredPassword = String(process.env.ADMIN_PASSWORD || "").trim();
  if (!configuredPassword) {
    return sendJson(res, 500, { ok: false, error: "ADMIN_PASSWORD is not configured" });
  }

  if (!String(process.env.SESSION_SECRET || "").trim()) {
    return sendJson(res, 500, { ok: false, error: "SESSION_SECRET is not configured" });
  }

  try {
    const body = await readJsonBody(req);
    const password = String(body.password || "").trim();

    if (!safeEqual(password, configuredPassword)) {
      recordFailure(ip);
      return sendJson(res, 401, { ok: false, error: "Invalid password" });
    }

    recordSuccess(ip);
    res.setHeader("Set-Cookie", createSessionCookie(req));
    return sendJson(res, 200, { ok: true });
  } catch {
    recordFailure(ip);
    return sendJson(res, 401, { ok: false, error: "Invalid password" });
  }
};
