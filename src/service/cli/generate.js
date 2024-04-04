'use strict';

const chalk = require(`chalk`);
const fs = require(`fs`).promises;

const {MOCKS_FILE_NAME, ExitCode} = require(`../../common/constants`);
const {
  getRandomInt,
  shuffle,
} = require(`../../common/utils`);

const DEFAULT_COUNT = 1;
const MAX_COUNT = 1000;

const FILE_TITLE_PATH = `./src/data/titles.txt`;
const FILE_SENTENCES_PATH = `./src/data/sentences.txt`;
const FILE_CATEGORIES_PATH = `./src/data/categories.txt`;

const getRandomDate = () => {
  const DAYS_IN_MILLISECONDS = 24 * 60 * 60 * 1000;
  const DAYS_COUNT = 90;

  const randomDate = new Date();

  randomDate.setTime(randomDate.getTime() - getRandomInt(0, DAYS_IN_MILLISECONDS * DAYS_COUNT));

  return randomDate;
};

const generatePosts = (count, titles, sentences, categories) => (
  Array(count).fill({}).map(() => ({
    announce: shuffle(sentences).slice(0, getRandomInt(1, 5)).join(` `),
    category: shuffle(categories).slice(0, getRandomInt(1, categories.length - 1)),
    createdDate: getRandomDate(),
    fullText: shuffle(sentences).slice(0, getRandomInt(1, sentences.length - 1)).join(` `),
    title: titles[getRandomInt(0, titles.length - 1)],
  }))
);

const readContent = async (filePath) => {
  try {
    const content = await fs.readFile(filePath, `utf8`);
    return content.trim().split(`\n`);
  } catch (err) {
    console.error(chalk.red(err));
    return [];
  }
};

module.exports = {
  name: `--generate`,
  async run(args) {
    const [count] = args;
    const countPost = Number.parseInt(count, 10) || DEFAULT_COUNT;

    if (countPost > MAX_COUNT) {
      console.error(chalk.red(`Не больше 1000 публикаций`));
      process.exit(ExitCode.error);
    }

    const [titles, sentences, categories] = await Promise.all([
      readContent(FILE_TITLE_PATH),
      readContent(FILE_SENTENCES_PATH),
      readContent(FILE_CATEGORIES_PATH),
    ]);

    const content = JSON.stringify(generatePosts(countPost, titles, sentences, categories));

    try {
      await fs.writeFile(MOCKS_FILE_NAME, content);
      console.log(chalk.green(`Файл успешно создан`));
    } catch (err) {
      console.error(chalk.red(`Не удалось записать данные в файл`));
    }
  },
};
