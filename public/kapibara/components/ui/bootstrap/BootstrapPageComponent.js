var BootstrapPageComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapPageComponent.PageSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/page.html"});
			BootstrapPageComponent.PanelSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/panel.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "page",

    render : function(){
    	var html = "";

    	this.getValue().forEach(function(rowStructure){
    		var component = KapibaraComponentFactory.Create(rowStructure);

    		html += BootstrapPageComponent.PanelSnippet.getText(
    			KapibaraLocale.GetText(component.name),
    			component.render()
    		);
    	});
        
    	return html;
    }

})