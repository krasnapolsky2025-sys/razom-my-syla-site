const { methodNotAllowed, sendJson } = require("./_lib/http");
const { debugHonorFile } = require("./_lib/github-honor");

function configured(value) {
  return Boolean(String(value || "").trim());
}

function publicValue(value) {
  const normalized = String(value || "").trim();
  return normalized || null;
}

module.exports = async function handler(req, res) {
  if (req.method !== "GET") {
    return methodNotAllowed(res, ["GET"]);
  }

  const honorFile = await debugHonorFile();

  return sendJson(
    res,
    200,
    {
      adminPasswordConfigured: configured(process.env.ADMIN_PASSWORD),
      sessionSecretConfigured: configured(process.env.SESSION_SECRET),
      githubTokenConfigured: configured(process.env.GITHUB_TOKEN),
      githubOwnerConfigured: configured(process.env.GITHUB_OWNER),
      githubRepoConfigured: configured(process.env.GITHUB_REPO),
      githubBranch: publicValue(process.env.GITHUB_BRANCH || "main"),
      canReadHonorFile: honorFile.canReadHonorFile,
      honorFileShaPresent: honorFile.honorFileShaPresent,
      nodeEnv: publicValue(process.env.NODE_ENV)
    },
    {
      "Cache-Control": "no-store"
    }
  );
};
