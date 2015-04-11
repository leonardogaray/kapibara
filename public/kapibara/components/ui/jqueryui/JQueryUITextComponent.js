var JQueryUITextComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryUITextComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/text.html"});
		}
	},

	Register : KapibaraComponentFactory,  

    Extends : JQueryUIComponent,
    
    type : "text",
    
    render : function(){
    	return JQueryUITextComponent.TextSnippet.getText(this.getValue());
    }
})