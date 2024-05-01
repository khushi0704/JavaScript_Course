/*
TOPICS : 
->STRING AND IT'S PROPERTIES
->ESCAPE CHARACTER
->STRING SEARCH METHODS
->EXTRACTING STRING PARTS
->EXTRACTING STRING CHARACTERS
->REPLACING STRING CONTENT
*/

// STRING IN JAVASCRIPT ARE FUNDAMENTAL DATA TYPE & REPRESENT A SEQUENCE OF CHARACTERS

// strings created with a SINGLE or double quotes are the same 
// no difference between the two 

// string properties 

// length : 

const str = "Hello World";
console.log(str.length);

// LENGTH STARTS FROM 1 

// ESCAPE CHARACTER : \ backslash to include special characters

let txt = "Hello , \"This is Khushi Jain\" & \\ \n I am a full stack developer";
console.log(txt);


/*  STRING SEARCH METHOD

 indexOf() : returns the index (position) of the first occurence of a string in a string 
 , or it returns -1 if string is not found

 indexOf('Khushi')
 looks only the first letter : J
 it's a case sensitive  

 */
let text = "Khushi Jain";
console.log(text.indexOf('Jain'));

let strArr = Array.from(text);
// each letter becomes an element of an array
console.log(strArr);

// Map character with their index numbers
let strMap = strArr.map((curEle,index)=>
    `${curEle} - ${index}`
);
console.log(strMap);

// last occurence
let sentence = "Hello JavaScript , Welcome to the world best JavaScript Course";
let index = sentence.lastIndexOf("JavaScript");
console.log(index);

// the search() method cannot take a second start position argument
// the indexOf() method cannot take powerful search values (regular expressions)
// they accept the same arguments(parameters) and return the same value

// match() : returns an array of matched values or null if no match is found

let sent = "Hello , Khushi this Javascript side";
let result1 = sent.match("Hello");
let result2 = sent.match(/JavaScript/gi); // searches globally 
console.log(result1);
console.log(result2);

// matchAll() : returns an iterator of all matches , providing 
// detailed information about each match . returns an empty iterator if no match is found
// automatically adds global flag and converts to regex

// iterator
// array like object 
// array as object 

let text1 = "Hello JavaScript , welcome to our world best JavaScript course";
let matchResult = text1.matchAll("JavaScript");
for(let item of matchResult){
    console.log(item[0]);
   // console.log(item);
}

// ACCESSING ELEMENTS : array elements are accessed using zero-based indices

// includes() : returns true if the string contains the specified value , false otherwise

// regex cannot be used in includes 
// is case sensitive 

// substring() : 

// startWith() : returns true if a string begins with a specifies value

console.log(text.startsWith("welcome"));

// start position for the search can be specified
console.log(text.startsWith("welcome",10));

// endsWith() : if ends with a specified value 

// EXTRACTING STRING PARTS 

// String.prototype.substr() it is depreciated

// slice() extracts a part of a string and returns the extracted part  and returns in a new string 

console.log(text.slice(3,10));

// SubString : extracts a portion of a string based on starting and ending position

// camelCase is used to separate words 

//substring(startIndex,endIndex);

// The substring() method swaps its two arguments if indexStart is greater than indexEnd , meaning that a string is still returned. The slice() method returns 
// an empty string if this is the case

// starting and ending value less than 0 are treated as 0 in substring()

let intro = "Hello JavaScript , welcome to the world best Javascript course";
let result3 = intro.substring(-6);
let result5 = intro.substring(0);
let result4 = intro.substring(6);
console.log(result3);
console.log(result4);
console.log(result5);

// similarities : 
// in both the slice and substring methods , the end paramter indicates the 
// ending index up to which the extraction occurs , but the character at the end index 
// is excluded from the extracted substring 

// it is exclusive that is 

// Interview Question 

let intro1 = "Hello JavaScript , welcome to the world best JavaScript course";
let result6 = intro1.replace("H","");
console.log(result6);


// replace javascript 
let result7 = intro1.replaceAll("JavaScript","Python");
console.log(result7);

// str.at(-4)

// Extracting string characters 


// there are three methods for extracting string characters

// the charAt(position) Method
// the charCodeAt(position) Method
// the at(position) Method

// doesn't give backward value 
// gives empty string in that case 

// at() - can access elements using negative indexes as well


// caseInsensitive replacement 

// to perform case insensitive replacement , you can use the 
// i flag in regex

// other useful methods 

// to uppercase and tolowercase : converts the string to upper case or lowercase

const str1 = "JavaScript";
console.log(str1.toLowerCase());
console.log(str1.toUpperCase());

// trim : Removes whitespace from both ends of the string 
const str2 = "    Hello, World    ";
console.log(str2.length);

let trimStr = str.trim();
console.log(trimStr);
console.log(trimStr.length);


// split : splits a string into an array of substrings based on a specified delimeter
const str3 = "apple,orange,business";
let strArr3 = str3.split(",");
let strArr4 = str3.split(",").reverse(); // to reverse 
let strArr5 = str3.split(",").reverse().join(); // to string 

console.log(strArr3);
console.log(strArr4);
console.log(strArr5);

// INTERVIEW QUESTIONS 

// write a javascript function that prints the letters 'a' through
// z in the console . You should use a loop to iterate through the 
// letters and print each one on a new line .
console.log("a".charCodeAt(0));
console.log("z".charCodeAt(0));
for(var val=97;val<=122;val++){
    console.log(String.fromCharCode(val));
}

// write a function to count the number of vowels in a string ?
const countVowels = (str) => {
    const vowels = "aeiou";
    var count=0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    return count;
}
console.log(countVowels("aeiou"));

// Write a function to check if all the vowels present in a string or not 
const checkAllVowelsPresentOrNot = (str) => {
    const vowels = "aeiou";
    for(let char of vowels){
        if(!str.includes(char)){
            return false;
        }
    }
    return true;
}
let str5 = "my name is khushi jain";
console.log(str5.includes("a"));
console.log(checkAllVowelsPresentOrNot("my name is khushi jain"));
console.log(checkAllVowelsPresentOrNot("a ndjvnjdhvenjsndkjcndidcsbjdhosdcbjsdhu"));

// Write a javascript function isPangram that takes a string as input and
// returns true if the string is a pangram (contains all letters of the alphabet)
// and false otherwise. The function should be case-insensitive and ignore spaces

// Constraints : 

/*
1) THE INPUT STRING WILL CONSIST OF ALPHABETIC CHARACTERS AND SPACES
2) THE FUNCTION SHOULD HANDLE BOTH UPPERCASE AND LOWERCASE LETTERS
3) CONSIDER THE ENGLISH ALPHABET WITH 26 LETTERS
*/

const isPangram = (str) => {
    let inputArr = str.toLowerCase().split("");
    const values = inputArr.filter(
        (curEle) => 
        curEle.charCodeAt()>= "a".charCodeAt() && 
        curEle.charCodeAt() <= "z".charCodeAt()
    );
    return [... new Set(values)].length == 26; // removed duplicates then converted to array
    //now just check if length is 26 or not 

};

console.log(isPangram("nopqrstuvwxyz"));