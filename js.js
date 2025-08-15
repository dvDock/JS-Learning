// Dom Menupulation
/*
// Seleting by ID
let heading = document.getElementById("mainHead");
console.dir(heading);
console.log(heading);

// Seleting with class
let subheading = document.getElementsByClassName("subHead");
console.dir(subheading);
console.log(subheading);

// Seleting with tagName
let text = document.getElementsByClassName("p");
console.dir(text);
console.log(text);

// Seleting with query selector

let firstE = document.querySelector("p"); // for 1st element
console.dir(firstE);

let firstAll = document.querySelectorAll("p"); // for All element
console.dir(firstAll);

let firstC = document.querySelector(".subHead"); // using class
console.dir(firstC);

let firstID = document.querySelector("#mainHead"); // using ID
console.dir(firstID); */

// DOM manipulation
// Properties
// - tagName : returns tag for element nodes
//- innerText : returns the text content of the element and all its children
// - innerHTMl : Returns the plain text or HTML contents in the element
// - textContent : returns textual content even for hidden elements
/*
let h2 = document.querySelector("h2");
console.log(h2.innerText);
h2.innerText = h2.innerText + "New text added"; */

// way 1
/*let boxs = document.querySelectorAll(".box");
boxs[0].innerText = "Updated text 1";
boxs[1].innerText = "Updated text 2";
boxs[2].innerText = "Updated text 3"; */

// way 2
/*
let boxs = document.querySelectorAll(".box");
let idx = 1;
for (box of boxs){
    box.innerText = `New updated text ${idx}`;
    idx++;
 } */

/// Dom part 2 part Chapter 7: Date: 15th Aug 2025






