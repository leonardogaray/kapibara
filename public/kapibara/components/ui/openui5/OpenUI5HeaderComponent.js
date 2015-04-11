var OpenUI5HeaderComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "header",

    render : function(){
    	
    	this.component = new sap.ui.commons.ApplicationHeader({
            logoText : KapibaraLocale.GetText(this.getValue()),
            logoSrc : "kapibara/images/dot.transparent.png",
            displayWelcome : false,
            displayLogoff : false
        });

		return this.component;
    }

})