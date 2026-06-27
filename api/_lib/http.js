function sendJson(res, statusCode, payload, headers = {}) {
  Object.entries(headers).forEach(([key, value]) => res.setHeader(key, value));
  res.status(statusCode).json(payload);
}

function methodNotAllowed(res, methods) {
  res.setHeader("Allow", methods.join(", "));
  sendJson(res, 405, { ok: false, error: "Method not allowed" });
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === "object") {
    return req.body;
  }

  if (typeof req.body === "string") {
    return req.body.trim() ? JSON.parse(req.body) : {};
  }

  const chunks = [];
  for await (const chunk of req) {
    chunks.push(Buffer.isBuffer(chunk) ? chunk : Buffer.from(chunk));
  }

  const raw = Buffer.concat(chunks).toString("utf8").trim();
  return raw ? JSON.parse(raw) : {};
}

module.exports = {
  methodNotAllowed,
  readJsonBody,
  sendJson
};
