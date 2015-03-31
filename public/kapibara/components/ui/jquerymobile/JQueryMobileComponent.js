var JQueryMobileComponent = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "jquerymobile",

	renderAt : function(target){
		var self = this;
		$( document ).on( "pagebeforecreate", function() {
			$(target).replaceWith( self.render() ).enhanceWithin();
		});

    }

})