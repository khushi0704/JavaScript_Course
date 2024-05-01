// Using Array Constructor 
let fruits = new Array("apple","banana","orange");
console.log(fruits);

// Using Array Literals
let fruit = ["apple","banana","orange",1];
console.log(fruit);

// we can store many types of data in array
let sales = [["apple",10.1,20],
            ["banana",10.1,20]];
console.log(sales);

// Array Traversal / Iterating over Arrays
// for of
for(let item of fruits){
    console.log(item);
}

// for in loop
for(let item=0;item<fruits.length;item++){
    console.log(fruits[item]);
}

// for in loop 
// in matlab index number
for(let item in fruits){
    console.log(item);
}

// for each method
//Array.forEach(function callback(currentValue,index.array){
    // your logic here
//});

// add delete - SLICE 
//slice(start,deleteCount,item1,item2,/* ... */itemN)
//let fruit = ["apple","banana","orange",1];
fruit.splice(); // always gives an empty array
fruit.splice(1); // starting pt 
fruit.splice(1,1); // number of elements to be deleted
fruit.splice(1,1,"grapes"); //to add element at that index 
// add at the last 
fruit.splice(-1,0,"grapes"); // added at the last

fruits.splice(fruits.length,0,"mango");
fruits.splice(1,0,"pears"); // without deleting anything
// zero means delete nothing 
// ecma script updates features 


// Searching and Filtering 

// for search we have - indexOf(searchElement,fromIndex)
const numbers = [1,2,3,4,5,6,7,8];
numbers.indexOf(); // returns the first index number , returns -1 if not present 

// checks whether an arrays includes an elment or not 

fruit.includes('apple'); 
// returns true / false

// indexOf - first Occurence 
// lastIndexOf - last occurence - searches backward (2,3)
// searches backward from the 3rd index

// CHALLENGE TIME : 

// ADD MAY AT THE END OF THE ARRAY

const months = ["Jan","Feb","Mar","Apr"];
months.splice(months.length,0,"May");
console.log(months);

// return value of splice ? empty array
// update ? 
const indexToUpdate = months.indexOf("Mar");
months.splice(indexToUpdate,1,"March");
console.log(months); 

// delete May from Array
const indexToDelete = months.indexOf("May");
months.splice(indexToDelete,1);
console.log(months);


// FILTER IN ARRAY

// find method : finds first element in the array
//numbers.find();
// find index 

// search + filter 
// greater than 5 

// returns only the first matched element
const result1 = numbers.find((curElem) => {
    return curElem > 5;
});

console.log(result1); 

// 
const result2 = numbers.map((curElem)=>curElem*5);
console.log(result2);
// findIndex : gives index where fund gives the value
const result3 = result2.findIndex((curElem)=>{
    return curElem > 10;
});

console.log(result3);

// FILTER : returns all the elements that match the condition
const result4 = numbers.map((curElem)=>curElem*5);

// findIndex : gives index where fund gives the value
const result5 = result4.filter((curElem)=>{
    return curElem > 10;
});
console.log(result5);

// used in ecommerce website 
// use case : add to cart , delete from the cart

let value = 6;
const num = [1,2,3,4,5,6,7,8,6,9];

let updatedCart = num.filter((curElem) => {
    return curElem != value;
})

console.log(updatedCart); // returns except 6 

// filtering products by prices 
// objects 

// write a function that uses filter method that return array containing only products 
// less than or equal to 500

// ypu are given an array of products - name and price 

const products = [
    {name : "Laptop" , price : 1200},
    {name : "Phone" , price : 800},
    {name : "Tablet" , price : 300},
    {name : "Smartwatch" , price : 150},
]

const filteredProducts = products.filter((curElem)=>{
    return curElem.price<500;
});

console.log(filteredProducts);

// find out unique values
const uniqueValues = num.filter((curElem,index,arr)=>{
    //console.log(arr.indexOf(curElem));
    return arr.indexOf(curElem) == index;
});

console.log(uniqueValues);
console.log(new Set(num));

// SORT AND COMPARE IN ARRAY
// HIGH TO LOW ETC

// COMPARE IS IMPORTANT 
const nums = [8,7,6,5,4,3,2,1];
const sortedNum = nums.sort((a,b) => a-b);
console.log(sortedNum);

// sort in descending order
nums.sort((a,b)=>{
    if(a>b) return -1;
    if(b>a) return 1;
});

console.log(nums);

// map filter and reduce 
//map creates a new array from calling a fucntion for every array element 
//does not execute the function for empty  Elements 
//does not change the original array


// REDUCE 
const prices = [100,200,300,400,500];
const totalPrice = prices.reduce((accum,curElem) => {
    return accum+curElem;
});

console.log(totalPrice);


