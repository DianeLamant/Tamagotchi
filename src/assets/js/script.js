let cryBaby = new Audio('assets/sounds/cry.ogg');
let happyBaby = new Audio('assets/sounds/happy.ogg');


let pickMood = setInterval(moodsPic, 2000);
function moodsPic() {
  let moods = ["assets/images/faces/cry.png","assets/images/faces/sad.png"];
  if (document.getElementById("baby").src.endsWith('smile.png'))
    cryBaby.play(),
    document.getElementById("baby").src = moods[Math.floor(Math.random()*2)];
}


let pickState = setInterval(needsPic, 2000);
function needsPic() {
  let needs = ["assets/images/thoughts/hamburger.png", "assets/images/thoughts/intero.png", "assets/images/thoughts/poo.png"];
  if (document.getElementById("needs").src.endsWith('sun.png'))
    document.getElementById("needs").src = needs[Math.floor(Math.random()*3)];
}

function reset() {
    let gameOver = document.getElementById("gameover");
    let gameOn = document.getElementById("gameon");
        if (gameOver.style.display === "none") {
        gameOver.style.display = "block",
        gameOn.style.display = "none";
    } else {
        gameOver.style.display = "none",
        gameOn.style.display = "block";
    }
};
// setTimeout(reset, 6000);


function Feed(){
    if (document.getElementById("needs").src.endsWith('hamburger.png')) {
        happyBaby.play(),
        document.getElementById("baby").src = src="assets/images/faces/smile.png",
        document.getElementById("needs").src = src="assets/images/thoughts/sun.png";
    }
    else {
        // reset();
    }
};

function Play(){
    if (document.getElementById("needs").src.endsWith('intero.png')) {
        happyBaby.play(),
        document.getElementById("baby").src = src="assets/images/faces/smile.png",
        document.getElementById("needs").src = src="assets/images/thoughts/sun.png";
    }
    else {
        // reset();
    }
};

function Change(){
    if (document.getElementById("needs").src.endsWith('poo.png')) {
        happyBaby.play(),
        document.getElementById("baby").src = src="assets/images/faces/smile.png",
        document.getElementById("needs").src = src="assets/images/thoughts/sun.png";
    }
    else {
        // reset();
    }
};