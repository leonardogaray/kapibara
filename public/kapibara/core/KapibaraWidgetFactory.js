var KapibaraWidgetFactory = new Class.Kapibara({
    
    initialize: function(config){
    }

}).extend({
	RegisteredClasses : {},

	AddClass : function(classDefinition, classOptions){
		KapibaraWidgetFactory.RegisteredClasses[classDefinition.type] = [classDefinition, classOptions];
	},

	GetClass : function(type){
        KapibaraCommons.Assert(type,"The type is missing");

        if(!KapibaraWidgetFactory.RegisteredClasses[type])
             KapibaraCommons.Assert(false,"The component of this type is not defined", type);

        var registeredClass = KapibaraWidgetFactory.RegisteredClasses[type];

		return new Class.Kapibara(registeredClass[0],registeredClass[1]);
	},

    Create : function(config){
        KapibaraCommons.Assert(config,"The config is missing", this);
        KapibaraCommons.Assert(typeof(config) == "object","The config has wrong type. Should be an object", this);
        
        var component = (new (KapibaraWidgetFactory.GetClass(config.type))(config));

        return component;
    },

    Render : function(config){
        return KapibaraWidgetFactory.Create(config).render();
    },

    RenderAt : function(target, config){
        return KapibaraWidgetFactory.Create(config).renderAt(target);
    }
})