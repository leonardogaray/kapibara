var JQueryUITextFieldComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryUITextFieldComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/text-field.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryUIComponent,
    
    type : "text-field",

    render : function(){
    	return JQueryUITextFieldComponent.TextSnippet.getText(
    		KapibaraLocale.GetText(this.getName()), 
    		this.getValue()
    	);
    }

})