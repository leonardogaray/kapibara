var OpenUI5TableComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,

    Implements : KapibaraTableComponent,
    
    type : "table",

    render : function(){
    	var self = this;

        this.model = new sap.ui.model.json.JSONModel();

        this.component = new sap.ui.table.Table({
            visibleRowCount: this.getNumberOfRows(),
            selectionMode: sap.ui.table.SelectionMode.Single,
            navigationMode: sap.ui.table.NavigationMode.Paginator,
            extension: [],
            model : this.getModel(),
            columns : this.getColumns()
        }).bindRows("/");

        //Fire selection when click any cell of the table
        this.component.setSelectionBehavior( sap.ui.table.SelectionBehavior.Row );

        /*
        this.component.attachEvent("rowSelectionChange", function(oEvent) {
            var iRowIndex = oEvent.getParameter("rowIndex");
            var oRowContext = oEvent.getParameter("rowContext");
            var data = oRowContext.getObject();

            //self.onChange(iRowIndex, oRowContext, data);

            self.doOnClickEvent(self.getName(), data);
        });
        */

        return this.component;
    },

    getModel : function(){
        return this.model;
    },

    "getColumn" : function(columnStructure, columnIndex){

        return new sap.ui.table.Column({
            label: new sap.ui.commons.Label({text: this.getColumnName(columnStructure)}),
            template: this.getColumnFormatter(columnStructure),
            sortProperty: columnStructure.value,
            filterProperty: columnStructure.value,
            hAlign: (columnStructure.halign) ? columnStructure.halign : "Begin"
        });
        
        //if(columnStructure.hAlign)column.setHAlign(columnStructure.hAlign);
        //column.setWidth((columnStructure.width) ? columnStructure.width : ((index == 0) ? "150px" : "150px"));
    },

    getDateColumn : function(columnStructure){
        return new sap.ui.commons.Label().bindProperty("text", columnStructure.value, function(date){
            return KapibaraCommons.GetDateFormatted(date);
        });
    },

    getCurrencyColumn : function(columnStructure){
        return new sap.ui.commons.Label().bindProperty("text", columnStructure.value, function(num){
            return KapibaraCommons.GetCurrencyFormat(num);
        });
    },

    getNumberColumn : function(columnStructure){
        return new sap.ui.commons.Label().bindProperty("text", columnStructure.value, function(num){
            return KapibaraCommons.GetNumberFormat(num);
        });
    },

    getPercentColumn : function(columnStructure){
        return new sap.ui.commons.Label().bindProperty("text", columnStructure.value, function(num){
            return KapibaraCommons.GetPercentFormat(num);
        });
    },

    getCheckboxColumn : function(columnStructure){
        return new sap.ui.commons.CheckBox({editable : false}).bindProperty("checked", columnStructure.value);
    },

    getImageColumn : function(columnStructure){
        return new sap.ui.commons.Image().bindProperty("src", columnStructure.value);
    },

    getEditColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getEditColumn Not Implemented");
    },

    getLinkColumn : function(columnStructure){
        KapibaraCommons.Assert(false,"Method getEditColumn Not Implemented");
    },

    getFileColumn : function(columnStructure){
        return new sap.ui.commons.Link({
            "text" : KapibaraLocale.GetText("download"),
            "target" : "_blank"
        }).bindProperty("href", columnStructure.value);
    },

    getTextColumn : function(columnStructure){
        return new sap.ui.commons.TextView().bindProperty("text", columnStructure.value);
    }

})