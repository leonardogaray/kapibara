var OpenUI5MapComponent = new Class.Registry({
    Static : {
        AddSnippet : function(){
            OpenUI5MapComponent.HTMLSnippet = new KapibaraSnippet({path : "kapibara/components/ui/openui5/snippets/map.html"});
        }
    },

	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "map",

    render : function(){
    	var self = this;

        this.component = new sap.ui.core.HTML({
            layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
                weight : 1
            }),
            content : OpenUI5MapComponent.HTMLSnippet.getText(this.getId()),
            afterRendering : function(e) {
                self.afterRender();
            }
        })

        return this.component;
    },

    afterRender : function(){
        this.widget = new TinymceWidget();
        this.widget.render({id : this.getId()});
    }

})