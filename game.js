    //computer options
    var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
    //array holding guessed letters
    var guessedLetters = [];

    var letterToGuess = null;

    var guessesLeft = 9;
    //win and loss counters
    var wins = 0;
    var losses = 0;
    //veronica img
    var veronica = $(".veronica");
    // farley img
    var farley = $(".farley")

    //print guesses left to html
    var updateGuessesLeft = function () {
      document.querySelector("#guessesLeft").innerHTML = guessesLeft;
    };

    // Computer's random guess
    var updateLetterToGuess = function() {
      letterToGuess = letters[Math.floor(Math.random() * letters.length)];
      console.log(letterToGuess);
    };
    // Displaying the user guess
    var updateGuessesSoFar = function() {
      document.querySelector("#guessesSoFar").innerHTML = guessedLetters.join(", ");
    };

    //reset
    var reset = function () {
      guessesLeft = 9;
      guessedLetters = [];
      updateLetterToGuess();
      updateGuessesLeft();
      updateGuessesSoFar();
    };
    //user presses key
    document.onkeyup = function (event) {
      //keeps farley hidden until user starts guessing again
      farley.animate({ opacity: "0" });
      // subtracts from guesses left
      guessesLeft--;
      // Determines key user pressed.
      var letter = String.fromCharCode(event.which).toLowerCase();
      // adds to guessedLetters array
      guessedLetters.push(letter);
      //run updates
      updateGuessesLeft();

      updateGuessesSoFar();
      
      // Check for match
      if (letter === letterToGuess) {
        // update wins
        wins++;
        document.querySelector("#wins").innerHTML = wins;
        //show farley
        farley.animate({ opacity: "1" });
        // reset
        reset();
      }
      //loss
      if (guessesLeft === 0) {
        losses++;
        document.querySelector("#losses").innerHTML = losses;
        // reset
        reset();
      }
    };