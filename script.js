// lesson19
// const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

// const personalMoviesDB = {
//     count:  numberOfFilms,   
//     movies: {},
//     actors: {},
//     genres:{},
//     privat: false
// };

// const a= prompt('Один из просмотреных фильмов?',''),
//     b= prompt('Как оцените его?',''),
//     c= prompt('Один из просмотреных фильмов?',''),
//     d= prompt('Как оцените его?','');

// personalMoviesDB.movies[a] = b;
// personalMoviesDB.movies[c] = d;

// console.log(personalMoviesDB);

// lesson20

// 'use strict'
// if (4==4) {
//     console.log('OK!');
// }
//     else {
//         console.log('Error!');
//     }

//     const num = 51;


//     // тернарный оператор

//     // (num === 50) ? console.log('Ok!') : console.log("Error");

//     switch (num) {
//         case 49:
//            console.log('Неверно');
//             break; 
//         case 100:
//             console.log('Неверно');
//             break;
//         case 50:
//                 console.log('в точку');
//                 break;
//         default:
//             console.log("не в этот раз");
//             break;
//     
// lesson20

// const hamburger = 5:
// const fries = 0;

// if(hamburger&&fries){
//     console.log('Ясыт');
// }


// const hamburger = 3;
// cost fries = 1;
// const cola = 0;

// console.log(hamburger ===3 cola && fries)



// if(hamburger ===3 cola === 1 && fries){
//     console.log('Ясыт');
// }
// else{
//     console.log('Голод')
// }

// const hamburger = 1;
// const fries = 0;
// const cola = 0;
// const nuggets = 2;

// if(hamburger || cola || fries && nuggets)
// {
//     console.log('все довольны');
// }    else {
//         console.log("мы уходим");
//     }

// console.log(hamburger || cola  || fries || nuggets)


// const hamburger = 3;
// const fries = 3;
// const cola = 0;
// const nuggets = 2;

// if(hamburger ===3 && cola ===2 || fries ===3  && nuggets)
// {
// //     console.log('все довольны');
// // }    else {
//         console.log("мы уходим");
//     }

// console.log(hamburger ===3 && cola ===2 || fries ===3  && nuggets)




// console.log( NaN || 2 || undefined );

// console.log( NaN && 2 && undefined );

// console.log( 1 && 2 && 3 );


// const hamburger = 3;
// const fries = 3;
// const cola = 1;
// const nuggets = 2;
 
// if (hamburger === 3 && cola || fries === 3 && nuggets) {
//    console.log(hamburger === 3 && cola)
// }
// console.log( !1 && 2 || !3 );


// Lesson 22
'use strict'

// let num = 50;

// // while   (num<=55){
// //     console.log(num);
// //     num++;
// // }

// // do 
// // {console.log(num);
// //     num++;
// // }
// // while (num <55);

// for(let i = 1; i < 10; i++){
//     if(i===6){
//         // break
//         continue
//     }
//     console.log(i);
// }

// let i = 3;

// while (i) {
//   alert( i-- );
// }

// for (let i = 0; i < 3; i++){
//     console.log(i);{
//     for (let i = 0; i < 3; i++)
//         console.log(i);
//     }

// }

// let result = '';
// const length =  7;

// for (let i = 1; i <= length; i++){
//     for (let j = 0; j < i; j++){
//         result += '*'

//     }

//     result += '\n';

// }

// console.log(result)


// for (let i = 0; i < 3; i++){
//     console.log('First level: ${i)');
//         for (let j = 0; j < 3; j++)
//             console.log('Socond level: ${j}');
//             for (let k = 0; k < 3; k++)
//                 console.log(' Third level; ${k}');
//             }
//         }
 
//  }

// lesson 22
// "use strict";

// let num = 50;

// // while(num <= 55){
// //     console.log(num);
// //     num++;
// // }

// // do {
// //     console.log(num);
// //     num++;
// // }
// // while(num <55);

// for (let i = 1; i < 10; i++){
//     if (i === 6) {
//         // break;
//         continue;
//     }
//     console.log(i);

// }

// for (let i = 0; i < 3; i++){
//     console.log(i);
//         for (let j = 0; j < 3; j++){
//         console.log(j);{

//         }
//     }
// }
    
// let result = "";
// const length = 7;

// for (let i = 1; i < length; i++){

//     for (let j = 0; j < i; j++){
//         result += "*";
//     }
//     result +='\n';
// }

// console.log(result);


//  first: for (let i = 0; i < 3; i++){
//     console.log('first level: i');
//         for (let j = 0; j < 5; j++){
//         console.log('Second level: ${j}');
//             for (let k = 0; k < 3; k++){
//                 if (k === 2) 
//                 // continue
//                 break first;
                
//                 console.log('Third level: ${k}');
//             }        
//     }
// }
// задача №1
// for ( let i = 5; i < 11; i++){
//     console.log(i)
// }

// //задача №2
// for (let i = 20; i > 10; i--){
//     if (i === 13) break;
//     console.log(i);
// }

// // задача №3
// for (let i = 0; i <= 10; i++){
//     if (i % 2 === 0){
//         console.log(i);

//     }
// }

// задача №4

// for (let i = 2; i <= 16; i++) {
//     if (i % 2 === 0) {
//         continue;
//     } else {
//         console.log(i);
//     }
// }

// let k = 2;
// while (k < 16){
//     k++;
//         if (k % 2 === 1)
    
//         console.log(k);
    

// }
    // задача №5
// const arrayOfNumbers = [];

// for (let i = 5; i < 11; i++){
//     arrayOfNumbers[i - 5] = i;
// }
// console.log(arrayOfNumbers)
        

// // задача 2.1
// const arr = [3, 5, 8, 16, 20,23,50];
// const result = [];

// const arr = [3, 5, 8, 16, 20, 23, 50];
// const result = [];

// for (let i = 0; i < arr.length; i++) {
//     result[i] = arr[i];
// }

// console.log(result);
// return result;
// lesson24

const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMoviesDB = {
    count:  numberOfFilms,   
    movies: {},
    actors: {},
    genres:{},
    privat: false
};

for (let i = 0; i < 2; i++){
    const a= prompt('Один из просмотреных фильмов?',''),
          b= prompt('Как оцените его?','');

          if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
            personalMoviesDB.movies[a] = b;
            console.log ('done');
          } else {
            console.log('errror');
            i--;
          }

        
}
if (personalMoviesDB.count < 10) {
    console.log('Мало');
    } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
        console.log('Normalno');
    } else if (personalMoviesDB.count >= 30){
        console.log('ZBS');
    }else { 
        console.log("Errror");
    }
console.log(personalMoviesDB);