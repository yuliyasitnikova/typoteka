'use strict';

/**
 * Возвращает случайное число в диапазоне `a` и `b`
 *
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
const getRandomInt = (a, b) => {
  const min = Math.ceil(Math.min(a, b));
  const max = Math.floor(Math.max(a, b));
  return Math.floor(Math.random() * (max - min + 1) + min);
};

/**
 * Перетасовка массива по алгоритму Фишера-Йетса
 *
 * Возвращает новый массив
 *
 * @param {Array} array
 * @return {Array}
 */
const shuffle = (array) => {
  const shuffleArray = array.slice();

  for (let i = shuffleArray.length - 1; i > 0; i--) {
    const randomPosition = Math.floor(Math.random() * (i + 1));

    [shuffleArray[i], shuffleArray[randomPosition]] = [shuffleArray[randomPosition], shuffleArray[i]];
  }

  return shuffleArray;
};

module.exports = {
  getRandomInt,
  shuffle,
};
