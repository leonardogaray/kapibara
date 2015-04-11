var JQueryUIFormComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryUIFormComponent.FormSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/form/form.html"});
			JQueryUIFormComponent.FormElementSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/form/form-element.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryUIComponent,
    
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

		return JQueryUIFormComponent.FormSnippet.getText(html);
    },

    createFormComponents : function(columnFieldStructure){
    	var html = "";

    	columnFieldStructure.forEach(function(fieldStructure){
			var component = KapibaraComponentFactory.Create(fieldStructure);

			html += JQueryUIFormComponent.FormElementSnippet.getText(component.render());
    	}, this);

    	return html;
    }

})