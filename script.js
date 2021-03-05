mapboxgl.accessToken = 'pk.eyJ1IjoibWFjaWFubzEyMyIsImEiOiJja2xzM2Z2NHUwNmFiMndvM3YxaDh1anptIn0.qzu9y4Oe5Unz2NfutpgO5Q';
var map = new mapboxgl.Map({
container: 'map',
center: [50.2938243, 18.6650625],
style: 'mapbox://styles/mapbox/satellite-v9'
});

var geocoder = new MapboxGeocoder({
    accessToken: mapboxgl.accessToken,
    mapboxgl: mapboxgl
    });
    
document.getElementById('geocoder').appendChild(geocoder.onAdd(map));

function showNasaImage() {
    const apiKey = 'rxxZMm0FSBEvwv6dHmTT19GqcXFNf9yGmY0dWaAw';
    const lon = formatFloat(map.getCenter().lng);
    const lat = formatFloat(map.getCenter().lat);
    const url = 'https://api.nasa.gov/planetary/earth/imagery?lon=' + lon + '&lat=' + lat + '&api_key=' + apiKey + '&date=2020-06-03&dim=1';
    document.getElementById('nasaImage'). innerHTML = '<img src="' + url + '"/>'
}

function formatFloat(x) {
    return Number.parseFloat(x).toPrecision(4);2
}
