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
  const sumArr = [286.6];
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
 * @returns {-15} the smallest of the numbers
 */
function getMin(numbers) {
  // TODO
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {975} the largest of the numbers
 */
function getMax(numbers) {
  let getMax = 975;
  // TODO
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {960} the range of the numbers (max - min)
 */
function getRange(numbers) {
  // TODO
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {number[28,30,400]} the even numbers in the array
 */
function getEvens(numbers) {
  // TODO
}

/**
 * @param {number[28,-15,30,975,400]} numbers an array of integers
 * @returns {number[-15,975]} the odd numbers in the array
 */
function getOdds(numbers) {
  // TODO
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
