'use strict';

const {Router} = require(`express`);

const myRoutes = new Router();

myRoutes.get(`/`, (req, res) => res.send(`/my`));
myRoutes.get(`/categories`, (req, res) => res.send(`/my/categories`));
myRoutes.get(`/comments`, (req, res) => res.send(`/my/comments`));

module.exports = myRoutes;
