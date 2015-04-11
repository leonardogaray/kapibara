var OpenUI5TextAreaFieldComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "text-area-field",

    render : function(){
    	var self = this;

        this.component = new sap.ui.commons.TextArea({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            })
        })

        return this.component;
    }

})