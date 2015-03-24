Class.Singleton = new Class({

	initialize: function(classDefinition, classOptions){
		this.singletonClass = new Class(classDefinition);
		this.classOptions = classOptions;
	},

	getInstance: function() {
		return this.instance || new this.singletonClass(this.classOptions);
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

    Log : function(){
    	console.error.apply(console, arguments);
    }
});