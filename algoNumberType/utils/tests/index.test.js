import { checkValidity, increment } from '../index.js';

describe('algo_number_type | utils', () => {
  // checkValidity

  test('checkValidity | return undefined (input is an array of digits array)', () => {
    const data = [
      [1, 2, 3],
      [9, 9],
      [5, 5, 5, 5],
    ];

    const myTest = checkValidity(data);
    expect(myTest).toBe(undefined);
  });

  test('checkValidity | return an error (input is an array containing a string)', () => {
    const data = [
      [1, 2, 'hey'],
      [9, 9],
      [5, 5, 5, 5],
    ];

    const myTest = () => checkValidity(data);
    expect(myTest).toThrowError('Wrong input');
  });

  test('checkValidity | return an error (input is an array containing a float)', () => {
    const data = [
      [1, 2, 3.3],
      [9, 9],
      [5, 5, 5, 5],
    ];

    const myTest = () => checkValidity(data);
    expect(myTest).toThrowError('Wrong input');
  });

  test('checkValidity | return an error (input is a string)', () => {
    const data = 'hey';

    const myTest = () => checkValidity(data);
    expect(myTest).toThrowError('Wrong input');
  });

  // increment

  test('increment | (input is an array of digits array)', () => {
    const data = [
      [1, 2, 3],
      [9, 9],
      [5, 5, 5, 5],
    ];

    const myTest = increment(data);
    expect(myTest).toEqual(
      expect.arrayContaining([
        [1, 2, 4],
        [1, 0, 0],
        [5, 5, 5, 6],
      ]),
    );
  });
});
