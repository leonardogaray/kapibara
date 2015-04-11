var JQueryUIPageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryUIPageComponent.PageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/page.html"});
			JQueryUIPageComponent.PanelSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/panel.html"});
		}
	},

	Register : KapibaraComponentFactory,  

    Extends : JQueryUIComponent,
    
    type : "page",
    
    render : function(){
    	var html = "";

    	this.getValue().forEach(function(rowStructure){
    		var component = KapibaraComponentFactory.Create(rowStructure);

    		html += JQueryUIPageComponent.PanelSnippet.getText(KapibaraLocale.GetText(component.name), component.render());
    	})

    	return JQueryUIPageComponent.PageSnippet.getText(html);
    }
})