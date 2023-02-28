function createPetList() {
  const listPets = [];
  return function(animal){
    if(animal){
      listPets.push(animal)
    }else{
      console.log(listPets);
    }
  }
}

const myPetList = createPetList();

myPetList("michi");

myPetList("firulais");

myPetList();

// Una solución más limpia:
// export function createPetList() {
//   const pets = []
//   return (info) => info ? pets.push(info): pets
// }