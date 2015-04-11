var OpenUI5MenuComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "menu",

    render : function(){
    	
    	this.component = new sap.ui.commons.MenuBar();

        this.getValue().forEach(function(button){
            this.component.addItem(new sap.ui.commons.MenuItem({text:KapibaraLocale.GetText(button.value)}));
        }, this);

		return this.component;
    }

})