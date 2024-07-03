document.addEventListener('DOMContentLoaded', () => {
    const game = () => {
        let playerScore = 0;
        let computerScore = 0;
        let moves = 0;

        const playGame = () => {
            const rockBtn = document.querySelector('.rock');
            const paperBtn = document.querySelector('.paper');
            const scissorsBtn = document.querySelector('.scissors');
            const playerOptions = [rockBtn, paperBtn, scissorsBtn];
            const computerOptions = ['rock', 'paper', 'scissors'];

            playerOptions.forEach(option => {
                option.addEventListener('click', function () {
                    const movesLeft = document.querySelector('.movesleft');
                    const computerMoveDisplay = document.querySelector('.computer-move');
                    moves++;
                    movesLeft.innerText = `Moves Left: ${5 - moves}`;

                    const choiceNumber = Math.floor(Math.random() * 3);
                    const computerChoice = computerOptions[choiceNumber];
                    computerMoveDisplay.innerText = `Computer chose: ${computerChoice}`;

                    winner(this.dataset.option, computerChoice);

                    if (moves == 5) {
                        gameOver(playerOptions, movesLeft);
                    }
                });
            });
        };

        const winner = (player, computer) => {
            const result = document.querySelector('.result');
            const playerScoreBoard = document.querySelector('.p-count');
            const computerScoreBoard = document.querySelector('.c-count');
            player = player.toLowerCase();
            computer = computer.toLowerCase();
            if (player === computer) {
                result.textContent = 'Tie';
            } else if (
                (player === 'rock' && computer === 'scissors') ||
                (player === 'paper' && computer === 'rock') ||
                (player === 'scissors' && computer === 'paper')
            ) {
                result.textContent = 'Player Won';
                playerScore++;
                playerScoreBoard.textContent = playerScore;
            } else {
                result.textContent = 'Computer Won';
                computerScore++;
                computerScoreBoard.textContent = computerScore;
            }
        };

        const gameOver = (playerOptions, movesLeft) => {
            const chooseMove = document.querySelector('.move');
            const result = document.querySelector('.result');
            const reloadBtn = document.querySelector('.reload');

            playerOptions.forEach(option => {
                option.style.display = 'none';
            });

            chooseMove.innerText = 'Game Over!!';
            movesLeft.style.display = 'none';

            if (playerScore < computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You Lost The Game';
                result.style.color = 'red';
            } else if (playerScore > computerScore) {
                result.style.fontSize = '2rem';
                result.innerText = 'You Won The Game';
                result.style.color = '#308D46';
            } else {
                result.style.fontSize = '2rem';
                result.innerText = 'Tie';
                result.style.color = 'grey';
            }

            reloadBtn.innerText = 'Restart';
            reloadBtn.style.display = 'flex';
            reloadBtn.addEventListener('click', () => {
                window.location.reload();
            });
        };

        playGame();
    };

    game();
});
