const { getRepos } = require('../../Api');
const { filterByLanguage, format, sortAscByOldDate } = require('../helpers');

const getReposFromApi = async () => {
  try {
    const data = await getRepos();
    return data
      .filter(filterByLanguage)
      .map(format)
      .sort(sortAscByOldDate)
      .slice(0, 5);
  } catch (err) {
    throw new Error(err.message);
  }
};

module.exports = {
  getReposFromApi,
};
