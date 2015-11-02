/**
* This object manage the google map on the view
*/
var map_manager = {
	// PARAMETERS
	markers : [],
	map : null,
	// Initialisation Google map
	init: function (longitude , latitude) {
		this.markers = [];
		this.map = new google.maps.Map(document.getElementById("map_canvas"), {
        	zoom: 8,
        	center: new google.maps.LatLng(longitude, latitude),
        	mapTypeId: google.maps.MapTypeId.ROADMAP
    	});
	},
	// this function add a marker to google map
	addMarker: function (service) {
		var marker = new google.maps.Marker({
		    position: new google.maps.LatLng(service.latitude,service.longitude),
		    map: this.map
		});
		var infowindow = new google.maps.InfoWindow({
		    content: service.name
		});
		marker.addListener('click', function() {
			infowindow.open(this.map, marker);
			map_manager.clickOnMarker(service);
		});
		this.markers.push({'marker' : marker, 'service' : service});
	},
	// clean all makers
	clearMarker : function () {
		for (var i = 0; i < this.markers.length; i++) {
			this.markers[i].marker.setMap(null);
		}
	},
	//adapte the map zoom
	resize: function () {
		var bounds = new google.maps.LatLngBounds();
		for (var i = 0; i < this.markers.length; i++) {
			var service = this.markers[i].service;
			bounds.extend(new google.maps.LatLng(service.latitude,service.longitude));
		}
		this.map.fitBounds(bounds);
	},
	// to define, call to add action on click on marker
	clickOnMarker : function (service) { }
};