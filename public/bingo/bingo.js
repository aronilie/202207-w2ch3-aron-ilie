/* eslint-disable no-restricted-globals */
/* eslint-disable no-console */
/* eslint-disable no-alert */

let userChoice;

let turnNumber;

let i;

const attemptsIdx = 500;

const pointsIdx = 10;

let attemptsCounter = 0;

let line = false;

let newCard = true;

let bingoCardNumbers = [];

let turnNumbers = [];

let newPlayer = {};

const player = [];

let bingoCard = [
  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },

  { number: 0, matched: false },
];

function bingo() {
  newPlayer.name = prompt(
    "Welcome to bingo game! Please enter your name to continue."
  );

  alert(
    "Your punctuation will depend on the number of attempts you make LINE. The more attempts you make, the less points you get."
  );

  while (newCard) {
    // Assign to bingoCard different numbers from 0 to 100

    bingoCard[0].number = Math.floor(Math.random() * 100);

    // Set a new number if it is 0
    while (bingoCard[0].number === 0) {
      bingoCard[0].number = Math.floor(Math.random() * 100);
    }

    // Build bingoCardNumbers for non usable numbers for the bingoCard numbers
    bingoCardNumbers[0] = 0;
    bingoCardNumbers[1] = bingoCard[0].number;

    for (i = 1; i < bingoCard.length; i++) {
      bingoCard[i].number = Math.floor(Math.random() * 100);

      // If a number is repeated, change it
      while (bingoCardNumbers.indexOf(bingoCard[i].number) !== -1) {
        bingoCard[i].number = Math.floor(Math.random() * 100);
      }

      // Add the changed number to the non usable numbers array
      bingoCardNumbers[i + 1] = bingoCard[i].number;
    }

    console.table(bingoCard);

    userChoice = confirm(
      "Your cartoon is shown in console. Press 'Accept' to continue or 'Cancel' for new cartoon."
    );

    if (userChoice) {
      newCard = false;
    }
  }

  // Reset variable
  newCard = true;

  // Delete the 0 from bingoCardNumbers array
  for (i = 0; i < bingoCardNumbers.length; i++) {
    bingoCardNumbers[i] = bingoCardNumbers[i + 1];
  }
  bingoCardNumbers.pop();

  // While loop until user makes line
  while (!line) {
    if (userChoice) {
      // Fill the turnNumbers array with the numbers already shown on any turn

      // Add 0 for not to show 0 in the turns
      turnNumbers.push(0);

      // Add turn number
      turnNumber = Math.floor(Math.random() * 100);

      while (turnNumbers.indexOf(turnNumber) !== -1) {
        turnNumber = Math.floor(Math.random() * 100);
      }

      turnNumbers.push(turnNumber);

      if (bingoCardNumbers.indexOf(turnNumber) !== -1) {
        // If the turn number matched

        // Change value nested array
        bingoCard[bingoCardNumbers.indexOf(turnNumber)].matched = true;

        // Log bingoCard
        console.table(bingoCard);

        // Check if it is line or not
        line = true;

        for (i = 0; i < bingoCard.length; i++) {
          if (!bingoCard[i].matched) {
            line = false;
          }
        }

        if (line) {
          // If it is line

          // Add points count
          attemptsCounter += 1;

          alert(
            `The turn number is ${turnNumber}. Congratulations! You made LINE.`
          );

          // Register attempts
          newPlayer.attempts = attemptsCounter;

          // Calculate and register points
          newPlayer.points = Number(
            (
              (attemptsIdx * pointsIdx) /
              ((attemptsCounter * attemptsCounter) / 100)
            ).toFixed(1)
          );
        } else {
          // If it is not line

          // Add points count
          attemptsCounter += 1;

          userChoice = confirm(
            `The turn number is ${turnNumber}. That number matches with one of your card! But you don't have line yet. Press 'Accept' for new turn.`
          );
        }
      } else {
        // If the turn number doesn't matched

        // Add points count
        attemptsCounter += 1;

        userChoice = confirm(
          `The turn number is ${turnNumber}. That number doesn't match with any of your card. Press 'Accept' for new turn.`
        );
      }
    }
  }

  // Add player info to player array
  player.push(newPlayer);

  // Print player info
  console.table(player);

  // Reset arrays, objects and variables
  bingoCardNumbers = [];

  turnNumbers = [];

  newPlayer = {};

  attemptsCounter = 0;

  line = false;

  bingoCard = [
    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },

    { number: 0, matched: false },
  ];
}

bingo();
