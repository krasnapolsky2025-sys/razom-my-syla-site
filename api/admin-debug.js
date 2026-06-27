const { methodNotAllowed, sendJson } = require("./_lib/http");

function configured(value) {
  return Boolean(String(value || "").trim());
}

function publicValue(value) {
  const normalized = String(value || "").trim();
  return normalized || null;
}

module.exports = function handler(req, res) {
  if (req.method !== "GET") {
    return methodNotAllowed(res, ["GET"]);
  }

  return sendJson(
    res,
    200,
    {
      adminPasswordConfigured: configured(process.env.ADMIN_PASSWORD),
      sessionSecretConfigured: configured(process.env.SESSION_SECRET),
      githubTokenConfigured: configured(process.env.GITHUB_TOKEN),
      githubOwner: publicValue(process.env.GITHUB_OWNER),
      githubRepo: publicValue(process.env.GITHUB_REPO),
      githubBranch: publicValue(process.env.GITHUB_BRANCH || "main"),
      nodeEnv: publicValue(process.env.NODE_ENV)
    },
    {
      "Cache-Control": "no-store"
    }
  );
};
