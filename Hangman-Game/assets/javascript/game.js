'use strict';
let techWords = [
	'switch',
	'functions',
	'objects',
	'operators',
	'booleans',
	'hoisting',
	'prototypes',
	'parameters',
	'methods',
	'recursion',
	'closures'
];
let win = 0;
let turn = 6;
let pointCondition;
let currentWord = randomWordGenerator();
let totalUnderscore = [];
let printed;
let letter;
let indices;
let letterTrackerArray = [];


console.log(currentWord);
console.log(underScoreGenerator(currentWord));



document.onkeyup = function (event) {
	letter = event.key;
	console.log(letter);
	console.log(findIndices(currentWord));
	console.log(letterTrackerArray.length);
	letterTracker(letter);
	letterCheckerAndPrint(letter);

};

function $(id) {
	return document.getElementById(id);
}


function randomWordGenerator() {
	let RN = techWords[Math.floor(Math.random() * techWords.length)];
	return RN;
}

function underScoreGenerator(currentWord) {
	let underScore = '_ ';
	let multiple = currentWord.length;
	for (let i = 0; i < multiple; i++) {
		totalUnderscore.push(underScore);
	}

	printToScreen();
}

function findIndices(indicesInWord) {
	indices = [];
	for (let i = 0; i < indicesInWord.length; i++) {
		if (indicesInWord[i] === letter) indices.push(i);
	}
	return indices;
}


function printToScreen(z) {
	printed = totalUnderscore.join(' ');
	let wordEval = totalUnderscore.join('');
	console.log(printed);
	$('hangWord').textContent = printed;


	if (wordEval === currentWord) {
		win += 1;
		$('wins').textContent = win;
	} else if (z === true) {
		printed = totalUnderscore.join(' ');
		$('hangWord').textContent = printed;

	} else if (z === false) {
		turn -= 1;
		$('turns').textContent = turn;
	}

	if (letterTrackerArray[0] === undefined) {
		return;
	} else {
		let usedLetters = letterTrackerArray.join(' ');
		console.log(usedLetters);
		$('hangLetters').textContent = usedLetters;
	}
}

function letterCheckerAndPrint(x) {

	let found = false;
	/* pointCondition = found; */

	for (let w = 0; w < currentWord.length; w++) {

		if (currentWord[w] === x && found === false) {

			for (let r in indices) {
				delete totalUnderscore[indices[r]];
				totalUnderscore[indices[r]] = x;
				console.log(r);
			}
			found = true;

			console.log(totalUnderscore);
		}
	}
	printToScreen(found);
}


console.log(currentWord);


function letterTracker(letter) {
	if (letterTrackerArray.length === 0) {
		letterTrackerArray.push(letter);
	}
	let letterInArray = letterTrackerArray.find(l => {
		if (l === letter) {
			return true;
		}
	});
	if (letterInArray) {
		return;
	} else {
		letterTrackerArray.push(letter);
	}

}

/*

Psuedo code

-----switch statment changes between hangman images when turn letiable decreases.

switch(turn) {
	case 0:
			$('hangman').innerHTML = '<img src="./assets/images/hangman.jpg" alt="hangman">';
		break;
	case 1:
			$('hangman').innerHTML = '<img src="./assets/images/hangman.jpg" alt="hangman">';
		break;

		etc....	
}

-----add pushed keys to the UI

let usedLetters = [];
usedLetters.push(letter);
let usedLetterElement = $('hangLetters');
usedLetterElement.textContent = usedLetters.


------win and lose logic

if (currentWord === printed) {
	win += 1;
	randomWordGenerator();
} else if (turns === 0){
	alert('you lose');
	refreshBrowser();
}



let gameObject = {
	....all functions of game
}

*/