console.log('***** Function Practice *****');

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());
console.log( hello );

// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!'
function helloName(name) {
  return `Hello, ${name}!`;
}
// Remember to call the function to test
console.log( helloName('Aunika Lewis') ); 
console.log( helloName('Perda') ); 

// 3. Function to add two numbers together & return the result
function addNumbers(num1, num2) {
  // return firstNumber + secondNumber;
  return num1 + num2;
}
let result = addNumbers(5, 2);
console.log( result );

// 4. Function to multiply three numbers & return the result
function multiplyThree(num1, num2, num3) {
  return num1 * num2 * num3;
}
let resultMultiply = multiplyThree(5, 10, 3); 
console.log ( resultMultiply );

// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  if (number > 0) {
    return true;
  } else {
  return false;
  }
}
// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log( isPositive(2));
console.log( isPositive(5));
console.log( isPositive(-1));
// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
function getLast(array) {
  if (array.length === 0) {
    return undefined; // Return undefined for empty arrays
  }
  return array[array.length - 1];
}
console.log( getLast );
// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 
function find(value, array) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === value) {
      return true; // Return the index where the value was found
    }
  }
  return false; // Return -1 to indicate that the value was not found
}
console.log( find);

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise
function isFirstLetter(letter, string) {
  return string.charAt(0) === letter;
}
console.log (isFirstLetter("Aunika", "A")); // true
console.log (isFirstLetter("Lewis", "L")); // true
console.log (isFirstLetter("Perda", "Q")); // false

// 9. Function to return the sum of all numbers in an array
function sumAll(array) {
  let sum = 0;
  // TODO: loop to add items
  for (let i = 0; i < array.length; i++) {
    sum += array[i];
  }
  // TODO: return the sum
  return sum;
}
// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function allPositive(array) {
  return array.filter(num => num > 0);
}


// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!


// DO NOT MODIFY
// Used for automated testing
try {
  module.exports = {
    hello,
    helloName,
    addNumbers,
    multiplyThree,
    isPositive,
    getLast,
    find,
    isFirstLetter,
    sumAll,
    allPositive,
  };
} catch (e) {
  // Do nothing
}
