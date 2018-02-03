const Word = require('./Word');
const inquirer = require('inquirer');
const w = Word.Word;
let winnerString;
const word1 = new w(selectWord());
let turns = 6;
console.log(word1.toStrg());

function selectWord() {
    const bankOfWords = [
        'guitar',
        'piano',
        'flute',
        'bass',
        'trumpet',
        'drums',
        'violin',
        'horn',
        'synthesizer',
        'xylophone',
        'accordion',
        'banjo',
        'clarinet'
    ];
    let randomIndexNum = Math.round(Math.random() * bankOfWords.length);
    winnerString = bankOfWords[randomIndexNum];
    return winnerString;

}

function nodeMan() {
    if (turns === 0) {
        return console.log('You Lose!');
    };

    let incrementorCheck = word1.toStrg();
    inquirer.prompt([{
        name: 'letter',
        message: 'Guess the Musical Instrument, you have ' + turns + ' turns left -->',
        type: 'input'

    }]).then(function (answer) {
        let currentLetter = answer.letter;
        word1.userGuess(currentLetter);
        let currentWordState = word1.toStrg();
        console.log(currentWordState);
        if (incrementorCheck === currentWordState) {
            turns -= 1;
        } else if (currentWordState === winnerString) {
            return console.log('You Win!')
        };
        nodeMan();
    });
}

nodeMan();