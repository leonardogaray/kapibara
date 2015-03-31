var JQueryMobileImageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryMobileImageComponent.ImageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/image.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryMobileComponent,
    
    type : "image",

    render : function(){
    	return JQueryMobileImageComponent.ImageSnippet.getText(this.getValue(),this.getNameText());
    }

})