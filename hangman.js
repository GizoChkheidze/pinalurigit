//Hangman

//სიტყვების სია
let wordLists = [
  ["dog", "cat", "lion", "panda"],
  ["red", "green", "yellow"],
  ["apple", "pear", "kiwi"],
];

function initializeGame() {
  let selectedWordList =
    wordLists[Math.floor(Math.random() * wordLists.length)]; // შემთხვევითი მასივის ასარჩევი
  let wordToGuess =
    selectedWordList[Math.floor(Math.random() * selectedWordList.length)]; // შემთხვევითი სიტყვის ასარჩევი მასივიდან
  let hiddenWord = Array(wordToGuess.length).fill("_");
  let attemptsLeft = 10; // ცდების რაოდენობა

  //მინიშნებები
  let hint = "Hint: ";
  switch (selectedWordList) {
    case wordLists[0]: //პირველი მასივი
      hint += "animals.";
      break;
    case wordLists[1]: // მეორე მასივი
      hint += "colors.";
      break;
    default:
      hint += "fruit"; //მესამე მასივი
  }
  console.log("Hint: " + hint);
  console.log("Guess the word: " + hiddenWord.join(" "));

  function checkGuess(letter) {
    let found = false;
    let i = 0;
    for (let char of wordToGuess) {
      if (char === letter) {
        hiddenWord[i] = letter;
        found = true;
      }
      i++;
    }
    return found;
  }

  //თამაში
  while (attemptsLeft > 0 && hiddenWord.includes("_")) {
    let guess = prompt("Guess a letter:").toLowerCase();
    if (guess.length !== 1 || !/[a-z]/.test(guess)) {
      console.log("Invalid input. Please enter a single letter."); //ვალიდაციის შემოწმება სიცარიელეზე და ჩაწერილ ასოებზე
      continue;
    }

    //სწორი და არასწორი გამოცნობა
    if (checkGuess(guess)) {
      console.log("Correct guess! Attempts left: " + attemptsLeft);
    } else {
      attemptsLeft--;
      console.log("Incorrect guess! Attempts left: " + attemptsLeft);
    }

    console.log("Word to guess: " + hiddenWord.join(" "));
  }

  //საბოლოო შედეგი. წაგება ან მოგება
  if (!hiddenWord.includes("_")) {
    console.log("Congratulations you win! :) Hidden word was: " + wordToGuess);
  } else {
    console.log("Sorry you lose. Hidden word was: " + wordToGuess);
  }
}
initializeGame();
