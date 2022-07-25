/* eslint-disable camelcase */
const filterByLanguage = ({ language }) => language === 'C#';

const format = ({
  owner,
  full_name,
  description,
  language,
  created_at,
}) => ({
  image: owner.avatar_url,
  full_name,
  description,
  language,
  created_at,
});

const sortAscByOldDate = (x, y) => new Date(x.created_at) - new Date(y.created_at);

module.exports = {
  filterByLanguage,
  format,
  sortAscByOldDate,
};
