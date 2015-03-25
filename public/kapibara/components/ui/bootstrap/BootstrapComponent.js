var BootstrapComponent = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "bootstrap",

	renderAt : function(target){
    	$(target)[0].appendHTML(this.render());
    }

})