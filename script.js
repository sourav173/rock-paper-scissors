




function getComputerChoice() {
    computer = Math.random();
    
    
    if(computer <= 0.33) {
        return "rock";
    }
    else if (computer <= 0.66) {
        return "paper";
    }
    else {
        return "scissors";
    }
}




function getHumanChoice() {
    let human = prompt("Type Rock, Paper or Scissors.").toLowerCase();
    return human;
}








function playGame() {
    let humanScore = 0;
    let computerScore = 0;

   

    function playRound(humanChoice, computerChoice) {
        if(humanChoice == "paper" && computerChoice == "rock" || humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "rock" && computerChoice == "scissors"
        ) {
            console.log(`You win! ${humanChoice} beats ${computerChoice}`);
            humanScore+=1;
    
    
        }
        else if(humanChoice == computerChoice) {
            console.log("Tie!");
        }
        else {
            console.log(`You lose! ${computerChoice} beats ${humanChoice}`);
            computerScore+=1;
        }
    }
    
    
    
   



    const humanSelection1 = getHumanChoice();
    const computerSelection1 = getComputerChoice();
    playRound(humanSelection1, computerSelection1);

    const humanSelection2 = getHumanChoice();
    const computerSelection2 = getComputerChoice();
    playRound(humanSelection2,computerSelection2);


    const humanSelection3 = getHumanChoice();
    const computerSelection3 = getComputerChoice();
    playRound(humanSelection3, computerSelection3);

    const humanSelection4 = getHumanChoice();
    const computerSelection4 = getComputerChoice();
    playRound(humanSelection4, computerSelection4);

    const humanSelection5 = getHumanChoice();
    const computerSelection5 = getComputerChoice();
    playRound(humanSelection5, computerSelection5);
    
    
    console.log(`Human: ${humanScore} Computer: ${computerScore}`);


}

playGame();