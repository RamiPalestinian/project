/* Задание на урок:

1) У нас уже есть рабочее приложение, состоящее из отдельных функций. Представьте, что
перед вами стоит задача переписать его так, чтобы все функции стали методами объекта personalMovieDB
Такое случается в реальных продуктах при смене технологий или подхода к архитектуре программы

2) Создать метод toggleVisibleMyDB, который при вызове будет проверять свойство privat. Если оно false - он
переключает его в true, если true - переключает в false. Протестировать вместе с showMyDB.

3) В методе writeYourGenres запретить пользователю нажать кнопку "отмена" или оставлять пустую строку. 
Если он это сделал - возвращать его к этому же вопросу. После того, как все жанры введены - 
при помощи метода forEach вывести в консоль сообщения в таком виде:
"Любимый жанр #(номер по порядку, начиная с 1) - это (название из массива)"*/

'use strict';


// Код возьмите из предыдущего домашнего задания

let numberOfFilms;

// function start(){
//     numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

//     while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){         
//         numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');
//     }
// }
// start();   // ПЕРЕНЕСЛИ ФУНКЦИЮ В 'personalMovieDB

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,

    start : function(){
        personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', ''); // исправили numberOfFilms на personalMovieDB.count
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы уже посмотрели?', '');
        }
    },

    rememberMyFilms : function() {
        for (let i = 0; i < 2; i++) {
            const q1 = prompt('Один из последних просмотренных фильмов?', '').trim(),
                  q2 = prompt('На сколько оцените его?', '').trim();
        
                                                                                                         
                  if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
                    personalMovieDB.movies[q1] = q2;                                                   
                    console.log('done!');
                  }else {
                    console.log('error!');
                    i--;
                  }
        
        }

    },

    detectPersonalLevel : function(){
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
    
    },

    showMyDB: function(hidden){
        if (!hidden) {
            console.log(personalMovieDB);
        }
    
    },

    toggleVisibleMyDB : function () {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false
        }else {
            personalMovieDB.privat = true;
        }

    },


    writeYourGenres : function(){
        for (let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);

            if (genre == '' || genre == null) {
                console.log('Вы ввели неккоректные данные');
                i--;
            } else {
                personalMovieDB.genres[i - 1] = genre;    // ссылаемся на нашу талицу выше и присваиваем массиву наш let жанр
            //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);    ЛИБО СОКРАТИТЬ КОД(2 строки выше)
            }
            
        }

        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр ${i + 1} - это ${item}`);

        });
    }
};





        // function rememberMyFilms() {
        //     for (let i = 0; i < 2; i++) {
        //         const q1 = prompt('Один из последних просмотренных фильмов?', '').trim(),
        //               q2 = prompt('На сколько оцените его?', '').trim();
            
        //                                                                                                      // задание 2(29)
        //               if (q1 != null && q2 != null && q1 != '' && q2 != '' && q1.length < 50) {
        //                 personalMovieDB.movies[q1] = q2;                                                    // условия для выполнения 
        //                 console.log('done!');
        //               }else {
        //                 console.log('error!');
        //                 i--;
        //               }
            
        //     }

        // }

        // rememberMyFilms();   // ПЕРЕНЕСЛИ ФУНКЦИЮ В 'personalMovieDB

   
        

// function detectPersonalLevel(){
//     if (personalMovieDB.count < 10) {
//         console.log('Просмотрено довольно мало фильмов');
//     } else if (10 <= personalMovieDB.count <= 30) {
//         console.log('Вы классический зритель');
//     }else if (personalMovieDB.count > 30) {
//         console.log('Вы киноман');
//     }else {
//         console.log('Произошла ошибка')
//     }                                                               // задание 3(29)
    
//     console.log(personalMovieDB);

// }  // ПЕРЕНЕСЛИ ФУНКЦИЮ В 'personalMovieDB

// detectPersonalLevel();


// function showMyDB(hidden){
//     if (!hidden) {
//         console.log(personalMovieDB);
//     }

// }

// showMyDB(personalMovieDB.privat) // ПЕРЕНЕСЛИ ФУНКЦИЮ В 'personalMovieDB




// function writeYourGenres(){
//     for (let i = 1; i <= 3; i++){
//         const genre = prompt(`Ваш любимый жанр под номером ${i}`);
//         personalMovieDB.genres[i - 1] = genre;    // ссылаемся на нашу талицу выше и присваиваем массиву наш конст жанр
//         //personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);    ЛИБО СОКРАТИТЬ КОД(2 строки выше)
//     }
// }
// writeYourGenres();        // ПЕРЕНЕСЛИ ФУНКЦИЮ В 'personalMovieDB
