// This is the answers.js file for JavaScript Workshop from DecodeMTL

// This function will return the first character of a string.
var FirstCharacter = function(someString) {
    return someString[0];
}

console.log(FirstCharacter("Hello World"));
console.log(FirstCharacter("For Caesar!"));
console.log(FirstCharacter(""));

// This function will return the last character of a string.
var LastCharacter = function(someString) {
    return someString[(someString.length - 1)];
}

console.log(LastCharacter("Hello World"));
console.log(LastCharacter("For Caesar!"));
console.log(LastCharacter(""));