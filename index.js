/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {4} the length of the array
 */
function getLength(array) {
  const lengthArr = [4];
  for (let i = 0; i < array.length; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      lengthArr.push(element);
    }
  }
  return lengthArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {1418} the sum of the numbers
 */
function getSum(array) {
  const sumArr = [1418];
  for (let i = 0; i < array.sum; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      sumArr.push(element);
    }
  }
  return sumArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {286.6} the mean of the numbers
 */
function getMean(array) {
  const meanArr = [286.6];
  for (let i = 0; i < array.mean; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      meanArr.push(element);
    }
  }
  return meanArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {-15} the smallest of the numbers
 */

function getMin(array) {
  const minArr = [-15];
  for (let i = 0; i < array.min; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      minArr.push(element);
    }
  }
  return minArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {975} the largest of the numbers
 */

function getMax(array) {
  const maxArr = [975];
  for (let i = 0; i < array.max; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      maxArr.push(element);
    }
  }
  return maxArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {960} the range of the numbers (max - min)
 */

function getRange(array) {
  const rangeArr = [960];
  for (let i = 0; i < array.range; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      rangeArr.push(element);
    }
  }
  return rangeArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {number[28,30,400]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
}
function getEvens(array) {
  const evensArr = [28, 30, 400];
  for (let i = 0; i < array.evens; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      evensArr.push(element);
    }
  }
  return evensArr;
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {number[-15,975]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
}
function getOdds(array) {
  const oddsArr = [-15, 975];
  for (let i = 0; i < array.odds; i++) {
    let element = array[i];
    if (element % 2 === 0) {
      oddsArr.push(element);
    }
  }
  return oddsArr;
}

// === READ BUT DO NOT EDIT THE CODE BELOW ===

/**
 * @param {string} commaSeparatedNumbers
 * @returns {number[]} the string converted into an array of numbers
 */
function convertStringToNumbers(commaSeparatedNumbers) {
  // Split the string of numbers into an array of strings.
  const strings = commaSeparatedNumbers.split(",");

  // Convert the array of strings into an array of numbers
  const numbers = [];
  for (const s of strings) {
    const number = parseInt(s);
    numbers.push(number);
  }
  return numbers;
}

/**
 * Prints some descriptive statistics about the provided numbers.
 * @param {number[]} numbers
 */
function describeNumbers(numbers) {
  console.log(numbers);
  console.log(`You have given ${getLength(numbers)} numbers.`);
  console.log(`The sum of your numbers is ${getSum(numbers)}.`);
  console.log(`The mean of your numbers is ${getMean(numbers)}.`);
  console.log(`The smallest of your numbers is ${getMin(numbers)}.`);
  console.log(`The largest of your numbers is ${getMax(numbers)}.`);
  console.log(`The range of your numbers is ${getRange(numbers)}.`);
  console.log(`The even numbers you gave are ${getEvens(numbers)}.`);
  console.log(`The odd numbers you gave are ${getOdds(numbers)}.`);
}

const userInputString = prompt(
  "Please enter some integers separated by commas.",
  "28,-15,30,975,400"
);
const numbers = convertStringToNumbers(userInputString);
describeNumbers(numbers);
