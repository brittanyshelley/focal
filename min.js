const temperatures = [45, 10, -20, 0, 3, -20];
const pageNumbers = [232];
const golfScores = [-1, 3, 0, -4, 1, 4, -2];
const flightPrices = [1260, 490, 599, 1400, 820];

function min(numbers) {
  let smallest = numbers[0];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < smallest) {
      smallest = numbers[i];
    }
  }
  return smallest;
}
  
console.log(`The cheapest flight amongst $1260, $490, $599, $1400 and $820 costs ${min(flightPrices)}`);
console.log(`The winning golf score amongst -1, 3, 0, -4, 1, 4 and -2 is ${min(golfScores)}`);
console.log(`The shortest book out of a list of single book with 232 pages has ${min(pageNumbers)} pages`);
console.log(`The coldest temperature amongst 45C, 10C, -20C, 0C, 3C and -20C is ${min(temperatures)}C`);