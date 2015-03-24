Class.Singleton = new Class({

	initialize: function(classDefinition, classOptions){
		this.singletonClass = new Class(classDefinition);
		this.classOptions = classOptions;
	},

	getInstance: function() {
		return this.instance || new this.singletonClass(this.classOptions);
	}

});

Class.Registry = new Class({
    initialize : function(classDefinition, classOptions){
        classDefinition.Register.AddClass(classDefinition, classOptions)
    }
});

var KapibaraCommons = new Class({
    initialize: function(){
        
    }
}).extend({
	Assert : function(){
    	if(arguments[0] == undefined || arguments[0] == false)
    		KapibaraCommons.Log.apply(this,arguments);
    },

    Default : function(val1, val2){
    	return (val1 == undefined) ? val2 : val1;
    },

    Log : function(){
    	console.error.apply(console, arguments);
    }
});