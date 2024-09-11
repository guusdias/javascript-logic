import RandomNumbers from "./src/random_numbers_generators.js";
import BubbleSort from "./src/sort_generate_numbers.js";

const randomNumbersArray = RandomNumbers.generateArray(20000, -999999, 999999);
console.log(randomNumbersArray);

const vamoo = BubbleSort.bubbleSort(randomNumbersArray)
console.log(vamoo)