var map = L.map('map').setView([30, 30], 7);

L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png',
 {attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}).addTo(map);
 var drawnItems = new L.FeatureGroup();
 map.addLayer(drawnItems);
 
 var drawControl = new L.Control.Draw({
   draw: {
     polygon: true,
     polyline: true,
     circle: true,
     rectangle: true,
     marker: true
   },
   edit: {
     featureGroup: drawnItems
   }
 });
 
 map.addControl(drawControl);
 map.on('draw:created', function (e) {
    var layer = e.layer;
    drawnItems.addLayer(layer);
    var geoJsonData = layer.toGeoJSON();
    console.log(geoJsonData);
    console.log(geoJsonData.geometry.coordinates);
    // localStorage.setItem("layer",geoJsonData)
    // var test = localStorage.getItem("layer")
    // console.log(test);
  });
