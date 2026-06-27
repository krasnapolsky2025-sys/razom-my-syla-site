const { clearSessionCookie } = require("./_lib/auth");
const { methodNotAllowed, sendJson } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "POST") {
    return methodNotAllowed(res, ["POST"]);
  }

  res.setHeader("Set-Cookie", clearSessionCookie(req));
  return sendJson(res, 200, { ok: true });
};
