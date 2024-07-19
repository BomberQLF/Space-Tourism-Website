document.addEventListener("DOMContentLoaded", () => {
    const hamburger = document.getElementById('hiddenBurger');
    const nav = document.querySelector('nav');
    const exitLogo = document.createElement('img');
  
    // Mobile approach to interact with the hamburger menu
    hamburger.addEventListener('click', () => {
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
    const crewNav = document.getElementById('crew');
    const techNav = document.getElementById('technology');
    const logoNav = document.getElementById('logo');
    const button = document.querySelector('button');
    const body = document.querySelector('body');
  
    // Variables pour des éléments spécifiques à chaque pages
    const homePage = document.getElementById('home_page');
    const destinationPage = document.getElementById('destination_page');
    const crewPage = document.getElementById('crew_page');
    const techPage = document.getElementById('tech_page');
  
    // Initialiser la page d'accueil
    // homePage.style.display = "block";
    destinationPage.style.display = "none";
    crewPage.style.display = "none";
    techPage.style.display = "none";


    logoNav.addEventListener('click', (e) => {
      e.preventDefault();
      body.style.backgroundImage = "url('/assets/home/background-home-desktop.jpg')";
      homePage.style.display = 'block';
      crewPage.style.display = "none";
      techPage.style.display = "none";
      destinationPage.style.display = 'none';
    })

    button.addEventListener('click', (e) => {
      e.preventDefault();
      homePage.style.display = 'none';
      crewPage.style.display = "none";
      techPage.style.display = "none";
      destinationPage.style.display = 'block';
      body.style.backgroundImage = "url('/assets/destination/background-destination-desktop.jpg')"
      body.style.backgroundPosition = "center";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
    })
  
    destinationNav.addEventListener('click', (e) => {
      e.preventDefault();
      homePage.style.display = "none";
      destinationPage.style.display = "block";
      crewPage.style.display = "none";
      techPage.style.display = "none";
      body.style.backgroundImage = "url('assets/destination/background-destination-desktop.jpg')";
      body.style.backgroundPosition = "center";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
    });
  
    homeNav.addEventListener('click', (e) => {
      e.preventDefault();
      homePage.style.display = "block";
      destinationPage.style.display = "none";
      crewPage.style.display = "none";
      techPage.style.display = "none";
      body.style.backgroundImage = "url('assets/home/background-home-desktop.jpg')";
    });
  
    crewNav.addEventListener('click', (e) => {
      e.preventDefault();
      homePage.style.display = "none";
      destinationPage.style.display = "none";
      crewPage.style.display = "block";
      techPage.style.display = "none";
      body.style.backgroundImage = "url('assets/crew/background-crew-desktop.jpg')";
      body.style.backgroundPosition = "center";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
    });
  
    techNav.addEventListener('click', (e) => {
      e.preventDefault();
      homePage.style.display = "none";
      destinationPage.style.display = "none";
      crewPage.style.display = "none";
      techPage.style.display = "block";
      body.style.backgroundImage = "url('assets/technology/background-technology-desktop.jpg')";
      body.style.backgroundPosition = "center";
      body.style.backgroundSize = "cover";
      body.style.backgroundRepeat = "no-repeat";
    });

  });
  
