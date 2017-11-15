
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
var printedUnderScores;
var letter;
var CharacterAt;
var wordLength = currentWord.length;
console.log(currentWord);
console.log(underScoreGenerator(currentWord));
console.log(CharacterAt);


document.onkeyup = function(event) {
        letter = event.key;
        console.log(letter);
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
		 	printedUnderScores = totalUnderscore.join(' ');
			console.log(totalUnderscore);
			$('hangWord').textContent = printedUnderScores;
		


}

function letterCheckerAndPrint(letter) {
	for ( var index in currentWord) {
		if (index = letter) {
			CharacterAt = currentWord.indexOf(letter);
			console.log(CharacterAt);
			totalUnderscore.splice(CharacterAt, CharacterAt + 1,letter);
			console.log(totalUnderscore);
			break;
			/*printedUnderScores = printedUnderScores.splice(CharacterAt,CharacterAt + 1, letter);
			$('hangWord').textContent = printedUnderScores;*/
			
		} else if (index != letter){
			turn = turn - 1;
			$('turns').textContent = turn;
			break;
		}

	}
}
console.log();
			
