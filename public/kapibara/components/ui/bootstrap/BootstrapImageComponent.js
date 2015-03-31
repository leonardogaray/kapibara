var BootstrapImageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapImageComponent.ImageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/image.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "image",

    render : function(){
    	return BootstrapImageComponent.ImageSnippet.getText(this.getValue(),this.getNameText());
    }

})