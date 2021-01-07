/* 
Title: Simple Map, Markers
Author: Google Maps Platform
Date: 2020
Code version: 3.43.3
Availability: 
https://developers.google.com/maps/documentation/javascript/examples/map-simple#all
https://developers.google.com/maps/documentation/javascript/markers#maps_marker_simple-javascript 
*/

let map;
    
function initMap() {
    // Map Location (Ngee Ann Polytechnic)
    const myLatLng = { lat: 1.3322356140057394, lng: 103.77448684239316 };
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: myLatLng, 
    });
    
    // Map Marker
    new google.maps.Marker({
      position: myLatLng,
      map,
      title: "Marker",
    });
  }