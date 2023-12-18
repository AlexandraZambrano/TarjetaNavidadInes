const treeContainer = document.createElement("pre");
const mainContainer = document.querySelector(".main-container");
const envelope = document.querySelector('.envelope-wrapper');
const play = document.getElementById("play")

function playMusic(){
    let audio = new Audio("jingleBell.mp3")
    audio.play()
}

play.addEventListener("click", playMusic)


envelope.addEventListener('click', () => {
    envelope.classList.toggle('flap');
});

const getRandomValue = (max, min = 1) => {
  return Math.floor(Math.random() * max) + min;
};

const createSnow = (density) => {
  for (let i = 0; i < density; i++) {
    const snowFlake = document.createElement("span");
    const horizontalPosition = `${getRandomValue(100)}%`;
    const fallDelay = `${getRandomValue(100)}s`;
    const fallDuration = `${getRandomValue(20, 5)}s`;
    const flakeSize = `${getRandomValue(7, 1)}px`;
    const flakeOpacity = Math.random().toFixed(2);

    snowFlake.classList.add("snow");
    snowFlake.style.opacity = flakeOpacity;
    snowFlake.style.width = flakeSize;
    snowFlake.style.height = flakeSize;
    snowFlake.style.animation = `fall ${fallDuration} ${fallDelay} linear infinite`;
    snowFlake.style.right = horizontalPosition;

    mainContainer.appendChild(snowFlake);
  }
};

createSnow(300);