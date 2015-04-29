var BootstrapTextFieldComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapTextFieldComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/text-field.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "text-field",

    render : function(){
    	this.setHTML( BootstrapTextFieldComponent.TextSnippet.getText( KapibaraLocale.GetText(this.getName()) ) );
        

        return this.getHTML();
    }

})