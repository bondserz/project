const numberOfFilms= +prompt('Сколько фильмов вы уже посмотрели?','');

const personalMoviesDB = {
    count:  numberOfFilms,   
    movies: {},
    actors: {},
    genres:{},
    privat: false
};

const a= prompt('Один из просмотреных фильмов?',''),
    b= prompt('Как оцените его?',''),
    c= prompt('Один из просмотреных фильмов?',''),
    d= prompt('Один из просмотреных фильмов?','');

personalMoviesDB.movies[a] = b;
personalMoviesDB.movies[c] = d;

console.log(personalMoviesDB);