import BubbleSort from '../src/sort_generate_numbers.js';
import RandomNumbers from '../src/random_numbers_generators.js';

describe('BubbleSort', () => {
  test('deve ordenar um array de forma ascendente', () => {
    const unsortedArray = [3, -5, 2, 8, -1];
    const sortedArray = BubbleSort.bubbleSort([...unsortedArray]);

    expect(sortedArray).toEqual([-5, -1, 2, 3, 8]);
  });

  test('deve ordenar corretamente um array de 20000 valores', () => {
    const randomArray = RandomNumbers.generateArray(20000, -999999, 999999);
    const sortedArray = BubbleSort.bubbleSort([...randomArray]);

    for (let i = 0; i < sortedArray.length - 1; i++) {
      expect(sortedArray[i]).toBeLessThanOrEqual(sortedArray[i + 1]);
    }
  });
});
