var KapibaraComponentFactory = new Class.Kapibara({
    
    initialize: function(config){
    }

}).extend({
	RegisteredClasses : {},

	AddClass : function(classDefinition, classOptions){
		KapibaraComponentFactory.RegisteredClasses[classDefinition.type] = [classDefinition, classOptions];
	},

	GetClass : function(type){
        KapibaraCommons.Assert(type,"The type is missing");

        if(!KapibaraComponentFactory.RegisteredClasses[type])
             KapibaraCommons.Assert(false,"The component of this type is not defined", type);

        var registeredClass = KapibaraComponentFactory.RegisteredClasses[type];

		return new Class.Kapibara(registeredClass[0],registeredClass[1]);
	},

    Create : function(config){
        KapibaraCommons.Assert(config,"The config is missing", this);
        KapibaraCommons.Assert(typeof(config) == "object","The config has wrong type. Should be an object", this);
        
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