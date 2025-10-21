function getComputerChoice() {
    let choice = Math.random();
    let option;

    if (choice == 0) {
        option = "rock";
    }
    else if (choice <= 0.5) {
        option = "paper";

    }

    else {
        option = "scissors";
    }
    return option;
}

function getHumanChoice() {
    let choice = prompt("rock, paper or scissors:");

    return choice.toLowerCase();
}
function playGame() {
    humanScore = 0;
    let total = 0;
    computerScore = 0;
    

    function playRound(humanChoice, computerChoice) {

        if (humanChoice == computerChoice) {
            console.log("It is a tie. No one wins this round.")
        }

        else {
            if (computerChoice == "rock") {
                if (humanChoice == "paper") {
                    console.log("You win! Paper beats rock!");
                    humanScore++;

                }
                else {
                    console.log("You lose! Rock beats scissors.");
                    computerScore++;
                }
            }

            else if (computerChoice == "paper") {
                if (humanChoice == "scissors") {
                    console.log("You win! Scissor beats paper!");
                    humanScore++;
                }
                else {
                    console.log("You lose! Paper beats rock.");
                    computerScore++;
                }
            }
            else {
                if (humanChoice == "rock") {
                    console.log("You win! Rock beats scissors!");
                    humanScore++;
                }
                else {
                    console.log("You lose! Scissors beats paper.");
                    computerScore++;
                }
            }
        }

    }
    for ( let i =0; i < 5; i++ ) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
        playRound(humanSelection, computerSelection);
        total++;
    
    if (total ==5){
        console.log ("Final score after 5 rounds You:"+ humanScore +" vs. Computer:"+ computerScore+ ".");
        if (humanScore > computerScore){

        console.log("You win!");
    }
    else{
        console.log("You lose!")
    }
}

}}
playGame();
