let open = false;

function menuOpen() {
    let menuBtn = document.querySelector(".menu-phone");
    let menu = document.querySelector(".phone-nav-wrapper");
    open = open ? false : true;
    
    if(!open) menuBtn.src = "img/icons/Menu.svg";
    else menuBtn.src = "img/icons/Close.svg";
    menu.classList.toggle("active")
}