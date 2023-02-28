function init() {
  var name = 'Closure';
  function displayName() {
    console.log(name);
  }
  displayName();
}

function makeAdder(x) {
  return function(y) {
    if (!y) {
      return x;
    } else {
      return x + y;
    }
  };
}

console.log(makeAdder(5)());