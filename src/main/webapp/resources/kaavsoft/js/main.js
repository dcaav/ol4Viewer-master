var layers = [];

layers.push(
	new ol.layer.Tile({
		source: new ol.source.XYZ({
	        url: 'https://api.mapbox.com/styles/v1/mapbox/streets-v9/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpejY4NXVycTA2emYycXBndHRqcmZ3N3gifQ.rJcFIG214AriISLbB6B5aw',
		})
	})
);

var map = new ol.Map({
	layers: layers,
	loadTilesWhileInteracting: true,
	target: 'map',
	controls: ol.control.defaults({
	    attributionOptions: ({
	      collapsible: false
	    })
	}),
  	view: new ol.View({
  		projection: 'EPSG:4326',
  		center: [-3.7033,40.4169],
  		zoom: 14
  	})
});
