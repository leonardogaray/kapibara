var JQueryUITableComponent = new Class.Registry({
	Static : {
        AddSnippet : function(){
            JQueryUITableComponent.TableSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/table/table.html"});
            JQueryUITableComponent.TableRowSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/table/table-row.html"});
            JQueryUITableComponent.TableRowColSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/table/table-row-col.html"});
            JQueryUITableComponent.TableRowHeaderColSnippet = new KapibaraSnippet({path : "kapibara/components/ui/jqueryui/snippets/table/table-row-header-col.html"});
        }
    },

    Register : KapibaraComponentFactory,    

    Extends : JQueryUIComponent,

    Implements : KapibaraTableComponent,
    
    type : "table",

    render : function(){
    	var self = this;
        var rowHeader = "";

        this.getValue().forEach(function(columnStructure, index){
            rowHeader += JQueryUITableComponent.TableRowHeaderColSnippet.getText(this.getColumnName(columnStructure));
        }, this);

        return JQueryUITableComponent.TableSnippet.getText(rowHeader);
    },

    getModel : function(){
        return this.model;
    },

    "getColumn" : function(columnStructure, index){
    },

    "getRows" : function(columnStructure, index){
        var columns = "";

        this.getData().forEach(function(data, index){
            columns += JQueryUITableComponent.TableRowColSnippet.getText(this.getColumnTemplate(data));
        }, this);
        
        return JQueryUITableComponent.TableRowSnippet.getText(columns);
    },

    getDateColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getDateColumn Not Implemented");
    },

    getCurrencyColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getCurrencyColumn Not Implemented");
    },

    getNumberColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getNumberColumn Not Implemented");
    },

    getPercentColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getPercentColumn Not Implemented");
    },

    getCheckboxColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getCheckboxColumn Not Implemented");
    },

    getImageColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getImageColumn Not Implemented");
    },

    getEditColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getEditColumn Not Implemented");
    },

    getLinkColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getLinkColumn Not Implemented");
    },

    getFileColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getFileColumn Not Implemented");
    },

    getTextColumn : function(columnStructure){
        return "";
    }

})