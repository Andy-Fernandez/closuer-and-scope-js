const myGlobal = 0;

function myFunction() {
  const myNumber = 1;
  console.log(myGlobal);
  return function (){
    const inner = 2;
    console.log(myGlobal, myNumber);
    return function (){
      console.log(myGlobal,myNumber,inner);
    }
  }
}

myFunction()()();