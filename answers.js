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

// This function will write a loop printing 1 to 10 as words.
var oneToTenLoop = function () {
    var wordLoop = ["one","two","three","four","five","six","seven","eight","nine","ten"];
    for (var i = 0; i < 10; i++) {
        console.log(wordLoop[i]);
    }
}

oneToTenLoop();

// This function will write a loop printing numbers 1 to 10, but will print each number by that number that many times.
var printLoopByNumber = function () {
    for (var i = 1; i <= 10; i++) {
        for (var j = 1; j <= i; j++) {
            console.log(i);
        }
    }
};

printLoopByNumber();

// This function will take a string and print it in reverse.
var reverseName = function (aString) {
    var reverse = "";
    for (var i = (aString.length - 1); i >= 0; i--) {
        reverse = reverse + aString[i];
    }
    console.log(reverse);
}

reverseName("CareBear");

reverseName("");

// This function will return the factorial of a given number.
var numberFactorial = function (aNum) {
    var numFact = 1;
    if (aNum < 0) {
        numFact = "Undefined. Negative factorials are not possible."
        return numFact;  
    }
    else {
        for (var i = aNum; i > 0; i--){
            numFact = numFact * i;
        }
    }
    return numFact;
}

console.log(numberFactorial(8));
console.log(numberFactorial(0));
console.log(numberFactorial(-3));

// This function will take a phrase as a string and return the longest word in that phrase.
var longestWord = function (aString) {
    var wordArr = aString.split(" ");
    var longWord = 0;
    var longest = "";
    for (var i = 0; i < wordArr.length; i++) {
        if (longWord < wordArr[i].length) {
            longWord = wordArr[i].length;
            longest = wordArr[i];
        }
    }
    return longest;
}

console.log(longestWord("Hey there you sillynilly dog"));
console.log(longestWord("Yo what's up??? Come to California?"));
console.log(longestWord("About that scientific book you found....."));

// Write a function that takes a phrase, and returns the same phrase with every word capitalized. 
// For example, if you pass your function "hello world", it should return “Hello World” and if you pass it 
// “HELLO WORLD” or even "HeLLo WoRLD", it will also return "Hello World". Test your function of a few inputs.
var capitalWords = function (aString) {
    var wordArr = aString.toLowerCase().split(" ");
    var tempWord = "";
    var firstLetter = "";
    var propCapital = "";
    for (var i = 0; i < wordArr.length; i++) {
        tempWord = wordArr[i];
        firstLetter = tempWord[0].toUpperCase();
        propCapital = propCapital + firstLetter;
        for (var j = 1; j < tempWord.length; j++) {
            propCapital = propCapital + tempWord[j];
        }
        if (!(wordArr[i] === " ")) {
            propCapital = propCapital + " ";
        }
    }
    return propCapital;
}

console.log(capitalWords("hey tYYere bLAh bJJh blah blah"));
console.log(capitalWords("Hello again world, I am back and I don't feel very nICe right NOWZ!"));

// Write a function that takes an array and returns the largest number of the array. Test your function on a few inputs.
var largestNumber = function (anArray) {
    var largest = 0;
    for (var i = 0; i < anArray.length; i++) {
        if (largest < anArray[i]) {
            largest = anArray[i];
        }
    }
    return largest;
}

console.log(largestNumber([1, 4, 98, 102, -4, 3, 2765, 97]));
console.log(largestNumber([-2221, 47963874, 0, 102, -9876544, 3, 2433265, "hello"]));
console.log(largestNumber([1, 4, true, 98, 102,-4.97612458,3, 2765324536 , false, 97]));

// Write a function that takes an array, and returns a filtered array. 
// The filtered array should only contain the truthy values from the initial array. 
// Hint: there is an array method called filter that can help you with this :)
var truthyFilter = function (anArray) {
     return anArray.filter(Boolean);
}

console.log(truthyFilter([1, false, 0, "hello", !true, -9999, 0.34, NaN, "8027347", NaN, Math.random(), NaN, 468523, "hey how are you?"]));

