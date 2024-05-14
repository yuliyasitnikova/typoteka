'use strict';

const {Router} = require(`express`);

const myRoutes = new Router();

myRoutes.get(`/`, (req, res) => res.render(`pages/my`));
myRoutes.get(`/categories`, (req, res) => res.render(`pages/all-categories`));
myRoutes.get(`/comments`, (req, res) => res.render(`pages/comments`));

module.exports = myRoutes;
