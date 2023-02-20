function fruit() {
  if (true){
    var fruit1 = "Apple"; // var is function scoped
    let fruit2 = "Kiwi"; // let is block scoped
    const fruit3 = "Banana"; // const is block scoped
  }
  console.log(fruit1);
  // console.log(fruit2); // ReferenceError: fruit2 is not defined
  //console.log(fruit3); // ReferenceError: fruit3 is not defined
}

fruit(); // apple