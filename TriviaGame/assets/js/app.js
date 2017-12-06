'use strict';
$(function() {

var quizContainer = $('#quiz');
var quizResultsContainer = $('#results');
var startBtn = $('#start');
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

	generateQuestion();	
});

function quizTimer() {

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
	"<input type='radio' value='" + a1 + "'>" + "<span>" + a1 + "</span><br>" +
	"<input type='radio' value='" + a2 + "'>" + "<span>" + a2 + "</span><br>" +
	"<input type='radio' value='" + a3 + "'>" + "<span>" + a3 + "</span><br>" +
	"<input type='radio' value='" + a4 + "'>" + "<span>" + a4 + "</span><br>"
	;
console.log(qInjection);

	quizContainer.append(qInjection);
}
}



});
