'use strict';
$(function() {
var timer = $('#timerDisplay');
var quizContainer = $('#quiz');
var quizResultsContainer = $('#results');
var startBtn = $('#start');
var submitBtn = $('#submit');
var retryBtn = $('#retry');
var totalTime = 121;
var clockRunning = false;
var intervalCount;

var myQuestions = [
{

	question: "What is Neo's name inside the matrix?",
	answers: {
		a: "allen green",
		b: "william hentz",
		c: "thomas anderson",
		d: "henery blake"
	},
	correctAnswer: "b"
},
{
	question: "Who is the leader of the agents?",
	answers: {
		a: "brian bishop",
		b: "Mr. jacobs",
		c: "director hun",
		d: "Mr. Smith"
	},
	correctAnswer: "d"

}
];

startBtn.on("click", function(){

	btnDisplay();
	generateQuestion();
	quizTimer();	
});

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
		clearInterval(intervalCount);
	}
	timer.html(timePrettifier(totalTime));
console.log(totalTime);
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

	"<h3>" + q + "</h3>" + 
	"<input type='radio' name='selection" + [i] + "' value='" + a1 + "'>" + "<span>" + a1 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a2 + "'>" + "<span>" + a2 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a3 + "'>" + "<span>" + a3 + "</span><br>" +
	"<input type='radio' name='selection" + [i] + "' value='" + a4 + "'>" + "<span>" + a4 + "</span><br>"
	;
console.log(qInjection);

	quizContainer.append(qInjection);
}
}



});
