/* Задание на урок:

1) Первую часть задания повторить по уроку

2) Создать функцию showMyDB, которая будет проверять свойство privat. Если стоит в позиции
false - выводит в консоль главный объект программы

3) Создать функцию writeYourGenres в которой пользователь будет 3 раза отвечать на вопрос 
"Ваш любимый жанр под номером ${номер по порядку}". Каждый ответ записывается в массив данных
genres

P.S. Функции вызывать не обязательно*/

'use strict';

// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
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

// for (let i = 0; i < 2; i++) {
//         const q1 = prompt('Один из последних просмотренных фильмов?', ''),
//               q2 = prompt('На сколько оцените его?', '');
    
//               personalMovieDB.movies[q1] = q2;                             // задание 1 цикл for
//     }
    
//     console.log(personalMovieDB);




 

        function rememberMyFilms() {
            for (let i = 0; i < 2; i++) {
                const q1 = prompt('Один из последних просмотренных фильмов?', ''),
                      q2 = prompt('На сколько оцените его?', '');
            
                                                                                                             // задание 2
                      if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                        personalMovieDB.movies[q1] = q2;                                                    // условия для выполнения 
                        console.log('done!');
                      }else {
                        console.log('error!');
                        i--;
                      }
            
            }

        }

        // rememberMyFilms();

   
        

function detectPersonalLevel(){
    if (personalMovieDB.count < 10) {
        console.log('Просмотрено довольно мало фильмов');
    } else if (10 <= personalMovieDB.count <= 30) {
        console.log('Вы классический зритель');
    }else if (personalMovieDB.count > 30) {
        console.log('Вы киноман');
    }else {
        console.log('Произошла ошибка')
    }                                                               // задание 3
    
    console.log(personalMovieDB);

}

// detectPersonalLevel();


function showMyDB(hidden){
    if (!hidden) {
        console.log(personalMovieDB);
    }

}

showMyDB(personalMovieDB.privat)


function writeYourGenres(){
    for (let i = 1; i <= 3; i++){
        const genre = prompt(`Ваш любимый жанр под номером ${i}`);
        personalMovieDB.genres[i - 1] = genre;    // ссылаемся на нашу талицу выше и присваиваем массиву наш конст жанр
        //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);    ЛИБО СОКРАТИТЬ КОД(2 строки выше)
    }
}
writeYourGenres();