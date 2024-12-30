// Map init
var map = null;

document.addEventListener("DOMContentLoaded", function () {
  initMap();
});

function initMap() {
  map = L.map("map").setView([-17.6797, -149.4068], 13);

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 19,
    attribution: "© OpenStreetMap contributors",
  }).addTo(map);
}