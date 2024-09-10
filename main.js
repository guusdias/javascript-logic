import RandomNumbers from "./random_numbers_generators.js";

const randomNumbersArray = RandomNumbers.generateArray(20000, -999999, 999999);
console.log(randomNumbersArray);