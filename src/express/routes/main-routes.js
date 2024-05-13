'use strict';

const {Router} = require(`express`);

const mainRoutes = new Router();

mainRoutes.get(`/`, (req, res) => res.send(`/`));
mainRoutes.get(`/login`, (req, res) => res.send(`/login`));
mainRoutes.get(`/register`, (req, res) => res.send(`/register`));
mainRoutes.get(`/search`, (req, res) => res.send(`/search`));

module.exports = mainRoutes;
