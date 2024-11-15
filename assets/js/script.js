/*
REGOLE
- Tutte le risposte devono essere scritte in JavaScript
- Se sei in difficoltà puoi chiedere aiuto a un Teaching Assistant
- Puoi usare Google / StackOverflow ma solo quanto ritieni di aver bisogno di qualcosa che non è stato spiegato a lezione
- Puoi testare il tuo codice in un file separato, o de-commentando un esercizio alla volta
- Per farlo puoi utilizzare il terminale Bash, quello di VSCode o quello del tuo sistema operativo (se utilizzi macOS o Linux)
*/

// JS Basics

/* ESERCIZIO A
  Crea una variabile chiamata "sum" e assegnaci il risultato della somma tra i valori 10 e 20.
*/

console.log('---------ESERCIZIO A----------');

let sum;

sum = 10 + 20;
console.log('la somma tra 10 e 20 è: ' + sum);

/* ESERCIZIO B
  Crea una variabile chiamata "random" e assegnaci un numero casuale tra 0 e 20 (deve essere generato dinamicamente a ogni esecuzione).
*/

console.log('---------ESERCIZIO B----------');

let random;

random = Math.floor(Math.random() * 21);

console.log('Il numero random generato tra 0 e 20 è: ' + random);

/* ESERCIZIO C
  Crea una variabile chiamata "me" e assegnaci un oggetto contenente le seguenti proprietà: name = il tuo nome, surname = il tuo cognome, age = la tua età.
*/

console.log('---------ESERCIZIO C----------');

const me = {
  name: 'Vittorio',
  surname: 'Turiaci',
  age: 24,
};

console.log(me);

/* ESERCIZIO D
  Crea del codice per rimuovere programmaticamente la proprietà "age" dall'oggetto precedentemente creato.
*/

console.log('---------ESERCIZIO D----------');

const noAge = { ...me };

delete noAge.age;

console.log('Array con proprietà age rimossa: ');
console.log(noAge);

console.log('Array originale: ');
console.log(me);

/* ESERCIZIO E
  Crea del codice per aggiungere programmaticamente all'oggetto precedentemente creato un array chiamato "skills", contenente i linguaggi di programmazione che conosci.
*/

console.log('---------ESERCIZIO E----------');

const skills = ['HTML', 'CSS', 'JavaScript', 'C++', 'C#'];

me.skills = skills;

console.log('Array Me con la nuova proprietà: ');

console.log(me);

/* ESERCIZIO F
  Crea un pezzo di codice per aggiungere un nuovo elemento all'array "skills" contenuto nell'oggetto "me".
*/

console.log('---------ESERCIZIO F----------');

const newLang = 'Python';
const newLangObj = { ...me, skills: [...me.skills] };

newLangObj.skills.push(newLang);

console.log('Aggiungo un nuovo oggetto alla proprietà Skills: ');
console.log(newLangObj);

/* ESERCIZIO G
  Crea un pezzo di codice per rimuovere programmaticamente l'ultimo elemento dall'array "skills" contenuto nell'oggetto "me".
*/

console.log('---------ESERCIZIO G----------');
const removeNewLang = { ...newLangObj, skills: [...newLangObj.skills] };
removeNewLang.skills.pop();

console.log("Rimuovo l'ultimo oggetto dalla proprietà Skills: ");
console.log(removeNewLang);

// Funzioni

/* ESERCIZIO 1
  Crea una funzione chiamata "dice": deve generare un numero casuale tra 1 e 6.
*/
console.log('---------ESERCIZIO 1----------');

function dice() {
  const randomDiceNum = Math.floor(Math.random() * 7);
  return randomDiceNum;
}

console.log('Il dado lanciato mostra il numero: ' + dice());

/* ESERCIZIO 2
  Crea una funzione chiamata "whoIsBigger" che riceve due numeri come parametri e ritorna il maggiore dei due.
*/

console.log('---------ESERCIZIO 2----------');

function whoIsBigger(num1, num2) {
  if (num1 > num2) {
    return `Il numero maggiore è ${num1}`;
  } else if (num2 > num1) {
    return `Il numero maggiore è ${num2}`;
  } else {
    return 'I due numeri sono uguali';
  }
}

console.log(`Dati due numeri: ` + whoIsBigger(25, 25));

/* ESERCIZIO 3
  Crea una funzione chiamata "splitMe" che riceve una stringa come parametro e ritorna un'array contenente ogni parola della stringa.

  Es.: splitMe("I love coding") => ritorna ["I", "Love", "Coding"]
*/

console.log('---------ESERCIZIO 3----------');

function splitMe(string) {
  const splitted = string.split(' ');
  return splitted;
}
console.log(splitMe('Ciao a tutti sono Vittorio'));

/* ESERCIZIO 4
  Crea una funzione chiamata "deleteOne" che riceve una stringa e un booleano come parametri.
  Se il valore booleano è true la funzione deve ritornare la stringa senza il primo carattere, altrimenti la deve ritornare senza l'ultimo.
*/

console.log('---------ESERCIZIO 4----------');

function deleteOne(string, boolean) {
  if (boolean) {
    return string.substring(1);
  } else {
    return string.substring(0, string.length - 1);
  }
}

console.log(deleteOne('Vittorio', false));

/* ESERCIZIO 5
  Crea una funzione chiamata "onlyLetters" che riceve una stringa come parametro e la ritorna eliminando tutte le cifre numeriche.

  Es.: onlyLetters("I have 4 dogs") => ritorna "I have dogs"
*/

console.log('---------ESERCIZIO 5----------');

function onlyLetters(string) {
  let result = '';

  for (let i = 0; i < string.length; i++) {
    const char = string[i];

    if (isNaN(char) || char === ' ') {
      result += char;
    }
  }

  return result;
}

console.log(onlyLetters('Ho 4 anni e 4 gatti'));

/* ESERCIZIO 6
  Crea una funzione chiamata "isThisAnEmail" che riceve una stringa come parametro e ritorna true se la stringa è un valido indirizzo email.
*/

console.log('---------ESERCIZIO 6----------');

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

function isThisAnEmail(string) {
  if (emailRegex.test(string)) {
    return true;
  } else {
    return false;
  }
}

console.log(
  'Questo indirizzo Email è valido? ' + isThisAnEmail('vittorio@turiaciit')
);

/* ESERCIZIO 7
  Scrivi una funzione chiamata "whatDayIsIt" che ritorna il giorno della settimana corrente.
*/

console.log('---------ESERCIZIO 6----------');

const dayNames = [
  'Domenica',
  'Lunedì',
  'Martedì',
  'Mercoledì',
  'Giovedì',
  'Venerdì',
  'Sabato',
];

function whatDayIsIt() {
  const today = new Date().getDay();
  return dayNames[today];
}
console.log('Oggi è ' + whatDayIsIt());

/* ESERCIZIO 8
  Scrivi una funzione chiamata "rollTheDices" che riceve un numero come parametro.
  Deve invocare la precedente funzione dice() il numero di volte specificato nel parametro, e deve tornare un oggetto contenente una proprietà "sum":
  il suo valore deve rappresentare il totale di tutti i valori estratti con le invocazioni di dice().
  L'oggetto ritornato deve anche contenere una proprietà "values", contenente un array con tutti i valori estratti dalle invocazioni di dice().

  Example:
  rollTheDices(3) => ritorna {
      sum: 10
      values: [3, 3, 4]
  }
*/

console.log('---------ESERCIZIO 8----------');

function rollTheDices(number) {
  const content = {};
  let sum = 0;
  const values = [];

  for (let i = 0; i < number; i++) {
    const randomNumDice = dice();
    values.push(randomNumDice);
    sum += randomNumDice;
  }
  content.sum = sum;
  content.values = values;
  return content;
}

console.log(rollTheDices(3));

/* ESERCIZIO 9
  Scrivi una funzione chiamata "howManyDays" che riceve una data come parametro e ritorna il numero di giorni trascorsi da tale data.
*/

console.log('---------ESERCIZIO 9----------');

function howManyDays(date) {
  const presentDate = new Date();
  const passedDate = new Date(date);

  const difference = presentDate - passedDate;

  const daysPassed = Math.floor(difference / (1000 * 60 * 60 * 24));

  return daysPassed;
}

console.log(howManyDays('2024-11-5'));

/* ESERCIZIO 10
  Scrivi una funzione chiamata "isTodayMyBirthday" che deve ritornare true se oggi è il tuo compleanno, falso negli altri casi.
*/

console.log('---------ESERCIZIO 10----------');

function isTodayMyBirthday(date) {
  const presentMonth = new Date().getMonth();
  const presentDay = new Date().getDate();
  const myBDay = new Date(date);

  if (myBDay.getMonth() === presentMonth && myBDay.getDate() === presentDay) {
    return true;
  } else {
    return false;
  }
}

console.log('Oggi è il mio compleanno? ' + isTodayMyBirthday('07-09'));

// Arrays & Oggetti

// NOTA: l'array "movies" usato in alcuni esercizi è definito alla fine di questo file

/* ESERCIZIO 11
  Scrivi una funzione chiamata "deleteProp" che riceve un oggetto e una stringa come parametri; deve ritornare l'oggetto fornito dopo aver eliminato
  in esso la proprietà chiamata come la stringa passata come secondo parametro.
*/

console.log('---------ESERCIZIO 11-----------');

function deleteProp(obj, string) {
  delete obj[string];
  return obj;
}

console.log(
  deleteProp({ name: 'vittorio', age: 24, surname: 'Turiaci' }, 'age')
);

// Sposto l'array di oggetti 'movies'

/* Questo array viene usato per gli esercizi. Non modificarlo. */
const movies = [
  {
    Title: 'The Lord of the Rings: The Fellowship of the Ring',
    Year: '2001',
    imdbID: 'tt0120737',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_SX300.jpg',
  },

  {
    Title: 'The Lord of the Rings: The Return of the King',
    Year: '2003',
    imdbID: 'tt0167260',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNzA5ZDNlZWMtM2NhNS00NDJjLTk4NDItYTRmY2EwMWZlMTY3XkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings: The Two Towers',
    Year: '2002',
    imdbID: 'tt0167261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNGE5MzIyNTAtNWFlMC00NDA2LWJiMjItMjc4Yjg1OWM5NzhhXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of War',
    Year: '2005',
    imdbID: 'tt0399295',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTYzZWE3MDAtZjZkMi00MzhlLTlhZDUtNmI2Zjg3OWVlZWI0XkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'Lords of Dogtown',
    Year: '2005',
    imdbID: 'tt0355702',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDBhNGJlOTAtM2ExNi00NmEzLWFmZTQtYTZhYTRlNjJjODhmXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_SX300.jpg',
  },
  {
    Title: 'The Lord of the Rings',
    Year: '1978',
    imdbID: 'tt0077869',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGMyNWJhZmYtNGQxYi00Y2ZjLWJmNjktNTgzZWJjOTg4YjM3L2ltYWdlXkEyXkFqcGdeQXVyNTAyODkwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1990',
    imdbID: 'tt0100054',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOTI2NTQyODk0M15BMl5BanBnXkFtZTcwNTQ3NDk0NA@@._V1_SX300.jpg',
  },
  {
    Title: 'The Lords of Salem',
    Year: '2012',
    imdbID: 'tt1731697',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjA2NTc5Njc4MV5BMl5BanBnXkFtZTcwNTYzMTcwOQ@@._V1_SX300.jpg',
  },
  {
    Title: 'Greystoke: The Legend of Tarzan, Lord of the Apes',
    Year: '1984',
    imdbID: 'tt0087365',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM5MzcwOTg4MF5BMl5BanBnXkFtZTgwOTQwMzQxMDE@._V1_SX300.jpg',
  },
  {
    Title: 'Lord of the Flies',
    Year: '1963',
    imdbID: 'tt0057261',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BOGEwYTlhMTgtODBlNC00ZjgzLTk1ZmEtNmNkMTEwYTZiM2Y0XkEyXkFqcGdeQXVyMzU4Nzk4MDI@._V1_SX300.jpg',
  },
  {
    Title: 'The Avengers',
    Year: '2012',
    imdbID: 'tt0848228',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Infinity War',
    Year: '2018',
    imdbID: 'tt4154756',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Age of Ultron',
    Year: '2015',
    imdbID: 'tt2395427',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SX300.jpg',
  },
  {
    Title: 'Avengers: Endgame',
    Year: '2019',
    imdbID: 'tt4154796',
    Type: 'movie',
    Poster:
      'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SX300.jpg',
  },
];

/* ESERCIZIO 12
  Scrivi una funzione chiamata "newestMovie" che trova il film più recente nell'array "movies" fornito.
*/

console.log('---------ESERCIZIO 12-----------');

function newestMovie() {
  let newest = { ...movies[0] };
  movies.forEach((element) => {
    if (parseInt(element.Year) > parseInt(newest.Year)) {
      newest = element;
    }
  });
  return newest;
}

console.log('Il film più recente è ');
console.log(newestMovie());

/* ESERCIZIO 13
  Scrivi una funzione chiamata countMovies che ritorna il numero di film contenuti nell'array "movies" fornito.
*/

console.log('---------ESERCIZIO 13-----------');

function countMovies() {
  const totalMovies = movies.length;
  return totalMovies;
}

console.log('Il numero totale di film è: ' + countMovies());

/* ESERCIZIO 14
  Scrivi una funzione chiamata "onlyTheYears" che crea un array con solamente gli anni di uscita dei film contenuti nell'array "movies" fornito.
*/

console.log('---------ESERCIZIO 14-----------');

function onlyTheYears() {
  const onlyYears = movies.map((year) => {
    return year.Year;
  });
  return onlyYears;
}
console.log('Gli anni di uscita di tutti i film sono:');

console.log(onlyTheYears());

/* ESERCIZIO 15
  Scrivi una funzione chiamata "onlyInLastMillennium" che ritorna solamente i film prodotto nel millennio scorso contenuti nell'array "movies" fornito.
*/
console.log('----------Esercizio 15----------');

function onlyInLastMillennium() {
  const oldMovies = movies.filter((element) => {
    return parseInt(element.Year) <= 2000;
  });
  return oldMovies;
}

console.log('I film usciti nello scorso millennio sono:');

console.log(onlyInLastMillennium());

/* ESERCIZIO 16
  Scrivi una funzione chiamata "sumAllTheYears" che ritorna la somma di tutti gli anni in cui sono stati prodotti i film contenuti nell'array "movies" fornito.
*/

console.log('----------Esercizio 16----------');

function sumAllTheYears() {
  const yearSum = movies.reduce((total, movie) => {
    const year = parseInt(movie.Year);
    return total + year;
  }, 0);
  return yearSum;
}

console.log(
  'La somma di tutti gli anni di uscita dei film è: ' + sumAllTheYears()
);

/* ESERCIZIO 17
  Scrivi una funzione chiamata "searchByTitle" che riceve una stringa come parametro e ritorna i film nell'array "movies" fornito che la contengono nel titolo.
*/

console.log('----------Esercizio 17----------');

function searchByTitle(string) {
  return movies.filter((movie) =>
    movie.Title.toLowerCase().includes(string.toLowerCase())
  );
}

console.log('Ecco tutti i film che contengono la parola desiderata');
console.log(searchByTitle('ultron'));

/* ESERCIZIO 18
  Scrivi una funzione chiamata "searchAndDivide" che riceve una stringa come parametro e ritorna un oggetto contenente due array: "match" e "unmatch".
  "match" deve includere tutti i film dell'array "movies" fornito che contengono la stringa fornita all'interno del proprio titolo, mentre "unmatch" deve includere tutti i rimanenti.
*/

console.log('----------Esercizio 18----------');

function searchAndDivide(string) {
  const matchUnmatch = {
    match: [],
    unmatch: [],
  };

  movies.forEach((movie) => {
    if (movie.Title.toLowerCase().includes(string.toLowerCase())) {
      matchUnmatch.match.push(movie);
    } else {
      matchUnmatch.unmatch.push(movie);
    }
  });

  return matchUnmatch;
}

console.log(searchAndDivide('ultron'));

/* ESERCIZIO 19
  Scrivi una funzione chiamata "removeIndex" che riceve un numero come parametro e ritorna l'array "movies" fornito privo dell'elemento nella posizione ricevuta come parametro.
*/

console.log('----------Esercizio 19----------');

function removeIndex(numIndex) {
  const toRemove = movies.splice(numIndex, 1);

  movies.forEach((element) => {
    if (toRemove === movies[element]) delete movies[element];
  });
  return movies;
}

console.log(removeIndex(3));

// DOM (nota: gli elementi che selezionerai non si trovano realmente nella pagina)

/* ESERCIZIO 20
  Scrivi una funzione per selezionare l'elemento dotato di id "container" all'interno della pagina.
*/

console.log('----------Esercizio 20----------');

function selectContainer() {
  const container = document.getElementById('container');
  return container;
}

selectContainer();

/* ESERCIZIO 21
  Scrivi una funzione per selezionare ogni tag <td> all'interno della pagina.
*/

console.log('----------Esercizio 21----------');

function allTd() {
  const tds = document.querySelectorAll('td');
  return tds;
}

allTd();

/* ESERCIZIO 22
  Scrivi una funzione che, tramite un ciclo, stampa in console il testo contenuto in ogni tag <td> all'interno della pagina.
*/

console.log('----------Esercizio 22----------');

function printOnConsole() {
  allTd().forEach((element) => {
    console.log(element.innerText);
  });
}

printOnConsole();

/* ESERCIZIO 23
  Scrivi una funzione per aggiungere un background di colore rosso a ogni link all'interno della pagina.
*/

console.log('----------Esercizio 23----------');

function allAInRed() {
  const allA = document.querySelectorAll('a');
  allA.forEach((element) => {
    element.style.backgroundColor = 'red';
  });
}

allAInRed();
console.log('trasformo tutti i background dei link in rosso');

/* ESERCIZIO 24
  Scrivi una funzione per aggiungere un nuovo elemento alla lista non ordinata con id "myList".
*/

console.log('----------Esercizio 24----------');

const list = document.getElementById('myList');

function addToUl() {
  const newLi = document.createElement('li');
  newLi.innerText = 'quattro';
  list.appendChild(newLi);
}

console.log('Aggiungo un nuovo elemento alla lista');

addToUl();

/* ESERCIZIO 25
  Scrivi una funzione per svuotare la lista non ordinata con id "myList".
*/

console.log('----------Esercizio 25----------');

function emptyTheList() {
  const li = document.querySelectorAll('#myList li');

  li.forEach((element) => {
    return (element.innerText = '');
  });
}

console.log('Svuoto la lista');
emptyTheList();

/* ESERCIZIO 26
  Scrivi una funzione per aggiungere ad ogni tag <tr> la classe CSS "test"
*/

console.log('----------Esercizio 26----------');

const allTr = document.querySelectorAll('tr');

function addClassToTrs() {
  allTr.forEach((element) => {
    element.classList.add('test');
  });
}

console.log("Aggiungo la classe 'test' ad ogni tr nell'HTML");

addClassToTrs();

// [EXTRA] JS Avanzato

/* ESERCIZIO 27
  Crea una funzione chiamata "halfTree" che riceve un numero come parametro e costruisce un mezzo albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  halfTree(3)

  *
  **
  ***

*/

console.log('----------Esercizio 27----------');

function halfTree(number) {
  for (let i = 1; i <= number; i++) {
    console.log('*'.repeat(i));
  }
}

console.log('Costruisco un mezzo albero di asterischi');

halfTree(7);

/* ESERCIZIO 28
  Crea una funzione chiamata "tree" che riceve un numero come parametro e costruisce un albero di "*" (asterischi) dell'altezza fornita.

  Esempio:
  tree(3)

    *
   ***
  *****

*/

console.log('----------Esercizio 28----------');

function tree(number) {
  for (let i = 0; i < number; i++) {
    const spaces = ' '.repeat(number - i - 1);
    const stars = '*'.repeat(2 * i + 1);
    console.log(spaces + stars);
  }
}
console.log('Costruisco un albero di asterischi');

tree(15);
console.log('Merry Christmas!');

/* ESERCIZIO 29
  Crea una funzione chiamata "isItPrime" che riceve un numero come parametro e ritorna true se il numero fornito è un numero primo.
*/

console.log('----------Esercizio 29----------');

function isItPrime(number) {
  if (number < 2) {
    console.log(
      'Il numero è minore di 2, di conseguenza non può essere un numero primo.'
    );
    return;
  }

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    } else {
      return true;
    }
  }
}

console.log('Il numero dato è un numero primo? ' + isItPrime(17));
