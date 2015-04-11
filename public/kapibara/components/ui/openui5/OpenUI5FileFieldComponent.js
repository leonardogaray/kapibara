var OpenUI5FileFieldComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "file-field",

    render : function(){
    	var self = this;

        this.component = new sap.ui.commons.FileUploader({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            })
        })

        return this.component;
    }

})