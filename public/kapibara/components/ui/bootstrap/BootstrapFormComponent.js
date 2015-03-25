var BootstrapFormComponent = new Class.Registry({
	Static : {
		AddSnippet : function(){
			BootstrapFormComponent.FormSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/form.html"});
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

		this.getValue().forEach(function(columnFieldStructure, index){
			
		});
    }

})