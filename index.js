var PressMe = document.querySelector(".link");
var showCross = document.querySelector(".bx-menu")
function cLickMe(){
    PressMe.classList.toggle("link-dropdown");

    if (PressMe.classList.contains("link-dropdown")) {
        showCross.classList.toggle("menu-hide")
    }
}

