// const someString = "This is some strange string"

// function reverse(str) {
//   if (typeof str !== "string") return "Ошибка!"
//   const midStr = str.split("")
//   let resStr = ""
//   for (let i = midStr.length - 1; i >= 0; i--) {
//     resStr += midStr[i]
//   }
//   return resStr
// }
// console.log(reverse(someString))

const baseCurrencies = ["USD", "EUR"]
const additionalCurrencies = ["UAH", "RUB", "CNY"]

function availableCurr(arr, missingCurr) {
  if (arr.length < 1) return "Нет доступных валют"
  let resStr = "Доступные валюты: \n"
  const filteredArr = arr.filter((elem) => elem !== missingCurr)
  for (let i = 0; i < filteredArr.length; i++) {
    resStr += `${filteredArr[i]}\n`
  }
  return resStr
}
console.log(availableCurr(additionalCurrencies, "CNY"))
