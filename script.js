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

let counter = 0;
function createCounter() {
    
    
    const myFunction = function(){
        counter = counter + 1;
        return counter;
    }
    return myFunction;
}

const increment = createCounter();
const c1 = increment();
const c2 = increment();
const c3 = increment();

console.log(c1, c2,c3);