var BootstrapHeaderComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapHeaderComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/header.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "header",

    render : function(){
    	return BootstrapHeaderComponent.TextSnippet.getText(this.getValue());
    }

})