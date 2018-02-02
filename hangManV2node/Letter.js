function Letter(l) {
    this.letter = l;
    this.underScore = '_ ';
    this.beenGuessed = false;
    this.guessPrint = function() {
        if (this.beenGuessed) {
            return this.letter;
        } else {return this.underScore};
    }
    this.guessChecker = function(guess){
        if (guess === this.letter) {
            this.beenGuessed = true;
        }else {this.beenGuessed = false};
    }
}

 
module.exports.Letter = Letter;