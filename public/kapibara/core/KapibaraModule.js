var KapibaraModule = new Class.Kapibara({
    "initialize": function(module){
    	KapibaraCommons.Assert(module,"The module is missing", this);
		KapibaraCommons.Assert(typeof(module) == "object","The module has wrong type. Should be an object", this);

        this.config = module;
    },

    "renderAt" : function(target){
    	return KapibaraComponentFactory.RenderAt(target, this.config);
    },

    "getEvents" : function(){
		if(this.hasEvents())
			return this.config.events;
		return [];
	},

	"hasEventByComponentId" : function(componentId){
		var result = false;

		if(this.hasEvents()){
			for(var cId in this.config.events){
				if(cId == componentId)
					result = true
			}
		}

		return result;
	},

	"getEventByComponentId" : function(componentId){
		var event = {};

		if(this.hasEvents()){
			for(var cId in this.config.events){
				if(cId == componentId)
					event = this.config.events[cId]
			}
		}

		return event;
	},

	"hasEvents" : function(){
		return this.config.events;
	},
})