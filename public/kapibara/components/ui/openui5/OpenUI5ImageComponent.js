var OpenUI5ImageComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "image",

    render : function(){
    	
    	this.component = new sap.ui.commons.Image({
            alt : this.getNameText(),
            src : this.getValue()
        });

		return this.component;
    }

})