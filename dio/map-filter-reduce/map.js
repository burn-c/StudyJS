const pets = [
  {
    name: 'rex',
    type: 'dog',
    age: 10,
    weight: 30
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

const petNames = pets.map((pet) => {
  return pet.name
})

console.log('>>>>>>>>>>>>>>> Using map')
console.log(petNames)

/**
 * Foreach
 * Does not return a new array with the same number of elements
 */

 const forEachPetNames = [];

 pets.forEach((pet) => {
   forEachPetNames.push(pet.name)
 })

console.log('>>>>>>>>>>>>>>> Using forEach')

 console.log(forEachPetNames)
