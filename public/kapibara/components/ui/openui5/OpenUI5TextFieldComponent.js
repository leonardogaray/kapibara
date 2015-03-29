var OpenUI5TextFieldComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "text-field",

    render : function(){
    	var self = this;

        this.component = new sap.ui.commons.TextField({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            }),
            change : function(){
            }
        })

        return this.component;
    }

})