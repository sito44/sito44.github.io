'use strict';
$(function () {
	const $body = $('body');

	appendModalHtml();
	// ------------------ Word Bank
	let techWords = [
		'switch',
		'function',
		'object',
		'operator',
		'boolean',
		'hoisting',
		'prototype',
		'parameter',
		'method',
		'recursion',
		'closure',
		'variable'
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
		findIndices(currentWord);
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
				}
				found = true;
			}
		}

		printToScreen(found);
	}

	function printToScreen(z) {
		printed = totalUnderscore.join(' ');
		let wordEval = totalUnderscore.join('');
		
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

// Using Template Literals to insert content and keep correct spacing
function messageBank(string) {
	let result;
	switch (string) {
		case null:
			result = `<h2>You Lose!</h2>`;
			break;

		case 'switch':
			result = `<h2>${string}</h2>
		<p>The <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/switch" target="_blank">${string}</a> statement evaluates an expression, matching the expression's value to a case clause, and executes statements associated with that case, as well as statements in cases that follow the matching case.</p>
		<pre><code>var expr = 'Papayas';
switch (expr) {
  case 'Oranges':
    console.log('Oranges are $0.59 a pound.');
    break;
  case 'Mangoes':
  case 'Papayas':
    console.log('Mangoes and papayas are $2.79 a pound.');
    // expected output: "Mangoes and papayas are $2.79 a pound."
    break;
  default:
    console.log('Sorry, we are out of ' + expr + '.');
}</code></pre>`;
			break;

		case 'function':
			result = `<h2>${string}</h2>
		<p>A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Function" target="_blank">${string}</a> is a code snippet that can be called by other code or by itself, or a variable that refers to the function. When a function is called, arguments are passed to the function as input, and the function can optionally return an output. A function in JavaScript is also an object.</p>
		<pre><code>function foo() {};
// or using the ECMAScript 2015 arrow notation
const foo = () => {};</code></pre>`;
			break;

		case 'object':
			result = `<h2>${string}</h2>
		<p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Object" target="_blank">${string}</a> refers to a data structure containing data and instructions for working with the data. Objects sometimes refer to real-world things, for example a car or map object in a racing game. JavaScript, Java, C++, Python, and Ruby are examples of object-oriented programming languages.</p>`;
			break;

		case 'operator':
			result = `<h2>${string}</h2>
		<p>Logical <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Logical_Operators" target="_blank">${string}</a>s are typically used with Boolean (logical) values. When they are, they return a Boolean value. However, the && and || operators actually return the value of one of the specified operands, so if these operators are used with non-Boolean values, they may return a non-Boolean value.</p>
		<pre><code>var a = 3;
var b = -2;

console.log(a > 0 && b > 0);
// expected output: false

console.log(a > 0 || b > 0);
// expected output: true

console.log(!(a > 0 || b > 0));
// expected output: false</code></pre>`;
			break;
			
		case 'boolean':
			result = `<h2>${string}</h2>
		<p>In computer science, a <a href="https://developer.mozilla.org/en-US/docs/Glossary/Boolean" target="_blank">${string}</a> is a logical data type that can have only the values true or false. For example, in JavaScript, Boolean conditionals are often used to decide which sections of code to execute (such as in if statements) or repeat (such as in for loops).

</p>
<p>Below is some JavaScript pseudocode (it's not truly executable code) demonstrating this concept.</p>
<pre><code>/* JavaScript if statement */
if (boolean conditional) {
   // code to execute if the conditional is true
}

if (boolean conditional) {
  console.log("boolean conditional resolved to true");
} else {
  console.log("boolean conditional resolved to false");
}


/* JavaScript for loop */
for (control variable; boolean conditional; counter) {
  // code to execute repeatedly if the conditional is true
}

for (var i=0; i < 4; i++) {
  console.log("I print only when the boolean conditional is true");
}</code></pre>`;
			break;

		case 'hoisting':
			result = `<h2>${string}</h2>
		<p><a href="https://developer.mozilla.org/en-US/docs/Glossary/Hoisting" target="_blank">${string}</a> is a term you will not find used in any normative specification prose prior to ECMAScript® 2015 Language Specification. Hoisting was thought up as a general way of thinking about how execution contexts (specifically the creation and execution phases) work in JavaScript. However, the concept can be a little confusing at first.</p>
		<p>Conceptually, for example, a strict definition of hoisting suggests that variable and function declarations are physically moved to the top of your code, but this is not in fact what happens. Instead, the variable and function declarations are put into memory during the compile phase, but stay exactly where you typed them in your code.</p>`;
			break;

		case 'prototype':
			result = `<h2>${string}</h2>
		<p>Nearly all objects in JavaScript are instances of Object; a typical object inherits properties (including methods) from Object.<a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/prototype" target="_blank">${string}</a>, although these properties may be shadowed (a.k.a. overridden). However, an Object may be deliberately created for which this is not true (e.g. by Object.create(null)), or it may be altered so that this is no longer true (e.g. with Object.setPrototypeOf).</p>`;
			break;

		case 'parameter':
			result = `<h2>${string}</h2>
		<p>A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Parameter" target="_blank">${string}</a> is a named variable passed into a function. Parameter variables are used to import arguments into functions.</p>`;
			break;

		case 'method':
			result = `<h2>${string}</h2>
		<p>A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Method" target="_blank">${string}</a> is a function which is a property of an object. There are two kind of methods: Instance Methods which are built-in tasks performed by an object instance, or Static Methods which are tasks that can be performed without the need of an object instance.</p>
		<p>Note: In JavaScript functions themselves are objects, so, in that context, a method is actually an object reference to a function</p>`;
			break;

		case 'recursion':
			result = `<h2>${string}</h2>
		<p>An act of a function calling itself. <a href="https://developer.mozilla.org/en-US/docs/Glossary/Recursion" target="_blank">${string}</a> is used to solve problems that contain smaller sub-problems. A recursive function can receive two inputs: a base case (ends recursion) or a recursive case (continues recursion).</p>`;
			break;

		case 'closure':
			result = `<h2>${string}</h2>
		<p>A <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Closures" target="_blank">${string}</a> is the combination of a function and the lexical environment within which that function was declared.</p>
		<pre><code>function init() {
  var name = 'Mozilla'; // name is a local variable created by init
  function displayName() { // displayName() is the inner function, a closure
    alert(name); // use variable declared in the parent function    
  }
  displayName();    
}
init();</code></pre>`;
			break;

		case 'variable':
			result = `<h2>${string}</h2>
		<p>A <a href="https://developer.mozilla.org/en-US/docs/Glossary/Variable" target="_blank">${string}</a> is a named location for storing a value. That way an unpredictable value can be accessed through a predetermined name.</p>`;
			break;

	}
	return result;
}

// ------------------------------------

// ------------------- Event Delegation

$(document).on('click', '.closeButton', function () {
	$('.modalOverlay').removeClass('showModal');
});




