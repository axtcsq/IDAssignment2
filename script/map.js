let map;
    
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 1.3322356140057394, lng: 103.77448684239316 },
        zoom: 16,
    });
}