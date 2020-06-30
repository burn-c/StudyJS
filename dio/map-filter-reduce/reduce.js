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

const totalWeitght = pets.reduce((total, pet) => {

  return total + pet.weight
}, 0)

console.log('>>>>>>>>>>>>>>> Total Weight ')
console.log(totalWeitght)

const totals = pets.reduce((total, pet) => {

  return {
    totalAge: total.totalAge + pet.age,
    totalWeitght: total.totalWeitght + pet.weight
  }
}, { totalAge: 0, totalWeitght: 0 })

console.log('>>>>>>>>>>>>>>> Totals ')
console.log(totals)

const totalWeitghtDog = pets.reduce((total, pet) => {
  if(pet.type !== 'dog') return total

  return total + pet.weight
}, 0)

console.log('>>>>>>>>>>>>>>> Total Weight Dogs ')
console.log(totalWeitghtDog)

