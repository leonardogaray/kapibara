var KapibaraModule = new Class({
    initialize: function(module){
    	KapibaraCommons.Assert(module,"The module is missing", this);
		KapibaraCommons.Assert(typeof(module) == "object","The module has wrong type. Should be an object", this);

        this.config = module;
    }
})