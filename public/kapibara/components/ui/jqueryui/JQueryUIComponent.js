var JQueryUIComponent = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "jqueryui",

	renderAt : function(target){
		$(target).html( this.render() );
    }

})