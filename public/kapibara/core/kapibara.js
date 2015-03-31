var Kapibara = new Class.Kapibara({
    initialize: function(config){
        KapibaraCommons.Assert(config.app, "The application should be defined.");
        KapibaraCommons.Assert(config.lang, "The Server Side language should be defined.");

        var self = this;

        this.target = KapibaraCommons.Default(config.target, "#main");
        this.app = config.app;
        this.serverLanguage = config.lang;

        window.addEvent('domready', function() {
            self.getConfiguration();
        });
    },

    getConfiguration : function(){
    	var self = this;

    	var myRequest = new Request({
		    url: this.getServerPath() + "?app=" + this.app,
		    method: 'get',
		    onRequest: function(){
		    },
		    onSuccess: function(responseText){
		    	var configuration = JSON.parse(responseText);
		    	
		    	self.processConfiguration(configuration);
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

    processConfiguration : function(configuration){
    	KapibaraCommons.Assert(configuration, "The configuration should be defined.");
    	KapibaraCommons.Assert(configuration.package, "The configuration.package is missing.");
    	KapibaraCommons.Assert(configuration.packages, "The configuration.packages is missing.");
    	KapibaraCommons.Assert(configuration.files, "The configuration.files is missing.");

    	this.configuration = configuration;

    	this.processPackage();
    	this.loadModules();
    	this.loadLanguages();
    	
    },

    processPackage : function(){
    	this.libraries = [];

    	for(var group in this.configuration.package.config){
            var group = (KapibaraCommons.GetUrlParameters()[group] != "") ? KapibaraCommons.GetUrlParameters()[group] : this.configuration.package.config[group];

    		this.processPackageGroup(group);
    	}

    	this.loadLibrary(this.libraries);
    },

    processPackageGroup : function(packageGroupName){
    	this.configuration.packages.forEach(function(package){
    		if(package.name == packageGroupName){
    			for(var dependency in package.dependencies){
    				this.processPackageGroup(dependency);
    			}

    			package.files.forEach(function(file){
    				this.libraries.push(file)
    			}, this);
    		}
    	}, this);
    },

    loadLibrary : function(libraries){
    	var self = this;

        //If there is any library to load ...
    	if(libraries.length > 0) {
    		var options = {};
    		var library = "";

            //Some libraries need to have extra attributes in the script tag
            //Split those options with | character, and then with :
    		libraries[0].split("|").forEach(function(opt,index){
    			if(index > 0)
    				options[opt.split(":")[0]] = opt.split(":")[1];
    			else
    				library = opt;
    		});

    		if(libraries[0].indexOf(".css") != -1){
    			Asset.css(
    				library, 
    				Object.merge({
					    "onLoad" : function(){
					    	libraries.splice(0,1);
					        self.loadLibrary(libraries);
					    }},
					    options
					)
				);
    		}else{
		    	Asset.javascript(
		    		library, 
		    		Object.merge({
					    "onLoad" : function(){
					    	libraries.splice(0,1);
					        self.loadLibrary(libraries);
					    }},
					    options
					)
				);
			}
		}else{
			this.render();
		}

		
    },

 	loadModules : function(modules){
 		KapibaraModuleRepository.LoadModules(this.configuration.files.modules);
 	},

	loadLanguages : function(languages){
 		KapibaraLocale.LoadLanguages(this.configuration.files.i18n);
 	},

 	render : function(){
 		KapibaraModuleRepository.RenderAt(this.target);
 	}
});