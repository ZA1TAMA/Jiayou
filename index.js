function openPack(pack) {
    window.open(pack+".html", "_self");
}

function openPage(name) {
    window.open(name, "_self");
}

let menuOpen = false;
let wallMenu = document.getElementById("wallMenu");
openMenu = () => {
    switch (menuOpen) {
        case false:
            wallMenu.style.transform = "translateX(0%)";
            menuOpen = true;
        break;
        case true:
            wallMenu.style.transform = "translateX(-100%)";
            menuOpen = false;
        break;
    }
}