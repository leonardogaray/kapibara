var BootstrapComponent = new Class.Registry({
	Extends : KapibaraComponent,
	
	group : "bootstrap",

	renderAt : function(target){
    	this.render().placeAt(target);
    }

})