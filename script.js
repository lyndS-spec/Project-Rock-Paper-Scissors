const choice = ["rock", "paper", "scissor"]


function getComputerChoice(choice){
    const random = Math.trunc(Math.random() * choice.length);

    const play = choice[random];
    return play;
}

function getHumanChoice(choice){
    choice = prompt('Enter your choice [rock, paper, scissor]:');
    return choice;
}


function playGame(){
    let humanScore = 0;
    let computerScore = 0;

    let computerChoice;
    let humanChoice;

    function playRound(humanChoice, computerChoice){
        computerChoice =  getComputerChoice(choice).toLowerCase();
        humanChoice = getHumanChoice(choice).toLowerCase();

        console.log('Computer: ' + computerChoice);
        console.log('Human: ' + humanChoice);

        if(computerChoice === "rock"){
            if(humanChoice === "rock") {computerScore += 0; humanScore += 0}
            else if(humanChoice === "paper") humanScore++;
            else if(humanChoice === "scissor") computerScore++;
        }
        else if(computerChoice === "paper"){
            if(humanChoice === "paper") {computerScore += 0; humanScore += 0}
            else if(humanChoice=== "rock") computerScore++;
            else if(humanChoice === "scissor") humanScore++;
        }
        else if(computerChoice === "scissor"){
            if(humanChoice === "scissor") {computerScore += 0; humanScore += 0}
            else if(humanChoice === "rock") humanScore++;
            else if(humanChoice === "paper") computerScore++;
        }    
    }

    for (let i = 0; i < 3; i++){
        playRound(humanChoice, computerChoice);
    }
    console.log('Human Score: ' + humanScore);
    console.log('Computer Score: ' + computerScore);

    if (humanScore > computerScore) alert("THE HUMAN HAS WON!");
    else if (humanScore < computerScore) alert("THE COMPUTER HAS WON!");
    else alert("WE HAVE A TIE!");
}

playGame();
