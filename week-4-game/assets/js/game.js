'use strict';
$(document).ready(function(){



var obiWan = {

	name: 'Obi Wan',
	box: $('#chr1 > h4').html(),
	healthBox: $('#chr1Points'),
	healthPoints: 160,
	atkPoints: 5,
	ctrAtk: 10
	

};

var maceWindu = {

	name: 'Mace Windu',
	box: $('#chr2 > h4').html(),
	healthBox: $('#chr2Points'),
	healthPoints: 180,
	atkPoints: 6,
	ctrAtk: 12
	
};

var darthVader = {

	name: 'Darth Vader',
	box: $('#chr3 > h4').html(),
	healthBox: $('#chr3Points'),
	healthPoints: 220,
	atkPoints: 10,
	ctrAtk: 18
	
};

var generalGrievous = {

	name: 'General Grievous',
	box: $('#chr4 > h4').html(),
	healthBox: $('#chr4Points'),
	healthPoints: 200,
	atkPoints: 8,
	ctrAtk: 15
	
};
var Players = $('#players');
var otherPlayers = $('#otherPlayers');
var yourCharacter = $('#yourPlayer');
var defender = $('#defender');
var fightStats = $('#fightInfo');
var remandingBattles = $('#remandingEnemies');

function initializeGame() {
	Players.children().appendTo(Players);
}




	$('.playerBox').click(function(){
		yourCharacter.append(this);
		Players.children().appendTo('#remandingEnemies');
		otherPlayers.children().addClass('enemiesReady');
		$('.playerBox').off();
		
		
	$('.enemiesReady').click(function(){
		if (defender.html() === '') {
		defender.append(this);
			
		} else {
		$('.enemiesReady').off();

		}
	});

	});

	$('button').click(function(){
		if (yourCharacter.html() === ''){
			fightStats.text('Choose a Character');
		} else if (defender.html() === '') {
			fightStats.text('Choose a Enemy');
		} else {
			$('button').off();
			$('button').text('Attack');
			gamePlay();
			
		}
	});

function deathChecker() {
		if ($('#defender > div > p').html() <= 0) {
			defender.empty();

		} else if ($('#yourPlayer > div > p').html() <= 0) {
			yourCharacter.empty();
			fightStats.text('You Lose');

		} else if (otherPlayers.html() === '') {
			fightStats.text('you win!');
		}
 	
}
	function gamePlay() {
		$('button').click(function(){
		deathChecker();

		if ($('#yourPlayer > div > h4').html() === obiWan.box && $('#defender > div > h4').html() === maceWindu.box) {
				maceWindu.healthPoints = maceWindu.healthPoints - obiWan.atkPoints;
				obiWan.healthPoints = obiWan.healthPoints - maceWindu.ctrAtk;
				obiWan.healthBox.text(obiWan.healthPoints);
				maceWindu.healthBox.text(maceWindu.healthPoints);
				obiWan.atkPoints += obiWan.atkPoints;
				maceWindu.ctrAtk += 2;
				fightStats.html(obiWan.name + ' dealt ' + obiWan.atkPoints + ' damage ' + '<br>' + maceWindu.name + ' dealt ' + maceWindu.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === obiWan.box && $('#defender > div > h4').html() === darthVader.box) {
				darthVader.healthPoints = darthVader.healthPoints - obiWan.atkPoints;
				obiWan.healthPoints = obiWan.healthPoints - darthVader.ctrAtk;
				obiWan.healthBox.text(obiWan.healthPoints);
				darthVader.healthBox.text(darthVader.healthPoints);
				obiWan.atkPoints += obiWan.atkPoints;
				darthVader.ctrAtk += 2;
				fightStats.html(obiWan.name + ' dealt ' + obiWan.atkPoints + ' damage ' + '<br>' + darthVader.name + ' dealt ' + darthVader.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === obiWan.box && $('#defender > div > h4').html() === generalGrievous.box) {
				generalGrievous.healthPoints = generalGrievous.healthPoints - obiWan.atkPoints;
				obiWan.healthPoints = obiWan.healthPoints - generalGrievous.ctrAtk;
				obiWan.healthBox.text(obiWan.healthPoints);
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				obiWan.atkPoints += obiWan.atkPoints;
				generalGrievous.ctrAtk += 3;
				fightStats.html(obiWan.name + ' dealt ' + obiWan.atkPoints + ' damage ' + '<br>' + generalGrievous.name + ' dealt ' + generalGrievous.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === maceWindu.box && $('#defender > div > h4').html() === obiWan.box) {
				obiWan.healthPoints = obiWan.healthPoints - maceWindu.atkPoints;
				maceWindu.healthPoints = maceWindu.healthPoints - obiWan.ctrAtk;
				maceWindu.healthBox.text(maceWindu.healthPoints);
				obiWan.healthBox.text(obiWan.healthPoints);
				maceWindu.atkPoints += maceWindu.atkPoints;
				obiWan.ctrAtk += 2;
				fightStats.html(maceWindu.name + ' dealt ' + maceWindu.atkPoints + ' damage ' + '<br>' + obiWan.name + ' dealt ' + obiWan.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === maceWindu.box && $('#defender > div > h4').html() === darthVader.box) {
				darthVader.healthPoints = darthVader.healthPoints - maceWindu.atkPoints;
				maceWindu.healthPoints = maceWindu.healthPoints - darthVader.ctrAtk;
				maceWindu.healthBox.text(maceWindu.healthPoints);
				darthVader.healthBox.text(darthVader.healthPoints);
				maceWindu.atkPoints += maceWindu.atkPoints;
				darthVader.ctrAtk += 5;
				fightStats.html(maceWindu.name + ' dealt ' + maceWindu.atkPoints + ' damage ' + '<br>' + darthVader.name + ' dealt ' + darthVader.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === maceWindu.box && $('#defender > div > h4').html() === generalGrievous.box) {
				generalGrievous.healthPoints = generalGrievous.healthPoints - maceWindu.atkPoints;
				maceWindu.healthPoints = maceWindu.healthPoints - generalGrievous.ctrAtk;
				maceWindu.healthBox.text(maceWindu.healthPoints);
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				maceWindu.atkPoints += maceWindu.atkPoints;
				generalGrievous.ctrAtk += 5;
				fightStats.html(maceWindu.name + ' dealt ' + maceWindu.atkPoints + ' damage ' + '<br>' + generalGrievous.name + ' dealt ' + generalGrievous.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === darthVader.box && $('#defender > div > h4').html() === obiWan.box) {
				obiWan.healthPoints = obiWan.healthPoints - darthVader.atkPoints;
				darthVader.healthPoints = darthVader.healthPoints - obiWan.ctrAtk;
				darthVader.healthBox.text(darthVader.healthPoints);
				obiWan.healthBox.text(obiWan.healthPoints);
				darthVader.atkPoints += darthVader.atkPoints;
				obiWan.ctrAtk += 2;
				fightStats.html(darthVader.name + ' dealt ' + darthVader.atkPoints + ' damage ' + '<br>' + obiWan.name + ' dealt ' + obiWan.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === darthVader.box && $('#defender > div > h4').html() === maceWindu.box) {
				maceWindu.healthPoints = maceWindu.healthPoints - darthVader.atkPoints;
				darthVader.healthPoints = darthVader.healthPoints - maceWindu.ctrAtk;
				darthVader.healthBox.text(darthVader.healthPoints);
				maceWindu.healthBox.text(maceWindu.healthPoints);
				darthVader.atkPoints += darthVader.atkPoints;
				maceWindu.ctrAtk += 15;
				fightStats.html(darthVader.name + ' dealt ' + darthVader.atkPoints + ' damage ' + '<br>' + maceWindu.name + ' dealt ' + maceWindu.ctrAtk + ' counter damage');

				
		} else if ($('#yourPlayer > div > h4').html() === darthVader.box && $('#defender > div > h4').html() === generalGrievous.box) {
				generalGrievous.healthPoints = generalGrievous.healthPoints - darthVader.atkPoints;
				darthVader.healthPoints = darthVader.healthPoints - generalGrievous.ctrAtk;
				darthVader.healthBox.text(darthVader.healthPoints);
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				darthVader.atkPoints += darthVader.atkPoints;
				generalGrievous.ctrAtk += 15;
				fightStats.html(darthVader.name + ' dealt ' + darthVader.atkPoints + ' damage ' + '<br>' + generalGrievous.name + ' dealt ' + generalGrievous.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === generalGrievous.box && $('#defender > div > h4').html() === obiWan.box) {
				obiWan.healthPoints = obiWan.healthPoints - generalGrievous.atkPoints;
				generalGrievous.healthPoints = generalGrievous.healthPoints - obiWan.ctrAtk;
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				obiWan.healthBox.text(obiWan.healthPoints);
				generalGrievous.atkPoints += generalGrievous.atkPoints;
				obiWan.ctrAtk += 2;
				fightStats.html(generalGrievous.name + ' dealt ' + generalGrievous.atkPoints + ' damage ' + '<br>' + obiWan.name + ' dealt ' + obiWan.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === generalGrievous.box && $('#defender > div > h4').html() === maceWindu.box) {
				maceWindu.healthPoints = maceWindu.healthPoints - generalGrievous.atkPoints;
				generalGrievous.healthPoints = generalGrievous.healthPoints - maceWindu.ctrAtk;
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				maceWindu.healthBox.text(maceWindu.healthPoints);
				generalGrievous.atkPoints += generalGrievous.atkPoints;
				maceWindu.ctrAtk += 12;
				fightStats.html(generalGrievous.name + ' dealt ' + generalGrievous.atkPoints + ' damage ' + '<br>' + maceWindu.name + ' dealt ' + maceWindu.ctrAtk + ' counter damage');
				
		} else if ($('#yourPlayer > div > h4').html() === generalGrievous.box && $('#defender > div > h4').html() === darthVader.box) {
				darthVader.healthPoints = darthVader.healthPoints - generalGrievous.atkPoints;
				generalGrievous.healthPoints = generalGrievous.healthPoints - darthVader.ctrAtk;
				generalGrievous.healthBox.text(generalGrievous.healthPoints);
				darthVader.healthBox.text(darthVader.healthPoints);
				generalGrievous.atkPoints += generalGrievous.atkPoints;
				darthVader.ctrAtk += 10;
				fightStats.html(generalGrievous.name + ' dealt ' + generalGrievous.atkPoints + ' damage ' + '<br>' + darthVader.name + ' dealt ' + darthVader.ctrAtk + ' counter damage');
				
		}

		});

		
	}






});


