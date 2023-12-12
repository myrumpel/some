"use strict"
function copy(mainObj) {
  let copy = {}
  let key
  for (key in mainObj) {
    copy[key] = mainObj[key]
  }
  return copy
}
const numbers = {
  a: 1,
  b: 4,
  c: 43,
  d: 23,
  e: 65,
  f: {
    x: 21,
    y: 96,
  },
}
const add = {
  q: 1,
  s: 4,
  w: 43,
  z: 23,
}
// const newNumbers = copy(numbers)
// console.log(Object.assign(numbers, add))
console.log({ ...numbers, ...add })
