export const randomNumber = (min, max) => {
  if (typeof min !== 'number' || typeof max !== 'number')
    throw new Error('You did not provide numbers for randomNumbers');

  return Math.floor(Math.random() * (max - min)) + min;
};

export const divisible = (comparaisonNumber, divisibleNum, message) => {
  if (typeof divisibleNum !== 'number') throw new Error(`Wrong input : ${divisibleNum}`);
  if (typeof message !== 'string') throw new Error(`Wrong input : ${message}`);

  return comparaisonNumber % divisibleNum === 0 ? message : comparaisonNumber;
};

export const computeDivisible = (list, number) =>
  list.reduce((acc, elem) => acc.concat({ ...elem, result: divisible(number, elem.value, elem.message) }), []);

export const applyPattern = getResults =>
  getResults.reduce((acc, elem) => {
    const { result, message } = elem;

    if (isEqual(result, message)) return acc.replace(/[0-9]/g, '').concat('', message);
    if (isAnumber(result) && !isContainNumber(acc) && !isContainCharacters(acc)) return acc.concat('', result);

    return acc;
  }, '');

const isEqual = (elem1, elem2) => elem1 === elem2;
const isAnumber = elem => typeof elem === 'number';

const isContainNumber = elem => elem.match(/[0-9]/g);
const isContainCharacters = elem => elem.match(/[A-Za-z]/g);
