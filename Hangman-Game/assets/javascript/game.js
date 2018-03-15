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
let currentWord = randomWordGenerator();
let totalUnderscore = [];
let printed;
let letter;
let indices;
let letterTrackerArray = [];


console.log(currentWord);
console.log(underScoreGenerator(currentWord));

imageChange();

document.onkeyup = function (event) {
	letter = event.key;
	console.log(letter);
	console.log(findIndices(currentWord));
	console.log(letterTrackerArray.length);
	letterTracker(letter);
	letterCheckerAndPrint(letter);
	imageChange();

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

function imageChange() {
	switch (turn) {
		case 6:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game0.png">';
			break;
		case 5:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game1.png">';
			break;
		case 4:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game2.png">';
			break;
		case 3:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game3.png">';
			break;
		case 2:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game4.png">';
			break;
		case 1:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game5.png">';
			break;
		case 0:
			$('hangman').innerHTML = '<img src="./assets/images/Hangman_game6.png">';
			break;


	}
}