'use strict';

const express = require(`express`);
const path = require(`path`);
const articlesRoutes = require(`./routes/articles-routes`);
const myRoutes = require(`./routes/my-routes`);
const mainRoutes = require(`./routes/main-routes`);

const DEFAULT_PORT = 8080;
const PUBLIC_DIR = `public`;
const VIEWS_DIR = `templates`;

const app = express();

app.use(express.static(path.resolve(__dirname, PUBLIC_DIR)));

app.use(`/articles`, articlesRoutes);
app.use(`/my`, myRoutes);
app.use(`/`, mainRoutes);

app.use((req, res) => res.status(400).render(`pages/404`));
app.use((err, req, res, _next) => res.status(500).render(`pages/500`));

app.set(`views`, path.resolve(__dirname, VIEWS_DIR));
app.set(`view engine`, `pug`);

app.listen(DEFAULT_PORT);
