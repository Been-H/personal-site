var navBarOpenWidth = 1000;

const menuButton = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const hamburgerLines = document.querySelectorAll(".line");

menuButton.addEventListener("click", toggleNav);

function toggleNav() {
    console.log(window.innerWidth);
    if (window.innerWidth <= navBarOpenWidth) {
        navLinks.classList.toggle("nav-links-open");
        menuButton.classList.toggle("hamburger-menu-open");
    }

}

var canScroll = false;

const loadMenu = document.querySelector(".loader-wrapper")

function resestScroll() {
    window.scrollTo(0, 0);
}

window.addEventListener('scroll', resestScroll);

window.addEventListener('load', () => {
    document.querySelector("main").classList.add("main-loaded");
    loadMenu.classList.add("loader-wrapper-move");
    setTimeout(() => { window.removeEventListener("scroll", resestScroll); }, 1500);
});