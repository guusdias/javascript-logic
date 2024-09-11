// exercise 1
class RandomNumbers {
  static getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  static generateArray(size, min, max) {
    const arr = [];
    for (let i = 0; i < size; i++) {
      arr.push(this.getRandomInt(min, max));
    }
    return arr;
  }
}

export default RandomNumbers