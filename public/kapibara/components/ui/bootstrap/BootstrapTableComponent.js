var BootstrapTableComponent = new Class.Registry({
	Static : {
        AddSnippet : function(){
            BootstrapTableComponent.TableSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/table/table.html"});
            BootstrapTableComponent.TableRowSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/table/table-row.html"});
            BootstrapTableComponent.TableRowColSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/table/table-row-col.html"});
            BootstrapTableComponent.TableRowHeaderColSnippet = new KapibaraSnippet({path : "kapibara/components/ui/bootstrap/snippets/table/table-row-header-col.html"});
        }
    },

    Register : KapibaraComponentFactory,    

    Extends : BootstrapComponent,

    Implements : KapibaraTableComponent,
    
    type : "table",

    render : function(){
    	var self = this;
        var rowHeader = "";

        this.getValue().forEach(function(columnStructure, index){
            rowHeader += BootstrapTableComponent.TableRowHeaderColSnippet.getText(this.getColumnName(columnStructure));
        }, this);

        return BootstrapTableComponent.TableSnippet.getText(rowHeader);
    },

    getModel : function(){
        return this.model;
    },

    "getColumn" : function(columnStructure, index){
    },

    "getRows" : function(columnStructure, index){
        var columns = "";

        this.getData().forEach(function(data, index){
            columns += BootstrapTableComponent.TableRowColSnippet.getText(this.getColumnTemplate(data));
        }, this);
        
        return BootstrapTableComponent.TableRowSnippet.getText(columns);
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