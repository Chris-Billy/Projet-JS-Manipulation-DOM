let france = { lat : 48.886669, lng: 2.288060 };
let australia = { lat: -24.632443, lng: 135.958014 };
let usa = { lat: 38.941123, lng: -77.039297 };
let test = document.getElementById('test');
let position;
let defaultpos = { lat: -24.632443, lng: 135.958014 };
let myLatLng;



let getStorage = localStorage.getItem('pos')
console.log('cc '+ getStorage);

if (localStorage.getItem('pos') == 'france'){
  myLatLng = france;
} else if(localStorage.getItem('pos') == 'australia') {
  myLatLng = australia;
} else {
    myLatLng = usa;
}

let map;

function initMap() {
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 4,
    center: myLatLng,
  });
  new google.maps.Marker({
    position: myLatLng,
    map,
    title: "Hello World!",
    
  });
}

initMap();

