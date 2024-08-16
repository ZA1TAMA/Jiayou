let hsk1 = [];
let hsk2 = [];
let hsk3 = [];
let packs = [];

let character = document.getElementById("character");
let pinyin = document.getElementById("pinyin");
let english = document.getElementById("english");
let packID = document.getElementById("pack-ID").innerHTML;

//Importing data from json
async function getData() {
    let response = await fetch("./packs.json");
    let jsonResult = await response.json();
    packs = await jsonResult;
    hsk1 = await packs.hsk1;
    hsk2 = await packs.hsk2;
    hsk3 = await packs.hsk3;
    
    let i = 0;
    
    switch (packID) {
        case "hsk1":
        packID = hsk1
        break;
        case "hsk2": 
        packID = hsk2
        break;
        case "hsk3":
        packID = hsk3;
        break;
    }
    i = Math.floor(Math.random() * packID.length -1);
    character.innerHTML = packID[i].chinese;
    pinyin.innerHTML = packID[i].pinyin;
    english.innerHTML = packID[i].english;
}


function nextCard() {
    i = Math.floor(Math.random() * packID.length -1);
    character.innerHTML = packID[i].chinese;
    pinyin.innerHTML = packID[i].pinyin;
    english.innerHTML = packID[i].english;
}

//Flip Card
let flipped = false;
const card = document.getElementById("card");

function flipCard() {
    if (flipped == false) {
        card.style.transform = "rotateY(180deg)";
        flipped =  true;
    } else {
        card.style.transform = "rotateY(0deg)";
        flipped =  false;
    }
}
