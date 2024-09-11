import RandomNumbers from '../src/random_numbers_generators.js';

describe('RandomNumbers', () => {
  test('Tem que gerar um array de 20000 inteiros', () => {
    const arr = RandomNumbers.generateArray(20000, -999999, 999999);
    expect(arr.length).toBe(20000);

    const areNumbersValid = arr.every(num => num >= -999999 && num <= 999999);
    expect(areNumbersValid).toBe(true);
  });
});
