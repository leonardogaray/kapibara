var BootstrapFormComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapFormComponent.FormSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/form/form.html"});
			BootstrapFormComponent.FormElementSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/form/form-element.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,
    
    type : "form",

    render : function(){
    	return this.getForm();
    },

    getForm : function(){
    	var formColumns = [];
    	var html = "";

		this.getValue().forEach(function(columnFieldStructure, index){
			html += this.createFormComponents(columnFieldStructure);
		}, this);

		return BootstrapFormComponent.FormSnippet.getText(html);
    },

    createFormComponents : function(columnFieldStructure){
    	var html = "";

    	columnFieldStructure.forEach(function(fieldStructure){
			var component = KapibaraComponentFactory.Create(fieldStructure);

			html += BootstrapFormComponent.FormElementSnippet.getText(component.render());
    	}, this);

    	return html;
    }

})