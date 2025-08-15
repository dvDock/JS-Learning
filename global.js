// Let variable we can update
let fullName = "Dharmender Singh";

let age = 38;

// Const we can't update
const experience = 15;

console.log(fullName);
console.log(age);
console.log(experience);

// Block use 
{
 let nameIs = "Singh D";
    console.log(nameIs);
}



// Const key we can update
const student = {
    studentName: "Rahul",
    age: 20,
    cgpa: 2,
    pass: true
}

student["age"] =  student["age"] + 1;

console.log(student);
console.log(student.age);
console.log(student['pass']);



const product = {
 productTitle: "Amzone product",
 rating: 4,
 offer: 5,
 price: 270
};

console.log(product);


const profile = {
    userName: "@dharmender",
    isFollow: false,
    followers: 150,
    following: 100
};


console.log( typeof profile['followers']);

/// this is for comments

/* This one also used for comments  */





