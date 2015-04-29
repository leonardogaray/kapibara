var BootstrapFormComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapFormComponent.MenuSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/menu/menu.html"});
			BootstrapFormComponent.MenuItemSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/menu/item-menu.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "menu",

    render : function(){
        var html = "";

        this.getValue().forEach(function(button){
            html += BootstrapFormComponent.MenuItemSnippet.getText(KapibaraLocale.GetText(button.value));
        }, this);

        return BootstrapFormComponent.MenuSnippet.getText(html);
    }

})