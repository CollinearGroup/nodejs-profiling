const _ = require('underscore')
const lo = require('lodash')

shallowCopy = () => {
  const person = {
    name: "Poo",
    age: 3,
    favoriteFood: "Hunny"
  }
  const copyLimit = 200 * 1000
  const list = []
  for (let copyCount = 0; copyCount < copyLimit; copyCount++) {
    list.push({
      name: person.name,
      age: person.age,
      favoriteFood: person.favoriteFood,
    })
  }
  return list
}

shallowCopyUnderscore = () => {
  const person = {
    name: "Poo",
    age: 3,
    favoriteFood: "Hunny"
  }
  const copyLimit = 200 * 1000
  const list = []
  for (let copyCount = 0; copyCount < copyLimit; copyCount++) {
    list.push(_.clone(person))
  }
  return list
}

deepCopyLo = () => {
  const person = {
    name: "Poo",
    age: 3,
    favoriteFood: "Hunny",
    friends: [{
      name: "Tigger",
      age: 5,
      favoriteFood: "Double Hunny"
    }]
  }
  const copyLimit = 100 * 1000
  const list = []
  for (let copyCount = 0; copyCount < copyLimit; copyCount++) {
    list.push(lo.cloneDeep(person))
  }
  return list
}

shallowCopy()
shallowCopyUnderscore()
deepCopyLo()
