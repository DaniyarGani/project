"use strict";

let numberOfFilms;

function start() {
    numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)) {
        numberOfFilms = +prompt('Сколько фильмов вы уже смотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms() {
    for (let i = 0; i < 2; i++) {
        const a = prompt('Один из просметренных фильмов?', ''),
              b = prompt('На сколько оцените фильм?', '');
    
        if (a != null && b != null && a != '' && b != '' && a.length < 50) {
            personalMovieDB.movies[a] = b;
            console.log('done');
        } else {
            console.log('error');
            i--;
        }
    }
}

// rememberMyFilms();

function detectPersonalLevel() {
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов!');
    } else if (personalMovieDB.count >= 10 && personalMovieDB.count < 30) {
        console.log('Вы классичесский зритель!');
    } else if (personalMovieDB.count >= 30) {
        console.log('Вы киноман!');
    } else {
        console.log('Error');
    }
}

// detectPersonalLevel();

function showMyDB(hidden) {
    if (!hidden) {
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

// let genre;
// function writeYourGenres() {
//     for (let i = 0; i < 3; i++) {
//         let genre = prompt(`Ваш любимый жанр под номером ${i+1}`, '');
//         personalMovieDB.genres[i] = genre;
//     }
// }
// writeYourGenres(); 

function writeYourGenres() {
    for(let i = 0; i < 3; i++) {
        personalMovieDB.genres[i] = prompt(`Ваш любимый жанр под номером ${i + 1}`, '');
    }
}

writeYourGenres();

// console.log(personalMovieDB);