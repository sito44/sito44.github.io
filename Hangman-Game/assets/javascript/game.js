
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
var currentWord = randomWordGenerator();
var totalUnderscore = [];
var printed;
var letter;
var indices;
var found;

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


function printToScreen()	{
		printed = totalUnderscore.join(' ');
		$('hangWord').textContent = printed;

			if (found === true) {
	 			printed = totalUnderscore.join(' ');
				$('hangWord').textContent = printed;
				
			} else if (found === false){
				turn -= 1;
				$('turns').textContent = turn;
			} else if (printed == currentWord) {
				win += 1;
				$('wins').textContent = win;
			}
}

function letterCheckerAndPrint(x) {

	
	
	for (var w = 0; w < currentWord.length; w++) {
			 	

		if (currentWord[w] === x || found === false) {
			found = true;
			for (var r in indices) {
				delete totalUnderscore[indices[r]];
				totalUnderscore[indices[r]] = x;
				console.log(r);
			}
				break;
				console.log(totalUnderscore);
				
			
		} else if (currentWord[w] !== x || found === true) {
			
			found = false;
		}
			break;

	}
				printToScreen();
}

switch(turn) {
	case 0:
			$('hangman').innerHTML = '<img src="./assets/images/hangman.jpg" alt="hangman">';
		break;
	case 1:
			$('hangman').innerHTML = '<img src="./assets/images/hangman.jpg" alt="hangman">';
		break;	
}
console.log(currentWord);
			
