var BootstrapTextComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapTextComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/text.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "text",

    render : function(){
    	return BootstrapTextComponent.TextSnippet.getText();
    }

})