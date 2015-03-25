var KapibaraComponentFactory = new Class.Kapibara({
    
    initialize: function(config){
    }

}).extend({
	RegisteredClasses : {},

	AddClass : function(classDefinition, classOptions){
        var helper = new (new Class(classDefinition, classOptions))();
        
        if(!KapibaraComponentFactory.RegisteredClasses[helper.group])
            KapibaraComponentFactory.RegisteredClasses[helper.group] = {};

		KapibaraComponentFactory.RegisteredClasses[helper.group][classDefinition.type] = [classDefinition, classOptions];
	},

	GetClass : function(type){
        if(!KapibaraComponentFactory.RegisteredClasses["openui5"][type])
             KapibaraCommons.Assert(false,"The component of this type is not defined", type);

        var registeredClass = KapibaraComponentFactory.RegisteredClasses["openui5"][type];

		return new Class(registeredClass[0],registeredClass[1]);
	},

    Create : function(config){
        KapibaraCommons.Assert(config,"The config is missing", this);
        KapibaraCommons.Assert(typeof(config) == "object","The config has wrong type. Should be an object", this);
        KapibaraCommons.Assert(config.type,"The config.type is missing", config);
    
        var component = (new (KapibaraComponentFactory.GetClass(config.type))(config));

        return component;
    },

    Render : function(config){
        return KapibaraComponentFactory.Create(config).render();
    },

    RenderAt : function(target, config){
        return KapibaraComponentFactory.Create(config).renderAt(target);
    }
})