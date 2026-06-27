const { prettyJson, validateBoard } = require("./honor-board");

const FILE_PATH = "data/honor-board.json";

function requiredEnv(name) {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing ${name}`);
  }
  return value;
}

function githubConfig() {
  return {
    token: requiredEnv("GITHUB_TOKEN"),
    owner: requiredEnv("GITHUB_OWNER"),
    repo: requiredEnv("GITHUB_REPO"),
    branch: process.env.GITHUB_BRANCH || "main"
  };
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
    throw new Error(`GitHub request failed with status ${response.status}`);
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
  const cleanItems = validateBoard(items);
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
    branch: config.branch
  };
}

module.exports = {
  readHonorBoard,
  writeHonorBoard
};
