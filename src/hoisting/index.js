// elmo es undefined porque la variable se declara después de ser utilizada
// se supone que por hoisting, la variable se declara al inicio del archivo
// const elmo;
console.log(elmo);
var elmo = 'Elmo';

//lo mismo pasa con las funciones,
//por el hoisting se supone que trae la función al inicio del archivo
// function sayHello() {
//   console.log('Hello');
// }
sayHello();
function sayHello() {
  console.log('Hello');
}

//si usamos variables pasa algo partecido
//pero en este caso tiene que ser con var
sayHello(elmito);
function sayHello(alguien) {
  console.log(`Hello ${alguien}`);
}
var elmito = 'Elmito'; // si usamos let o const, no funciona

//por otro lado si no declaramos la variable en nungún lado, no funciona