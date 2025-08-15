// New js learning journey
//console.log('my hello');


/** Arithmetic Operators */

/* Expression a + b  */
// + this is Operator
// +,-,*,/ These are arithmetic operators

//let a = 5;
//let b = 4;
//console.log( "a =", a, "& b = ", b );
//console.log( "a + b", a + b );
//console.log( "a - b", a - b );
//console.log( "a * b", a * b );
//console.log( "a / b", a / b );
//console.log( "a % b", a % b );

// Exponentiation
//console.log( "a ** b", a ** b ); // 


// Models

// Unary Operator

// Increment Operators is = ++

// Decrement Operators is = --


/*let a = 5;
let b = 4;
console.log( "a =", a, "& b = ", b );

a++;
console.log("a++ =", a++);
console.log("a =", a);


b--;
console.log("--a =", --a);

b--;
console.log("a-- =", a--);
console.log("a =", a);*/




// Assignment Operators
// =  =+  -=  *=  %=  **=

/*let a = 5;
let b = 4;

a += 4;
console.log("a =", a);*/


/// Comparison Operators

/*Equal to ==    Equal to & type ===
Not equal to  !=    Not equal to & type  !== */

/*

console.log( "5 == 2", a == b); // false

console.log( "5 == 5", a == b); // True

console.log( "5 != 5", a != b); // False

console.log( "5 === 5", a === b); // True

console.log( "5 !== 5", a !== b); // False

// Other operators
console.log( "5 > 3", a > b); // True
console.log( "5 < 3", a < b); // False

console.log( "5 >= 3", a >= b); // True
console.log( "5 <= 3", a <= b); // False */


///******** Ligical Operators

 /* Logical AND && // For campair, result in True and False
Logical AND provide result when both value are True 

Logical OR ||
Logical NOT ! */

/*
let a = 5;
let b = 3; */

// Logical AND

/*let cond1 = a > b; // true
let cond2 = a === 5; // True
console.log("cond1 && cond2 =", cond1 && cond2); */

/* console.log("cond1 && cond2 =", a > b && a===5); */
/*
// Logical OR
console.log("cond1 || cond2 =", a > b || a===6);

// Logical NOT
console.log("!(6>5)=", !(a > b)); */


//********  Conditional Statements

// if Statement

/*let age = 19;

if (age > 18) {
    console.log("You can vote!");

}
if (age < 18) {
    console.log("You can't vote!");

}


let mode = "dark";
let color;

if (mode === "dark"){
    color = "black";
}

if (mode === "light"){
    color = "white";
}

console.log(color); */


// if-else statement

/*if (mode === "dark"){
    color = "black";
}
else{
    color = "white";
}

console.log(color);

if ( age >= 18 ){
    console.log("vote");
} else{
    console.log("No Vote");
} */


// Odd Even Number checking
/*let num = 15;

if ( num % 2 === 0){
    console.log("Even");    
}
else {
    console.log("Odd");
}

if ( num % 2 === 0){
    console.log(num, "us even");    
}
else {
    console.log(num, "is odd");
}



if(mode === "dark"){
    color = "black";
} else if(mode === "blue"){
    color = "blue";
} else if(mode === "pink"){
    color = "pink";
} else {
    color = "black";
}

console.log(color);

if (mode === "dark") console.log(mode);
if (mode === "dark") {
    console.log(mode);
} */


//*** Ternary Operators
/*
let age = 25;
age >= ? "ault" : "Not Adult"; // simpler, compact if-else

// let result = age >= 18 ? "Adult" : "Not Adult";
console.log(result); */

// alert("Hello"); /// One time popup


/// Multiple of 5 using prompt code below
/*let num = prompt("Enter a number:");

if (num % 5 === 0){
    console.log(num, "Is a multiple of 5");
} else {
    console.log(num, "is NOT a multiple of 5");
} */

    // Q. Write a code which can give grade to students according to their scores:

   // let score = 46;
    /*let score = prompt("enter your score (0-100):"); // using promte
    let grade;

    if (score >= 90 && score <= 100) {
        grade = "A";
    } else if( score >= 80 && score <= 89 ) {
        grade = "B";
    } else if( score >= 70 && score <= 79 ) {
        grade = "C";
    } else if( score >= 60 && score <= 69 ) {
        grade = "D";
    } else if( score >= 50 && score <= 59 ) {
        grade = "E";
    } else if( score >= 0 && score <= 49 ) {
        grade = "F";
    }

    console.log("According to your scores, your grade was: ", grade); */


    // Chapter 3 Started here:  Loops & Strings /* 11th August 2025 */ ************/

    // Print 1 to 5
/*for (let helo = 1; helo <= 5; helo++) {
    console.log("My College");
}*/

// Calculate sum of 1 to 5
/*
let sum = 0;
for (let i = 1; i <= 5; i++){
    sum = sum + i;
}
console.log("sum =", sum);
console.log("Look has ended"); */

/*
for (let helo = 1; helo <= 5; helo++) {
    console.log("helo", helo);
}*/

// Infinite Loop : A loop that never ends
/*for (let helo = 1; helo >= 0; helo++) {
    console.log("helo", helo);
}*/


// White Loop

/*let i = 1;
while (i <= 5){
    console.log("i =", i);
    i++;
} */


// do-while loop
/*let i = 1;
do {
   console.log("i=", i);
   i++;
} while (i <= 5); */

// For-of Loop  ( Use for Strings and arrays )

/*let str = "JavaScript";
let size = 0;
for (let i of str){
    console.log("i=", i);
    size++;
}

console.log("string size =", size); */

// For-in Loop
/*
let student = {
    name: "Ram",
    age: 20,
    cgpa: 7.5,
    isPass: true,
}
for(let i in student){
    console.log("Student=", i, "value", student[i]);
} */

    /// Q.1 Print all even numbers from 0 to 100.
    /*
    // Even number
    for (let num=0; num <= 100; num++){
        if (num%2 === 0){
            console.log("Num=", num);
        }        
    }
    // Odd number
    for (let num=0; num <= 100; num++){
        if (num%2 !== 0){
            console.log("Num=", num);
        }        
    } */


// Q.2 Create a game where you start with any random game number. Ask the use to keep guessing the game number until the user enters correct value.
/*
let gameNum = 25;
let userNum =  prompt("Guess the game number");

while(userNum != gameNum){
    userNum = prompt("your enter invalid number. Guess again:");
}
console.log("Congratulations, you entered the right number."); */

// Strings in JS
// String is a sequence of characters used to represent text
/*
// create string
let str = "ApnaCollege";
let str2 = 'Hello';

// String Length
str.length

// String Indices
str[0], str[1], str[2]


console.log(str[4]);*/

// Template Literals ( String )
/*let sentence = `This is a template literal ${5+1}`;
console.log(sentence);

let ojb ={
    item: "pen",
    price: 10,    
};

// Way 2 ( String Interpolation )
let output = `the cost of ${ojb.item} is ${ojb.price} rupees.`; 
console.log(output);

// Way 1
console.log("The cost of", ojb.item, "Is", ojb.price, "rupees."); 

// Template Literals ( esacpe charchater )  
console.log("Apni\nMandi"); */


/// String Methods in JS

// str.toUpperCase()
// str.toLowerCase()
// str.trim()
// String are immutable in JS
/*let str = "Apni Mandi";
str = str.toLowerCase();
console.log(str);

let str1 = "Apni Mandi";
str1 = str1.toUpperCase();
console.log(str1);*/

// str.slice(start, end?) // Returns part of the string
/*let str = "abcdefgh";
console.log(str.slice(1, 4));
console.log(str.slice(3));*/

// str.concat() // Joins str1 with str2
/*
let str1 = "Apni";
let str2 = "Mandi";

//let resu = str1.concat(str2); // Way 1
let resu = str1 + str2; // way 2 using +
console.log(resu); */

// str.replace( searchVal, newVal )
/*let str = "Dock";
console.log(str.replace("Do", "Ro"));

let str1 = "DockDock";
console.log(str1.replaceAll("Do", "Ro"));*/

// str.charAt( idx )

//let str = "Dock";
/*
//console.log(str.charAt(2));
let str = "Dock";
str = str.replace("D", "R");
console.log(str); */

//let's Practice
// Q.1 Genrate user name , Prompt the user to enter ther full name
/*
let fullName = prompt ("Enter you full name without space");
let userName = "@" + fullName + fullName.length;
console.log(userName); */


////// Chapter 4  /* 12th August 2025 */

// Arrays in JS
// Collections of items

// Array value is mutable
/*
let marks = [85,88,90,97,92,96];
marks[1] = 99;
console.log(marks);
console.log(marks[1]);


let stud = ["Rahul", "John", "Ram", "Vicky", "Rohit", "Rohit Kumar"];
console.log(stud); */
/*
let heroes = ["Rahul", "John", "Ram", "Vicky", "Rohit", "Rohit Kumar"]; */
// for loop
/*for (let i = 0; i < heroes.length; i++){
    console.log(heroes[i]);
} */

// for of
/*
for (let hero of heroes ){
    console.log(hero.toUpperCase());
}*/

// Q. Find the average marks of the entire class.
/*
let marks = [85,88,90,97,92,96];
let sum = 0;

for( let val of marks){
    sum += val;    
}

let avg = sum / marks.length;
console.log(`avg marks of the class = ${avg}`); */


// Q 2 All items have an offer of 10% OFF on them. Change the array to store final price after applying offer.
/*
let items = [185,288,390,197,292,496]; */
/*let i = 0;
for (let val of items) {
    //console.log(`value at index ${i} = ${val}`);
    let offer = val / 10;
    items[i] = items[i] - offer;
    console.log(`value after offer = ${items[i]}`);
    i++;
}*/
/*
for (let i = 0; i < items.length; i++){
    let offer = items[i] / 10;
    items[i] -= offer;
}
console.log(items); */

// Array Methods
// Push() : add to end
// Pop() : delete from end & return
// toString() : converts array to string
/*
let veggies = ["Bhindi", "Banana", "Apple", "Lichi", "Avacado"];
veggies.push("lockiee");
console.log(veggies);

veggies.pop("");

console.log(veggies);
console.log(veggies.toString()); // array to string convert */


// Concat()
/*let heroes = ["Bhindi", "Banana", "Apple", "Lichi", "Avacado"];
let dcHero = ["Gobhi", "Lockiee"];

let allHero = heroes.concat(dcHero);

console.log(allHero); */

// unshift()
// shift()

//slice()
/*
let heroes = ["Bhindi", "Banana", "Apple", "Lichi", "Avacado", "abcd","xyzed"];
console.log(heroes);
console.log(heroes.slice(1)); */

//splice() - add, remove, replace
/*
let heroes = ["Bhindi", "Banana", "Apple", "Lichi", "Avacado", "abcd","xyzed"];
heroes.splice(2, 0, 5); */

// Q1
/*
let companies = ["IBM", "Up", "Apple", "TCS", "Micro", "Sony","HP"];
companies.pop();
companies.splice();
companies.push();
companies.shift();

console.log(companies); */

/// ******** Lession Number 5 /* Date: 13th  */
// Functions and Methods

// Functions in JS
// Block of code that performs a specific task, can invoked whenever needed
/*
// creating function
function myFirstFunction() {
    console.log("My first js function code");
    console.log("I am learing JS");
}
// function calling
myFirstFunction(); */

/*
function myFirstFunction(msg) {
    console.log(msg);
} 
myFirstFunction('Hello G'); */

// Function -> 2 number, sum
/*function sum(a, b){
    sumPlus = a + b;
    return sumPlus;
}

let val = sum(3, 5);
console.log(val); */


// Fnx parameter - like local variable and only use in the block element.



// Arrow functions ---- ( Compact way of writing a function)  =>
/*
// sum function
function sum(a, b){
    return a+b;
}
// Modren JS
const arrowSum = (a, b) => {
    console.log(a + b);
};

// multiplication function
function mul(a, b){
    return a*b;
}

// multiplication function
const newFunct = (a, b) => {
     console.log(a * b);
}; */

// Q1. Create a function using the Function kayword that takes s string as an argument & returns the number of vowels in the string.
/*
function countVowels(str){
    let count = 0;
    for( const char of str){
        if(char ==="a" || char ==="e" || char ==="i" || char ==="o" || char ==="u"){
            count++;            
        }
    }
    console.log(count);
    return count;
} */


    // forEach Loop in Arrays

    //let arr = ["Meena", "Dharmender", "Vicky", "Rohit", "Shalini"];

    /*arr.forEach(function printVal(val){
        console.log(val);
    }); */
    /*arr.forEach( (val) =>{
        console.log(val.toUpperCase());
    } );*/

    /* arr.forEach( (val, idx, arr) =>{
        console.log(val.toUpperCase(), idx, arr);
    } ); */

/// Higher Order Function/Methods
/*
 let nums = [5, 10, 4, 6, 7];
// way 1
/* nums.forEach((num) => {
    console.log(num * num);
 }) */

// way 2
/*
let calSqure = (num) => {
console.log(num * num);
}
nums.forEach(calSqure);*/

// SOme more Array Methods
// Map
/*let nums = [5, 10, 4, 6, 7];
let newArr = nums.map( (val) => {
   return val *2;
});
console.log(newArr);  */

// Filter
/*
let nums = [5, 10, 4, 6, 7];
let evenArr = nums.filter( (val) => {
    return val % 2 !==0;
});
console.log(evenArr); */




/// Chapter 6 DOM part 1

// HTML( Structure )  CSS(Style)   JS(Logic)





