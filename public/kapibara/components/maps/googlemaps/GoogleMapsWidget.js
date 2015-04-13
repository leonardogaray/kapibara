function initializeKapibaraGoogleMap(){
    /*
    this.widget.render({
        id : this.getId()
    });
    */
}

var GoogleMapsWidget = new Class.Registry({
    Register : KapibaraWidgetFactory, 

	Extends : MapsWidget,

    type : "googlemaps",

	render : function(config){
        var mapOptions = {
    		zoom: 8,
    		center: new google.maps.LatLng(-34.397, 150.644)
  		};
      		
      	this.widget = new google.maps.Map(document.getElementById("#" + config.id), mapOptions);
    }

});
	