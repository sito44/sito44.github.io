
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

var turn = 6;
var currentWord = randomWordGenerator();
var totalUnderscore = [];
var printed;
var letter;

var indices;
var wordLength = currentWord.length;
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
function findIndices(word) {
		indices = [];
	for(var i = 0; i < word.length; i++) {
    	if (word[i] === letter) indices.push(i);
    }
    return indices;
}


function printToScreen()	{
	 		printed = totalUnderscore.join(' ');
			$('hangWord').textContent = printed;
}
function letterCheckerAndPrint(letter) {
	for ( var index in currentWord) {
			

		if (index = letter) {
			
		for (var r in indices) {
			delete totalUnderscore[indices[r]];
			totalUnderscore[indices[r]] = letter;
		}
			printToScreen();
			console.log(totalUnderscore);
			break;
			
		} else if (index != letter){
			$('turns').textContent = turn - 1;
			break;
		}

	}
}

			
