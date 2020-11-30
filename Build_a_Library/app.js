class Media {
  constructor(title) {
    this._title = title;
    this._isCheckedOut = false;
    this._ratings = [];
  }
  get title() {
    return this._title;
  }
  get isCheckedOut() {
    return this._isCheckedOut;
  }
  set isCheckedOut(checked) {
    this._isCheckedOut = checked ? true : false;
  }
  get ratings() {
    return this._ratings;
  }
  toggleCheckOutStatus () {
    this._isCheckedOut = !this._isCheckedOut;
  }
  getAverageRating() {
    let total = this._ratings.length;
    if ( total ) {
        return this._ratings.reduce((currentSum, rating) => currentSum+rating, 0) / total;
    } else {
      return 0;
    }
  }
  addRating(rating) {
    if (rating > 0 && rating <= 5) {
      this._ratings.push(rating);
    }
  }
}

class Movie extends Media {
  constructor(director, title, runTime) {
    super(title);
    this._director = director;
    this._runTime = runTime;
  }

  get director() {
    return this._director;
  }

  get runTime() {
    return this._runTime;
  }
}

class Book extends Media {
  constructor(author, title, pages) {
    super(title);
    this._author = author;
    this._pages = pages;
  }
  get author() {
    return this._author
  }

  get pages () {
      return this._pages;
  }
}
class CD extends Media {
  constructor (producer, album) {
    super(album);
    this._producer = producer;
    this._songTitles = [];
    this._songsRuntime = [];
  }
  get producer() {
    return this._producer;
  }
  get album() {
    return super.title;
  }
  getSongTitles() {
    return this._songTitles;
  }
  getSongsNumber() {
    return this._songTitles.length;
  }
  addSong(songTitle, runTime) {
      this._songTitles.push(songTitle);
      if (isNaN(runTime)) {
        runTime = 0;
      }
      this._songsRuntime.push(runTime);;

  }
  get runTime() {
    return this._songsRuntime.reduce((a, b) => a + b, 0);
  }
  shuffle() {
    let songs = this._songTitles;
    for (let i = songs.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [songs[i], songs[j]] = [songs[j], songs[i]];
    }
    return songs;
  }
}

class Catalog {
  constructor() {
    this._movies = [];
    this._CDs = [];
    this._books = [];
  }
  static _key(author, name) {
      return author + name;
  }
  addMovie(movie) {
    const k = Catalog._key(movie.director, movie.name);
    this._movies[k] = movie;
    return this;
  }
  addCD(CD) {
      const k = Catalog._key(CD.producer, CD.album);
      this._CDs[k] = CD;
      return this;
  }

  addBook(book) {
    const k = Catalog._key(book.author, book.title);
    this._books[k] = book;
    return this;
  }
  getMovie(director, title) {
    const k = Catalog._key(director, title);
    return this._movies[name];
  }

  getBook(author, title) {
    const k = Catalog._key(author, title);
    return this._books[k];
  }

  getCD(producer, album) {
    const k = Catalog._key(producer, album);
    return this._CDs[k];
  }
  static _toArray(from) {
    return Object.values(from);
  }

  get books() {
    return Catalog._toArray(this._books);
  }
  get movies() {
    return Catalog._toArray(this._movies);
  }
  get CDs() {
    return Catalog._toArray(this._CDs);
  }
}

const printMovie = (movie) => {
  const c = console;
  c.log("Movie name: "  + movie.title);
  c.log("By: " + movie.director);
  c.log("Run time: " + movie.runTime + "mins");
  c.log("Checked out: " + movie.isCheckedOut);
  c.log("Rating: " + movie.getAverageRating());
  c.log('');
};
const printBook = (book) => {
    const c = console;
    c.log("Book name: "  + book.title)
    c.log("By: " + book.author);
    c.log("Pages: " + book.pages);
    c.log("Checked out: " + book.isCheckedOut)
    c.log("Rating: " + book.getAverageRating());
    c.log('');
};
const printCD = (cd, shuffle) => {
  const c = console;
  c.log('Producer: ' + cd.producer);
  c.log('Album: ' + cd.album);
  c.log('Run time: '+ (cd.runTime/60) + "mins");
  c.log("Checked out: " + cd.isCheckedOut);

  c.log('Song titles: ' + (shuffle ? cd.shuffle() : cd.getSongTitles()));
  c.log('Rating: ' + cd.getAverageRating());
  c.log('');
};

const historyOfEverything = new Book('Bill Bryson', 'a Short History of Nearly Everything', 544);
const speed = new Movie('Jan de Bont', 'Speed', 116);
const eminemCD = new CD('Eminem', '8 mile');
const catalog = new Catalog();


historyOfEverything.toggleCheckOutStatus();
historyOfEverything.addRating(4);
historyOfEverything.addRating(5);
historyOfEverything.addRating(5);


speed.toggleCheckOutStatus();
speed.addRating(1);
speed.addRating(5);
speed.addRating(5);


eminemCD.addSong('Lose yourself', 216);
eminemCD.addSong('Love Me', 234);
eminemCD.addSong('8 Mile', 244);
eminemCD.addSong('Adrenaline Rush', 286);
eminemCD.addSong('Places to Go', 320);
eminemCD.addSong('Rap Game', 321);
eminemCD.addSong('8 Miles and Runnin', 243);
eminemCD.addSong('Spit Shine', 256);
eminemCD.addSong('Time of My Life', 298);
eminemCD.addSong('U Wanna Be Me', 361);
eminemCD.addSong('Waksta', 342);
eminemCD.addSong('Wasting My Time', 456);
eminemCD.addSong('R.A.K.I.M.', 412);
eminemCD.addSong('That\'s My Nigga fo\' Real', 381);
eminemCD.addSong('R.A.K.I.M.', 288);
eminemCD.addSong('Battle', 278);
eminemCD.addRating(3);
eminemCD.addRating(5);
eminemCD.addRating(4);
eminemCD.addRating(5);
//eminemCD.toggleCheckOutStatus();

catalog.addBook(historyOfEverything)
       .addMovie(speed)
       .addCD(eminemCD);
const printCatalog = (catalog) => {
    let c = console;
    c.log("Books: " + catalog.books.length);
    catalog.books.forEach(book=> {
      c.log(book.title + " " + book.getAverageRating());
    })
    c.log("Movies: " + catalog.movies.length);
    catalog.movies.forEach(movie=> {
      c.log(movie.title + " " + movie.getAverageRating());
    });
    c.log("CDs: " + catalog.CDs.length);
    catalog.CDs.forEach(cd=> {
      c.log(cd.producer + " " + cd.album + " " + cd.getAverageRating());
    })
    c.log("")
}

printCatalog(catalog);

printBook(historyOfEverything);
printMovie(speed);
printCD(eminemCD, true);
