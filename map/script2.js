let test = document.getElementById('test');
let position;
let defaultpos = { lat: -24.632443, lng: 135.958014 };
let myLatLng;

let pays = {
     "france" : 
        {
          "lat": 47.953690,
          "lng": 0.213142
        },
    "usa" : 
        {
          "lat": 30.136641,
          "lng": -97.635497
        },
    "qatar" : 
        {
          "lat": 25.486842,
          "lng": 51.452816
        },
    "argentine" : 
        {
          "lat": -27.512002,
          "lng": -64.917769
        },
    "espagne" : 
        {
          "lat": 36.709582,
          "lng": -6.033441
        },
    "italie" : 
        {
          "lat": 43.996167,
          "lng": 11.371104
        },
    "italie2" : 
        {
          "lat": 43.961546,
          "lng": 12.686022
        },
    "barcelone" : 
        {
          "lat": 41.568656,
          "lng": 2.257441
        },
    "paysbas" : 
        {
          "lat": 52.958457,
          "lng": 6.522353
        },
    "allemagne" : 
        {
          "lat": 50.790949,
          "lng": 12.687514
        },
    "reptcheque" : 
        {
          "lat": 49.204495,
          "lng": 16.445518
        },
    "autriche" : 
        {
          "lat": 47.220283,
          "lng": 14.765165
        },
    "angleterre" : 
        {
          "lat": 52.073601,
          "lng": -1.014565
        },
    "aragon" : 
        {
          "lat": 41.078486,
          "lng": -0.204481
        },
    "thailande" : 
        {
          "lat": 14.958251,
          "lng": 103.085076
        },
     "japon" : 
        {
          "lat": 36.532165,
          "lng": 140.225352
        },
    "island" : 
        {
          "lat": -38.500215,
          "lng": 145.231414
        },
    "malaisie" : 
        {
          "lat": 2.759682,
          "lng": 101.731756
        },
    "valence" : 
        {
          "lat": 39.487835,
          "lng": -0.628879
        },
    "indianapolis" : 
        {
          "lat": 39.795505,
          "lng": -86.235251
        },
};

console.log(pays.espagne.lat);

let getStorage = localStorage.getItem('pos')

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: pays[getStorage],
    mapTypeId: "hybrid"
  });
  new google.maps.Marker({
    position: pays[getStorage],
    map,
    title: "Position",
    
  });
}

initMap();

