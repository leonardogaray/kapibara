var JQueryUIImageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryUIImageComponent.ImageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/image.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryUIComponent,
    
    type : "image",

    render : function(){
    	return JQueryUIImageComponent.ImageSnippet.getText(this.getValue(),this.getNameText());
    }

})