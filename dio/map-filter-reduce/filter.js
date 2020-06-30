const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10
  },
  {
    name: 'miau',
    type: 'cat',
    age: 2
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1
  },
]

const isLessFive = (number) => {
  return number < 5
}

const newPets = pets.filter(({age}) => isLessFive(age))

console.log('>>>>>>>>>>>>>>> Array original')
console.log(pets)

console.log('>>>>>>>>>>>>>>> Filter age < 5')
console.log(newPets)
