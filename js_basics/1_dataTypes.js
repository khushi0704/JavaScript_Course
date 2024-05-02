// types of values a variable can hold

var myFavourite = 777;
console.log(myFavourite);

var myName = "Khushi";
console.log(myName);

var isRain = true;
console.log(isRain);

var salary;
console.log(salary);

var badMemorires = null;
console.log(badMemorires);

const bigNumber = 123456789043535492387598473n;
console.log(bigNumber);


var myName = "Khushi";
console.log(typeof myName);

// convert a string to a number and vice versa
var num = "7";
console.log(typeof Number(num));
console.log(typeof +num);

// parseInt and ParseFloat 

var myString = "777";
var myNumber = parseInt(myString);
console.log(typeof myNumber);

var myStr = "777.77";
var myFloat = parseFloat(myStr);
console.log(myFloat);

// NaN is not equal to NaN
var myStr = parseInt("xyz");
console.log(myStr);
var myNum = parseInt("@#$");
console.log(myNum);

if(NaN == NaN ){
    console.log("both are equal");
}
else{
    console.log("both are not equal");
}