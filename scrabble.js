/*
- x create a scrabble object for every letter
	{
		letter: "a",
		score: 3 (random)
	},
	{
		letter: "b",
		score: 2
	}
- .. create an array of letter objects that have a score between 8-10

- convert ChatGPT's object to an array


- two paradigms of programming
	- OOP - object oriented programming
		- used to be in 1990 - 2010 dominant
		- very hierachical and therefore quite static
			- not good for big data, distributed applications, microsoft services
		- C#, Java, Ruby, PHP (2005 - OOP features)
		- C++ - is very low level
			- you have to take care of your own memory management
		- Java (1995)
			- garbage collecting
		- C# (2001)
			- Microsoft's better version of Java
		- JavaScript (since 2015 it has classes that LOOK like C#/Java classes)
			----------------------------
			class Book {
				constructor(title, pages)
			}

			const book = new Book("Homo Deus", 423);

			patterns: factory, decorator, singleton
			----------------------------
		- React hat class components from 2010-2019

	- functional programming
		- is useful for big data, distributed applications
		- as of 2007 became more and more popular and useful
		- GOOD for big data, distributed applications, microsoft services
		- Haskell, Lisp, Clojure
		- JavaScript
		- React got in 2019 "hooks" and since then we use function components in React
	- new languages
		- Go (better C++)
		- Rust (better C++)
		- Kotlin (better Java)
	- PHP:
		- 1996 started as a Personal Home Page (PHP) project by a Canadian
		- PHP was not a serious language until 2005 when it got OOP features
			- you could program in classes like in C#, Java
		- a pile of applications writte in PHP for companies, e.g. without frameworks
			- PHP can be very messy especially without a framework
		- TIP: if you can work with the framework Laravel, then YES, otherwise no
	- TypeScript: ...
*/

const allLetters = 'abcdefghijklmnopqrstuvwxyz';
var letterValues = {
  "A": 1, "B": 3, "C": 3, "D": 2, "E": 1, "F": 4, "G": 2, "H": 4, "I": 1, "J": 8, "K": 5, "L": 1, "M": 3, "N": 1, "O": 1, "P": 3, "Q": 10, "R": 1, "S": 1, "T": 1, "U": 1, "V": 4, "W": 4, "X": 8, "Y": 4, "Z": 10
};

// one-liner
const scrabbleObjects1 = allLetters.split('').map(m => ({letter: m.toUpperCase(), score: Math.floor(Math.random() * 10) + 1}));

// full code
const allLettersArray = allLetters.split('');
const scrabbleObjects2 = allLettersArray.map(letter => {
	return {
		letter,
		score: Math.floor(Math.random() * 10) + 1
	}
});

// create an array of letter objects that have a score between 8-10
const bestLetterObjects = scrabbleObjects2.filter(m => m.score >= 8);
const letterToPlay = scrabbleObjects2.find(m => m.letter === 'q');

console.log(scrabbleObjects2);
console.log(bestLetterObjects);
console.log(letterToPlay);