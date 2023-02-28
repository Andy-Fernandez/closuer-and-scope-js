function sumWithClosure(firstNum) {
  return function(b) {
    if (typeof b === 'undefined') {
      console.log(firstNum); // return firstNum;
    } else {
      console.log(firstNum + b); // return firstNum + b;
    }
  };
}

// miAcancia = sumWithClosure(2);
// miAcancia(3);

sumWithClosure(2)();