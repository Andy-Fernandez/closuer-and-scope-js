function init() {
  var name = 'Closure';
  function displayName() {
    console.log(name);
  }
  displayName();
}

function makeAdder(x) {
  if (x === undefined) {
    x = 12;
    return x;
  }
  return function(y) {
    if (x === undefined) {
      x = 0;
      y = 0;
    }
    return x + y;
  };
}

console.log(makeAdder);