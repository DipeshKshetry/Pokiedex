let score = 0;
const scoreDisplay = document.getElementById('score');
const box = document.getElementById('box');
const gameArea = document.getElementById('game-area');

function moveBox() {
    const maxX = gameArea.clientWidth - box.offsetWidth;
    const maxY = gameArea.clientHeight - box.offsetHeight;
    const randomX = Math.floor(Math.random() * maxX);
    const randomY = Math.floor(Math.random() * maxY);
    box.style.left = randomX + 'px';
    box.style.top = randomY + 'px';
}

// Increase score when box is clicked
box.addEventListener('click', () => {
    score++;
    scoreDisplay.textContent = score;
    moveBox();
});

// Move box every 2 seconds automatically
setInterval(moveBox, 2000);

// Initial box position
moveBox();
