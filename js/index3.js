// function getTimeFromMinutes(num) {
//   if (num < 0) return "Ошибка, проверьте данные"
//   let hours = +Math.floor(num / 60)
//   let minutes = num % 60
//   let numStr = ""
//   switch (hours) {
//     case 1:
//       numStr = "час"
//       break
//     case 2:
//     case 3:
//     case 4:
//       numStr = "часа"
//       break
//     case 3:
//       numStr = "часа"
//       break
//     case 4:
//       numStr = "часа"
//       break
//     default:
//       numStr = "часов"
//   }
//   let res = `Это ${hours} ${numStr} и ${minutes} минут`
//   return res
// }
// console.log(getTimeFromMinutes(0))

// findMaxNumber(1, 2, 3, 4)
function fib(num) {
  if (typeof num !== "number" || num <= 0 || !Number.isInteger(num)) {
    return ""
  }

  let result = ""
  let first = 0
  let second = 1

  for (let i = 0; i < num; i++) {
    if (i + 1 === num) {
      result += `${first}`
      // Без пробела в конце
    } else {
      result += `${first} `
    }

    let third = first + second
    first = second
    second = third
  }

  return result
}
