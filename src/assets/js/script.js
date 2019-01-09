// class Pyramide {
//     constructor() {
//         nbEtages = nbEtages;
//         this.firstFloor = '    *';
//         this.secondFloor = '  ***';
//         this.thirdFloor = ' *****';
//         this.fourthFloor = '*******';
//     };

//     for (var i = 0; i < nbEtages; i++) {

//         console.log()
//       }

    // 1er étage : ' ' nbEtages + '*' nbEtage-(nbEtage-1)
    // 2ème étage : ' ' nbEtages-2 + '*' nbEtage-(nbEtage-2)
    // 3ème étage : ' ' nbEtages-3 + '*' nbEtage-(nbEtage-3)
    // 3ème étage : ' ' nbEtages-4 + '*' nbEtage-(nbEtage-4)

//     draw() {
//         console.log(this.firstFloor,'\n',this.secondFloor,'\n',this.thirdFloor,'\n',this.fourthFloor);
//     }
// };
// let pyramide = new Pyramide();
// pyramide.draw();


let cryBaby = new Audio('assets/sounds/cry.ogg');
let happyBaby = new Audio('assets/sounds/happy.ogg');
let smile = "assets/images/faces/smile.png";
let sad = "assets/images/faces/sad.png";
let cry = "assets/images/faces/cry.png";
let sun = "assets/images/thoughts/sun.png";
let hamburger = "assets/images/thoughts/hamburger.png";
let intero = "assets/images/thoughts/intero.png";
let poo = "assets/images/thoughts/poo.png"
let moods = [cry, sad, smile];
let needs = [hamburger, intero, poo];

pickMood = function() {
    setTimeout(() => { 
        if (document.getElementById("baby").src = smile) {
            cryBaby.play(),
            document.getElementById("baby").src = moods[Math.floor(Math.random()*3)];
        }
    }, 1500); 
};

pickState = function() {
    setTimeout(() => { 
        if (document.getElementById("baby").src !== smile) {
            document.getElementById("needs").src = needs[Math.floor(Math.random()*3)];
        }
        else {
            document.getElementById("baby").src = smile;
            document.getElementById("need").src = sun;
        }
    }, 2000);
};


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
    if (document.getElementById("needs").src = hamburger) {
        happyBaby.play(),
        document.getElementById("baby").src = smile;
        document.getElementById("needs").src = sun;
        pickMood();
        pickState();
    }
    else {
        // reset();
    }
};

function Play(){
    if (document.getElementById("needs").src = intero) {
        happyBaby.play(),
        document.getElementById("baby").src = smile;
        document.getElementById("needs").src = sun;
        pickMood();
        pickState();
    }
    else {
        // reset();
    }
};

function Change(){
    if (document.getElementById("needs").src = poo) {
        happyBaby.play(),
        document.getElementById("baby").src = smile;
        document.getElementById("needs").src = sun;
        pickMood();
        pickState();
    }
    else {
        // reset();
    }
};

pickMood();
pickState();