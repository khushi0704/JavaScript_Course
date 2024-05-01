// types of operators :
/*

ASSIGNMENT OPERATOR : =
ARITHMETIC OPERATOR : + - * / 
COMPARISON OPERATOR : > < ==
LOGICAL : || && ! OR AND NOT
STRING 
UNARY
TERNARY
*/

// logical or not and 
var x = "0";
var y = 10;
if(x==0){
    console.log(true);
}
else{
    console.log(false);
}

var isOpen = true;
console.log("is open : " ,isOpen);
console.log("is open : " ,!isOpen);

// switch statement 
var Shape = "triangle";
switch(Shape){
    case "traingle":
        console.log(a*b*0.5);
        break;
    case "circle":
        console.log(3.14*r*r);
        break;
    case "square":
        console.log(l*b);
        break;
    default:
        console.log("there is no shape as such");
}


// ternary  operator
var age = 18;
var result = (age>=18)? "eligible" : "not eligible";
console.log(result);

/* COMBINED INTERVIEW QUESTION */

// TABLE OF 5 
var ans=5;
var it=1;
do{
    console.log(ans);
    it++;
    ans=it*5;
}
while(it<13)

for(var i=1;i<=12;i++){
    console.log(5*i);
}

// do while loop
var positiveNumber;

// sum of numbers from 1 to 10 
var sum=0;
for(var i=1;i<=10;i++){
    debugger;
    sum+=i;
}
console.log(sum);

// prime number or not 
var isPrime = 5;
for(var i=2;i<isPrime;i++){
    if(isPrime%i==0){
        console.log("not prime number");
        break;
    }
}

// leap year
var year = 2004;
if((year%4==0 && year%100!=0)||year%400==0){
    console.log("a leap year");
}
else{
    console.log("not a leap year");
}

// drawing patterns with astericks

for(var row=1;row<=5;row++){
    var pattern = "";
    for(var col=1;col<=row;col++){
        pattern=pattern+"*";
    }
    console.log(pattern);
}