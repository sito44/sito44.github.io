const letter = require('./Letter');
const L = letter.Letter;

function Word(string) {
    this.letterArray = string.split('').map(function (l) {
        return new L(l);
    });
    this.toStrg = function () {
        let strgAry = this.letterArray.map(function (l) {
            return l.guessPrint();
        });
        let strg = strgAry.join('');
        return strg;
    }
    this.userGuess = function (guess) {
        this.letterArray.forEach(function (l) {
            l.guessChecker(guess);
        });
    }
}

module.exports.Word = Word;