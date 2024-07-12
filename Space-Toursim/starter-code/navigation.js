let hamburger = document.getElementById('hiddenBurger');
let nav = document.querySelector('nav');
const exitLogo = document.createElement('img');

// Mobile approach to interact with the hamburger menu
hamburger.addEventListener('click', (e) => {
    gsap.fromTo(nav, { x: '200%' }, { x: '0%', duration: 0.7, display: "block" });

    exitLogo.className = 'exitLogo';
    exitLogo.src = '/assets/shared/icon-close.svg';
    exitLogo.style.position = "absolute";
    exitLogo.style.top = "1rem";
    exitLogo.style.right = "1rem";

    nav.appendChild(exitLogo);
});

exitLogo.addEventListener('click', () => {
    gsap.to(nav, { x: '200%', duration: 0.7, onComplete: () => { nav.style.display = "none"; } });
});

// Partie destination et changement d'interface
const destinationNav = document.getElementById('destination');
const homeNav = document.getElementById('home');
const body = document.querySelector('body');

// Variables pour des éléments spécifiques à chaque pages
const button = document.querySelector('button');
const homePage = document.getElementById('home_page');

destinationNav.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = "none";
    body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
});

button.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = "none";
    body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')";
    body.style.backgroundPosition = "center";
    body.style.backgroundSize = "cover";
    body.style.backgroundRepeat = "no-repeat";
});

homeNav.addEventListener('click', (e) => {
    e.preventDefault();
    homePage.style.display = "block";
    body.style.backgroundImage = "url('/assets/home/background-home-desktop.jpg')";
});