export const increment = inputArray =>
  inputArray.map(elem => {
    let index = elem.length - 1;

    while (index >= 0) {
      if (elem[index] < 9) {
        elem[index] = elem[index] + 1;
        return elem;
      }

      elem[index] = 0;
      index--;
    }
    elem.unshift(1);
    return elem;
  });

const isInteger = inputArray => inputArray.every(Number.isInteger);

export const checkValidity = inputArray => {
  if (Array.isArray(inputArray)) {
    inputArray.forEach(elem => {
      if (!isInteger(elem)) {
        throw new Error('Wrong input');
      }
    });
  } else {
    throw new Error('Wrong input');
  }
};
