const { getReposFromApi } = require('../services');

const recoverRepos = async (_req, res) => {
  try {
    const repos = await getReposFromApi();
    res.status(200).json({ ...repos });
  } catch (err) {
    res.status(200).json({ message: err.message });
  }
};

module.exports = {
  recoverRepos,
};
