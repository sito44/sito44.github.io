'use strict';
$(function () {
	const $body = $('body');

	appendModalHtml();
	// ------------------ Word Bank
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
	// ------------------ Application State
	let win = 0;
	let turn;
	let currentWord;
	let totalUnderscore;
	let printed;
	let letter;
	let indices;
	let letterTrackerArray;
	// ----------------------

	// ---------------------- Initialization

	function appendModalHtml() {

		$body.append(`
	  <div class="modalOverlay">
		<button class="closeButton">X</button>
		<div class="modalContent">
		</div>
	  </div>
    `);
	}

	function initialize() {

		turn = 6;
		currentWord = randomWordGenerator();
		totalUnderscore = [];
		printed;
		letter;
		indices;
		letterTrackerArray = [];

		imageChange();
		underScoreGenerator(currentWord);
		$('#wins').text(win);
		$('#hangWord').text(totalUnderscore.join(' '));
		$('#hangLetters').text("");
		$('#turns').text(turn);

	}

	initialize();

	// --------------------------

	// -------------------------- Key Binding

	document.onkeyup = function (event) {
		if (turn <= 0) return;
		letter = event.key;
		console.log(letter);
		console.log(findIndices(currentWord));
		console.log(letterTrackerArray.length);
		letterTracker(letter);
		letterCheckerAndPrint(letter);
		imageChange();

	};

	// ---------------------------

	// --------------------------- Word Generators

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

	// ---------------------------

	// --------------------------- Utils

	function findIndices(indicesInWord) {
		indices = [];
		for (let i = 0; i < indicesInWord.length; i++) {
			if (indicesInWord[i] === letter) indices.push(i);
		}
		return indices;
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

	function printToScreen(z) {
		printed = totalUnderscore.join(' ');
		let wordEval = totalUnderscore.join('');
		console.log(printed);
		$('#hangWord').text(printed);

		if (wordEval === currentWord) {
			win += 1;
			$('#wins').text(win);
			modal(messageBank(currentWord));
			setTimeout(() => {
				initialize();
			}, 1000);
		} else if (z === true) {
			printed = totalUnderscore.join(' ');
			$('#hangWord').text(printed);

		} else if (z === false) {
			turn -= 1;
			$('#turns').text(turn);
			if (turn === 0) {
				win = 0;
				modal(messageBank(null));
				setTimeout(() => {
					initialize();
				}, 1000);
			};
		}

		if (letterTrackerArray[0] === undefined) {
			return;
		} else {
			let usedLetters = letterTrackerArray.join(' ');
			console.log(usedLetters);
			$('#hangLetters').text(usedLetters);
		}
	}

	function letterTracker(letter) {

		if (letterTrackerArray.length === 0) letterTrackerArray.push(letter);

		let letterInArray = letterTrackerArray.find(l => {
			if (l === letter) return true;
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
				$('#hangman').html('<img src="./assets/images/Hangman_game0.png">');
				break;
			case 5:
				$('#hangman').html('<img src="./assets/images/Hangman_game1.png">');
				break;
			case 4:
				$('#hangman').html('<img src="./assets/images/Hangman_game2.png">');
				break;
			case 3:
				$('#hangman').html('<img src="./assets/images/Hangman_game3.png">');
				break;
			case 2:
				$('#hangman').html('<img src="./assets/images/Hangman_game4.png">');
				break;
			case 1:
				$('#hangman').html('<img src="./assets/images/Hangman_game5.png">');
				break;
			case 0:
				$('#hangman').html('<img src="./assets/images/Hangman_game6.png">');
				break;


		}
	}

	// ------------------------------------ Modal

	function modal(content) {
		$('.modalContent').html(content);
		$('.modalOverlay').addClass('showModal');

	}

});

function messageBank(string) {
	let result;
	switch (string) {
		case null:
			result = `<h2>You Lose!</h2>`;
			break;
		case 'switch':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'functions':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'objects':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'operators':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'booleans':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'hoisting':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'prototypes':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'parameters':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'methods':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'recursion':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
		case 'closures':
			result = `<h2>${string}</h2>
		<p>test</p>`;
			break;
	}
	return result;
}
// ------------------------------------

// ------------------- Event Delegation

$(document).on('click', '.closeButton', function () {
	$('.modalOverlay').removeClass('showModal');
});