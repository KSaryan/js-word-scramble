
"use strict";
var WORDS     = ["booger", "apple", "hackbright", "mango"];
var SCRAMBLED = ["oogreb", "papel", "backrhight", "goman"];




var playing = true;   

while (playing) {

        // Grab a random word from the WORDS array.
    var getIndex = function (min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min)) + min;
    };



    // Grab the corresponding scrambled word from the SCRAMBLED array.
    // var scrambledWord = SCRAMBLED[index];
    var scramble = function(word){
        var shuffledWord = "";
        var charIndex = 0;
        word = word.split("");
        while(word.length > 0){
            charIndex = getIndex(0, word.length);
            shuffledWord += word[charIndex];
            word.splice(charIndex, 1); 
        }
        return shuffledWord;
    }

    var index = getIndex(0,4);
    var word = WORDS[index];

    var scrambledWord = scramble(word); 

    // Prompt the user to guess the original word when given the scrambled word.
    var userAnswer = prompt("The scrambled word is " + scrambledWord + 
        ". What's your guess?")
    var userAnswer = userAnswer.toLowerCase().trim();
    // var userAnswer =userAnswer.trim(); 
    
    // If the user guesses wrong, tell them they were wrong and show the right word.
    if (userAnswer == word) {
        console.log("Correct!");
        alert("Correct!");
    } else {
        // while (userAnswer != word) {
        //     console.log("User answer incorrect.");
        //     var userAnswer = prompt("Sorry, wrong answer. The scrambled word is 
        //         " + scrambledWord + ". What's your guess?")
        //     var userAnswer = userAnswer.toLowerCase().trim();
        // };
        console.log("Correct!");
        alert("Sorry, wrong answer.");
    }
    
    // If the user guesses the correct word, congratulate them.

    playing = confirm("Press OK To keep playing or Cancel to quit");

    // What does confirm() return?
    // What does setting the playing variable do?
}

alert("goodbye!");