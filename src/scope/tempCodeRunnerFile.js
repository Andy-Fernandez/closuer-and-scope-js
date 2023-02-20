function myFunctionNotStrict() {
  // This code will not cause an error
  pi = 3.1416;
  console.log(pi); // 3.1416
  // In non-strict mode, you can use a variable without declaring it.
}
myFunctionNotStrict();