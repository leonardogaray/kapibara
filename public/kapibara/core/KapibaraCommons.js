Class.Kapibara = new Class({
    initialize : function(classDefinition, classOptions){
        if(classDefinition.Static){
            for(var staticAttribue in classDefinition.Static){
                if(typeof(classDefinition.Static[staticAttribue]) == "function"){
                    classDefinition.Static[staticAttribue]();
                }else{
                    classDefinition[staticAttribue] = classDefinition.Static[staticAttribue];
                }
            }
        }
        return new Class(classDefinition, classOptions);
        
    }
});

Class.Singleton = new Class.Kapibara({

	initialize: function(classDefinition, classOptions){
		this.singletonClass = new Class(classDefinition);
		this.classOptions = classOptions;
	},

	getInstance: function() {
		return this.instance || new this.singletonClass(this.classOptions);
	}

});

Class.Registry = new Class.Kapibara({
    initialize : function(classDefinition, classOptions){
        classDefinition.Register.AddClass(classDefinition, classOptions)
    }
});

var KapibaraCommons = new Class.Kapibara({
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
    },

    GetUrlParameters : function(){
        var url = window.location.search.substring(1).split("+").join(" ");
        var params = {};
        var tokens;
        var regex = /[?&]?([^=]+)=([^&]*)/g;

        while (tokens = regex.exec(url)) {
            params[decodeURIComponent(tokens[1])] = decodeURIComponent(tokens[2]);
        }

        return params;
    }
});


String.prototype.format = function() {
    var args = arguments;
    return this.replace(/{(\d+)}/g, function(match, number) { 
        return typeof args[number] != 'undefined' ? args[number] : match;
    });
};