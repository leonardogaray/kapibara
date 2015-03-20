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
	assert : function(expression, message){
    	if(expression == undefined || expression == false)
    		KapibaraCommons.log(message)
    },

    log : function(message){
    	console.error(message);
    }
});