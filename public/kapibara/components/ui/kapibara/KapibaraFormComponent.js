var KapibaraFormComponent = new Class.Kapibara({
	
    Extends : KapibaraComponent,

    "getFormComponents" : function(){
		return  this.formComponents;
	},

	"addFormComponent" : function(formComponent){
		KapibaraCommons.Assert(formComponent,"The formComponent is not defined");

		if(!this.formComponents)
			this.formComponents = [];

		this.formComponents.push(formComponent);
	},

	/****************************** COMPONENT ACTIONS **********************************/
	"cleanData" : function(){
		this.getFormComponents().forEach(function(formComponent){
			formComponent.cleanData();
		});
	},

	"setComponentValue" : function(data){
		this.getFormComponents().forEach(function(formComponent){
			formComponent.setComponentValue(data[0][formComponent.getValue()])
		},this);

		this.doOnEvent("update", data);
	},

	"getComponentValue" : function(data){
		var data = {};

		this.getFormComponents().forEach(function(component){
			if(component.getType() != "image" && component.getType() != "file")
				data[component.getValue()] = component.getComponentValue();
		}, this);

		return data;
	},

})