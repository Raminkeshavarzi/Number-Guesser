let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// The random number:
 let generateTarget = () => {
  return Math.floor(Math.random()*9);
 };
// Compare the guess number between computer, user and target number
let compareGuesses = (human, computer, target) =>{
  const userG = Math.abs(target-human);
  const computerG = Math.abs(target-computer);
  return userG <= computerG; 
}
// Add to the score number to winner
const updateScore = winner =>{
  if (winner === 'computer'){
    computerScore += 1;
  } else{
    humanScore += 1;
  }
}

// add to round number after each round
const advanceRound = () =>{
  currentRoundNumber += 1;
};


