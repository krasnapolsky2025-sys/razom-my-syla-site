const { verifySession } = require("./_lib/auth");
const { methodNotAllowed, sendJson } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return methodNotAllowed(res, ["GET"]);
  }

  if (!verifySession(req)) {
    return sendJson(res, 401, { authenticated: false });
  }

  return sendJson(res, 200, { authenticated: true });
};
