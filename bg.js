const body = document.querySelector("body");
const IMG_NUMBER = 3;

function paintImage(imgNumber){
    const image = new Image();
    image.src =`img/${imgNumber+1}.jpg`;
    image.classList.add("bgImage");
    body.prepend(image);
}

function genRandom(){
    const number =Math.floor(Math.random()*7);
    return number;
}
function init(){
 const randomNumber = genRandom();
 paintImage(randomNumber);
}
init();