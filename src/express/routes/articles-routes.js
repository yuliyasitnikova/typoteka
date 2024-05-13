'use strict';

const {Router} = require(`express`);

const articlesRoutes = new Router();

articlesRoutes.get(`/:id`, (req, res) => res.send(`/articles/:id`));
articlesRoutes.get(`/add`, (req, res) => res.send(`/articles/add`));
articlesRoutes.get(`/edit/:id`, (req, res) => res.send(`/articles/edit/:id`));
articlesRoutes.get(`/category/:id`, (req, res) => res.send(`/articles/category/:id`));

module.exports = articlesRoutes;
