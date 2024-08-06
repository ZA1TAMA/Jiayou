let hsk1 = [];
//Importing data from json
async function getData() {
    let response = await fetch("./hsk1.json");

    let jsonResult = await response.json();

    return jsonResult;
}

let charFront = document.getElementById("charFront");
let charBack = document.getElementById("charBack");
let pinyin = document.getElementById("pinyin");
let translation = document.getElementById("translation");

//filling array select with data
document.addEventListener("DOMContentLoaded", async () => {

    hsk1 = await getData();
    
    charFront.innerHTML = hsk1[0].Character;
    charBack.innerHTML = hsk1[0].Character;
    pinyin.innerHTML = hsk1[0].Pinyin;
    translation.innerHTML = hsk1[0].English;
});

let i = 0;
function nextCharacter(){
    i++;
    console.log(hsk1[i].Character)
    charFront.innerHTML = hsk1[i].Character;
    charBack.innerHTML = hsk1[i].Character;
    pinyin.innerHTML = hsk1[i].Pinyin;
    translation.innerHTML = hsk1[i].English;
    if (flipped == true) {
        card.style.transition = "none";
        card.style.transform =  "rotateY(0deg)";
    }
}


//Card Flip
const card = document.getElementById("flip");
let flipped = false;

function flipcard() {
    card.style.transition = "transform 0.5s";
    card.style.transform = "rotateY(-180deg)";
    flipped = true;
}


//Menu Animation
const menuBlock = document.getElementById("menu");
const menuButton = document.getElementById("menu-button");
let menuOpen = false;
function menuAnimation() {

    if (menuOpen == false) {
        menuBlock.style.transform = "translateX(0%)";
        menuButton.style.filter = "brightness(100)";
        menuOpen = true;
        
    } else {
        menuBlock.style.transform = "translateX(100%)";
        menuButton.style.filter = "brightness(0)";
        menuOpen = false;
    }
    
}