var BootstrapComponent = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "bootstrap",

	Implements : KapibaraHTML,

	"renderAt" : function(target){
    	$(target)[0].appendHTML(this.render());
    }

})