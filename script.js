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
// let numberOfFilms;


// function start(){
//     numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

//     while (numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
//         numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');
//     }
// }
// start();
//     const personalMoviesDB = {
//         count:  numberOfFilms,   
//         movies: {},
//         actors: {},
//         genres:[],
//         privat: false
//     };


//     function rememberMyFilms(){
//         for (let i = 0; i < 2; i++){
//             const a= prompt('Один из просмотреных фильмов?',''),
//                 b= +prompt('Как оцените его?','');
    
//                 if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                     personalMoviesDB.movies[a] = b;
//                     console.log ('done');
//                 } else {
//                     console.log('errror');
//                     i--;
//                 }
    
        
//         }

//     }
//     rememberMyFilms();

//     function detectPPersonalLevel(){
//         if (personalMoviesDB.count < 10) {
//             console.log('Мало');
//             } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
//                 console.log('Normalno');
//             } else if (personalMoviesDB.count >= 30){
//                 console.log('ZBS');
//             }else { 
//                 console.log("Errror");
//             }
//     }
//     detectPPersonalLevel();

//     function showMyDB(hidden){
//         if (!hidden){
//             console.log(personalMoviesDB);
//         }
        

//     }
//     showMyDB(personalMoviesDB.privat);

//     function writeYourGenres(){
//         for (let i = 1; i <= 3; i++){
        
//             personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//         }
//     }
//     writeYourGenres();

// console.log(personalMoviesDB);

    //task1lesson29

// function  calculetedVolumeAndArea(){
//     let a = +prompt('число');
//     if ((a == '' || a == null || isNaN(a)) )
//     console.log("Error");
//     else {
//         let volume = a * a * a;
//         let area = a * a * 6;
//         console.log(volume, area);
//     }
// } 
// calculetedVolumeAndArea();

    // task2lesson29
    // function getCoupeNumber() {
    //     let a = prompt("место номер?");

    //     let result = a / 4;

    //     if (a <= 0 ||  a >= 36){
    //         console.log ("Таких мест не существует");

    //     }else if (isNaN(a)  || a < 0 || Number.isInteger(a)){
    //         console.log("Проверьте правильность ввода");
    //         console.log(typeof(a) !== 'number');
    //         console.log(a < 0);
    //         console.log(Number.isInteger(a));

            
    //     }else{
    //         let result = a / 4;
    //          console.log(`Ваше купе номер ${Math.ceil(result)}`);
    //     }

        

    // }
    // getCoupeNumber();

    // task3lrsson29
//     function getTimeFromMinutes() {
//         let m = +prompt('Введите минуты');
//             let hours = m / 60;
//                 if (isNaN(m) || m < 0 || m%1 > 0 ){
//             console.log("Ошибка, проверьте данные");
//         }else if (m <=59){
//             console.log(`${m}минут`);
//         }else if (hours < 4 || hours > 1){
//             let hours = m / 60;
//             let minutes = m - Math.floor(hours) * 60;
//             console.log(`${Math.floor(hours)} часа и ${minutes}минут`);
//         }else if (hours >= 5){
//             let hours = m / 60;
//             let minutes = m - Math.floor(hours) * 60;
//             console.log(`${Math.floor(hours)} часов и ${minutes}минут`);
//         }else if (hours = 1){
//             let hours = m / 60;
//             let minutes = m - Math.floor(hours) * 60;
//             console.log(`${Math.floor(hours)} час и ${minutes}минут`);
//         console.log(isNaN(m));
//         console.log(m < 0);
//         console.log(Number.isInteger(m));


//     }
// }
//     getTimeFromMinutes();

// tesk4lsson29
    // function findMaxNumber(a, b, c, d) {
    // //   let num = findMaxNumber.length;
    // //   console.log (num);
    //     if (isNaN(a , b, c, d)){
    //         console.log (0);
    //     }else{
    //         console.log (Math.max(a, b, c, d));
    //     }       
    // }
    // findMaxNumber(1,  -9, 'ff', 33);
    // task5lesson29
    // function fib(m) {
    //     let num = [0, 1];
               
    //     for(let i = 2; i <= m; i++){
    //         let m1 = num[i -1];
    //         let m2 = num[i- 2];

    //         num.push(m1);
           

    //     }
        

    // }
    // fib(5);

   
  
    // if (m = 1){
    //     console.log(0);
    //   }else if(isNaN(m) || m > 0 || Number.isInteger(m) ){
    //      console.log( );
    //   }else{
    //     console.log("---");
    //    }
    // lesson30, 31
    // function learnjs(lang, callback){
    //     console.log(`я учу: ${lang}`);
    //     callback();
    // }
    // function done(){
    //     console.log('Я прошел этот урок!');
    // }

    // learnjs('JavaScript', done);

    // lesson32
// const options = {
//     name: 'test',
//     widht: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'red'
//     },
//     // прототип объекта (создание своего метода объекта, которого нет в JS)
//     makeTest: function(){
//         console.log('TEST  ');
//     }
// };
// options.makeTest();
//     // получение значение вложенных в объекты 
// const {border, bg} = options.colors;
// console.log(border);
// console.log(options.name);

// delete options.name;

// console.log(options);


// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//             for (let i in options[key]){
//                 console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             }
//     }else{
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);
//     }
    

// }
// console.log(Object.keys(options).length);

    // lesson33Массивы и псевдомассивы
// const arr = [1, 12, 3, 44, 6, 18, 10];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }
// arr[99] = 0;
// console.log(arr.length);
// console.log(arr);
// удалить последний элемент
// arr.pop();
    // перебор массива
// arr.forEach(function (item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// добавить в конец  массива
// arr.push(10);



// console.log(arr);
        // перебор элеметов массива
// for (let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }
        // перебор значений массива 
// for (let value of arr) {
//     console.log(value);
// }

// const str = prompt("", "");
//     // разбивает объект   на массив строк путём разделения строки указанной подстрокой 
// const products = str.split(",");
//     // сортировка по алфавиту
// products.sort();
//     // Метод join() объединяет все элементы массива (или массивоподобного объекта) в строку.
// console.log(products.join(','));

    // lesson35 передача по ссылке или по значению, Spread
// let a = 5,
//     b = a;

// b = b + 5;

//     console.log(b);
//     console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj;// передает ссылку

// copy.a = 10;

// console.log(copy);
// console.log(obj);


// function copy(mainObj){
//     let objCopy = {};

//     let key;
//     for (key in mainObj){
//         objCopy[key] = mainObj[key];
//         }

//         return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;

// // console.log(newNumbers);
// // console.log(numbers);

//     //объединение объектов
// const add = {
//     d: 17,
//     e:  20
// };

// console.log(Object.assign({numbers}, add));

// const clone = Object.assign({}, add);
// clone.d = 20;

// // console.log(add);
// // console.log(clone);

// const oldArr = ['a', 'b', 'c' ];
// const newArr = oldArr.slice();

// newArr[1] = 'asdasdasd';
// console.log(newArr);
// console.log(oldArr);

// const video = ['youtube', 'vimeo', 'pornhub',],
//     blogs = ['wordpress', 'livejournal','blogger'],
//     internet = [...video, ...blogs, 'fb', 'HH'];

//     console.log(internet);

//     function log(a, b, c){
//         console.log(a);
//         console.log(b);
//         console.log(c);
//     }
//     const num = [2, 5, 7];

//     log(...num);

//     const q = {
//         one: 1,
//         two: 2
//     };
//     const newObj = {...q};
//     console.log(newObj);

    //tasks1-3lesson35
    // const personalPlanPeter = {
    //     name: "Peter",
    //     age: "29",
    //     skills: {
    //         languages: ['ru', 'eng'],
    //         programmingLangs: {
    //             js: '20%',
    //             php: '10%'
    //         },
    //         exp: '1 month'
    //     }
    // };
    
    // function showExperience(plan) {
        
    //     console.log(plan.skills.exp);
    // }
    // showExperience(personalPlanPeter);


    // function showProgrammingLangs(plan) {
    //     let x = plan.skills.programmingLangs;
    //         for(let value of Object.entries(x)){
    //        console.log(`язык${value[0]}, ${value[1]}`);
    //     }
    //         }
    // showProgrammingLangs(personalPlanPeter);


    // personalPlanPeter.showAgeAndLangs = function(){
    //     console.log(`Мне ${personalPlanPeter.age} и я владею ${personalPlanPeter.skills.languages.join("!").toUpperCase()}`);
        
    // };
    // personalPlanPeter.showAgeAndLangs();


//     const family = ['Peter', 'Ann', 'Alex', 'Linda'];

// function showFamily(arr) {
//     console.log(`Моя семья состоит из ${arr.join(' ')}`);
   
// }
// showFamily(family);



// const favoriteCities = ['liSBon', 'ROME', 'miLan', 'Dublin'];

// function standardizeStrings(arr) {

//     console.log(arr.join('\n').toLowerCase());
    
// }
// standardizeStrings(favoriteCities);


  //tasks1-4lesson35

// const someString = 'This is some strange string';

// function reverse(str) {

//     console.log(Array.from(str).reverse().join(''));


//     // let arr = [];
//     // for (let i = 0; i < str.length; i++){
//     //     arr.push(str[str.length-1-i]);
//     //     }
//     // console.log(arr.join(''));
// }

// reverse(someString);



  //tasks1-5lesson35
// const baseCurrencies = ['USD', '  EUR   '];
// const additionalCurrencies = ['UAH', 'RUB', 'CNY'];

// function availableCurr(arr, missingCurr) {
//      arr.forEach(function(value){
//         missingCurr.forEach(function(value2){
//             if (value == value2){
//                 arr.splice(arr.indexOf(value), 1);
//             } 
//         });

//     });
//     if (arr == ''){  //(arr.length == 0)
//         console.log('No money');
      
//     }else{console.log(`Доступные валюты:\n${arr.join('\n').trim()}`);}

// }
// availableCurr(baseCurrencies, additionalCurrencies);

          
    // lesson_36

// let str = "some",
//     strObj = new String(str);

// // console.log(typeof(str));
// // console.log(typeof(strObj));

// // console.dir([1,2,3]);

// const   soldier = {
//     health: 400,
//     armor: 100,
//     sayHEllo: function(){
//         console.log("Hello");
//     }
// };


// const join = Object.create(soldier);
// // const jonh = {
// //     health:100
// // };

// // jonh.__proto__ = soldier; // устаревший вариант

// Object.setPrototypeOf(jonh, soldier); //
// console.log(jonh.armor);
// jonh.sayHEllo();

    // lesson37

// "use struct";


// const personalMoviesDB = {
//     count:  0,   
//     movies: {},
//     actors: {},
//     genres:[],
//     privat: false,
//     start: function(){
//         personalMoviesDB.count= +prompt('Сколько фильмов вы уже посмотрели?','');
//         while (personalMoviesDB.count == '' || personalMoviesDB.count == null || isNaN(personalMoviesDB.count)){
//             personalMoviesDB.count= +prompt('Сколько фильмов вы уже посмотрели?','');
        
//         }
//     },
    
//     rememberMyFilms: function(){
//         for (let i = 0; i < 2; i++){
//             const a= prompt('Один из просмотреных фильмов?',''),
//                 b= prompt('Как оцените его?','');

//                 if (a != null && b != null && a != '' && b != ' && ' && a.length < 50) {
//                     personalMoviesDB.movies[a] = b;
//                     console.log ('done');
//                 } else {
//                     console.log('errror');
//                     i--;
//                 }

//          }

//     },

//     detectMyPersonalLevel: function(){
//         if (personalMoviesDB.count < 10) {
//             console.log('Мало');
//             } else if (personalMoviesDB.count < 30 && personalMoviesDB.count >= 10){
//                 console.log('Normalno');
//             } else if (personalMoviesDB.count >= 30){
//                 console.log('Вы киноман');
//             }else { 
//                 console.log("Errror");
//             }
//         },
    
//     showMyDB: function(hidden){
//         if (!hidden){
//             console.log(personalMoviesDB);
//         }
//     },

//     toggleVisisbleMyDB: function(){
//         personalMoviesDB.privat = !personalMoviesDB.privat;
//     }, 

//     writeYourGenres: function(){
                   
//         for (let i = 1; i <= 3; i++){
//             while (personalMoviesDB.genres[i - 1] == '' || personalMoviesDB.genres[i - 1] == null || isNaN(personalMoviesDB.genres[i - 1] <= 0)){
//                 personalMoviesDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
//             }  
//         }

//         personalMoviesDB.genres.forEach(function(value, i) {
//             console.log(`Любимый жанр # ${i+1} -  это ${value}` );
//         });
//     }

// };

    // lesson37TASK13

    // const shoppingMallData = {
    //     shops: [
    //         {
    //             width: 10,
    //             length: 5
    //         },
    //         {
    //             width: 15,
    //             length: 7
    //         },
    //         {
    //             width: 20,
    //             length: 5
    //         },
    //         {
    //             width: 8,
    //             length: 10
    //         }
    //     ],
    //     height: 5,
    //     moneyPer1m3: 30,
    //     budget: 50000,
       
    // };

    // function isBudgetEnough() {
    //    let square = 0,
    //         volume = 0;
    //     shoppingMallData.shops.forEach(function(value){
    //         square += value.width * value.length;
    //     });
    //     console.log(square);
    //     volume = shoppingMallData.height * square;
    
    //     console.log(volume);
    //     if (shoppingMallData.budget >= shoppingMallData.moneyPer1m3 *volume) {
    //         console.log(`not enought budget`)
    //     }else{
    //         console.log(`Very good, enought budget`)
    //     }
    //     }
    // isBudgetEnough();


            // lesson37TASK14

// const students = ['Peter', 'Andrew', 'Ann', 'Mark', 'Josh', 'Sandra', 'Cris', 'Bernard', 'Takesi', 'Sam', 'ZAnussi'];

// function sortStudentsByGroups(arr) {
//         // console.log(students.sort().concat());

//         let team1 = [students.sort().slice(0,3)];
//         let team2 = [students.sort().slice(3, 6)];
//         let team3 = [students.sort().slice(6, 9)];
//         let losers = [students.sort().slice(9)];
//         // console.log(team1);
//         // console.log(team2);
//         // console.log(losers);
//         // let other = students.filter(function(value)
//         // console.log(value !== [team1]));
//         // delete students(1,2);
//         // console.log(students[1,2]);

//         console.log(`${team1}\n, ${team2}\n, ${team3}\n, ${losers}\n`);
//         console.log(team1,team2,team3, losers);
// }
// sortStudentsByGroups(students);
    

    //lesson39 Динамическая типизация, изменение типов данных 
    //to string

// //1)
// console.log(typeof(String(null)));

// //2)
// console.log(typeof(5 + ''));

// const num = 5;

// console.log("www\" = num);

// const fontSize = 26 + "px';

//     // to number
//  //1) 
//     console.log((typeof(+"5'));

// //3)
// console.log(typeof(parseInt('15px', 10)));

// let answ = +prompt('Hello', "");

//     //to boolean 
//     // 1) 
// // 0, '', null, undefined, Nan; // все это false 

// let switcher = null;

// if (switcher){
//     console.log('Working');
// }

// switcher = -1; 

// if (switcher){
//     console.log('Working...');
// }


//     //2) способ
// console.log(typeof(Boolean('4')));

//    //3) способ 
//    console.log(typeof(!!'444444'));

    //lesson40 Замыкание и лексическое окружение 
//  

// let counter = 0;
// function createCounter() {
    
    
//     const myFunction = function(){
//         counter = counter + 1;
//         return counter;
//     };
//     return myFunction;
// }

// const increment = createCounter();
// const c1 = increment();
// const c2 = increment();
// const c3 = increment();

// console.log(c1, c2,c3);


//     //lesson41
// // console.log(typeof([ ] + false - null + true));

// let y = 1;
// let x = y = 2; 
// console.log(x);//последовательное присваивание, чтение конструкции слево на право

// console.log([] + 1 + 2);//[]- пустой массив это строка, 
//                         //т.е. все что добавим в него будет строкой "12"

// console.log( typeof("1"[0] ));// обращение к индексу массива - '1'

// console.log(2 && 1 && null && 0 && undefined);//оператор && запинается на false

// console.log(!!( 1 && 2 ) == (1 && 2));// !! ПРЕВРАЩАЕТ В БУЛИАНН 

// console.log( null || 2 && 3 || 4 );//оператор || запинается на true

// a = [1, 2, 3]; 
// b = [1, 2, 3]; 
// console.log(a == b);//разные хранилища информацииб просто с одинаковыми данными

// console.log( typeof(+"Infinity"));//изменяем тип данных со строк на число 

// console.log("Ёжик" > "яблоко");//строки можно сравнивать, будет посимвольное стравнение "Ё"> "Я" = false

// console.log(0 || "" || 2 || undefined || true || falsе);// '||' запинается на true


    //lesson_42_debugging

    // const restorantData = {
    //     menu: [
    //         {
    //             name: 'Salad Caesar',
    //             price: '14$'
    //         },
    //         {
    //             name: 'Pizza Diavola',
    //             price: '9$'
    //         },
    //         {
    //             name: 'Beefsteak',
    //             price: '17$'
    //         },
    //         {
    //             name: 'Napoleon',
    //             price: '7$'
    //         }
    //     ],
    //     waitors: [
    //         {name: 'Alice', age: 22}, {name: 'John', age: 24}
    //     ],
    //     averageLunchPrice: '20$',
    //     openNow: true
    // };
    
    // function isOpen(prop) {
    //     let answer = '';
    //     prop ?  answer = 'Открыто' : answer = 'Закрыто';
    
    //     return answer;
    // }
    
    // console.log(isOpen(restorantData));
    
    // function isAverageLunchPriceTrue(fDish, sDish, average) {
    //     console.log(+fDish.price.slice(0, -1,));
    //     console.log(+sDish.price.slice(0, -1,));
    //     if ((+fDish.price.slice(0, -1,-2)) + (+sDish.price.slice(0, -1,-2)) < +average.slice(0,-1)) {
    //         return 'Цена ниже средней';
    //     } else {
    //         return 'Цена выше средней';
    //     }
        
        
    // }
    
    // console.log(isAverageLunchPriceTrue(restorantData.menu[0], restorantData.menu[1], restorantData.averageLunchPrice));
    
    // function transferWaitors(data) {
    //     const copy = Object.assign({}, data);
    
    //     copy.waitors = [{name: 'Mike', age: 32}];
    //     return copy;
    // }
    // console.log(transferWaitors());
    // transferWaitors(restorantData);
    // console.log(restorantData.waitors);


    // console.log(0 && 1);

    //     //goittask_modul_1_task_27
    // function getSubscriptionPrice(type) {
    //     let price;
    //     // Change code below this line
      
    //    switch (type) { // Change this line
    //       case 'professional' : // Change this line
    //         price = 20; // Change this line
    //         break;
    //         case 'organization' : // Change this line
    //         price = 50; // Change this line
    //         break;
    //         case 'starter' : // Change this line
    //         price = 0; // Change this line
    //         break;
      
    //     //   case : // Change this line
    //     //     price = ; // Change this line
    //     //     break;
      
    //     //   case : // Change this line
    //     //     price = ; // Change this line
    //     //     break;
    //     }
      
    //     // Change code above this line
    //     return console.log(price);
    //   }
      
    //   getSubscriptionPrice("professional");// повертає число 20
    //    getSubscriptionPrice("organization");// повертає число 50
    //    getSubscriptionPrice("starter");// повертає число 0


  //goittask_modul_1_task_28

    //    function checkPassword(password) {
    //     const ADMIN_PASSWORD = "jqueryismyjam";
    //     let message;
    //     // Change code below this line
      
    //     // if (password === null) {
    //     //   message = "Canceled by user!";
    //     // } else if (password === ADMIN_PASSWORD) {
    //     //   message = "Welcome!";
    //     // } else {
    //     //   message = "Access denied, wrong password!";
    //     // }
      
    //     switch(password){
 
    //         case null:
    //             message = "Canceled by user!";
    //             break;
            
    //         case 'jqueryismyjam':
    //             message = "Welcome!";
    //             break;
    //         default:
    //             message = "Access denied, wrong password!";

    //     }
    //     // Change code above this line
    //     return console.log(message);


    //    }
        
    //     checkPassword("mangohackzor");// повертає "Access denied, wrong password!"
    //     checkPassword(null);// повертає "Canceled by user!"
    //     checkPassword("polyhax");// повертає "Access denied, wrong password!"
    //     checkPassword("jqueryismyjam");// повертає "Welcome!"

          //goittask_modul_1_task_29

// function getShippingCost(country) {
// let message;
// // Change code below this line
// switch(country){
//     case "Australia":
//         message = "Shipping to Australia will cost 170 credits";
//         break;
//     case "Germany":
//         message = "Sorry, there is no delivery to your country";
//         break;
//     case "China":
//         message = "Shipping to China will cost 100 credits";
//         break;
//     case "Chile":
//         message = "Shipping to Chile will cost 250 credits";
//         break;
//     case "Jamaica":
//         message = "Shipping to Jamaica will cost 120 credits";
//         break;
//     case "Sweden":
//         message = "Sorry, there is no delivery to your country";
//         break;

// }
// // Change code above this line
// return console.log(message);
// }

// getShippingCost("Australia");// повертає "Shipping to Australia will cost 170 credits"
//  getShippingCost("Germany");// повертає "Sorry, there is no delivery to your country"
//  getShippingCost("China");// повертає "Shipping to China will cost 100 credits"
//  getShippingCost("Chile");// повертає "Shipping to Chile will cost 250 credits"
//  getShippingCost("Jamaica");// повертає "Shipping to Jamaica will cost 120 credits"
//  getShippingCost("Sweden");// повертає "Sorry, there is no delivery to your country"


           //goittask_modul_1_task_30

// function getNameLength(name) {
// const message = `Name ${name} is ${name.length} characters long`; // Change this line

// return console.log(message);
// }
// getNameLength("Poly");// повертає "Name Poly is 4 characters long"
// getNameLength("Harambe");// повертає "Name Harambe is 6 characters long"
// getNameLength("Billy");// повертає "Name Billy is 5 characters long"
// getNameLength("Joe");// повертає "Name Joe is 3 characters long"

           //goittask_modul_1_task_31

// const courseTopic = "JavaScript essentials";
// // Change code below this line

// const courseTopicLength = courseTopic.length;
// const firstElement = courseTopic[0];
// const lastElement = courseTopic[courseTopic.length-1];

// // Change code above this line

// console.log(courseTopicLength);
// console.log(firstElement);
// console.log(lastElement);
// // courseTopic - це рядок "JavaScript essentials"
// // Оголошена змінна courseTopicLength
// // Значення змінної courseTopicLength - це число 21
// // Оголошена змінна firstElement
// // Значення змінної firstElement - це рядок "J"
// // Оголошена змінна lastElement
// // Значення змінної lastElement - це рядок "s"

           //goittask_modul_1_task_32

// function getSubstring(string, length) {
// const substring = string.slice(0, length); // Change this line

// return console.log(substring);
// }

// getSubstring("Hello world", 3);// повертає "Hel"
// getSubstring("Hello world", 6);// повертає "Hello"
// getSubstring("Hello world", 8);// повертає "Hello wo"
// getSubstring("Hello world", 11);// повертає "Hello world"
// getSubstring("Hello world", 0);// повертає ""

           //goittask_modul_1_task_33

// function formatMessage(message, maxLength) {
// let result;
// // Change code below this line
// result = message.length <= maxLength ? message : `${message.slice(0, maxLength)}...`;
// /// Change code above this line
// return console.log(result);
// }

// formatMessage("Curabitur ligula sapien", 16);// повертає "Curabitur ligula..."
// formatMessage("Curabitur ligula sapien", 23);// повертає "Curabitur ligula sapien"
// formatMessage("Vestibulum facilisis purus nec", 20);// повертає "Vestibulum facilisis..."
// formatMessage("Vestibulum facilisis purus nec", 30);// повертає "Vestibulum facilisis purus nec"
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 15);// повертає "Nunc sed turpis..."
// formatMessage("Nunc sed turpis a felis in nunc fringilla", 41);// повертає "Nunc sed turpis a felis in nunc fringilla"


           //goittask_modul_1_task_34

// function normalizeInput(input) {
//     const normalizedInput = input.toLowerCase(); // Change this line
  
//     return console.log(normalizedInput);
//   }
  
//   normalizeInput("Hello world");// повертає "hello world"
//    normalizeInput("This ISN'T SpaM");// повертає "this isn't spam"
//   normalizeInput("Big SALE");// повертає "big sale"

           //goittask_modul_1_task_35

// function checkForName(fullName, name) {
// const result = fullName.includes(name); // Change this line
//     return console.log(result);
// }

// checkForName("Egor Kolbasov", "Egor");// повертає true
// checkForName("Egor Kolbasov", "egor");// повертає false
// checkForName("Egor Kolbasov", "egOr");// повертає false
// checkForName("Egor Kolbasov", "Zhenya");// повертає false
// checkForName("Vadim Nekrasov", "Vadim");// повертає true
// checkForName("Vadim Nekrasov", "vadim");// повертає false
// checkForName("Vadim Nekrasov", "Dima");// повертає false

           //goittask_modul_1_task_36

// function checkForSpam(message) {
//     let result;
//     // Change code below this line
//     let normalizedInput = message.toLowerCase();
//     result =   normalizedInput.includes('spam') || normalizedInput.includes('sale')  ;
//     // Change code above this line
//     return console.log(result);
//   }
//   checkForSpam("Latest technology news");// повертає false
//   checkForSpam("JavaScript weekly newsletter");//повертає false
//    checkForSpam("Get best sale offers now!");// повертає true
//    checkForSpam("Amazing SalE, only tonight!");// повертає true
//    checkForSpam("Trust me, this is not a spam message");// повертає true
//    checkForSpam("Get rid of sPaM emails. Our book in on sale!");// повертає true
//    checkForSpam("[SPAM] How to earn fast money?");// повертає true

           //goittask_modul_2_task_2
           
// function checkPassword(password) {
//     const ADMIN_PASSWORD = "jqueryismyjam";
//     // Change code below this line
  
    
  
//     if (password == ADMIN_PASSWORD) {
//         return console.log("Welcome!");
       
//     } 
  
//     return console.log("Access denied, wrong password!");
//     // Change code above this line
//   }
//   checkPassword("mangohackzor");// повертає "Access denied, wrong password!"
//    checkPassword("polyhax");// повертає "Access denied, wrong password!"
//    checkPassword("jqueryismyjam");// повертає "Welcome!"

//            //goittask_modul_2_task_3

// function checkStorage(available, ordered) {
//     // Change code below this line
    
  
//     if (ordered === 0) {
//       return "Your order is empty!";
//     }  if (ordered > available) {
//       return "Your order is too large, not enough goods in stock!";
//     } {
//       return "The order is accepted, our manager will contact you";
//     }
  
//     // return message;
//     // Change code above this line
//   }
//   checkStorage(100, 50);// повертає "The order is accepted, our manager will contact you"
//    checkStorage(100, 130);// повертає "Your order is too large, not enough goods in stock!"
//    checkStorage(70, 0);// повертає "Your order is empty!"
//    checkStorage(200, 20);// повертає "The order is accepted, our manager will contact you"
//    checkStorage(200, 250) ;//повертає "Your order is too large, not enough goods in stock!"
  
            //goittask_modul_2_task_4      
            // const fruits = ["apple", "peach", "pear", "banana"];

            // // Change code below this line
            
            // const lastElementIndex = fruits.length - 1;
            // const lastElement= fruits[lastElementIndex];

            // console.log(lastElementIndex);
            // console.log(lastElement);
//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
//             function getExtremeElements(array) {
//                 // Change code below this line
   
//                 return  console.log(array[0],array[array.length-1]);
              
//                 // Change code above this line
//               }
              
//               getExtremeElements([1, 2, 3, 4, 5]);// повертає [1, 5]
//                getExtremeElements(["Earth", "Mars", "Venus"]);// повертає ["Earth", "Venus"]
//                getExtremeElements(["apple", "peach", "pear", "banana"]);// повертає ["apple", "banana"]
// //goittask_modul_2_task_6~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
                // function splitMessage(message, delimeter) {
                //     let words;
                //     // Change code below this line
                //     words = message.split(delimeter);
                //     // Change code above this line
                //     return words;
                //   }
                
                //   splitMessage("Mango hurries to the train", " ");// повертає ["Mango", "hurries", "to", "the", "train"]
                //    splitMessage("Mango", "");// повертає ["M", "a", "n", "g", "o"]
                //    splitMessage("best_for_week", "_") ;//повертає ["best", "for", "week"]

//goittask_modul_2_task_11~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function calculateEngravingPrice(message, pricePerWord) {
//     // Change code below this line
//     return console.log(message.split('i'));
//     (message.split(' ').length * pricePerWord);
//     // ((a.length * pricePerWord)/5);
    
    
//     // Change code above this line
//     }
    
//     calculateEngravingPrice("JavaScript is in my blood", 10);// повертає 50
//     calculateEngravingPrice("JavaScript is in my blood", 20);// повертає 100
//     calculateEngravingPrice("Web-development is creative work", 40) ;//повертає 160
//     calculateEngravingPrice("Web-development is creative work", 20) ;//повертає 80

//goittask_modul_2_task_12~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function makeStringFromArray(array, delimeter) {
//     let string;
// // Change code below this line
//     return array.join(delimeter);


// // Change code above this line
//     return string;
//     }

// makeStringFromArray(["Mango", "hurries", "to", "the", "train"], " ");// повертає "Mango hurries to the train"
// makeStringFromArray(["M", "a", "n", "g", "o"], "") ;// повертає "Mango"
// makeStringFromArray(["top", "picks", "for", "you"], "_");// повертає "top_picks_for_you"

//goittask_modul_2_task_13~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function slugify(title) {
    // Change code below this line
  
//   return console.log(title.replaceAll(" ","-").toLowerCase());
    // Change code above this line
// //   }
//   slugify("Arrays for begginers");// повертає "arrays-for-begginers"
//    slugify("English for developer");// повертає "english-for-developer"
//    slugify("Ten secrets of JavaScript");// повертає "ten-secrets-of-javascript"
//    slugify("How to become a JUNIOR developer in TWO WEEKS");// повертає "how-to-become-a-junior-developer-in-two-weeks"
//goittask_modul_2_task_15~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//    const oldClients = ['Mango', 'Ajax', 'Poly', 'Kiwi'];
// const newClients = ['Peach', 'Houston'];

// const allClients = oldClients.concat(newClients); // Change this line

// console.log(allClients);

//goittask_modul_2_task_16~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

// function makeArray(firstArray, secondArray, maxLength) {
//     // Change code below this line
//     return console.log(firstArray.concat(secondArray).slice(0, maxLength));


//     // Change code above this line
//   }
// makeArray(["Mango", "Poly"], ["Ajax", "Chelsea"], 3) ;//повертає ["Mango", "Poly", "Ajax"]
//  makeArray(["Mango", "Poly", "Houston"], ["Ajax", "Chelsea"], 4) ;//повертає ["Mango", "Poly", "Houston", "Ajax"]
//  makeArray(["Mango"], ["Ajax", "Chelsea", "Poly", "Houston"], 3) ;//повертає ["Mango", "Ajax", "Chelsea"]
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 2) ;//повертає ["Earth", "Jupiter"]
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus"], 4) ;//повертає ["Earth", "Jupiter", "Neptune", "Uranus"]
//  makeArray(["Earth", "Jupiter"], ["Neptune", "Uranus", "Venus"], 0);// повертає []
// //  функції makeArray() з випадковими масивами і випадковим числом повертає правильний масив

//goittask_modul_2_task_16~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// const fruits = ['apple', 'plum', 'pear', 'orange'];

// for (let i = 0; i < fruits.length; i+=1) { // Change this line
//   const fruit = fruits[i]; // Change this line
//   console.log(fruit);
// }
//goittask_modul_2_task_16~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
//     for (let i = 0; i < order.length; i+= 1)  {
//      total +=order[i]; 
//       }
//     // Change code above this line
//     return total;
//   }
//   calculateTotalPrice([12, 85, 37, 4]);// повертає 138
//     calculateTotalPrice([164, 48, 291]);// повертає 503
//     calculateTotalPrice([412, 371, 94, 63, 176]) ;//повертає 1116
//     calculateTotalPrice();// з випадковим масивом повертає правильне значення

//goittask_modul_2_task_19~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longWord = words[0];
//   for (const word of words) {
//     if (longWord.length < word.length) {
//       longWord = word;
//     }
//   }
// //   return longWord
      
//       console.log(longWord);
      
//         // Change code above this line
//       }
      
//       findLongestWord("The quick brown fox jumped over the lazy dog");// повертає jumped
//      findLongestWord("May the force be with you");// повертає force
//     //   Виклик функції findLongestWord() з випадковим рядком повертає правильне значення
  
    //goittask_modul_2_task_19~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
   
    // function createArrayOfNumbers(min, max) {
    //     const numbers = [];
    //     // Change code below this line
    //   for ( let i = min; i <= max; i +=1){
    //      numbers.push(i);
    //   }
    //     // Change code above this line
    //     // return numbers;
    //     return console.log(numbers);
    //   }
      
    //   createArrayOfNumbers(1, 3);// повертає [1, 2, 3]
    //    createArrayOfNumbers(14, 17);// повертає [14, 15, 16, 17]
    //   createArrayOfNumbers(29, 34) ;//повертає [29, 30, 31, 32, 33, 34]

    //goittask_modul_2_task_21~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ФІЛЬТРАЦИЯ МАССИВА ЧИСЕЛ


//       function filterArray(numbers, value) {
//         // Change code below this line
        
//         let arr = [];
//         for (let number of numbers){
//             if(number > value){
//                 arr.push(number);
//             }
//         }
//        return  console.log(arr);   
     
//        // Change code above this line
//      }
//      filterArray([1, 2, 3, 4, 5], 3);// повертає [4, 5]
//      filterArray([1, 2, 3, 4, 5], 4);// повертає [5]
//  filterArray([1, 2, 3, 4, 5], 5) ;//повертає []
//  filterArray([12, 24, 8, 41, 76], 38) ;//повертає [41, 76]
//  filterArray([12, 24, 8, 41, 76], 20) ;//повертає [24, 41, 76]

     //goittask_modul_2_task_22~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~МЕТОД INCLUDES()

    //  function checkFruit(fruit) {
    //     const fruits = ["apple", "plum", "pear", "orange"];
      
    //     return fruits.includes(fruit); // Change this line
    //   }
      
    //   checkFruit("plum");// повертає true
    //    checkFruit("mandarin") ;//повертає false
    //    checkFruit("pear");// повертає true
    //    checkFruit("Pear");// повертає false
    //    checkFruit("apple") ;//повертає true

        //  //goittask_modul_2_task_23~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ОБЩИЕ ЭЛЕМЕНТЫ
        //  function getCommonElements(array1, array2) {
        //     // Change code below this line
        //     let arr = [];
        //     for(let i = 0; i < array1.length; i+=1){
        //         if (array2.includes(array1[i])){
        //             arr.push(array1[i]);
        //         }
        //     }
            
        //     return console.log(arr);
        //    // Change code above this line
        //   }
        //   getCommonElements([1, 2, 3], [2, 4]);// повертає [2]

//goittask_modul_2_task_24~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ЦИКЛ FOR...OF сумма элементов массива

// function calculateTotalPrice(order) {
//     let total = 0;
//     // Change code below this line
  
//     for (let value of order) {
//       total +=value;
//     }
  
//     // Change code above this line
//     return total;
//     console.log(total);
//   }
  
// calculateTotalPrice([12, 85, 37, 4]);// повертає 138
// calculateTotalPrice([164, 48, 291]);// повертає 503
// calculateTotalPrice([412, 371, 94, 63, 176]);//повертає 1116
// calculateTotalPrice([]);// повертає 0
// calculateTotalPrice() ;//з випадковим масивом чисел повертає правильну суму

//goittask_modul_2_task_25~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ФІЛЬТРАЦия МАССИВА ЧИСЕЛ 2.0

// function filterArray(numbers, value) {
//     // Change code below this line
//     const filteredNumbers = [];
  
//     for (let number of numbers) {
//     //   const number = val;
  
//       if (number > value) {
//         filteredNumbers.push(number);
//       }
//     }
  
//     // return filteredNumbers;
//     return console.log(filteredNumbers);
//     // Change code above this line
//   }
//   filterArray([1, 2, 3, 4, 5], 3) ;// [4, 5]

//goittask_modul_2_task_25~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ОПЕРАТОР %
// операція за модулем (%) повертає цілочисельну остачу від ділення двох чисел - діленого і дільника.

// const a = 3 % 1;
// const b = 4 % 3;
// const c = 11 % 4;
// const d = 12 % 7;
// const e = 8 % 6;
// console.log(a, b, c, d, c);

//goittask_modul_2_task_27~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ПАРНЫЕ ЧИСЛА

// function getEvenNumbers(start, end) {
//     // Change code below this line
//     let filteredNumbers = [];
  
//     for (let i  = start; i <= end; i +=1) {
//           if (i % 2 === 0 ) {
//         filteredNumbers.push(i);
//       }
//     }
//     return  console.log(filteredNumbers);
 
//      // Change code above this line
//    }
//  getEvenNumbers(2, 5);// повертає [2, 4]

 //goittask_modul_2_task_28~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ОПЕРАТОР BREAK
//  оператор break, який повністю припиняє виконання циклу і передає управління на рядок за його тілом.

// У прикладі шукаємо число що ділеться на 5 без залишку. Щойно виконається умова if, цикл припинить своє виконання (буде перерваний).

// const start = 6;
// const end = 27;
// let number;

// for (let i = start; i < end; i += 1) {
//   if (i % 5 === 0) {
//     number = i;
//       console.log(i);
//     // break;
 
//   }
// }

 //goittask_modul_2_task_29~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ОПЕРАТОР BREAK VS RETURN


//  function findNumber(start, end, divisor) {
//     // Change code below this line
  
  
//       for (let i = start; i < end; i += 1) {
          
//         if (i % divisor === 0) {
//           return  i;
//       }
//     }
//      // Change code above this line
//   }
//   const result = findNumber();
//   console.log(result);
//   findNumber(2, 6, 5) ;//повертає 5

// findNumber(2, 6, 5) ;//повертає 5
//   findNumber(8, 17, 3);// повертає 9
//  findNumber(6, 9, 4) ;//повертає 8
//  findNumber(16, 35, 7);// повертає 21

 //goittask_modul_2_task_30~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ФУНКЦІЯ INCLUDES()

//  function includes(array, value) {
//     // Change code below this line
//     for (let val of array){
//          if (val === value){
//             return console.log(true);
//         }
//     }
  
//       return console.log(false);


// //   return console.log(includes.includes(value));
  
//     // Change code above this line
//   }
//   includes([1, 2, 3, 4, 5], 3);// повертає true
//    includes([1, 2, 3, 4, 5], 17) ;//повертає false
//    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Jupiter");// повертає true
//    includes(["Earth", "Mars", "Venus", "Jupiter", "Saturn"], "Uranus") ;//повертає false
//    includes(["apple", "plum", "pear", "orange"], "plum") ;//повертає true
//    includes(["apple", "plum", "pear", "orange"], "kiwi") ;//повертає false
//    includes();//для випадкового масиву з випадковим value повертає правильний boolean
//   // У функції includes використовується for, return, але не метод масиву includes

 //goittask_modul_2_task_31~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ЦИКЛ  FOR
//  const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) { // Change this line
//   console.log(i);
// }
 //goittask_modul_2_task_32~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~сумма всех чисел до

// function calculateTotal(number) {
//     // Change code below this line
//     let result = 0;
//     for (let i = 0; i <= number; i += 1){
//         result  +=i;
//     }
//     console.log(result);
   
//      // Change code above this line
//    }

// calculateTotal(24);// повертає 300

// ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


// function findLongestWord(string) {
//   // Change code below this line
//   const words = string.split(' ');
//   let longWord = words[0];
//   for (const word of words) {
//     if (longWord.length < word.length) {
//       longWord = word;
//     }
//   }
// //   return longWord
      
//       console.log(longWord);
  
  
// ~~~~~~~~~~~~~~~~~~~~~~~~

//   function getSum(numbers) {
//     // Change code below this line
//     let total = 0;
//         // Change code below this line
      
//         for (let value of numbers) {
//           total +=value;
//         }
//     console.log(total);
// }
// getSum([1, 2, 3]);// === 6
// getSum([1.2, 2.8, 3]);// === 7
// getSum([-7, 2, 3]);// === -2
// getSum([1.3, 4.1, 10.6, -4.7]);
//~~~~~~~~~~~~~~~~~~~~~~~~~


// function calculateAverageCountryPopulation(populations) {
// //     // write code here
//          populations = [42000000, 9500000, 3500000, 8400000];
//         let total = 0;
//         let average = 0;
  
    
//       for (let value of populations) {
//         total +=value;
//       }
//       average = total / populations.length;
    
    
//       console.log(average);
//   }
  
//   calculateAverageCountryPopulation();


//~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   function hasNoneLetters(phrase, blacklist) {
//     // write code here
//     if (phrase.toLowerCase().includes(blacklist)){
//         return console.log(false);
//     }else{
//         return console.log(true);
// //     }
// //   return console.log(phrase.toLowerCase().includes(blacklist));
// //     return false;
//   } }
// //   Напиши функцию hasNoneLetters, которая принимает две строки phrase и blacklist и возвращает true,
// //  если phrase не содержит ни одной буквы из blacklist, иначе false.
  
// //   Сравнение должно быть без учета регистра, то есть x в blacklist запрещает также использовать и X.
  
// //   Примеры:
  
//   hasNoneLetters('Mate Academy', 'pqrs');// === true;
//   hasNoneLetters('ABC', 'a');// === false;
  
  //~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

//   function getLongestString(strings) {
//     // write code here
//     for (let value of strings){
//       if(value.length > strings.length ){
//         console.log(value);
//      }
//     }
//   }
  
// //   getLongestString(['One', 'two', 'three', 'four']);// === 'three'
// getLongestString(['One', 'two', 'six']);// === 'One'

//~~~~~~~~~~~~~~~~~~~~~


// function findSmallestElement(numbers) {
//         let number;

//         for (let i = 0; i < numbers.length; i +=1){
//             if (numbers[i] < numbers[0]){
//                 number = numbers[i] ;
//              }
//         console.log(number);
//       }
//     }
//     findSmallestElement([5, 2, 8, 12, 6]); 

//~~~~~~~~~~~~~~~~

    // function findSmallestElement(numbers) {
    //     let number;
    //     number = Math.min.apply(null, numbers);
        
    //     console.log(number);
      
    // }
    // findSmallestElement([5, 2, 8, 12, 6]); 


//     function getSum(numbers) {
//         // Change code below this line
//         let total = 0;
//             // Change code below this line
          
//             for (let value of numbers) {
//               total +=value;
    
//             }
//         console.log(total);
//     }
//     getSum([1, 2, 3]);// === 6
// getSum([1.2, 2.8, 3]);// === 7
// getSum([-7, 2, 3]) ;//=== -2




// function getLargestExpressionResultOfThree(a, b) 
//     {
//         let result = a + b;
//         if (result < a - b) {
//           result = a - b
//         } 
//         if (result < a * b) {
//           result = a * b
//         }
//         if (result < a / b) {
//           result = a / b
//         }
//         console.log(result);
//       }
 
//   getLargestExpressionResultOfThree(-2, -34);
  


// function printNumbersBackwards(N){
//     for(let i = N; i >= 1; i--){
//         console.log(i)
//     }
// };
  
//   printNumbersBackwards(9);


// function getDrinks(numberOfGuests) {
//     // write code here
//     let result =0 ;
//     if (numberOfGuests === 0){
//         return result;
//     }else{
//         for(let i = 0; i <= numberOfGuests; i++){
//              result += i; 
//         }
//     }
//     console.log(result);
//    }
//   getDrinks(5);


// function getDrinksWithStep(numberOfGuests, step) {
//     // write code here
//     let sum =0 ;
//         if (numberOfGuests === 0){
//             return sum;
//         }else{ 
//             for (let i = 1; i <= numberOfGuests; i +=step){
//                 console.log(sum += i);
//             }

//             console.log(sum);
//   }
  
// }
//   getDrinksWithStep(10, 3);

// function calculateProfit(amount, percent, period){
//     // write code here
//     let total = amount;
//     if (amount === 0){
//         return total;
//   }else{
//     for(let i = 0; i <= period; i ++){
//         total = total *percent/100;
//         // console.log(total = amount + percent/100);
//     }
   
//     console.log(total);

//   }
// }
//   calculateProfit(1000, 5, 1);


//   const string = 'banana';

// for (const val of string) {
//   console.log(val);
// }

// function isSubstring(phrase, part) {
//     // write code here  
//     console.log(phrase.includes(part));
      
  
//   }
//   isSubstring('string', 'ry');


// function countMs(text){
//     // write code here
//     let sum = 0;
  
//       for(let letterM of text){       
//           if (letterM === "m" || letterM === "M"){
//               sum = sum + 1;
//           }
//         }
//       console.log(sum);
//   }
//   countMs('doMMcument');
  
  

//   function removeVowels(doc){
//     // write code here
//     let result = ''; 
//     for (const letter of doc) { 

//      if (!'aeiouy'.includes(letter).toLocaleLowerCase()){ 
//        result += letter; 
//      } 
//    } 
//      console.log(result); 
// }
  
//   removeVowels('document'); // 'dcmnt'
//   removeVowels('I like my boss'); // ' lk m bss'
//   removeVowels('350 euro'); // '350 r'



//   function makeAbbr(words) {
//     // write code here
//     let abrr = words[0];
//     for(let i = 1; i < words.length; i++){
//         if (words[i] == " "){
//             abrr = abrr + words[i+1];
//         }

//     }
//     console.log(typeof(abrr.toUpperCase()));
//   }
//   makeAbbr('national aeronautics space administration');

  
//   function decryptMessage(message) {
//     // write code here
//     let result = '';
//     for (let i = 0; i < message.length; i--){
//         result = message[i]+result;
//     }
//     console.log(result);
//   }
// decryptMessage('!!!reeb gniknird ekil eW');



// function getSuccessRate(statistic){
//     // write code here
//     let result = 0;
//     let understand = 0;
//     if(statistic == " "){
//         return result;
//     }else
//         for(let num of statistic){
//             if(num == 1){
//                 understand +=num;
//             }
//         }
    
    
//   }
  
// getSuccessRate('11100'); // 60
// getSuccessRate('1100'); // 50
// getSuccessRate('000000'); // 0
// getSuccessRate('11111'); // 100
// getSuccessRate(''); // 0


function createArray(N) {
    // write code here
    let numbers = [];
    for (let i = 1; i <= N; i++){
        numbers.push(i);
       
    }
    console.log(numbers);
    
  }
  createArray(8);