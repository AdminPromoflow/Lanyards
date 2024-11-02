class ProvidedInformation {
  constructor() {
    mapboxgl.accessToken = 'pk.eyJ1IjoiaWFuc291dGhlcm4iLCJhIjoiY20ybWowdnRlMHBmcjJqcTljaDdhYXV6diJ9.UK4tRTqDkO6yYffa-LIyWw';  // Reemplaza con tu token de Mapbox
    const postcodeHTML = document.getElementById('postcode');
    const countryHTML = document.getElementById('country');
    const regionHTML = document.getElementById('region');




    const map = new mapboxgl.Map({
        container: 'map',
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [ -4.041201572157277 , 50.39614566225547],
        zoom: 12
    });

    let marker;  // Variable para almacenar el marcador
    let postcode ='';
    let country = '';   // Variable to store the country
    let region = '';    // Variable to store the state/region


    const searchBox = document.getElementById('search-box');
    const resultList = document.getElementById('result-list');

    searchBox.addEventListener('input', function() {
        const query = searchBox.value;
        if (query.length > 2) {
            fetch(`https://api.mapbox.com/geocoding/v5/mapbox.places/${query}.json?access_token=${mapboxgl.accessToken}`)
                .then(response => response.json())
                .then(data => {
                    resultList.innerHTML = '';  // Limpiar la lista de resultados previos

                    data.features.forEach((feature) => {
                        const li = document.createElement('li');
                        li.textContent = feature.place_name;
                        resultList.appendChild(li);

                        // Cuando se selecciona un resultado de la lista
                        li.addEventListener('click', () => {
                            const [lng, lat] = feature.geometry.coordinates;

                            // Si ya existe un marcador, lo eliminamos
                            if (marker) {
                                marker.remove();
                            }

                            // Crear un nuevo marcador y posicionarlo en la ubicación seleccionada
                            marker = new mapboxgl.Marker()
                                .setLngLat([lng, lat])
                                .addTo(map);

                            // Centrar el mapa en la ubicación seleccionada
                            map.flyTo({
                                center: [lng, lat],
                                zoom: 14,
                                essential: true  // Esto asegura que la animación ocurra
                            });

                            postcode = feature.context.find(c => c.id.startsWith('postcode'))?.text || 'No disponible';
                            country = feature.context.find(c => c.id.startsWith('country'))?.text || 'Not available';
                            region = feature.context.find(c => c.id.startsWith('region'))?.text || 'Not available';

                            postcodeHTML.value = postcode;
                            countryHTML.value = country;
                            regionHTML.value = region;
                            // Ocultar la lista de resultados después de seleccionar uno
                            resultList.innerHTML = '';
                        });
                    });
                });
        } else {
            resultList.innerHTML = '';  // Limpiar la lista si se borran los caracteres de búsqueda
        }
    });
  }
}
const providedInformation = new ProvidedInformation();
