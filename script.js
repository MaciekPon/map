mapboxgl.accessToken = 'pk.eyJ1IjoibWFjaWFubzEyMyIsImEiOiJja2xzM2Z2NHUwNmFiMndvM3YxaDh1anptIn0.qzu9y4Oe5Unz2NfutpgO5Q';
var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/satellite-v9'
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    });

document.getElementById('geocoder').appendChild(geocoder.onAdd(map));