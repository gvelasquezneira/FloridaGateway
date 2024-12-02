//This is my map for Leaflet
var map = L.map('map').setView([28.296825, -82.804454], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/gvelasquezneira/cm44kq8p1015e01rw5906d9e9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3ZlbGFzcXVlem5laXJhIiwiYSI6ImNtM3E4MjFuYTBtZzAybG9hN3dsaW5wNGIifQ.fa1AyQBlhc3wA__mrYUF0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

counties = [
    {"CountyName":"Alachua County","Latitude":29.6741,"Longitude":-82.3550},
    {"CountyName":"Pasco County","Latitude":28.189453,"Longitude":-82.349396},
    {"CountyName":"Sarasota County","Latitude":27.341274,"Longitude":-82.528267},
    {"CountyName":"St. Lucie County","Latitude":27.3742,"Longitude":-80.4439}
    ]


    for (let i = 0; i < counties.length; i++) {
        L.marker([counties[i].Latitude, counties[i].Longitude])
            .bindPopup('<h3>' + counties[i].CountyName + '</h3>')
            .addTo(map);
    }