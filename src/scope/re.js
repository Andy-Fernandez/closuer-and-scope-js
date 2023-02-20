// Working with 'var' keyword
var firstName; // undefined
firstName = 'John'; // assign a value
console.log(firstName); // John

var lastName = 'Doe'; // declare and assign a value
lastName = 'Adams'; // re-assign a value
console.log(lastName); // Adams

var secondName = 'John'; // declare and assign a value
var secondName = 'Doe'; // re-declare and re-assign a value
console.log(secondName); // Doe

// Working with 'let' keyword
let fruit = 'apple'; // declare and assign a value
fruit = 'kiwi'; // re-assign a value
console.log(fruit); // kiwi

//let fruit = 'banana'; // declare and assign a value (error)
//console.log(fruit); // SyntaxError: Identifier 'fruit' has already been declared

// Working with 'const' keyword
const animal = 'dog'; // declare and assign a value
//animal = 'cat'; // re-assign a value (error)
//console.log(animal); // TypeError: Assignment to constant variable.

//const animal = 'cat'; // declare and assign a value (error)

// But if we have an object or an array, we can change the values inside of it
const vehicles = ['car', 'truck', 'motorcycle'];
vehicles.push('boat');
console.log(vehicles); // ['car', 'truck', 'motorcycle', 'boat']

vehicles.pop();
console.log(vehicles); // ['car', 'truck', 'motorcycle']