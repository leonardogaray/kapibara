var KapibaraComponentFactory = new Class.Kapibara({
    
    initialize: function(config){
    }

}).extend({
	RegisteredClasses : {},

    Components : [],

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

        KapibaraComponentFactory.AddComponent(component);
        
        component.doOnEvent("create");

        return component;
    },

    Render : function(config){
        return KapibaraComponentFactory.Create(config).render();
    },

    RenderAt : function(target, config){
        return KapibaraComponentFactory.Create(config).renderAt(target);
    },

    AddComponent : function(component){
        KapibaraComponentFactory.Components[component.getName()] = component;
    },

    GetComponent : function(componentId){
        return KapibaraComponentFactory.Components[componentId];
    },

    GetComponentUI : function(componentId){
        return KapibaraComponentFactory.GetComponent(componentId).getComponent();
    },

    HasComponent : function(componentId){
        return KapibaraComponentFactory.Components[componentId];
    },

    CleanComponents : function(){
        KapibaraComponentFactory.Components = {};
    },

    GetAllComponents : function(){
        return KapibaraComponentFactory.Components;
    },
})