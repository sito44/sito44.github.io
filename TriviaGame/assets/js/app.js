'use strict';
$(function() {
var timer = $('#timerDisplay');
var quizContainer = $('#quiz');
var quizResultsContainer = $('#results');
var startBtn = $('#start');
var submitBtn = $('#submit');
var retryBtn = $('#retry');
var gif = $('#gifImage');
var totalTime = 121;
var clockRunning = false;
var intervalCount;
var correctAnswersArray = [];
var selectedAnswersArray = [];
var correct = 0;
var incorrect = 0;

var myQuestions = [
{

	question: "What is Neo's name inside the matrix?",
	answers: {
		a: "allen green",
		b: "william hentz",
		c: "thomas anderson",
		d: "henery blake"
	},
	correctAnswer: "thomas anderson"
},
{
	question: "Who is the leader of the agents?",
	answers: {
		a: "brian bishop",
		b: "Mr. jacobs",
		c: "director hun",
		d: "Mr. Smith"
	},
	correctAnswer: "Mr. Smith"

},
{
	question: "Who is the leader of the human rebellion?",
	answers: {
		a: "caprinicus",
		b: "general latus",
		c: "morpheus",
		d: "darren bronz"
	},
	correctAnswer: "morpheus"

},
{
	question: "What is the name of the last human city?",
	answers: {
		a: "zion",
		b: "brelion",
		c: "capitol mintis",
		d: "xenzna"
	},
	correctAnswer: "zion"

},
{
	question: "Who must the team of rebel hackers recruit to find the architect?",
	answers: {
		a: "the AI ghost",
		b: "the key maker",
		c: "psychic twins",
		d: "atimon"
	},
	correctAnswer: "the key maker"

},
{
	question: "Who is the duel ego of the architect?",
	answers: {
		a: "the woman in the red dress",
		b: "sharalin",
		c: "megabit's mother",
		d: "the oracle"
	},
	correctAnswer: "the oracle"

},
{
	question: "What are the machines called that patrol the surface?",
	answers: {
		a: "octoborgs",
		b: "sentinels",
		c: "vinzerds",
		d: "harvesters"
	},
	correctAnswer: "sentinels"

},
{
	question: "What is the name of morpheus's ship?",
	answers: {
		a: "nebuchadnezzar",
		b: "Logos",
		c: "stratus",
		d: "hover giant"
	},
	correctAnswer: "nebuchadnezzar"

},
{
	question: "Who betrays the team of rebels when they are plugged into the matrix?",
	answers: {
		a: "apoc",
		b: "dozer",
		c: "merovingian",
		d: "cypher"
	},
	correctAnswer: "cypher"

},
{
	question: "what color pill must you take to wake up from the matrix?",
	answers: {
		a: "blue",
		b: "silver",
		c: "red",
		d: "gold"
	},
	correctAnswer: "red"

},
{
	question: "what does neo need to come back to life?",
	answers: {
		a: "the combined willpower of the team",
		b: "the reboot software",
		c: "a freed mind",
		d: "trinitys love"
	},
	correctAnswer: "trinitys love"

}
];

startBtn.on("click", function(){

	btnDisplay();
	generateQuestion();
	quizTimer();	
});

submitBtn.on("click", function(){
	clearInterval(intervalCount);
	scoreGenerator();
	submitBtn.hide();
	for (var r = 0; r < myQuestions.length; r++) {
	if (selectedAnswersArray[r] !== correctAnswersArray[r]) {
		retryBtn.show();
		gif.html('<img src="./assets/images/matrixJump.gif" alt="NeoLoses">');
	}
}
	if (correct == myQuestions.length) {
		alert('100% correct......follow the white rabbit...');
		gif.html('<img src="./assets/images/matrixFight.gif" alt="NeoWins">');
	}

});
retryBtn.on("click", quizRefresh);

function btnDisplay() {
	startBtn.hide();
	timer.show();
	submitBtn.show();
}
function quizTimer() {

	
	totalTime = totalTime - 1;
	if (!clockRunning) {

		intervalCount = setInterval(quizTimer, 1000);
		clockRunning = true;
	}
	if (totalTime === 0) {
		gif.html('<img src="./assets/images/matrixBug.gif" alt="NeoLoses">');
		scoreGenerator();
		retryBtn.show();
		submitBtn.hide();
		clearInterval(intervalCount);
	}
	timer.html(timePrettifier(totalTime));

}
function timePrettifier(num) {
	var minutes = Math.floor(num / 60);
	var seconds = num - (minutes * 60);

	if (seconds < 10) {
		seconds = "0" + seconds;
	}
	if (minutes === 0) {
      minutes = "00";

    } else if (minutes < 10) {

      minutes = "0" + minutes;
    }
    return minutes + ":" + seconds;
}
function generateQuestion() {
	
	for (var i = 0; i < myQuestions.length; i++) {

	var q, a1, a2, a3, a4;

		q = myQuestions[i].question;
		a1 = myQuestions[i].answers.a;
		a2 = myQuestions[i].answers.b;
		a3 = myQuestions[i].answers.c;
		a4 = myQuestions[i].answers.d;
	
	var qInjection = 
	"<div class='selector" + [i] + "'>" +
	"<h3>" + q + "</h3>" + 
	"<input type='radio' name='selection" + [i] + "' value='" + a1 + "'>" + "<span>" + a1 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a2 + "'>" + "<span>" + a2 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a3 + "'>" + "<span>" + a3 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a4 + "'>" + "<span>" + a4 + "</span><br>" +
	"</div>"
	;
	correctAnswersArray.push(myQuestions[i].correctAnswer);

	quizContainer.append(qInjection);
}
}
function scoreGenerator() {
	var resultsString;
	for (var s = 0; s < myQuestions.length; s++) {
		var selectedAnswer = $('input[name=selection'+ [s] + ']:checked').val();
		selectedAnswersArray.push(selectedAnswer);

		if (selectedAnswersArray[s] === correctAnswersArray[s]) {
			correct = correct + 1;
		} else {
			incorrect = incorrect + 1;
			$('.selector' + [s]).css("color", "red");
		}
		
	}
	resultsString =

		"<span>You got " + correct + " questions correct out of " + myQuestions.length + "</span><br>" +
		"<span>" + incorrect + " incorrent answers</span>"
	;

	quizResultsContainer.append(resultsString);
	
}
function quizRefresh() {

	quizContainer.empty();
	quizResultsContainer.empty();
	retryBtn.hide();
	timer.hide();
	startBtn.show();
	correct = 0;
	incorrect = 0;
	totalTime = 121;
	clockRunning = false;
	correctAnswersArray = [];
	selectedAnswersArray = [];
	gif.empty();

}


});
