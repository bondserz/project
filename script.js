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

let num = 50;

// while   (num<=55){
//     console.log(num);
//     num++;
// }

// do 
// {console.log(num);
//     num++;
// }
// while (num <55);

for(let i = 1; i < 10; i++){
    if(i===6){
        // break
        continue
    }
    console.log(i);
    num++;
}