var OpenUI5DateFieldComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "date-field",

    render : function(){
    	var self = this;

        this.component = new sap.ui.commons.DatePicker({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            }),
            change : function(){
            }
        })

        return this.component;
    }

})