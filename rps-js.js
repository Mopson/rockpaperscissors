function getComputerChoice() {
    const compOptions = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);

    return compOptions[num];
}

function playRound(playerSelection, computerSelection) {
    let result = "";
    //if selection is the same
    if (playerSelection === computerSelection) {
        console.log("The player chose " + playerSelection, "and the computer chose " + computerSelection);
        result = "Tie";
    }
    //if player picks paper
    else if (playerSelection === 'PAPER') {
        console.log("The player chose " + playerSelection, "and the computer chose " + computerSelection);
        if (computerSelection === 'ROCK') {
            result = "Player wins.";
        }
        else result = "Computer wins.";
    }
    //if player picks scissors
    else if (playerSelection === "SCISSORS") {
        console.log("The player chose " + playerSelection, "and the computer chose " + computerSelection);
        if (computerSelection === "PAPER") {
            result = "Player wins.";
        }
        else result = "Computer wins.";
    }
    //if player picks rock
    else if (playerSelection === "ROCK") {
        console.log("The player chose " + playerSelection, "and the computer chose " + computerSelection);
        if (computerSelection === "SCISSORS") {
            result = "Player wins.";
        }
        else result = "Computer wins.";
    }

    return result;
}

function game() {

    //initialize player and computer scores to 0
    let playerScore = 0;
    let computerScore = 0;


    //let round = 1; uncomment for below code
    /*Code for the purpose of these first part of this assignment
    //loop through 5 rounds of play, prompt player for choice each iteration and get computerChoice()
    while (round < 6) {
        let playerSelection = prompt("What will you be playing?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
        //console.log() results of the round --- this is done in the playRound() function
        console.log("Round " + round + " result: " + result);


        //update score based on results
        if (result === "Tie") {
            console.log("Go again!");
        }
        else if (result === "Player wins.") {
            playerScore++;
            round++;
        }
        else if (result === "Computer wins.") {
            computerScore++;
            round++;
        }
    }

    //console.log() the winner based on higher score between the player and computer after 5 rounds
    if (playerScore > computerScore) {
        console.log("After 5 rounds the player has won with a score of " + playerScore + " to the computer's score of " + computerScore);
    }
    else console.log("After 5 rounds the computer has won with a score of " + computerScore + " to the player's score of " + playerScore);
    */
}

const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        let computerSelection = getComputerChoice();
        let playerSelection = '';
        if (button.id === "playerRockBtn") {
            playerSelection = "rock";
        };
        if (button.id === "playerPaperBtn") {
            playerSelection = "paper";
        };
        if (button.id === "playerScissorsBtn") {
            playerSelection = "scissors";
        };
        let result = playRound(playerSelection.toUpperCase(), computerSelection.toUpperCase());
        console.log(result);
    });
});
