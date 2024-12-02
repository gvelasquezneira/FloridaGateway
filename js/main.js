//This is my map for Leaflet
var map = L.map('map').setView([28.296825, -82.804454], 6.5);

L.tileLayer('https://api.mapbox.com/styles/v1/gvelasquezneira/cm44kq8p1015e01rw5906d9e9/tiles/256/{z}/{x}/{y}@2x?access_token=pk.eyJ1IjoiZ3ZlbGFzcXVlem5laXJhIiwiYSI6ImNtM3E4MjFuYTBtZzAybG9hN3dsaW5wNGIifQ.fa1AyQBlhc3wA__mrYUF0w', {
    maxZoom: 18,
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>'
}).addTo(map);

counties = [
    counties = [
    {"County Name": "Alachua County", "Latitude": 29.6741, "Longitude": -82.3550},
    {"County Name": "Baker County", "Latitude": 30.3015, "Longitude": -82.1947},
    {"County Name": "Bay County", "Latitude": 30.1805, "Longitude": -85.6849},
    {"County Name": "Bradford County", "Latitude": 29.9507, "Longitude": -82.1574},
    {"County Name": "Brevard County", "Latitude": 28.2630, "Longitude": -80.7210},
    {"County Name": "Broward County", "Latitude": 26.1901, "Longitude": -80.3659},
    {"County Name": "Calhoun County", "Latitude": 30.4335, "Longitude": -85.1898},
    {"County Name": "Charlotte County", "Latitude": 26.8946, "Longitude": -81.9096},
    {"County Name": "Citrus County", "Latitude": 28.7028, "Longitude": -82.5778},
    {"County Name": "Clay County", "Latitude": 29.9993, "Longitude": -81.7496},
    {"County Name": "Collier County", "Latitude": 26.2411, "Longitude": -81.5596},
    {"County Name": "Columbia County", "Latitude": 30.1813, "Longitude": -82.6460},
    {"County Name": "DeSoto County", "Latitude": 27.0328, "Longitude": -81.8403},
    {"County Name": "Dixie County", "Latitude": 29.4002, "Longitude": -83.1264},
    {"County Name": "Duval County", "Latitude": 30.3322, "Longitude": -81.6557},
    {"County Name": "Escambia County", "Latitude": 30.6389, "Longitude": -87.3414},
    {"County Name": "Flagler County", "Latitude": 29.4082, "Longitude": -81.2519},
    {"County Name": "Franklin County", "Latitude": 29.7805, "Longitude": -84.8744},
    {"County Name": "Gadsden County", "Latitude": 30.5883, "Longitude": -84.6479},
    {"County Name": "Gilchrist County", "Latitude": 29.9997, "Longitude": -82.8502},
    {"County Name": "Glades County", "Latitude": 26.8670, "Longitude": -81.3547},
   
]
    ]
    for (let i = 0; i < counties.length; i++) {
        L.marker([counties[i].Latitude, counties[i].Longitude])
            .bindPopup('<h3>' + counties[i].CountyName + '</h3>')
            .addTo(map);
    }