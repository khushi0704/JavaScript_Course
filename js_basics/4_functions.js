// functions in javascript
function add(x,y){
    return x+y;
}

console.log(add(3,4));

var a=5,b=10;
let sum1 = a+b;
console.log(sum1);

function greet(name){
    console.log("hello "+name+" welcome !");
}

greet("Khushi");
greet("Moulik");


function sum(x,y){
    console.log(x+y);
}

sum(3,5);

// function expression - you can use function as a variable 
var result = function sum(a,b){
    console.log(a+b);
}
result(5,10);

// later it will become ANONYMOUS function and arrow function

var result = function (a,b){
    console.log(a+b);
}
result(5,10);

// returning a sum of two numbers

function addition(x,y){
    return x+y;
}

function sum(a,b){
    console.log(a+b);
}
 // output - undefined because there is no return type


// undefined - something which has no value at the moment 
// null - absence of a value

// undefined is of no type
// null is of object type

// if you use a return keyword inside a function - comes after the loop

// IIFE : IMMEDIATELY INVOKED FUNCTION EXPRESSION 
var result = (function (a,b){
    console.log(a+b);
})(5,100);

let firstName = "Khushi";
let lastName = "Jain";

let fullName = `${firstName} ${lastName}` 
console.log(fullName);

// string interpolation with variables
         //   template strings support string interpolation
          //  aloowing you to embed expressions directly wihtin the stringInterpolated expressions are enclosed in ${};

var age = 22;
var sentence = `I am ${age} years old`;
console.log(sentence);

// default parameters 
// if no argument is passed 

function sum(a,b=16){
    return a+b;
}

console.log(sum(5,19));

// arrow function
var sum = (a,b=16) => {
    return a+b;
};

console.log(sum(5,19));
// no return keyword use in case you want only one line code
// in traditional functions you cannot assign it to a variable without 
// the use of return keyword
var sum = (a,b) => {console.log("hi")};

// fat arrow function

// if the function body consists of a single expression , the braces and the return keyword 
// can be omitted
var sum = (a,b) => `the sum is ${a+b}`;

// if there is only one parameter , the parentheses () around the parameter list
// can be omitted

const square = (a) => `the square of a ... ${a+a}`;
console.log(square(4));
// if there are no parameters , we can use an empty set of parenthesis
const egreet = () => console.log("hi");
egreet();


// interview questions 

// calculator 
// takes two numbers and an operator 

var result = function calculator(a,b,operator){
    switch(operator){
        case "+":
            return a+b;
        case "-":
            return a-b;
        case "*":
            return a*b;
        case "/":
            return a/b;
        default:
            return "enter a valid operator";
    }
}

console.log(result(1,2,'*'));

// Reverse a string
function reverse(str){
    var reversedString = "";
    for(var x=str.length-1;x>=0;x--){
        reversedString = reversedString + str[x];
    }
    console.log(reversedString);
}
reverse("Khushi Jain");

const isReverse = (str) => {
    var reversedString = "";
    for(var x=str.length-1;x>=0;x--){
        reversedString = reversedString + str[x];
    }
    console.log(reversedString);
};

isReverse("Khushi Jain");

// check for palindrmome 
// egs : level , malayalam , radar , pop , mom , dad 

const isPalindrome = (str) => {
    var x = 0;
    var y = str.length-1;
    while(x<=y){
        if(str[x]!=str[y]){
            console.log("not a palindrome");
            return;
        }
        x++;
        y--;
    }
    console.log("a palindrome");
};

isPalindrome("khushi");

