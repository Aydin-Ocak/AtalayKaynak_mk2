const menuBtn = document.querySelector("#btn_menu");
const nav = document.querySelector("#nav");
const nav_main = document.querySelector("#nav_main");
const nav_right = document.querySelector("#nav_right");


menuBtn.addEventListener("click", function(){
    nav_main.classList.toggle("active");
    nav_right.classList.toggle("active");
    nav.classList.toggle("active_nav")
})