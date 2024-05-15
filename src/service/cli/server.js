'use strict';

const express = require(`express`);
const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const {MOCKS_FILE_NAME, HttpCode} = require(`../../common/constants`);

const DEFAULT_PORT = 3000;

const NOT_FOUND_MESSAGE = `Not found`;

const app = express();

app.use(express.json());

app.get(`/posts`, async (req, res) => {
  try {
    const fileContent = await fs.readFile(MOCKS_FILE_NAME);
    const mocks = JSON.parse(fileContent);
    res.json(mocks);
  } catch (err) {
    res.send([]);
  }
});

app.use((req, res) => res
  .status(HttpCode.NOT_FOUND)
  .send(NOT_FOUND_MESSAGE)
);

module.exports = {
  name: `--server`,
  run(args) {
    const [customPort] = args;
    const port = parseInt(customPort, 10) || DEFAULT_PORT;

    app.listen(port, (err) => {
      if (err) {
        return console.error(chalk.red(`Ошибка при создании сервера`, err));
      }

      return console.log(chalk.green(`Ожидаю соединений на ${port} порту`));
    });
  },
};
