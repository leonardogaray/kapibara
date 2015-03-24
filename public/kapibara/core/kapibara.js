var Kapibara = new Class({
    initialize: function(config){
        KapibaraCommons.Assert(config.app, "The application should be defined.");
        KapibaraCommons.Assert(config.lang, "The Server Side language should be defined.");

        this.serverLanguage = config.lang;

        this.getConfiguration();
    },

    getConfiguration : function(){
    	var self = this;

    	var myRequest = new Request({
		    url: this.getServerPath() + "?get=jslibs",
		    method: 'get',
		    onRequest: function(){
		    },
		    onSuccess: function(responseText){
		    	var libs = JSON.parse(responseText);
		    	self.numberOfLibs = 0;

		    	for(var lib in libs){
		    		self.numberOfLibs++;
		    	}

		    	for(var lib in libs){
			    	self.loadLibrary(libs[lib])
				}
		    },
		    onFailure: function(){
		    }
		});

		myRequest.send();
    },

    getServerPath : function(){
    	switch(this.serverLanguage){
    		case "php" : return "../server/languages/php/5.5.9/KapibaraIntrepeter.php"; break;
    		default :
    			KapibaraCommons.log("The Language should be defined.");
    	}
    },

    loadLibrary : function(library){
    	var self = this;

    	var myScript = Asset.javascript(library, {
		    onLoad: function(){
		    	self.numberOfLibs--;

		        if(self.numberOfLibs == 0)
		        	self.loadConfig()
		    }
		});
    },

 	loadConfig : function(){
 		var self = this;

 		var myRequest = new Request({
		    url: this.getServerPath() + "?get=config",
		    method: 'get',
		    onRequest: function(){	
		    },
		    onSuccess: function(config){
		    	config = JSON.parse(config);
		    	self.loadModules(config.modules);
		    },
		    onFailure: function(){
		    }
		});

		myRequest.send();
 	},

 	loadModules : function(modules){
 		KapibaraModuleRepository.LoadModules(modules);
 	}
});