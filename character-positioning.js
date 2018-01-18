
var countLetters = function countLetters(letters) {
  var letterCounts = {}


  for (var i = 0; i < letters.length; i ++) {
    var letter = letters[i];
    if (letter !== " "){
      if(letterCounts.hasOwnProperty(letter)) {
        letterCounts[letter].push(i);
      } else {
        letterCounts[letter] = [i];
      }
    } 
  }
  return letterCounts;
}

console.log(countLetters(""));
console.log(countLetters("    "));
console.log(countLetters("lighthouse in the house"));



