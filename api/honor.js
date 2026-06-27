const { verifySession } = require("./_lib/auth");
const { GithubHonorError, readHonorBoard, writeHonorBoard } = require("./_lib/github-honor");
const { methodNotAllowed, readJsonBody, sendJson } = require("./_lib/http");

module.exports = async function handler(req, res) {
  if (!["GET", "POST"].includes(req.method)) {
    return methodNotAllowed(res, ["GET", "POST"]);
  }

  if (!verifySession(req)) {
    return sendJson(res, 401, { ok: false, error: "Unauthorized" });
  }

  try {
    if (req.method === "GET") {
      const result = await readHonorBoard();
      return sendJson(res, 200, { ok: true, items: result.items, branch: result.branch });
    }

    const body = await readJsonBody(req);
    const result = await writeHonorBoard(body.items);
    return sendJson(res, 200, {
      ok: true,
      items: result.items,
      commit: result.commit,
      branch: result.branch,
      message: result.message || "Saved"
    });
  } catch (error) {
    if (error instanceof GithubHonorError) {
      return sendJson(res, error.statusCode || 400, { ok: false, error: error.message });
    }

    return sendJson(res, 400, { ok: false, error: "Unable to process honor board" });
  }
};
