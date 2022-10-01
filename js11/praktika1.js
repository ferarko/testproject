let numberofFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);

const presonalMovieDB = {
    count: numberofFilms,
    movies: {},
    actors: {},
    gengers: [],
    privat: false};
let answer1 = prompt(`Один из последних просмотренных фильмов`, ``);
let answer1x = prompt(`На сколько оцените его?`, ``);
let answer2 = prompt(`Один из последних просмотренных фильмов`, ``);
let answer2x = prompt(`На сколько оцените его?`, ``);

presonalMovieDB.movies[answer1] = answer1x;
presonalMovieDB.movies[answer2] = answer2x;

console.log(presonalMovieDB);