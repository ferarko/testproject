"use strict";

// // alert(`Hello`);
// // const result = confirm(`Are you here?`);
// // // console.log(result);
// // const answer = prompt(`Age?`, `18`);

// // 
// // answers[0] = prompt(`Name?`, ``);
// // answers[1] = prompt(`Work?`, ``);
// // answers[2] = prompt(`Time?`, ``);

// // console.log(typeof(answers));
// // console.log(typeof(null));
// // document.write(answers);

// // const category = `toys`;
// // console.log(`https://someurl.com/${category}/5`);
// // const user = `Ivan`;
// // alert(`Privet, ${user}`);

// // console.log(`arr` + ` - object`);
// // console.log(4 + `5`);

// // let incr = 10, decr = 10;
// // // incr++;
// // // decr--;

// // console.log(incr);
// // console.log(decr);
// // console.log(2*4 != 8);

// // const isChecked = true, isClose = false;
// // console.log(isChecked || isClose);

// // praktika1

let numberofFilms = +prompt(`Сколько фильмов вы уже посмотрели?`,``);

const presonalMovieDB = {
 count: numberofFilms,
movies: {},
actors: {},
gengers: [],
privat: false};
let answer1 = prompt(`Один из последних просмотренных фильмов`, ``);
let answer1x = prompt(`Нз сколько оцените его?`, ``);
let answer2 = prompt(`Один из последних просмотренных фильмов`, ``);
let answer2x = prompt(`Нз сколько оцените его?`, ``);

// // presonalMovieDB.movies[answer1] = answer1x;
// // presonalMovieDB.movies[answer2] = answer2x;

// // console.log(presonalMovieDB);

// // if (4 == 4) {console.log(`Ok!`);} else {console.log(`Error`)};

// // const num =  50;
// // if (num <49) {console.log(`Erorr`);} 
// // else if (num > 100) {console.log(`Mnogo`);} 
// // else {console.log(`OK`)};
// // (num === 50) ? console.log(`OK`) : console.log(`Error`);

// // УСЛОВИЯ

// // const num =  50;
// // switch (num) {
// //     case 49:
// //         console.log(`Neverno`);
// //         break;
// //         case 100:
// //             console.log(`Neverno`);
// //             break;
// //             case 50:
// //                 console.log(`Pravda`);
// //                 break;
// //                 default: 
// //                 console.log(`Sosi`);
// //                 break;
// // };