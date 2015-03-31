var JQueryMobilePageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryMobilePageComponent.PageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/page.html"});
			JQueryMobilePageComponent.PanelSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/panel.html"});
		}
	},

	Register : KapibaraComponentFactory,  

    Extends : JQueryMobileComponent,
    
    type : "page",
    
    render : function(){
    	var html = "";

    	this.getValue().forEach(function(rowStructure){
    		var component = KapibaraComponentFactory.Create(rowStructure);

    		html += JQueryMobilePageComponent.PanelSnippet.getText(KapibaraLocale.GetText(component.name), component.render());
    	})

    	return JQueryMobilePageComponent.PageSnippet.getText(html);
    }
})