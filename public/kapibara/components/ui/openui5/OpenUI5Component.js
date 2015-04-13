var OpenUI5Component = new Class.Kapibara({
	Extends : KapibaraComponent,
	
	group : "openui5",

    renderAt : function(target){
    	this.render().placeAt(target.replace("#",""));
    },

    setComponentValue : function(data){
    	this.component.setValue(data);
    },

    getComponentValue : function(){
    	return this.component.getValue();
    }
})