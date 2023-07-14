//const playerScore = document.getElementById("playerScore");
//const computerScore = document.getElementById("computerScore");

function getComputerChoice() {
    const compOptions = ["Rock", "Paper", "Scissors"];
    let num = Math.floor(Math.random() * 3);

    return compOptions[num];
}

//keeps track of score, outside function so it isn't reset every time a round is played
let pScore = 0;
let cScore = 0;

function playRound(playerSelection, computerSelection) {
    let result = "";

    //if selection is the same
    if (playerSelection === computerSelection) {
        //console.log("The player chose " + playerSelection, "and the computer chose " + computerSelection);
        document.getElementById('theChoice').textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection;
        result = "It's a tie. Go again.";
    }
    //if player picks paper
    else if (playerSelection === 'PAPER') {
        document.getElementById('theChoice').textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection;
        if (computerSelection === 'ROCK') {
            result = "You win.";
        }
        else result = "The computer wins.";
    }
    //if player picks scissors
    else if (playerSelection === "SCISSORS") {
        document.getElementById('theChoice').textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection;
        if (computerSelection === "PAPER") {
            result = "You win.";
        }
        else result = "The computer wins.";
    }
    //if player picks rock
    else if (playerSelection === "ROCK") {
        document.getElementById('theChoice').textContent = "You chose " + playerSelection + " and the computer chose " + computerSelection;
        if (computerSelection === "SCISSORS") {
            result = "You win.";
        }
        else result = "The computer wins.";
    }

    //changes roundResult <a> when a round has been played, displays the winner
    document.getElementById('roundResult').textContent = result;

    //keep track of score
    if (result === "You win.") {
        document.getElementById('playerScore').textContent++;
        pScore++;
    }
    else if (result === "The computer wins.") {
        document.getElementById('computerScore').textContent++;
        cScore++;
    }
    //first player to 5 wins the match, winning displays overlay modal, and then scores are reset to 0
    if (pScore == 5) {
        displayResultsModal("Congratulations! You have won the match!");
        resetScores();
    }
    else if (cScore == 5) {
        displayResultsModal("The computer has won the match! Unlucky.");
        resetScores();
    }

    return result;
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
    });
});

function displayResultsModal(result) {
    let modal = document.getElementById("myModal");
    let span = document.getElementsByClassName("close")[0];
    modal.style.display = "block";
    document.getElementById('theResults').textContent = result;

    span.onclick = function () {
        modal.style.display = "none";
    };

    window.onclick = function (event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    };
}

//resets DOM manipulated values
function resetScores() {
    document.getElementById('theChoice').textContent = '';
    document.getElementById('roundResult').textContent = "Choose your weapon";
    document.getElementById('playerScore').textContent = 0;
    document.getElementById('computerScore').textContent = 0;
    pScore = 0;
    cScore = 0;
}

//This portion of code was used for previous exercises
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
        else if (result === "You win.") {
            playerScore++;
            round++;
        }
        else if (result === "The computer wins.") {
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