// This is the answers.js file for JavaScript Workshop from DecodeMTL

// This function will return the first character of a string.
var firstCharacter = function(someString) {
    return someString[0];
}

console.log(firstCharacter("Hello World"));
console.log(firstCharacter("For Caesar!"));
console.log(firstCharacter(""));

// This function will return the last character of a string.
var lastCharacter = function(someString) {
    return someString[(someString.length - 1)];
}

console.log(lastCharacter("Hello World"));
console.log(lastCharacter("For Caesar!"));
console.log(lastCharacter(""));

// This function will take a string and a number, and returns the character at the position represented by the number.
var characterPos = function(someString, someNum) {
  return someString[(someNum - 1)];  
};

console.log(characterPos("Heuioo there", 4));
console.log(characterPos("Yippee Quick", 8));
console.log(characterPos("", 3));