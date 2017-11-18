
'use strict';
var techWords = [
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
	'closures'];
var win = 0;
var turn = 7;
var pointCondition;
var currentWord = randomWordGenerator();
var totalUnderscore = [];
var printed;
var letter;
var indices;


console.log(currentWord);
console.log(underScoreGenerator(currentWord));



document.onkeyup = function(event) {
        letter = event.key;
        console.log(letter);
        console.log(findIndices(currentWord));
        letterCheckerAndPrint(letter);
         
      };

function $(id) {
	return document.getElementById(id);
}


function randomWordGenerator() {
	var RN = techWords[Math.floor(Math.random() * techWords.length)];
	return RN;
}

function underScoreGenerator(currentWord) {
		var underScore = '_ ';
		var multiple = currentWord.length;
		for (var i = 0; i < multiple; i++) {
			totalUnderscore.push(underScore);
		}

		printToScreen();
}

function findIndices(indicesInWord) {
		indices = [];
	for(var i = 0; i < indicesInWord.length; i++) {
    	if (indicesInWord[i] === letter) indices.push(i);
    }
    return indices;
}


function printToScreen(z)	{
		printed = totalUnderscore.join(' ');
		$('hangWord').textContent = printed;

			if (z === true) {
	 			printed = totalUnderscore.join(' ');
				$('hangWord').textContent = printed;
				
			} else if (z === false){
				turn -= 1;
				$('turns').textContent = turn;
			} else if (printed == currentWord) {
				win += 1;
				$('wins').textContent = win;
			}
}

function letterCheckerAndPrint(x) {

			var found = false;	
			pointCondition = found;
	
	for (var w = 0; w < currentWord.length; w++) {

		if (currentWord[w] === x && found === false) {
			
			found = true;
			for (var r in indices) {
				delete totalUnderscore[indices[r]];
				totalUnderscore[indices[r]] = x;
				console.log(r);
			}
				
				console.log(totalUnderscore);
				
			
		} else if (currentWord[w] !== x && found === true) {
			
			found = false;
		}
			

	}
				printToScreen(pointCondition);
}


console.log(currentWord);

/*

Psuedo code

-----switch statment changes between hangman images when turn variable decreases.

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

var usedLetters = [];
usedLetters.push(letter);
var usedLetterElement = $('hangLetters');
usedLetterElement.textContent = usedLetters.


------win and lose logic

if (currentWord === printed) {
	win += 1;
	randomWordGenerator();
} else if (turns === 0){
	alert('you lose');
	refreshBrowser();
}



var gameObject = {
	....all functions of game
}

*/






			
