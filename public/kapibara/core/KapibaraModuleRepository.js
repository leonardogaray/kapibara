var KapibaraModuleRepository = new Class.Kapibara({
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
    },

    getModule : function(moduleId){
    	return this.modules[moduleId];
    },

    setMainModuleId : function(moduleId){
    	this.mainModuleId = moduleId;
    },

    getMainModuleId : function(){
    	return this.mainModuleId;
    },

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

			if(moduleId.match(/Main\..*\.json$/))
				KapibaraModuleRepository.GetInstance().setMainModuleId(moduleId);
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

	GetModule : function(moduleId){
		KapibaraCommons.Assert(moduleId,"The moduleId is missing");

		return KapibaraModuleRepository.GetInstance().getModule(moduleId);
	},

	HasModule : function(moduleId){
		return KapibaraModuleRepository.GetInstance().hasModule(moduleId);
	},

	GetMainModule : function(){
		return KapibaraModuleRepository.GetModule(KapibaraModuleRepository.GetInstance().getMainModuleId());
	},

	RenderAt : function(target){
		KapibaraCommons.Assert(target,"The target is missing");
		
		KapibaraModuleRepository.GetMainModule().renderAt(target);
	}
});