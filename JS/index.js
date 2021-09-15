
const handOption = {
    "rock": "img/Rock.png",
    "paper": "img/Paper.png",
    "scissors": "img/Scissors.png"
}

let SCORE = 0;

const pickUserHand = (hand) => {
    console.log(hand);
    //hide the current page
    let hands = document.querySelector(".hands");
    hands.style.display = "none";
    //show the next page with the hand

     let contest = document.querySelector(".contest");
     contest.style.display = "flex";

     
     //user will pick the hand
    document.getElementById('userPickImage').src = handOption[hand];
    
    let computerPickHand = pickComputerHand();

    referee(hand, computerPickHand);
    
}

const pickComputerHand = () => {
    let hands = ["rock", "paper", "scissors"];
    let ComputerPickHand = hands[Math.floor(Math.random() * 3)];

    document.getElementById("computerPickImage").src = handOption[ComputerPickHand];

    return ComputerPickHand;
    
}

const referee = (userHand, ComputerPickHand) => {
    if (userHand == "paper" && ComputerPickHand == "scissors") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "paper" && ComputerPickHand == "rock") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "paper" && ComputerPickHand == "paper") {
        setDecision("It's a tie!");
      }
      if (userHand == "rock" && ComputerPickHand == "scissors") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
      if (userHand == "rock" && ComputerPickHand == "paper") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "rock" && ComputerPickHand == "rock") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && ComputerPickHand == "scissors") {
        setDecision("It's a tie!");
      }
      if (userHand == "scissors" && ComputerPickHand == "rock") {
        setDecision("YOU LOSE!");
      }
      if (userHand == "scissors" && ComputerPickHand == "paper") {
        setDecision("YOU WIN!");
        setScore(SCORE + 1);
      }
}
 
// To play again
const restartGame = () => {

     //hide the current page
     let hands = document.querySelector(".hands");
     hands.style.display = "flex";
     
     //show the next page with the hand
      let contest = document.querySelector(".contest");
      contest.style.display = "none";
 
     
}
 

const setDecision = (decision) => {
    // console.log(decision);
    document.querySelector(".decision h1").innerText = decision;
}

const setScore = (score) => {
    // console.log(score)
    SCORE = score;
    document.querySelector(".score h1").innerText = score;
}