
export function renderMap () {
  var map = L.map('map').setView([59.968358108649, 30.316383218283892], 13);
  L.tileLayer('https://google.com/maps/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
  }).addTo(map);
};




