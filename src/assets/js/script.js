// var smile = document.getElementById("smile");
// var cry = image.src='cry.png';
// var nipple = image.src='nipple.png';
// var sad = image.src='sad.png';
// var surprised = image.src='surprised.png';
// var tongue = image.src='tongue.png';
// var sun = document.getElementById("sun");
// var hamburger = image.src='hamburger.png';
// var intero = image.src='intero.png';
// var poo = image.src='poo.png';

// var faces = ["assets/images/faces/cry.png","assets/images/faces/sad.png"];
// var i = 0;
// var renew = setInterval(function(){
//     if(faces.length == i){
//         i = 0;
//     }
//     else {
//     document.getElementById("smile").src = faces[i]; 
//     i++;

// }
// },1000);

// var random_images_array = ["assets/images/thoughts/hamburger.png", "assets/images/thoughts/intero.png", "assets/images/thoughts/poo.png"];
// function getRandomImage(imgAr, path) {
//     path = path || 'assetsimages/thoughts'; // default path here
//     var num = Math.floor( Math.random() * imgAr.length );
//     var img = imgAr[ num ];
//     var imgStr = '<img src="' + path + img + '" alt = "">';
//     document.write(imgStr); document.close();
// }

// var myArray = ["assets/images/thoughts/hamburger.png","assets/images/thoughts/intero.png","assets/images/thoughts/poo.png"];
  
//   var randomItem = myArray[Math.floor(Math.random()*myArray.length)];
  
//   document.body.innerHTML = randomItem;

// var shuffled = ["assets/images/thoughts/hamburger.png", "assets/images/thoughts/intero.png", "assets/images/thoughts/poo.png"];

// while (theImages.length) {
// 	shuffled.push(theImages.splice(Math.random() * theImages.length, 1));
// }

function getRandomImage() {
 
    var randomImage = new Array(); 
    randomImage[0] = "assets/images/thoughts/hamburger.png"; 
    randomImage[1] = "assets/images/thoughts/intero.png"; 
    randomImage[2] = "assets/images/thoughts/poo.png";
    } 

var number = Math.floor(Math.random()*randomImage.length);
document.write('<img src="'+randomImage[number]+'" />');
}