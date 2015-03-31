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
})