const numberOfFilms = +prompt('Сколько фильмов вы уже посмотрели?', '');

const film = prompt('Один из промотренных фильмов?', ''),
	ocenka = +prompt('На сколько оцените его?', ''),
	films = prompt('Один из промотренных фильмов?', ''),
	ocenochka = +prompt('На сколько оцените его?', '');

const personalMovieDB = {
	count: numberOfFilms,
	movies: {},
	actors: {},
	genres: [],
	privat: false
};

personalMovieDB.movies[film] = ocenka;
personalMovieDB.movies[films] = ocenochka;


console.log(personalMovieDB);




