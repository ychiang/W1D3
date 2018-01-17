
var countLetters = function countLetters(letters) {
  var letterCounts = {}


  for (var i = 0; i < letters.length; i ++) {
    var letter = letters[i];
    if (letter !== " ") {
      letterCounts[letter] = 0;
    }

  }
  return letterCounts;
}

console.log(countLetters(""));
console.log(countLetters("    "));
console.log(countLetters("lighthouse in the house"));



