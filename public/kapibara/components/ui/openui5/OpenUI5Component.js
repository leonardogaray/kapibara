var OpenUI5Component = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "openui5",

    renderAt : function(target){
    	this.render().placeAt(target.replace("#",""));
    }
})