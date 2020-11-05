let france = { lat : 47.953690, lng: 0.213142 };
let usa = { lat: 30.136641, lng:-97.635497 };
let qatar = { lat: 25.486842, lng: 51.452816 };
let argentine = { lat: -27.512002, lng: -64.917769};
let espagne = { lat: 36.755868, lng: -6.017143};
let italie = { lat: 43.996167, lng: 11.371104};
let italie2 = {lat: 43.961546, lng: 12.686022};
let barcelone = {lat: 41.568656, lng: 2.257441};
let paysbas = {lat: 52.958457, lng: 6.522353};
let allemagne = {lat: 50.790949, lng: 12.687514};
let reptcheque = {lat: 49.204495, lng: 16.445518};
let autriche = {lat: 47.220283, lng: 14.765165};
let angleterre = {lat: 52.073601, lng: -1.014565};
let aragon ={lat: 41.078486, lng: -0.204481};
let thailande = {lat: 14.958251, lng: 103.085076};
let japon = {lat: 36.532165, lng: 140.225352};
let island = {lat: -38.500215, lng: 145.231414};
let malaisie = {lat:2.759682, lng: 101.731756};
let valence = {lat: 39.487835, lng: -0.628879};
let indianapolis = {lat: 39.795505, lng: -86.235251};
let test = document.getElementById('test');
let position;
let defaultpos = { lat: -24.632443, lng: 135.958014 };
let myLatLng;



let getStorage = localStorage.getItem('pos')
console.log('cc '+ getStorage);

if (localStorage.getItem('pos') == 'france'){
  myLatLng = france;
} else if(localStorage.getItem('pos') == 'australia') {
  myLatLng = island;
} else if(localStorage.getItem('pos') == 'angleterre') {
  myLatLng = angleterre;
} else if(localStorage.getItem('pos') == 'autriche') {
  myLatLng = autriche;
} else if(localStorage.getItem('pos') == 'reptechque') {
  myLatLng = reptcheque;
} else if(localStorage.getItem('pos') == 'allemagne') {
  myLatLng = allemagne;
} else if(localStorage.getItem('pos') == 'paysbas') {
  myLatLng = paysbas;
} else if(localStorage.getItem('pos') == 'catalogne') {
  myLatLng = barcelone;
} else if(localStorage.getItem('pos') == 'italie') {
  myLatLng = italie;
} else if(localStorage.getItem('pos') == 'espagne') {
  myLatLng = espagne;
} else if(localStorage.getItem('pos') == 'usa') {
  myLatLng = usa;
} else if(localStorage.getItem('pos') == 'argentine') {
  myLatLng = argentine;
} else if(localStorage.getItem('pos') == 'saintmarin') {
  myLatLng = italie2;
} else if(localStorage.getItem('pos') == 'aragon') {
  myLatLng = aragon;
} else if(localStorage.getItem('pos') == 'thailande') {
  myLatLng = thailande;
} else if(localStorage.getItem('pos') == 'japon') {
  myLatLng = japon;
} else if(localStorage.getItem('pos') == 'malaisie') {
  myLatLng = malaisie;
} else if(localStorage.getItem('pos') == 'valence') {
  myLatLng = valence;
} else if(localStorage.getItem('pos') == 'indiana') {
  myLatLng = indianapolis;
}
 else if(localStorage.getItem('pos') == 'qatar') {
  myLatLng = qatar;
}

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 10,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Position",
    
  });
}

initMap();

