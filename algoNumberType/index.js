import { increment, checkValidity } from './utils/index.js';

const data = [
  [1, 2, 3],
  [9, 9],
  [1, 8, 9, 9],
];

(inputArray => {
  try {
    console.log('Number Type script start');
    console.log('INPUT', inputArray);

    checkValidity(inputArray);
    const res = increment(inputArray);

    console.log(`OUTPUT`, res);
    console.log('Number Type script end');
  } catch (err) {
    return console.log(err);
  }
})(data);
