import { randomNumber, computeDivisible, applyPattern } from './utils/index.js';

const data = {
  range: {
    min: 1,
    max: 100,
  },
  list: [
    {
      value: 3,
      message: 'Fizz',
    },
    {
      value: 5,
      message: 'Buzz',
    },
  ],
};

(data => {
  const {
    range: { min, max },
    list,
  } = data;

  try {
    console.log('FizzBuzz script start');
    console.log('INPUT', data);

    const number = randomNumber(min, max);
    const getResults = computeDivisible(list, number);
    const res = applyPattern(getResults);

    console.log(`OUTPUT`, res);
    console.log('FizzBuzz script end');
  } catch (err) {
    return console.error(err);
  }
})(data);
