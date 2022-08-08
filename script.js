//     lesson19
//     const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

//     const personalMoviesDB = {
//         count:  numberOfFilms,   
//         movies: {},
//         actors: {},
//         genres:{},
//         privat: false
//     };

//     const a= prompt('Один из просмотреных фильмов?',''),
//         b= prompt('Как оцените его?',''),
//         c= prompt('Один из просмотреных фильмов?',''),
//         d= prompt('Как оцените его?','');

//     personalMoviesDB.movies[a] = b;
//     personalMoviesDB.movies[c] = d;

//     console.log(personalMoviesDB);

//     lesson20

//     'use strict'
//     if (4==4) {
//         console.log('OK!');
//     }
//         else {
//             console.log('Error!');
//         }

//         const num = 51;


//         тернарный оператор

//         (num === 50) ? console.log('Ok!') : console.log("Error");

//         switch (num) {
//             case 49:
//                 console.log('Неверно');
//                 break; 
//             case 100:
//                 console.log('Неверно');
//                 break;
//             case 50:
//                     console.log('в точку');
//                     break;
//             default:
//                 console.log("не в этот раз");
//                 break;
        
//     lesson20

//     const hamburger = 5:
//     const fries = 0;

//     if(hamburger&&fries){
//         console.log('Ясыт');
//     }


//     const hamburger = 3;
//     cost fries = 1;
//     const cola = 0;

//     console.log(hamburger ===3 cola && fries)



//     if(hamburger ===3 cola === 1 && fries){
//         console.log('Ясыт');
//     }
//     else{
//         console.log('Голод')
//     }

//     const hamburger = 1;
//     const fries = 0;
//     const cola = 0;
//     const nuggets = 2;

//     if(hamburger || cola || fries && nuggets)
//     {
//         console.log('все довольны');
//     }    else {
//             console.log("мы уходим");
//         }

//     console.log(hamburger || cola  || fries || nuggets)


//     const hamburger = 3;
//     const fries = 3;
//     const cola = 0;
//     const nuggets = 2;

//     if(hamburger ===3 && cola ===2 || fries ===3  && nuggets)
//     {
//         console.log('все довольны');
//     }    else {
//             console.log("мы уходим");
//         }

//     console.log(hamburger ===3 && cola ===2 || fries ===3  && nuggets)




//     console.log( NaN || 2 || undefined );

//     console.log( NaN && 2 && undefined );

//     console.log( 1 && 2 && 3 );


//     const hamburger = 3;
//     const fries = 3;
//     const cola = 1;
//     const nuggets = 2;

//     if (hamburger === 3 && cola || fries === 3 && nuggets) {
//         console.log(hamburger === 3 && cola)
//     }
//     console.log( !1 && 2 || !3 );


//     Lesson 22
//     'use strict'

//     let num = 50;

//     while   (num<=55){
//         console.log(num);
//         num++;
//     }

//     do 
//     {console.log(num);
//         num++;
//     }
//     while (num <55);

//     for(let i = 1; i < 10; i++){
//         if(i===6){
//             break
//             continue
//         }
//         console.log(i);
//     }

//     let i = 3;

//     while (i) {
//     alert( i-- );
//     }

//     for (let i = 0; i < 3; i++){
//         console.log(i);{
//         for (let i = 0; i < 3; i++)
//             console.log(i);
//         }

//     }

//     let result = '';
//     const length =  7;

//     for (let i = 1; i <= length; i++){
//         for (let j = 0; j < i; j++){
//             result += '*'

//         }

//         result += '\n';

//     }

//     console.log(result)


//     for (let i = 0; i < 3; i++){
//         console.log('First level: ${i)');
//             for (let j = 0; j < 3; j++)
//                 console.log('Socond level: ${j}');
//                 for (let k = 0; k < 3; k++)
//                     console.log(' Third level; ${k}');
//                 }
//             }

//     }

//     lesson 22
//     "use strict";

//     let num = 50;

//     while(num <= 55){
//         console.log(num);
//         num++;
//     }

//     do {
//         console.log(num);
//         num++;
//     }
//     while(num <55);

//     for (let i = 1; i < 10; i++){
//         if (i === 6) {
//             break;
//             continue;
//         }
//         console.log(i);

//     }

//     for (let i = 0; i < 3; i++){
//         console.log(i);
//             for (let j = 0; j < 3; j++){
//             console.log(j);{

//             }
//         }
//     }

//     let result = "";
//     const length = 7;

//     for (let i = 1; i < length; i++){

//         for (let j = 0; j < i; j++){
//             result += "*";
//         }
//         result +='\n';
//     }

//     console.log(result);


//     first: for (let i = 0; i < 3; i++){
//         console.log('first level: i');
//             for (let j = 0; j < 5; j++){
//             console.log('Second level: ${j}');
//                 for (let k = 0; k < 3; k++){
//                     if (k === 2) 
//                     continue
//                     break first;
            
//                     console.log('Third level: ${k}');
//                 }        
//         }
//     }
//     задача №1
//     for ( let i = 5; i < 11; i++){
//         console.log(i)
//     }

//     задача №2
//     for (let i = 20; i > 10; i--){
//         if (i === 13) break;
//         console.log(i);
//     }

//     задача №3
//     for (let i = 0; i <= 10; i++){
//         if (i % 2 === 0){
//             console.log(i);

//         }
//     }

//     задача №4

//     for (let i = 2; i <= 16; i++) {
//         if (i % 2 === 0) {
//             continue;
//         } else {
//             console.log(i);
//         }
//     }

//     let k = 2;
//     while (k < 16){
//         k++;
//             if (k % 2 === 1)

//             console.log(k);


//     }
//         задача №5
//     const arrayOfNumbers = [];

//     for (let i = 5; i < 11; i++){
//         arrayOfNumbers[i - 5] = i;
//     }
//     console.log(arrayOfNumbers)
    

//     задача 2.1
//     const arr = [3, 5, 8, 16, 20,23,50];
//     const result = [];

//     const arr = [3, 5, 8, 16, 20, 23, 50];
//     const result = [];

//     for (let i = 0; i < arr.length; i++) {
//         result[i] = arr[i];
//     }

//     console.log(result);
//     return result;
//     lesson24

//     const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

//     const personalMoviesDB = {
//         count:  numberOfFilms,   
//         movies: {},
//         actors: {},
//         genres:{},
//         privat: false
//     };

//     for (let i = 0; i < 2; i++){
//         const a= prompt('Один из просмотреных фильмов?',''),
//             b= prompt('Как оцените его?','');

//             if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                 personalMoviesDB.movies[a] = b;
//                 console.log ('done');
//             } else {
//                 console.log('errror');
//                 i--;
//             }

    
//     }
//     if (personalMoviesDB.count < 10) {
//         console.log('Мало');
//         } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
//             console.log('Normalno');
//         } else if (personalMoviesDB.count >= 30){
//             console.log('ZBS');
//         }else { 
//             console.log("Errror");
//         }
//     console.log(personalMoviesDB);

//     lesson 25

//     "use strict";

//     let num = 20;

//     function showFirstMessage(text){
//         console.log(text);
//         num = 10;
//         console.log(num);

//     }

//     showFirstMessage("HElo word!");
//     console.log(num);

//     function calc(a, b){
//         return (a + b);
//     }

//     console.log(calc(4,3));
//     console.log(calc(1,3));
//     console.log(calc(5,7));

//     function ret (){
//         let num = 50;
//         return num;
//     }

//     const anotherNum = ret();
//     console.log(anotherNum);



//     const logger = function(){
//         console.log("Hellow");
//     };

//     logger ();

//     const calc = (a, b) => a + b;

//     lesson 24

//     const usdCurr = 28;
//     const eurCurr = 32;

//     function convert (amount, curr){
//         console.log(curr * amount);
//     }
//     convert(500, usdCurr);
//     convert(500, eurCurr);

//     lesson 27

//     const usdCurr = 28;
//     const discount = 0.9;

//     function convert (amount, curr){
//         return curr * amount
//     }
//     function promotion( result){
//         console.log(result * discount)
//     }

//     convert(500, usdCurr);


//         lesson27

//     function showFirstMessage() {
//         console.log ("HI there");
//     }
//     showFirstMessage();

//     function calc (a, b) {
//         return (a +b);
//     }
//     console.log(calc(4,5));

//     functionret(){
//         let num = 50;

//         return num;
//     }



// const calc = (a, b) => {return a + b};
// console.log(calc(4, 5));

// Lesson 26.1
// const usdCurr = 28;
// const eurCurr = 32;

// function convert(amount, curr){
//     console.log(curr*amount);
// }
// convert(500, usdCurr);
// convert(500, eurCurr);

// lesson27.1

// const usdCurr = 28;
// const discount = 0.9;

// function convert(amount, curr){
//     return curr*amount;
// }

// function promotion(result){
//     console.log(result* discount);
// }

// const res = convert(500, usdCurr);
// promotion(res);


// function test(){
//     for (let i = 0; i < 5; i++){
//         console.log(i);
//         if (i === 3) return
//     }
//     console.log("DonE");
// }
// test();


// function doNothing () {};
// console.log(doNothing);


// function sayHello(name){
//     console.log("Привет,"+ name + "!");
// }
// sayHello("Eblan");

// задача 2

// function returnNumber(number) {
//     let arr = []
//     for (let i = number - 1; i <= number + 1; i++){
//         arr[i - number + 1] = i;
//     }
//     console.log(arr);
// }
// returnNumber(6);

// задача№3

// function getMath(a, b) {
//             if (typeof b !== 'string' || b <= 0) 
//         console.log(a);

//         for (let i = 1; i <= b; i++){
//             if (i === a)
//             console.log( a );
//             else { console.log("---" + a * i );}
//             } 
        

//     } 


    
    

// getMath(5, 3);



// lesson27task1
// function sayHello(name) {
//     return name;    
// }
// sayHello('ANton');



// lesson27task2

// function returnNeighboringNumbers(number) {
//     return [number - 1; number; number + 1];
// }
// returnNeighboringNumbers(5);

// lesson27task3
// function getMathResult(number, times) {
//     if (typeof(times) !== `string` || times <= 0);
//     return number {
//         for ( let i = 1, i <= times; i++);
//         if (times === 1); 
//         console.log(i);
//         } else {
//         console.log((number + 1) * times);
//     }
// }
// getMathResult (5, 0);


// lesson28
// "use strict";

// const str = `teSt`;

// console.log(str.toUpperCase());
// console.log(str.toLowerCase());

// let fruit = `Some fruit`;

// console.log(fruit.indexOf('t'));

// const logg = 'Hello world';

// console.log(logg.slice(6, 11));

// console.log(logg.substring(6, 11));

// console.log(logg.substr(6, 5));

// const num = 12.2;

// console.log(Math.round(num));

// const test = `12.2px`;

// console.log(parseInt(test));


// console.log(parseFloat(test));

// lesson29
// "use struct";

// let numberOfFilms;

// function start(){
//     numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
    
//     }
// }

// start();

// const personalMoviesDB = {
//     count:  numberOfFilms,   
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: true
// };

// function rememberMyFilms(){
//     for (let i = 0; i < 2; i++){
//         const a= prompt('Один из просмотреных фильмов?',''),
//             b= prompt('Как оцените его?','');

//             if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                 personalMoviesDB.movies[a] = b;
//                 console.log ('done');
//             } else {
//                 console.log('errror');
//                 i--;
//             }

//     }

// }


// rememberMyFilms();

// function  detectMyPersonalLevel(){
//     if (personalMoviesDB.count < 10) {
//         console.log('Мало');
//         } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
//             console.log('Normalno');
//         } else if (personalMoviesDB.count >= 30){
//             console.log('Вы киноман');
//         }else { 
//             console.log("Errror");
//         }

//     }



// detectMyPersonalLevel();

// function showMyDB(hidden){
//     if (!hidden){
//         console.log(personalMoviesDB);
//     }
// }

// showMyDB(personalMoviesDB.privat);

// console.log(personalMoviesDB);

// lesson28
// const str = "test";

// console.log(str.toUpperCase());

// const fruit = "Some fruit";

// console.log(fruit.indexOf("f"));

// const logg = "Hello world";

// console.log(logg.slice(6, 11));

// const num = 12.2;
// console.log(Math.round(num));

// const test = 12.2;
// console.log(parseInt(test));
// console.log(parseFloat(test));


// lesson29
let numberOfFilms;


function start(){
    numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

    while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
    }
}
start();
    const personalMoviesDB = {
        count:  numberOfFilms,   
        movies: {},
        actors: {},
        genres:[],
        privat: false
    };


    function rememberMyFilms(){
        for (let i = 0; i < 2; i++){
            const a= prompt('Один из просмотреных фильмов?',''),
                b= +prompt('Как оцените его?','');
    
                if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
                    personalMoviesDB.movies[a] = b;
                    console.log ('done');
                } else {
                    console.log('errror');
                    i--;
                }
    
        
        }

    }
    rememberMyFilms();

    function detectPPersonalLevel(){
        if (personalMoviesDB.count < 10) {
            console.log('Мало');
            } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
                console.log('Normalno');
            } else if (personalMoviesDB.count >= 30){
                console.log('ZBS');
            }else { 
                console.log("Errror");
            }
    }
    detectPPersonalLevel();

    function showMyDB(hidden){
        if (!hidden){
            console.log(personalMoviesDB);
        }
        

    }
    showMyDB(personalMoviesDB.privat);

    function writeYourGenres(){
        for (let i = 1; i <= 3; i++){
        
            personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
        }
    }
    writeYourGenres();

    // console.log(personalMoviesDB);