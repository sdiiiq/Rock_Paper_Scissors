function getComputerChoice() {
    const randomNum = Math.random();
    if (randomNum < 0.33)
 {
    return "rock"; 
 } else if (randomNum < 0.66) 
    return "paper"; 
    else {
        return "scissors"
    }
}


function getHumanChoice() {
    let choice = prompt("Please enter rock, paper, or scissors").toLowerCase();
    while(!["rock", "paper", "scissors"].includes(choice)) {
        choice = prompt("Invalid input. Please rock, paper, or scissors:").toLowerCase();
    }
    return choice;
}



let humanScore = 0;
let computerScore = 0;

function playRound(humaChoice, computeChoice) {
    humaChoice = humaChoice.toLowerCase();

    if (humaChoice === computeChoice) {
        console.log("It's a tie!");
    } else if (
        (humaChoice === "rock" && computeChoice === "scissors") ||
        (humaChoice === "scisccors" && computeChoice === "paper") ||
        (humaChoice === "paper" && computeChoice === "rock")
    ) 
    {
        humanScore++;
        console.log(`You win! ${humaChoice} beats ${computeChoice}. `);
    }
    else {
        computerScore++;
        console.log(`You lose! ${computeChoice} beats ${humaChoice}. `);
    }   

}



function playGame() {
    humanScore = 0;
    computerScore = 0;

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        console.log(`Round ${i + 1} : Human: ${humanScore} - Computer : ${computerScore}`);
    }

    if (humanScore > computerScore) {
        console.log("You are the overall winner!");
    } else if (computerScore > humanScore) {
        console.log("Computer is the overall winner!");
    } else {
        console.log("It's an overall tie!")
    }
}

playGame()