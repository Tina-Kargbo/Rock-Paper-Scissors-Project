document.addEventListener('DOMContentLoaded', () => {
    /**
     * Declare constants for DOM elements
     * and possible choices.
     */
    const buttons = document.getElementsByClassName("control");
    const playerImage = document.getElementById('player-image');
    const computerImage = document.getElementById('computer-image');
    const resetButton =  document.getElementById('reset');
    const winnerText =  document.getElementById('result');
    let computerScore = 0;
    let playerScore = 0;
    
    /** 
     * Add event listener to all the buttons
     */
    
    for (let button of buttons) {
        button.addEventListener("click", function () {
            let playerChoice = this.getAttribute("data-choice");
            playGame(playerChoice);
        });
    }
    resetButton.addEventListener('click', function(){
        window.location.href='/';
    });
    
    /**
     * The main game function. 
     */
    
    function playGame(playerChoice) {

        playerImage.src = `assets/images/${playerChoice}.jpg`;
        playerImage.alt = playerChoice;

        let computerChoice = Math.floor(Math.random() * 3);

        computerImage.src = `assets/images/${computerChoice}.jpg`;
        computerImage.alt = computerChoice;
        playerChoice = parseInt(playerChoice);
        checkWinner(computerChoice, playerChoice);
        updateScores();

    }
    
    /**
     * Checks to see who the winner is.
     */
    function checkWinner(computerChoice, playerChoice){
        // User plays Rock
        if (playerChoice === 0){
            // Pc plays rock
            if (computerChoice === 0){
                computerScore = computerScore + 1;
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Tie !";
            }
            // PC plays paper
            if (computerChoice === 1){
                computerScore = computerScore + 1;
                winnerText.innerHTML= "Computer wins !";
            }
            // PC plays scissor
            if (computerChoice === 2){
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Player wins !";
            }
        }    

        // User plays Paper
        if (playerChoice === 1){
            // Pc plays paper
            if (computerChoice === 1){
                computerScore = computerScore + 1;
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Tie !";
            }
            // PC plays Scissors
            if (computerChoice === 2){
                computerScore = computerScore + 1;
                winnerText.innerHTML= "Computer wins !";
            }

            // PC plays Rock
            if (computerChoice === 0){
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Player wins !";
            }
        }

        // User plays Scissors
        if (playerChoice === 2){
            // Pc plays scissors
            if (computerChoice === 2){
                computerScore = computerScore + 1;
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Tie !";
            }
            // PC plays Rock
            if (computerChoice === 0){
                computerScore = computerScore + 1;
                winnerText.innerHTML= "Computer wins !";
            }
            // PC plays Paper
            if (computerChoice === 1){
                playerScore = playerScore + 1;
                winnerText.innerHTML= "Player wins !";
            }
        }

    }

    function updateScores() {
        document.getElementById('computer-score').innerText = computerScore;
        document.getElementById('player-score').innerText = playerScore;
    }
});