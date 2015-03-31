var JQueryMobileFormComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			JQueryMobileFormComponent.FormSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/form/form.html"});
			JQueryMobileFormComponent.FormElementSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jquerymobile/snippets/form/form-element.html"});
		}
	},

	Register : KapibaraComponentFactory,    

    Extends : JQueryMobileComponent,
    
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

		return JQueryMobileFormComponent.FormSnippet.getText(html);
    },

    createFormComponents : function(columnFieldStructure){
    	var html = "";

    	columnFieldStructure.forEach(function(fieldStructure){
			var component = KapibaraComponentFactory.Create(fieldStructure);

			html += JQueryMobileFormComponent.FormElementSnippet.getText(component.render());
    	}, this);

    	return html;
    }

})