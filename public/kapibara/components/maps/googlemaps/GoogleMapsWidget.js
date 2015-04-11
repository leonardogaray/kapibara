var GoogleMapsWidget = new Class.Kapibara({
	Static : {
    },

	Extends : KapibaraWidget,

	render : function(config){
        var mapOptions = {
    		zoom: 8,
    		center: new google.maps.LatLng(-34.397, 150.644)
  		};
  		
  		this.widget = new google.maps.Map(document.getElementById("#" + config.id), mapOptions);
    }

});
	