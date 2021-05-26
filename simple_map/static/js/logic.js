// Add console.log to check to see if our code is working.
console.log("working");

// Create the map object with a center and zoom level.
var myMap = L.map('map', {
    center: [40.7, -94.5],
    zoom: 4
  });


 // We create the tile layer that will be the background of our map.
L.tileLayer("https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}", {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
    maxZoom: 18,
    zoomOffset: -1,
    id: "mapbox/streets-v11",
    accessToken: API_KEY
}).addTo(myMap);
// Then we add our 'graymap' tile layer to the map.
