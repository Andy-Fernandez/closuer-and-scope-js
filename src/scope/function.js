function greetings() {
  let userName = 'John';
  console.log(userName);

  if (userName === 'John') {
    console.log('Hello, ' + userName);
    // Another way to greet John
    console.log(`Hello, ${userName}`);
  }
}

greetings();
// console.log(userName); // ReferenceError: userName is not defined