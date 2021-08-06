import { randomNumber, computeDivisible, applyPattern } from '../index.js';

describe('algo_fizzbuzz | utils', () => {
  // randomNumber

  test('randomNumber | result is within the range', () => {
    const min = 1;
    const max = 10;

    const myTest = randomNumber(min, max);
    expect(myTest).toBeGreaterThanOrEqual(min);
    expect(myTest).toBeLessThan(max);
  });

  test('randomNumber | result error (input string for min variable)', () => {
    const min = 'hey';
    const max = 10;

    const myTest = () => randomNumber(min, max);
    expect(myTest).toThrowError(/randomNumbers/);
  });

  test('randomNumber | result error (input string for max variable)', () => {
    const min = 1;
    const max = 'test';

    const myTest = () => randomNumber(min, max);
    expect(myTest).toThrowError(/randomNumbers/);
  });

  // computeDivisible

  test('computeDivisible | result match Fizz', () => {
    const number = 9;
    const list = [
      {
        value: 3,
        message: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
      },
    ];

    const myTest = computeDivisible(list, number);
    expect(myTest).toEqual(
      expect.arrayContaining([expect.objectContaining({ result: 'Fizz' }), expect.objectContaining({ result: 9 })]),
    );
  });

  test('computeDivisible | result match Buzz', () => {
    const number = 20;
    const list = [
      {
        value: 3,
        message: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
      },
    ];

    const myTest = computeDivisible(list, number);
    expect(myTest).toEqual(
      expect.arrayContaining([expect.objectContaining({ result: 20 }), expect.objectContaining({ result: 'Buzz' })]),
    );
  });

  test('computeDivisible | result match both Fizz and Buzz', () => {
    const number = 15;
    const list = [
      {
        value: 3,
        message: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
      },
    ];

    const myTest = computeDivisible(list, number);
    expect(myTest).toEqual(
      expect.arrayContaining([
        expect.objectContaining({ result: 'Fizz' }),
        expect.objectContaining({ result: 'Buzz' }),
      ]),
    );
  });

  test('computeDivisible | result match both number', () => {
    const number = 52;
    const list = [
      {
        value: 3,
        message: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
      },
    ];

    const myTest = computeDivisible(list, number);
    expect(myTest).toEqual(
      expect.arrayContaining([expect.objectContaining({ result: 52 }), expect.objectContaining({ result: 52 })]),
    );
  });

  // applyPattern

  test('applyPattern | result display Fizz', () => {
    const getResults = [
      {
        value: 3,
        message: 'Fizz',
        result: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
        result: 24,
      },
    ];

    const myTest = applyPattern(getResults);
    expect(myTest).toBe('Fizz');
  });

  test('applyPattern | result display Buzz', () => {
    const getResults = [
      {
        value: 3,
        message: 'Fizz',
        result: 21,
      },
      {
        value: 5,
        message: 'Buzz',
        result: 'Buzz',
      },
    ];

    const myTest = applyPattern(getResults);
    expect(myTest).toBe('Buzz');
  });

  test('applyPattern | result display FizzBuzz', () => {
    const getResults = [
      {
        value: 3,
        message: 'Fizz',
        result: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
        result: 'Buzz',
      },
    ];

    const myTest = applyPattern(getResults);
    expect(myTest).toBe('FizzBuzz');
  });

  test('applyPattern | result display FizzBuzzDing', () => {
    const getResults = [
      {
        value: 3,
        message: 'Fizz',
        result: 'Fizz',
      },
      {
        value: 5,
        message: 'Buzz',
        result: 'Buzz',
      },
      {
        value: 6,
        message: 'Ding',
        result: 'Ding',
      },
    ];

    const myTest = applyPattern(getResults);
    expect(myTest).toBe('FizzBuzzDing');
  });

  test('applyPattern | result display 24', () => {
    const getResults = [
      {
        value: 3,
        message: 'Fizz',
        result: 24,
      },
      {
        value: 5,
        message: 'Buzz',
        result: 24,
      },
    ];

    const myTest = applyPattern(getResults);
    expect(myTest).toBe('24');
  });
});
