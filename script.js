




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


let rockBtn = document.querySelector("#rock");
rockBtn.addEventListener("click", function() {
    let human = "rock";
    playGame(human);
})

let paperBtn = document.querySelector("#paper");
paperBtn.addEventListener("click", function() {
    let human = "paper";
    playGame(human);  
})

let scissorsBtn = document.querySelector("#scissors");
scissorsBtn.addEventListener("click", function() {
    let human = "scissors";
    playGame(human);  
})

let results = document.querySelector("#results");
let humanScored = document.querySelector("#humanScore");
let computerScored = document.querySelector("#computerScore")


// function getHumanChoice() {
//     let human = prompt("Type Rock, Paper or Scissors.").toLowerCase();
//     return human;
// }



let humanScore = 0;
let computerScore = 0;
let roundCount = 0;
    
    
humanScored.innerText = `${humanScore}`;
computerScored.innerText = `${computerScore}`;



function playGame(human) {
    results.innerHTML = '';
    let computer = getComputerChoice();

    playRound(human,computer);
    roundCount++


    function playRound(humanChoice, computerChoice) {
        let resultMessage = '';
        if(humanChoice == "paper" && computerChoice == "rock" ||
        humanChoice == "scissors" && computerChoice == "paper" ||
        humanChoice == "rock" && computerChoice == "scissors"
        ) {
            humanScore++;
            resultMessage = `You win! ${humanChoice} beats ${computerChoice}`;
        }
        else if(humanChoice == computerChoice) {
            resultMessage = "Tie";
        }
        else {
            computerScore++;
            resultMessage = `You lose! ${computerChoice} beats ${humanChoice}`;
            
        }

        let result = document.createElement("p");
        result.innerText = resultMessage;
        results.appendChild(result);

        humanScored.innerText = `${humanScore}`;
        computerScored.innerText = `${computerScore}`;


        
    }
    
    
    
   



    // const humanSelection1 = getHumanChoice();
    // const computerSelection1 = getComputerChoice();
    // playRound(humanSelection1, computerSelection1);

    // const humanSelection2 = getHumanChoice();
    // const computerSelection2 = getComputerChoice();
    // playRound(humanSelection2,computerSelection2);


    // const humanSelection3 = getHumanChoice();
    // const computerSelection3 = getComputerChoice();
    // playRound(humanSelection3, computerSelection3);

    // const humanSelection4 = getHumanChoice();
    // const computerSelection4 = getComputerChoice();
    // playRound(humanSelection4, computerSelection4);

    // const humanSelection5 = getHumanChoice();
    // const computerSelection5 = getComputerChoice();
    // playRound(humanSelection5, computerSelection5);
    


}
