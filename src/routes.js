const routes = require('express').Router();
const { recoverRepos } = require('./controllers');

routes.get('/', recoverRepos);

module.exports = routes;
