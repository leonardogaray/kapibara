var KapibaraLocale = new Class({
    initialize: function(module){
    	
    }
}).extend({
	LoadLanguages : function(languages){
		KapibaraLocale.Languages = 	languages;
	},

	GetText : function(id){
		return KapibaraCommons.Default(KapibaraLocale.Languages["i18n.en.properties"][id],id);
	}
})