const axios = require('axios');

const endPoint = 'https://api.github.com/orgs/takenet/repos';

const getRepos = async () => {
  try {
    const { data } = await axios.get(endPoint);
    return data;
  } catch (err) {
    const { message } = err.response.data;

    throw new Error(message);
  }
};

module.exports = {
  getRepos,
};
