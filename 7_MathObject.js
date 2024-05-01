// Math.round() rounds to nearest integer : 4.1 - 4 , 4.5 - 5
// Math.floor() rounds down to nearest integer - 4.5 : 4 
// Math.ceil() rounds up to the nearest integer - 4.5 : 5

// Math Object : The Math namespace object contains static properties and methods for mathematical 
// constants and functions 

// Math works with the Number type . It doesn't work with BigInt

// 1: Constants 

// -> Math.PI
const piValue = Math.PI;
console.log(piValue);

// Basic Operations 
// Math.abs() : static method returns the absolute value of a number 
// how far the number is from 0. It will always be positive .

console.log(Math.abs(5));
console.log(Math.abs(-3));

// Math.round(x) : Rounds a number to the nearest integer.

const roundedValue = Math.round(3.7);
console.log(roundedValue);

// Math.ceil() : Rounds up to the nearest integer
const ceilValue1 = Math.ceil(3.4);
const ceilValue2 = Math.ceil(3.9);

console.log(ceilValue1);
console.log(ceilValue2);

// Math.floor() : Rounds down to the nearest integer
const floorValue1 = Math.floor(3.4);
const floorValue2 = Math.floor(3.9);

console.log(floorValue1);
console.log(floorValue2);

// Math.trunc(x) : Returns the integer part of x
const truncValue = Math.trunc(-3.7);
const floorValue5 = Math.floor(-3.7);
console.log(truncValue);
console.log(floorValue5);


// Math.trunc() and Math.sign() were added to JavaScript 2015-ES6

//toDo notes

// No matter how many chars are there after decimal , they will
// always return only number before the decimal 

// Exponential and Logarithmic function

// Math.pow(x,y) returns x to the power y
console.log(Math.pow(2,4));

// Math.sqrt() : Math.sqrt(x) returns the squarerootof x 
let squareRoot = Math.sqrt(4);
console.log(squareRoot);

// Math.log(x) : returns the natural logarithm of x .
let logResult = Math.log(25);
console.log(logResult);

// Math.log2(x): returns the base 2 logarithm of x
let logResult1 = Math.log2(8);
console.log(logResult1);

// Math.random() : returns a random number between 0(inclusive) and 1(exclusive)
console.log(Math.random()*100); // 0 to 99
console.log(Math.trunc(Math.random()*100)); // 0 to 99
console.log((Math.random()*100).toFixed(3)); // round off to 3 decimal parts
// Math.trunc can be used

// precisions 



