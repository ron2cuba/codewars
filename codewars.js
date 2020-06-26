/**
 * Réalisez la fonction initXY
 */
let mobs = [];
mobs.length = 20;

function initXY() {
  for (let i = 0; i < mobs.length; i++) {}
}

/**
 * Réalisez la fonction sortNumbers
 */

var tInf = [];
var tSup = [];
var tInit = [10, 5, 6, 8, 21, 56, 4, 39, 2, 99];
function sortNumbers(tInit, tInf, tSup) {
  tInit.forEach((number) => {
    if (number < 10) {
      tInf.push(number);
    } else {
      tSup.push(number);
    }
  });
}
/**
 *
 * Codewars
 */

// You probably know the "like" system from Facebook and other pages. People can "like" blog posts, pictures or other items. We want to create the text that should be displayed next to such an item.

// Implement a function likes :: [String] -> String, which must take in input array, containing the names of people who like an item. It must return the display text as shown in the examples:

// likes [] // must be "no one likes this"
// likes ["Peter"] // must be "Peter likes this"
// likes ["Jacob", "Alex"] // must be "Jacob and Alex like this"
// likes ["Max", "John", "Mark"] // must be "Max, John and Mark like this"
// likes ["Alex", "Jacob", "Mark", "Max"] // must be "Alex, Jacob and 2 others like this"

function likes(names) {
  if (typeof names == "undefined" || names.length == 0) {
    return "no one likes this";
  }
  if (names.length == 1) {
    return names[0] + " likes this";
  }
  if (names.length == 2) {
    return names[0] + " and " + names[1] + " likes this";
  }
  if (names.lentgh == 3) {
    return names[0] + ", " + names[1] + " and " + names[2] + " like this";
  }
}

// Welcome.In this kata, you are asked to square every digit of a number.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  //creation d'un tableau avec chaque chiffre comme élément
  let digits = ("" + num).split("");
  //on parse chaque element, on le met au carré, on rassemlble le tout, et on parse à nouveau
  return parseInt(digits.map((num) => Math.pow(parseInt(num), 2)).join(""));
}

// In this kata you are required to, given a string, replace every letter with its position in the alphabet.

// If anything in the text isn't a letter, ignore it and don't return it.

// "a" = 1, "b" = 2, etc.

//   Example
// alphabetPosition("The sunset sets at twelve o' clock.")
// Should return "20 8 5 19 21 14 19 5 20 19 5 20 19 1 20 20 23 5 12 22 5 15 3 12 15 3 11"(as a string)

function alphabetPosition(text) {
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let position = [],
    cuttedChar;
  /**
   * regex
   * Tout ce qui n'est pas des lettres
   */
  const regex = /[^a-zA-Z]/g;
  //todo cleaner text par une regex
  text
    .toLowerCase()
    .replace(regex, "")
    .split("")
    .forEach((letters) => {
      for (let i = 0; i < letters.length; i++) {
        cuttedChar = letters[i];
        position.push(alphabet.indexOf(cuttedChar) + 1);
      }
    });
  result = position.join(" ");
  return result;
}
// Return the number(count) of vowels in the given string.

// We will consider a, e, i, o, and u as vowels for this Kata.

// The input string will only consist of lower case letters and / or spaces.

function getCount(str) {
  const regex = /[^a-zA-Z]/g;
  const vowelsList = ["a", "e", "i", "o", "u", "y"];
  //on verifie str
  str.toLowerCase().replace(regex, "");
  let vowelsCount = 0;
  let mySTR = Array.from(str);
  // enter your majic here

  for (let i = 0; i < mySTR.length; i++) {
    if (vowelsList.includes(mySTR[i])) {
      vowelsCount++;
    }
  }

  return vowelsCount;
}

// Deoxyribonucleic acid(DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.

// If you want to know more http://en.wikipedia.org/wiki/DNA

// In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G".You have function with one side of the DNA(string, except for Haskell); you need to get the other complementary side.DNA strand is never empty or there is no DNA at all(again, except for Haskell).

/**
 * A <-> T
 * G <-> C
 */
function DNAStrand(dna) {
  dna = dna.toUpperCase().split("");

  let newTab = [];

  for (elt of dna) {
    switch (elt) {
      case "A":
        newTab.push("T");
        break;
      case "T":
        newTab.push("A");
        break;
      case "G":
        newTab.push("C");
        break;
      case "C":
        newTab.push("G");
        break;

      default:
        break;
    }
  }
  return newTab.join("");
}

// Bit Counting
// Write a function that takes an integer as input, and returns the number of bits that are equal to one in the binary representation of that number.You can guarantee that input is non - negative.

//   Example: The binary representation of 1234 is 10011010010, so the function should return 5 in this case
var countBits = function (n) {
  let binary = n.toString(2);
  let tab = Array.from(binary);
  let newTab = [];
  let reducer = (accumulator, currentValue) => accumulator + currentValue;

  tab.forEach((elt) => {
    newTab.push(parseInt(elt));
  });
  return newTab.reduce(reducer);
};

// Write a function called that takes a string of parentheses, and determines if the order of the parentheses is valid.The function should return true if the string is valid, and false if it's invalid.

// Examples
// "()"              => true
// ")(()))"          => false
// "("               => false
// "(())((()())())"  => true

function validParentheses(str) {
  if (str.length === 0) {
    return true;
  }
  if (str[0] === ")" || str[str.length - 1] === "(") {
    return false;
  } else {
    if (str[1] === ")") {
      return validParentheses(str.slice(2));
    } else {
      var index = str.indexOf(")");
      return validParentheses(str.slice(0, index - 1) + str.slice(index + 1));
    }
  }
}

// Complete the solution so that it splits the string into pairs of two characters.If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore('_').

//   Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  var initialArray = str.split("");
  var newTab = [];
  var result = [];

  //incremantation de deux pour ne pas avoir de doublon
  if (str.length % 2 !== 0) {
    initialArray.push("_");
  }
  for (var i = 0; i < initialArray.length; i = i + 2) {
    var pair = [];
    //on push i et i+1 dans pair
    pair.push(initialArray[i], initialArray[i + 1]);

    //push de pair dans newtab
    newTab.push(pair);
  }

  //on transforme chaque entree de newTab  en str
  for (var i = 0; i < newTab.length; i++) {
    var pairString = "";
    pairString = newTab[i].join("");
    result.push(pairString);
  }
  //si fin de tableau impair
  console.log(result.length);
  return result;
}

// Pete likes to bake some cakes.He has some recipes and ingredients.Unfortunately he is not good in maths.Can you help him to find out, how many cakes he could bake considering his recipes ?

//   Write a function cakes(), which takes the recipe(object) and the available ingredients(also an object) and returns the maximum number of cakes Pete can bake(integer).For simplicity there are no units for the amounts(e.g. 1 lb of flour or 200 g of sugar are simply 1 or 200).Ingredients that are not present in the objects, can be considered as 0.

// Examples:

// // must return 2
// cakes({ flour: 500, sugar: 200, eggs: 1 }, { flour: 1200, sugar: 1200, eggs: 5, milk: 200 });
// // must return 0
// cakes({ apples: 3, flour: 300, sugar: 150, milk: 100, oil: 100 }, { sugar: 500, flour: 2000, milk: 2000 });

function cakes(recipe, available) {
  let possibleCake;
  console.log(recipe, available);
  if (recipe == available) {
    return 1;
  }
  return possibleCake;
}
