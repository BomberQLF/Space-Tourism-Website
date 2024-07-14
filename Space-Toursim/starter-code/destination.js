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
          <p class="heading"><span class="number">01</span>Pick your destination</p>
          <div class="container">
            <div class="image_container">
              <img id="planet" src="${destinationData.images.webp}" alt="${destinationData.name} image">
            </div>
            <div class="destinations_container">
              <ul>
                <li id="moon" class="destinations">Moon</li>
                <li id="mars" class="destinations">Mars</li>
                <li id="europa" class="destinations">Europa</li>
                <li id="titan" class="destinations">Titan</li>
              </ul>
              <h1 class="title">${destinationData.name}</h1>
              <p class="description">${destinationData.description}</p>
              <div class="info_container">
                <div class="info_block">
                  <h2 class="info_heading">Avg. Distance</h2>
                  <p class="info_value">${destinationData.distance}</p>
                </div>
                <div class="info_block">
                  <h2 class="info_heading">Est. Travel Time</h2>
                  <p class="info_value">${destinationData.travel}</p>
                </div>
              </div>
            </div>
          </div>
        `;

        // Vider la section de destination avant d'ajouter le nouvel élément
        destinationSection.innerHTML = '';
        destinationSection.appendChild(destinationElement);

        // Ajouter des écouteurs d'événements à chaque lien de destination
        const moonNav = document.getElementById('moon');
        moonNav.addEventListener('click', () => updateDestination('Moon'));

        const marsNav = document.getElementById('mars');
        marsNav.addEventListener('click', () => updateDestination('Mars'));

        const europaNav = document.getElementById('europa');
        europaNav.addEventListener('click', () => updateDestination('Europa'));

        const titanNav = document.getElementById('titan');
        titanNav.addEventListener('click', () => updateDestination('Titan'));
      }
    }

    // Initialiser la destination "Moon" par défaut
    updateDestination('Moon');
  })
 .catch(error => {
    console.error('Error fetching data:', error);
  });