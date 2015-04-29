var JQueryMobileComponent = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "jquerymobile",

	renderAt : function(target){
		var self = this;
		
		setTimeout(function(){
			$(target).replaceWith( self.render() );
			$(target).enhanceWithin();
		},2000)

		

    }

})