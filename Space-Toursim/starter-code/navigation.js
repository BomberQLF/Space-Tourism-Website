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