var KapibaraComponent = new Class.Kapibara({
    initialize: function(definition){
        if(definition){
            KapibaraCommons.Assert(definition,"The definition is not defined");
            KapibaraCommons.Assert(definition.type,"The definition.type is not defined");
            KapibaraCommons.Assert(definition.id,"The definition.id is not defined");
            KapibaraCommons.Assert(definition.value,"The definition.value is not defined");

            definition.name = KapibaraCommons.Default(definition.name,definition.id);
            
            var self = this;

            //Generate Getters and Setters
            for(var attribute in definition)(
                function(attribute){
                    self[attribute] = definition[attribute];
                    attributeCamelCase = attribute.substr( 0, 1 ).toUpperCase() + attribute.substr( 1 );
                    self["get" + attributeCamelCase] = function(){return definition[attribute];}
                    self["set" + attributeCamelCase] = function(value){definition[attribute] = value;}
                }(attribute)
            );

            this.definition = definition;

            this.eventManager = new KapibaraEventManager(this);
        }
    },

    getDefinition : function(){
    	return this.definition;
    },

    getOption : function(optionName){
        if(optionName != undefined && optionName != "" && this.options && this.options[optionName])
            return this.options[optionName];
        return undefined
    },

    getNameText : function(optionName){
        return KapibaraLocale.GetText(this.name ? this.name : this.getId());
    },

    render : function(){
    	KapibaraCommons.Assert(false,"The render method should be defined in sub classes");
    },

    getComponent : function(){
        return this.component;
    },

    getRequestUrlParameters : function(parameters){
        var requestUrlParameters = "";
        
        for(var parameter in parameters){
            requestUrlParameters += "/" + parameters[parameter]
        }

        return requestUrlParameters;
    },

    getRequestUrl : function(parameters){
        return "../server/languages/php/5.3.8/core/KapibaraRest.php/" + this.getId() + this.getRequestUrlParameters(parameters)
    },

    requestComponentData : function(parameters){
        var self = this;

        KapibaraRequest.Get({
            url: this.getRequestUrl(parameters),
            onSuccess: function(data){
                self.setComponentValue(data);  
            }
        });
    },

    setData : function(data){
        KapibaraCommons.Assert(data,"The data is not defined");

        this.data = data;
    },    

    getData : function(){
        return this.data;
    },

    cleanData : function(){
        KapibaraCommons.Assert(false,"The cleanData method should be defined in sub classes");
    },

    setComponentValue : function(){
        KapibaraCommons.Assert(false,"The setComponentValue method should be defined in sub classes");
    },

    getComponentValue : function(){
        KapibaraCommons.Assert(false,"The getComponentValue method should be defined in sub classes");
    },

    /************************************* EVENTS *****************************************/
    doOnEvent : function(event, parameters){
        this.eventManager.doOnEvent(event, parameters);
    },

    load : function(parameters){
        this.requestComponentData(parameters);
    },

    click : function(parameters){
        this.requestComponentData(parameters);
    }
})