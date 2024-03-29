let alertSnd = new Audio('assets/sounds/cartoon-computer_ds.mp3');
let goodSnd = new Audio('assets/sounds/banana-peel.mp3');
let lostSnd = new Audio('assets/sounds/bast.mp3')
let smile = "assets/images/faces/happygiraffe.png";
let hungry = "assets/images/faces/hungrygiraffe.png";
let bored = "assets/images/faces/boredgiraffe.png";
let oups = "assets/images/faces/oupsgiraffe.png";
let empty = "assets/images/thoughts/empty.png";
let branch = "assets/images/thoughts/002-branch.png";
let ball = "assets/images/thoughts/001-beach-ball.png";
let poo = "assets/images/thoughts/003-poo.png"
let moods = [bored, smile, oups, hungry];
let gameOver = document.getElementById("gameover");
let gameOn = document.getElementById("gameon");
let face = document.getElementById("face");
let needs = document.getElementById("needs");
let playBtn = document.getElementById("playBtn");
let gameBtn = document.getElementById("gameBtn");
let resultat = document.getElementById("resultat");
let stop;
let score = 0;
let divProgress = document.getElementsByClassName("progress")[0];
let progress = document.getElementById("progress");

function pickMood() {
    divProgress.style.display = "flex";
    gameBtn.style.display = "block";
    playBtn.style.display = "none";
    face.src = smile;
    face.classList.remove("animated", "infinite", "shake");
    // needs.src = empty;
    setTimeout(() => {
        if (face.src.endsWith(smile)) {
            face.src = moods[Math.floor(Math.random() * 4)];
            if ((face.src.endsWith(bored))) {
                needs.src = ball;
                needAppear();
            } else if ((face.src.endsWith(hungry))) {
                needs.src = branch;
                needAppear();
            } else if ((face.src.endsWith(oups))) {
                needs.src = poo;
                needAppear();
            } else {
                pickMood();
                stopPerdu();
            }
        }
    }, 3000);
};

function needAppear() {
    needs.classList.remove("slideOutRight");
    needs.classList.add("slideInRight");
    face.classList.add("animated", "infinite", "shake");
    goodSnd.pause();
    alertSnd.play();
    perdu();
    progress.classList.add("progress-bar-fill");
}

function perdu() {
    stop = setTimeout(() => {
        alertSnd.pause();
        lostSnd.play();
        gameOver.style.display = "block";
        document.getElementById("gameOverText").style = '-webkit-animation : unzoom 0.5s';
        gameOn.style.display = "none";
    }, 6000);
};

function stopPerdu() {
    clearTimeout(stop);
};

function feed() {
    if (needs.src.endsWith(branch)) {
        goodAnswer();
    } else {
        wrongAnswer();
    }
};

function play() {
    if (needs.src.endsWith(ball)) {
        goodAnswer();
    } else {
        wrongAnswer();
    }
};

function change() {
    if (needs.src.endsWith(poo)) {
        goodAnswer();
    } else {
        wrongAnswer();
    }
}

function goodAnswer() {
    score++;
    updateScore();
    face.src = smile;
    goodSnd.play();
    alertSnd.pause();
    needs.classList.remove("slideInRight");
    needs.classList.add("slideOutRight");
    setTimeout(() => {
        needs.src = empty;
    }, 200);
    progress.classList.remove("progress-bar-fill");
    stopPerdu();
    pickMood();
}

function wrongAnswer() {
    animScore();
    score--;
    updateScore();
}

function animScore() {
    resultat.classList.add("heartBeat");
    removeAnim = setTimeout(() => {
        resultat.classList.remove("heartBeat");
    }, 500);
}

function updateScore() {
    resultat.innerHTML = score;
    animScore();
}

function resetScore() {
    score = 0;
    updateScore();
}

function reset() {
    face.src = smile;
    needs.src = empty;
    gameOver.style.display = "none";
    gameOn.style.display = "block";
    resetScore();
    pickMood();
    progress.classList.remove("progress-bar-fill");
};

