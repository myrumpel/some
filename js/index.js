"use strict"
let numberOfFilms = ""
function start() {
  numberOfFilms = prompt("Сколько фильмов Вы уже посмотрели?")
  while (numberOfFilms == "" || numberOfFilms == null || isNaN(numberOfFilms)) {
    numberOfFilms = +prompt("Сколько фильмов Вы уже посмотрели?")
  }
}
// start()

const personalMovieDB = {
  count: numberOfFilms,
  movies: {},
  actors: {},
  genres: [],
  privat: false,
  showMyDb: function () {
    if (this.privat === false) console.log(this)
  },
  writeYourGenres: function (genre) {
    this.genres.push(genre)
  },
}
personalMovieDB.showMyDb()
function getGenres() {
  for (let i = 0; i < 3; i++) {
    const result = prompt(`Ваш любимые жанр №${i + 1}`)
    personalMovieDB.writeYourGenres(result)
  }
}
// getGenres ()
function rememberMyFilms() {
  for (let i = 0; i < 2; i++) {
    let lastOfFilms = prompt("Один из последних просмотренных фильмов?").trim(),
      starsOfFilms = prompt("Насколько оцените его?").trim()
    if (
      lastOfFilms !== null &&
      starsOfFilms !== null &&
      lastOfFilms !== "" &&
      starsOfFilms !== "" &&
      lastOfFilms.length < 50
    ) {
      personalMovieDB.movies[lastOfFilms] = starsOfFilms
    } else {
      i--
    }
  }
}
rememberMyFilms()
function detectPersonaLevel() {
  if (personalMovieDB.count < 10) {
    console.log("Маловато фильмов")
  } else if (personalMovieDB.count >= 10 && personalMovieDB.count <= 30) {
    console.log("Среднее количество просмотров")
  } else if (personalMovieDB.count >= 30) {
    console.log("Киноман!")
  } else {
    console.log("Ошибка!")
  }
}
// detectPersonaLevel()
// console.log(personalMovieDB)
