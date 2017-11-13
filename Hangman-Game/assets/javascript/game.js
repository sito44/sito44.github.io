
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

var currentWord = randomWordGenerator();
var underScores;
console.log(currentWord);
console.log(underScoreGenerator(currentWord));

function $(id) {
	return document.getElementById(id);
};



function randomWordGenerator() {
	var RN = techWords[Math.floor(Math.random() * techWords.length)];
	return RN;
}
function underScoreGenerator(currentWord) {
		var underScore = '_ ';
		var totalUnderscore = [];
		var multiple = currentWord.length;
		for (var i = 0; i < multiple; i++) {
			totalUnderscore.push(underScore);
		}
		$('hangWord').textContent = totalUnderscore;
		

console.log(totalUnderscore);
}
/*document.onkeyup = function(event) {
        var l = event.key;
        console.log(l);
      };*/
