const { prettyJson, validateBoard } = require("./honor-board");

const FILE_PATH = "data/honor-board.json";

class GithubHonorError extends Error {
  constructor(message, statusCode = 400, details = {}) {
    super(message);
    this.name = "GithubHonorError";
    this.statusCode = statusCode;
    this.details = details;
  }
}

function requiredEnv(name) {
  const value = String(process.env[name] || "").trim();
  if (!value) {
    throw new GithubHonorError(`${name} is not configured`, 500, { missingEnv: name });
  }
  return value;
}

function githubConfig() {
  return {
    token: requiredEnv("GITHUB_TOKEN"),
    owner: requiredEnv("GITHUB_OWNER"),
    repo: requiredEnv("GITHUB_REPO"),
    branch: String(process.env.GITHUB_BRANCH || "main").trim() || "main"
  };
}

function githubErrorMessage(status) {
  if (status === 401) return "GitHub token is invalid";
  if (status === 403) return "GitHub token has no Contents: Read and write permission";
  if (status === 404) return "Repository or file not found";
  if (status === 422) return "GitHub rejected update. Check file sha, branch or content encoding";
  return `GitHub request failed with status ${status}`;
}

async function githubRequest(url, options = {}) {
  const config = githubConfig();
  const response = await fetch(url, {
    ...options,
    headers: {
      "Accept": "application/vnd.github+json",
      "Authorization": `Bearer ${config.token}`,
      "Content-Type": "application/json",
      "User-Agent": "razom-admin",
      "X-GitHub-Api-Version": "2022-11-28",
      ...(options.headers || {})
    }
  });

  if (!response.ok) {
    throw new GithubHonorError(githubErrorMessage(response.status), response.status, {
      githubStatus: response.status
    });
  }

  return response.json();
}

async function readHonorBoard() {
  const config = githubConfig();
  const encodedPath = encodeURIComponent(FILE_PATH).replace(/%2F/g, "/");
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${encodedPath}?ref=${encodeURIComponent(config.branch)}`;
  const file = await githubRequest(url);
  const content = Buffer.from(file.content || "", "base64").toString("utf8");
  return {
    items: validateBoard(JSON.parse(content)),
    sha: file.sha,
    branch: config.branch
  };
}

async function writeHonorBoard(items) {
  const config = githubConfig();
  const current = await readHonorBoard();
  let cleanItems;
  try {
    cleanItems = validateBoard(items);
  } catch (error) {
    throw new GithubHonorError(error.message || "Honor board validation failed", 400);
  }

  const encodedPath = encodeURIComponent(FILE_PATH).replace(/%2F/g, "/");
  const url = `https://api.github.com/repos/${config.owner}/${config.repo}/contents/${encodedPath}`;
  const payload = {
    message: "Update honor board from admin",
    content: Buffer.from(prettyJson(cleanItems), "utf8").toString("base64"),
    sha: current.sha,
    branch: config.branch
  };

  const result = await githubRequest(url, {
    method: "PUT",
    body: JSON.stringify(payload)
  });

  return {
    items: cleanItems,
    commit: result.commit?.sha || "",
    branch: config.branch,
    message: "Saved"
  };
}

async function debugHonorFile() {
  try {
    const result = await readHonorBoard();
    return {
      canReadHonorFile: true,
      honorFileShaPresent: Boolean(result.sha)
    };
  } catch {
    return {
      canReadHonorFile: false,
      honorFileShaPresent: false
    };
  }
}

module.exports = {
  GithubHonorError,
  debugHonorFile,
  readHonorBoard,
  writeHonorBoard
};
