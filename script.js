let score = 0;
let gameInterval;
let countdown;

const target = document.getElementById('target');
const scoreDisplay = document.getElementById('score');
const startButton = document.getElementById('start-button');
const gameArea = document.getElementById('game-area');

function getRandomPosition() {
    const areaRect = gameArea.getBoundingClientRect();
    const x = Math.random() * (areaRect.width - 50); // 50 is the size of the target
    const y = Math.random() * (areaRect.height - 50);
    return { x, y };
}

function moveTarget() {
    const { x, y } = getRandomPosition();
    target.style.left = `${x}px`;
    target.style.top = `${y}px`;
    target.style.display = 'block';
}

function startGame() {
    score = 0;
    scoreDisplay.textContent = score;
    startButton.disabled = true;
    target.style.display = 'block';

    gameInterval = setInterval(moveTarget, 800); // Move target every 0.8 seconds

    countdown = setTimeout(() => {
        clearInterval(gameInterval);
        target.style.display = 'none';
        startButton.disabled = false;
        alert(`Game Over! Your score is ${score}.`);
    }, 10000); // End game after 10 seconds
}

target.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    target.style.display = 'none';
});

startButton.addEventListener('click', startGame);
