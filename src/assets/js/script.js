let cryBaby = new Audio('assets/sounds/cry.ogg');
let happyBaby = new Audio('assets/sounds/happy.ogg');
let smile = "assets/images/faces/smile.png";
let sad = "assets/images/faces/sad.png";
let cry = "assets/images/faces/cry.png";
let tongue = "assets/images/faces/tongue.png";
let nipple = "assets/images/faces/nipple.png";
let surprised = "assets/images/faces/surprised.png";
let sun = "assets/images/thoughts/sun.png";
let hamburger = "assets/images/thoughts/hamburger.png";
let intero = "assets/images/thoughts/intero.png";
let poo = "assets/images/thoughts/poo.png"
let moods = [cry, sad, smile];
let needs = [hamburger, poo];
let gameOver = document.getElementById("gameover");
let gameOn = document.getElementById("gameon");
let idBaby = document.getElementById("baby");
let idNeeds = document.getElementById("needs");
let stop;
let score = 0;
let progress = document.getElementById("progress");

pickMood = function () {
    idBaby.src = smile;
    idNeeds.src = sun;
    // happyBaby.play();
    setTimeout(() => {
        if (idBaby.src.endsWith(smile)) {
            idBaby.src = moods[Math.floor(Math.random() * 3)];
            if ((idBaby.src.endsWith(cry))) {
                idNeeds.src = needs[Math.floor(Math.random() * 2)];
                cryBaby.play();
                perdu();
                progress.classList.add("progress-bar-danger");
            }
            else if ((idBaby.src.endsWith(sad))) {
                idNeeds.src = intero;
                perdu();
                progress.classList.add("progress-bar-danger");

            }
            else {
                pickMood();
                stopPerdu();
            }
        }
    }, 1000);
};

function perdu() {
    // stop = setTimeout(() => {
    //     gameOver.style.display = "block";
    //     gameOn.style.display = "none";
    // }, 6000);
};

function stopPerdu() {
    clearTimeout(stop);
};

function Feed() {
    if (idNeeds.src.endsWith(hamburger)) {
        score++;
        updateScore();
        idBaby.src = nipple;
        idNeeds.src = sun;
        relanceJeu()
        progress.classList.remove("progress-bar-danger");
    } else {
        score--;
        updateScore();
    }
};

function Play() {
    if (idNeeds.src.endsWith(intero)) {
        score++;
        updateScore();
        idBaby.src = tongue;
        idNeeds.src = sun;
        relanceJeu()
        progress.classList.remove("progress-bar-danger");
    } else {
        score--;
        updateScore();
    }
};

function Change() {
    if (idNeeds.src.endsWith(poo)) {
        score++;
        updateScore();
        idBaby.src = surprised;
        idNeeds.src = sun;
        relanceJeu()
        progress.classList.remove("progress-bar-danger");
    } else {
        score--;
        updateScore();
    }
};

function updateScore() {
    document.getElementById("resultat").innerHTML = score;
}

function resetScore() {
    score = 0;
    updateScore();
}

function relanceJeu() {
    setTimeout(() => {
        stopPerdu();
        pickMood();
    }, 1000);
}

function Reset() {
    idBaby.src = smile;
    idNeeds.src = sun;
    gameOver.style.display = "none";
    gameOn.style.display = "block";
    resetScore()
    pickMood();
    progress.classList.remove("progress-bar-danger");
};

pickMood();
