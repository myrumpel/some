"use strict"
const num = 50
switch (num) {
  case 12: {
    console.log("Неверно")
    break
  }
  case 42: {
    console.log("Неверно 2")
    break
  }
  case 50: {
    console.log("Верно!")
    break
  }
  default: {
    console.log("Все варианты неверны")
    break
  }
}
