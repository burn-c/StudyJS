const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10,
    weight: 30
  },
  {
    name: 'doger',
    type: 'dog',
    age: 7,
    weight: 17
  },
  {
    name: 'miau',
    type: 'cat',
    age: 2,
    weight: 5
  },
  {
    name: 'gulp',
    type: 'fish',
    age: 1,
    weight: 10
  },
]

const totalWeightDogs = pets
  .filter((pet) => {
    return pet.type === 'dog'
})
  .reduce((total, pet) => {
    return total + pet.weight
}, 0)

console.log('>>>>>>>>>>>>>>> Total Weight Dogs Filter')
console.log(totalWeightDogs)
