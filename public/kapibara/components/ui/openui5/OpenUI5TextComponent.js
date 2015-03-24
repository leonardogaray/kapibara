var OpenUI5TextComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "text",

    render : function(){
    	
    	this.component = new sap.ui.commons.TextView({
    		text : this.getValue()
    	});

		return this.component;
    }

})