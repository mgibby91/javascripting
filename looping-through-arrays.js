const pets = ['cat', 'dog', 'rat'];

let newPets = [];
for (let pet of pets) {
  pet = pet + 's';
  newPets.push(pet);

}

console.log(newPets);