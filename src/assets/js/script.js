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
let stop;


pickMood = function() {
    document.getElementById("baby").src = smile;
    document.getElementById("needs").src = sun;
    happyBaby.play();
    setTimeout(() => {
        if (document.getElementById("baby").src.endsWith(smile)) {
            document.getElementById("baby").src = moods[Math.floor(Math.random()*3)];
            if ((document.getElementById("baby").src.endsWith(cry))) {
                document.getElementById("needs").src = needs[Math.floor(Math.random()*2)];
                cryBaby.play();
                perdu();
            }
            else if ((document.getElementById("baby").src.endsWith(sad))) {
                document.getElementById("needs").src = intero;
                perdu();
            }
            else {
                stopPerdu();
                pickMood();
            }
        }
    }, 1000);
    console.log(pickMood);
};

function Feed(){
    if (document.getElementById("needs").src.endsWith(hamburger)) {
        document.getElementById("baby").src = nipple;
        document.getElementById("needs").src = sun;
        setTimeout(() => {
            stopPerdu();
            pickMood();
        }, 1000);
    }
};

function Play(){
    if (document.getElementById("needs").src.endsWith(intero)) {
        document.getElementById("baby").src = tongue;
        document.getElementById("needs").src = sun;
        setTimeout(() => {
            stopPerdu();
            pickMood();
        }, 1000);
    }
};

function Change(){
    if (document.getElementById("needs").src.endsWith(poo)) {
        document.getElementById("baby").src = surprised;
        document.getElementById("needs").src = sun;
        setTimeout(() => {
            stopPerdu();
            pickMood();
        }, 1000);
    }
};

function perdu() {
    stop = setTimeout(() => {
        gameOver.style.display = "block";
        gameOn.style.display = "none";
    }, 6000);
};

function stopPerdu() {
    clearTimeout(stop);
};

function Reset(){
    document.getElementById("baby").src = smile;
    document.getElementById("needs").src = sun;
    gameOver.style.display = "none";
    gameOn.style.display = "block";
    pickMood();
};

pickMood();