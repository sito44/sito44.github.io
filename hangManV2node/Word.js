const letter = require('./Letter');
/* let r = new letter.Letter('r');
console.log(r); */


function Word(string) {
    this.letterArray = string.split('').map(function (l) {
        return new letter.Letter(l);
    });
    this.toString = function () {
        let strgAry = this.letterArray.map(function(l){
            return l.guessPrint();
        });
        let strg = strgAry.join('');
        console.log(strg);
    }
    this.userGuess = function (guess) {
        letterArray.forEach(letterArray.guessChecker(guess));
    }
}
const zoo = new Word('zoo');
console.log(zoo);
console.log(zoo.letterArray);
console.log(zoo.toString());
module.exports.Word = Word;