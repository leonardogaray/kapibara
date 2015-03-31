var JQueryMobileTextFieldComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryMobileTextFieldComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/text-field.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryMobileComponent,
    
    type : "text-field",

    render : function(){
    	return JQueryMobileTextFieldComponent.TextSnippet.getText(
    		KapibaraLocale.GetText(this.getName()), 
    		this.getValue()
    	);
    }

})