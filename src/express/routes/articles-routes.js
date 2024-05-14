'use strict';

const {Router} = require(`express`);

const articlesRoutes = new Router();

articlesRoutes.get(`/add`, (req, res) => res.render(`pages/post`));
articlesRoutes.get(`/edit/:id`, (req, res) => res.render(`pages/post`));
articlesRoutes.get(`/:id`, (req, res) => res.render(`pages/post-detail`));
articlesRoutes.get(`/category/:id`, (req, res) => res.render(`pages/articles-by-category`));

module.exports = articlesRoutes;
