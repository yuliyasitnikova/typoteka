'use strict';

const {Router} = require(`express`);

const mainRoutes = new Router();

mainRoutes.get(`/`, (req, res) => res.render(`pages/main`));
mainRoutes.get(`/login`, (req, res) => res.render(`pages/login`));
mainRoutes.get(`/register`, (req, res) => res.render(`pages/sign-up`));
mainRoutes.get(`/search`, (req, res) => res.render(`pages/search`));

module.exports = mainRoutes;
