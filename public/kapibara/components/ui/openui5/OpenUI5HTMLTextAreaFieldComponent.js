var OpenUI5HTMLTextAreaFieldComponent = new Class.Registry({
    Static : {
        AddSnippet : function(){
            OpenUI5HTMLTextAreaFieldComponent.HTMLSnippet = new KapibaraSnippet({path : "kapibara/components/ui/openui5/snippets/html.textarea.html"});
        }
    },

	Register : KapibaraComponentFactory, 

    Implements : KapibaraHtmlTextAreaComponent,   

    Extends : OpenUI5Component,
    
    type : "html-text-area-field",

    render : function(){
    	var self = this;

        this.component = new sap.ui.core.HTML({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            }),
            content : OpenUI5HTMLTextAreaFieldComponent.HTMLSnippet.getText(this.getId()),
            afterRendering : function(e) {
                self.afterRender();
            }
        })

        return this.component;
    },

    afterRender : function(){
        this.widget = KapibaraWidgetFactory.Create({
            type : "tinymce"
        });

        this.widget.render({
            id : this.getId()
        });
    }

})