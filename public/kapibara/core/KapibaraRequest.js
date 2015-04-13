var KapibaraRequest = new Class.Kapibara({
    initialize: function(module){
    	
    }
}).extend({
	Request : function(config){
		KapibaraCommons.Assert(config, "Missing configuration on Request.");
		KapibaraCommons.Assert(config.url, "Missing url on Request.");
		
		var onRequest = KapibaraCommons.Default(config.onRequest, function(){});
		var onSuccess = KapibaraCommons.Default(config.onSuccess, function(){});
		var onFailure = KapibaraCommons.Default(config.onFailure, function(){});

		var myRequest = new Request({
		    url: config.url,
		    method: config.method,
		    onRequest: function(){
		    	onRequest();
		    },
		    onSuccess: function(responseText){
		    	onSuccess(JSON.parse(responseText));
		    },
		    onFailure: function(){
		    	onFailure();
		    }
		});

		myRequest.send();
	},

	Get : function(config){
		config["method"] = "get";
		KapibaraRequest.Request(config);
	},

	Post : function(config){
		config["method"] = "post";
		KapibaraRequest.Request(config);
	},

	Put : function(config){
		config["method"] = "put";
		KapibaraRequest.Request(config);
	}
})