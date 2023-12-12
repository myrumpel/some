const family = ["Peter", "Ann", "Alex", "Linda"]

function showFamily(arr) {
  let str = ""

  let sent = "Семья состоит из: "
  let item
  for (item of arr) {
    str += `${item} `
  }
  const res = sent.concat(str)
  return res
}
console.log(showFamily(family))
const favoriteCities = ["liSBon", "ROME", "miLan", "Dublin"]

function standardizeStrings(arr) {
  const res = arr.map((elem) => console.log(elem.toLowerCase()))
}
console.log(standardizeStrings(favoriteCities))
