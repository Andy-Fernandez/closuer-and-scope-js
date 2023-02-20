'use strict';
// This code will cause an error
pi = 3.1416;
console.log(pi); // ReferenceError: pi is not defined
// In strict mode, you can not, for example, use a variable without declaring it.

function myFunction() {
  'use strict';
  // This code will cause an error
  pi = 3.1416;
  console.log(pi); // ReferenceError: pi is not defined
  // In strict mode, you can not, for example, use a variable without declaring it.
}
myFunction();

function myFunctionNotStrict() {
  // This code will not cause an error
  pi = 3.1416;
  console.log(pi); // 3.1416
  // In non-strict mode, you can use a variable without declaring it.
}
myFunctionNotStrict();