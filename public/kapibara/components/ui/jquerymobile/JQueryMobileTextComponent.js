var JQueryMobileTextComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryMobileTextComponent.TextSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/text.html"});
		}
	},

	Register : KapibaraComponentFactory,  

    Extends : JQueryMobileComponent,
    
    type : "text",
    
    render : function(){
    	return JQueryMobileTextComponent.TextSnippet.getText(this.getValue());
    }
})