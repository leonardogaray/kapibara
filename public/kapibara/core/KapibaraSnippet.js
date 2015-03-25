var KapibaraSnippet = new Class.Kapibara({
	
    initialize: function(config){
        KapibaraCommons.Assert(config, "Missing config parameter");
        KapibaraCommons.Assert(config.path, "Missing config.path parameter");

        this.filePath = config.path;

        this.loadFileContent();
    },

    loadFileContent : function(){
    	var self = this;

    	var myRequest = new Request({
		    url: this.filePath,
		    async : false,
		    method: 'get',
		    onRequest: function(){
		    },
		    onSuccess: function(responseText){
		    	self.fileContent = responseText;
		    },
		    onFailure: function(){
		    	KapibaraCommons.Assert(false, "Problems to load snippet", self);
		    }
		});

		myRequest.send();
    },

    getText : function(){
    	return this.fileContent.format.apply(this.fileContent,arguments);
    }

})