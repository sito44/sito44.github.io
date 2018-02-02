const Word = require('./Word');
const w = Word.Word;
console.log(Word.Word);
function selectWord() {
    const bankOfWords = ['guitar', 'piano', 'flute', 'bass', 'trumpet', 'drums',];
    let randomIndexNum = Math.round(Math.random() * bankOfWords.length);
    console.log(randomIndexNum);
    return bankOfWords[randomIndexNum];
    
}
const word1 = new w(selectWord());
console.log(word1);

