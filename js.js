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
// Atributs
/*
let heading = document.querySelector(".main-content h2");
console.log(heading.setAttribute("class", "subHeadBanner"));*/

/*
let headColor = document.querySelector(".main-content h2");
headColor.style.color = "red"; 
headColor.style.fontSize = "38px"; 
headColor.style.fontStyle = "italic"; */


// DOM Manipulation
// Insert Elements
 // - node.append( el ) // adds at the end of node (inside)
 // - node.prepend( el ) // adds at the start of node (inside)
 // - node.before( el ) // adds before the node (outside)
 // - node.after( el ) //adds after the node (Outside)

// Delete element
 // node.remove() //remove the node

 /* Create element */
/*let newBtn = document.createElement("button");
newBtn.innerText = "Join Now"; // inner text to add text inside button
console.log(newBtn);

let addButton = document.querySelector(".main-content .container");
addButton.append(newBtn);
//addButton.prepend(newBtn);
//addButton.after(newBtn);
//addButton.before(newBtn); */

/*
let removeText = document.querySelector(".main-content .container p");
removeText.remove(); */

/** add new class */
/*
let heading = document.querySelector(".main-content h2");
console.log(heading.classList.add("subHeadBanner"));
console.log(heading.classList.remove("subHeadBanner")); // This is for remove class */

// Chapter 8 : Events In JS


