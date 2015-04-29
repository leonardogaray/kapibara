var BootstrapDateFieldComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapTextFieldComponent.DateSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/date-field.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "date-field",

    render : function(){
    	return BootstrapTextFieldComponent.DateSnippet.getText(
    		KapibaraLocale.GetText(this.getName()), 
            this.getValue()
    	);
    }

})