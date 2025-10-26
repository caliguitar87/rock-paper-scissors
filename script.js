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

let total = 0;
let humanScore = 0;
let computerScore = 0;
let results = document.getElementById("results");


function playRound(humanChoice, computerChoice) {


    if (humanChoice == computerChoice) {
        results.textContent = "It is a tie. No one wins this round.";
    }

    else {
        if (computerChoice == "rock") {
            if (humanChoice == "paper") {
                results.textContent = "You win! Paper beats rock!";
                humanScore++;

            }
            else {
                results.textContent = "You lose! Rock beats scissors.";
                computerScore++;
            }
        }

        else if (computerChoice == "paper") {
            if (humanChoice == "scissors") {
                results.textContent = "You win! Scissor beats paper!";
                humanScore++;
            }
            else {
                results.textContent = "You lose! Paper beats rock.";
                computerScore++;
            }
        }
        else {
            if (humanChoice == "rock") {
                results.textContent = "You win! Rock beats scissors!";
                humanScore++;
            }
            else {
                results.textContent = "You lose! Scissors beats paper.";
                computerScore++;
            }
        }
    }

}






const gameOver = document.createElement("div");
const body = document.querySelector("body");
const rockBtn = document.querySelector(".rock");
const paperBtn = document.querySelector(".paper");
const scissorsBtn = document.querySelector(".scissors");


rockBtn.addEventListener("click", () => {
    const choice = rockBtn.innerHTML
    if (total < 4) {
        playRound(choice, getComputerChoice());

        total++;
    }
    else {
        if (humanScore>computerScore){
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You win! Game over.";
        }
        
        else{
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You lose! Game over.";
        }
        }
    

})



paperBtn.addEventListener("click", () => {
    const choice = paperBtn.innerHTML

    if (total <4) {
        playRound(choice, getComputerChoice());

        total++;
    }
    else {
        if (humanScore>computerScore){
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You win! Game over.";
        }
        
        else{
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You lose! Game over.";
        }
        }
        body.appendChild(gameOver);

       

    }
)
scissorsBtn.addEventListener("click", () => {
    const choice = scissorsBtn.innerHTML

    if (total <4) {
        playRound(choice, getComputerChoice());

        total++;
    }
    else {
        if (humanScore>computerScore){
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You win! Game over.";
        }
        
        else{
            gameOver.textContent = "Final score after 5 rounds You:" + humanScore + " vs. Computer:" + computerScore + " You lose! Game over.";
        }
        }
        
        body.appendChild(gameOver);}

)


