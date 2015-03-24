var KapibaraModuleRepository = new Class({
    initialize: function(){
        this.modules = {};
    },

    addModule : function(moduleId, module){
    	this.modules[moduleId] = new KapibaraModule(module);
    },

    getModules : function(){
    	return this.modules;
    },

    hasModule : function(moduleId){
    	return this.modules[moduleId];
    }

}).extend({
	GetInstance : function(){
		if(!KapibaraModuleRepository.Instance)
			KapibaraModuleRepository.Instance = new KapibaraModuleRepository();

		return KapibaraModuleRepository.Instance;
	},

	LoadModules : function(modules){
		KapibaraCommons.Assert(modules,"The modules are missing");
		KapibaraCommons.Assert(typeof(modules) == "object","The modules has wrong type. Should be an object");

		for(var moduleId in modules){
			KapibaraModuleRepository.AddModule(moduleId, modules[moduleId]);
		}
	},

	AddModule : function(moduleId, module){
		KapibaraCommons.Assert(moduleId,"The moduleId is missing");
		KapibaraCommons.Assert(module,"The module is missing");
		KapibaraCommons.Assert(typeof(module) == "object","The module has wrong type. Should be an object", module);

		if(!KapibaraModuleRepository.HasModule(moduleId))
			KapibaraModuleRepository.GetInstance().addModule(moduleId, module);
		else
			KapibaraCommons.Assert(false,"The moduleId is already addedd", moduleId, KapibaraModuleRepository.GetModules());

	},

	GetModules : function(){
		return KapibaraModuleRepository.GetInstance().getModules();
	},

	HasModule : function(moduleId){
		return KapibaraModuleRepository.GetInstance().hasModule(moduleId);
	}
});