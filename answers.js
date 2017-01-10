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
console.log(characterPos("", 5));

// This function will take two numbers and add them together.
// If strings are added, it will add the strings together.
var addTwo = function (a, b) {
  return a + b;  
};

console.log(addTwo(3, 87));
console.log(addTwo(63736, 882));
console.log(addTwo(0, 0));
console.log(addTwo("utah", "winner"));

// This function will take two numbers and multiply them together.
// If strings are added, it will return a NaN.
var multiplyTwo = function (a, b) {
  return a * b;  
};

console.log(multiplyTwo(4, 5));
console.log(multiplyTwo(55, 55));
console.log(multiplyTwo(9, 0));
console.log(multiplyTwo("utah", "winner"));

// Write a function that takes two numbers and a string. 
// If the string is ‘add’, then return the sum of the numbers. 
// If the string is ‘subtract’, return the difference. 
// If the string is ‘mult’, return the product. 
// If the string is ‘div’, return the ratio. Otherwise return 0.
var twoNumOneString = function(num1, num2, someString) {
    if (someString.toUpperCase() === "ADD") {
        return num1 + num2;
    }
    else if (someString.toUpperCase() === "SUBTRACT") {
        return Math.abs(num1 - num2);
    }
    else if (someString.toUpperCase() === "MULT") {
        return num1 * num2;
    }
    else if (someString.toUpperCase() === "DIV") {
        return num1 / num2;
    }
    else {
        return 0;
    }
};

console.log(twoNumOneString(87, 22, "add"));
console.log(twoNumOneString(34, 100, "subtract"));
console.log(twoNumOneString(20, 3, "mult"));
console.log(twoNumOneString(50, 10, "div"));
console.log(twoNumOneString(3, 2, ""));

// This function will take a string and a number, and then return the string repeated that many number of times.
var stringRepeat = function (aString, aNum) {
    var outPut = "";
    for (var i = 0; i < aNum; i++) {
        outPut = outPut + aString + "\n";
    }
    return outPut;
}

console.log(stringRepeat("Hello World", 10));
console.log(stringRepeat("boolah", "hello"));

// This function will print the numbers from 1 to 10 inclusively.
var oneToTen = function () {
    for (var i = 1; i <= 10; i++) {
        console.log(i);
    }
};

oneToTen();