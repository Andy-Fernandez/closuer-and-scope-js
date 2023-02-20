// variables

var a; // declaration
var b = 2; // declaration and initialization (assignment)
b = 3; // assignment or re-assignment
var a = 1; // re-declaration and assignment

// Global Scope
var fruit = "apple";

function bestFruit() {
  console.log(fruit);
}

bestFruit(); // apple

// How to declare a global variable by accident
function bestFruit() {
  fruit1 = "apple";
  console.log(fruit1);
}

bestFruit(); // apple
console.log(fruit1); // apple