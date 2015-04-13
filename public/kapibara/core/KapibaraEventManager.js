var KapibaraEventManager = new Class.Kapibara({
    initialize: function(component){
    	KapibaraCommons.Assert(component, "The component should be defined.");

    	this.component = component;
    },

    getComponentId : function(){
    	return this.component.getId();
    },

    hasEvent : function(event){
		if(KapibaraModuleRepository.GetMainModule().hasEventByComponentId(this.getComponentId()))
			return KapibaraModuleRepository.GetMainModule().getEventByComponentId(this.getComponentId())[event];
		return false;
	},

	getEvent : function(event){
		return KapibaraModuleRepository.GetMainModule().getEventByComponentId(this.getComponentId())[event];
	},

	doOnEvent : function(event,parameters){
		
		if(this.hasEvent(event)){
			for(var action in this.getEvent(event)){
				if(typeof(this.getEvent(event)[action]) == "function"){
					this.getEvent(event)[action](parameters);
				}else{
					this.getEvent(event)[action].split(",").forEach(function(componentId){
						var filters = componentId.split("->");
					
						if(filters.length > 1){
							var newParameters = {};
							for(var i=1; i < filters.length;i++){
								newParameters[filters[i]] = parameters[filters[i]];
							}
							parameters = newParameters;
						}

				   		if(KapibaraComponentFactory.GetComponent(filters[0]) && KapibaraComponentFactory.GetComponent(filters[0])[action]){
			   				KapibaraComponentFactory.GetComponent(filters[0])[action](parameters);
			   			}
					}, this);
				}
			}

			//if(this.hasParentComponent())
			//	this.getParentComponent().doOnEvent(parameters,event);
		}
	}
})