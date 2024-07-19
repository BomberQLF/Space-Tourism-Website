// Initialiser AOS
document.addEventListener('DOMContentLoaded', () => {
  AOS.init({
    duration: 1000,
    easing: 'ease-in-out', 
    once: true, 
  });
});

fetch('data.json')
  .then(response => response.json())
  .then(data => {
    const destinationSection = document.getElementById('destination_page');
    const destinations = data.destinations;

    function updateDestination(destinationName) {
      const destinationData = destinations.find(dest => dest.name === destinationName);

      if (destinationData) {
        const destinationElement = document.createElement('div');
        destinationElement.classList.add('destination');

        destinationElement.innerHTML = `
          <p class="heading" data-aos="fade-left"><span class="number">01</span>Pick your destination</p>
          <div class="container" data-aos="fade-left">
            <div class="image_container" data-aos="fade-up">
              <img id="planet" class="destination_image" src="${destinationData.images.webp}" alt="${destinationData.name} image">
            </div>
            <div class="destinations_container" data-aos="fade-left">
              <ul>
                <li id="moon" class="destinations">Moon</li>
                <li id="mars" class="destinations">Mars</li>
                <li id="europa" class="destinations">Europa</li>
                <li id="titan" class="destinations">Titan</li>
              </ul>
              <h1 class="title">${destinationData.name}</h1>
              <p class="description">${destinationData.description}</p>
              <div class="info_container">
                <div class="info_block" data-aos="fade-left">
                  <h2 class="info_heading">Avg. Distance</h2>
                  <p class="info_value">${destinationData.distance}</p>
                </div>
                <div class="info_block" data-aos="fade-left">
                  <h2 class="info_heading">Est. Travel Time</h2>
                  <p class="info_value">${destinationData.travel}</p>
                </div>
              </div>
            </div>
          </div>
        `;

        destinationSection.innerHTML = '';
        destinationSection.appendChild(destinationElement);

        // Add event listeners for destinations
        document.getElementById('moon').addEventListener('click', () => updateDestination('Moon'));
        document.getElementById('mars').addEventListener('click', () => updateDestination('Mars'));
        document.getElementById('europa').addEventListener('click', () => updateDestination('Europa'));
        document.getElementById('titan').addEventListener('click', () => updateDestination('Titan'));

        // GSAP animation for destination image
        gsap.fromTo(
          '.destination_image',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
        );
      }
    }

    const crewSection = document.getElementById('crew_page');
    const crew = data.crew;

    function updateCrew(crewPersonName) {
      const crewData = crew.find(crew => crew.name === crewPersonName);

      if (crewData) {
        const crewElement = document.createElement('div');
        crewElement.classList.add('crew');

        crewElement.innerHTML = `
          <p class="heading" data-aos="fade-left"><span class="number">02</span>Meet your crew</p>
          <div class="container" data-aos="fade-left">
            <div class="crew_left" data-aos="fade-left">
              <p class="rank">${crewData.role}</p>
              <h1 class="crewman">${crewData.name}</h1>
              <p class="bio">${crewData.bio}</p>
              <div class="slider_container" data-aos="fade-left">
                <div class="slider_box" id="douglas"></div>
                <div class="slider_box" id="mark"></div>
                <div class="slider_box" id="victor"></div>
                <div class="slider_box" id="anousheh"></div>
              </div>
            </div>
            <div class="crew_right" data-aos="fade-right">
              <div class="image_container">
                <img class="crew_picture" src="${crewData.images.webp}" alt="${crewData.name}">
              </div>
            </div>
          </div>
        `;

        crewSection.innerHTML = '';
        crewSection.appendChild(crewElement);

        // Add event listeners for crew
        document.getElementById('douglas').addEventListener('click', () => updateCrew('Douglas Hurley'));
        document.getElementById('mark').addEventListener('click', () => updateCrew('Mark Shuttleworth'));
        document.getElementById('victor').addEventListener('click', () => updateCrew('Victor Glover'));
        document.getElementById('anousheh').addEventListener('click', () => updateCrew('Anousheh Ansari'));

        // GSAP animation for crew image
        gsap.fromTo(
          '.crew_picture',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
        );
      }
    }

    const techSection = document.getElementById('tech_page');
    const tech = data.technology;

    function updateTechnology(technologyPhase) {
      const techData = tech.find(tech => tech.name === technologyPhase);

      if (techData) {
        const techDiv = document.createElement('div');
        techDiv.classList.add('tech_container');

        techDiv.innerHTML = `
          <p class="heading" data-aos="fade-left"><span class="number">03</span>Space Launch 101</p>
          <div class="container" data-aos="fade-left">
            <div class="tech_left" data-aos="fade-left">
              <div class="slider_space">
                <span class="circle" id="one">1</span>
                <span class="circle" id="two">2</span>
                <span class="circle" id="three">3</span>
              </div>
              <div>
                <p class="rank">The terminology...</p>
                <h1 class="crewman">${techData.name}</h1>
                <p class="bio">${techData.description}</p>
              </div>
            </div>
            <div class="tech_right" data-aos="fade-right">
              <div class="space_image_container">
                <img class="tech_image" src="${techData.images.portrait}" alt="${techData.name}">
              </div>
            </div>
          </div>
        `;

        techSection.innerHTML = '';
        techSection.appendChild(techDiv);

        // Add event listeners for technology
        document.getElementById('one').addEventListener('click', () => updateTechnology('Launch vehicle'));
        document.getElementById('two').addEventListener('click', () => updateTechnology('Spaceport'));
        document.getElementById('three').addEventListener('click', () => updateTechnology('Space capsule'));

        // GSAP animation for technology image
        gsap.fromTo(
          '.tech_image',
          { opacity: 0, scale: 0.8 },
          { opacity: 1, scale: 1, duration: 1, ease: "power1.out" }
        );
      }
    }

    // Initial content
    updateDestination('Moon');
    updateCrew('Douglas Hurley');
    updateTechnology('Launch vehicle');
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });