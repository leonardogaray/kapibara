var KapibaraTableComponent = new Class.Kapibara({
	
    Extends : KapibaraComponent,
   
    getNumberOfRows : function(){
        return (this.getOption("rows")) ? this.getOption("rows") : 1;
    },

    getModel : function(){
    	KapibaraCommons.Assert(false,"The getModel method should be defined in sub classes");
    },

    "getColumns" : function(){
		var self = this;
		var columns = [];
		var values = [];

		if(this.getOption("editbutton")){
			values = this.getValue().concat([{
				"name" : "edit_button",
				"value" : this.getId() + "_ID",
				"type" : "edit-button",
				"halign" : "Center",
				"width" : "50px"
			}]);
		}else{
			values = this.getValue();
		}

		values.forEach(function(columnStructure, index){
			columns.push(this.getColumn(columnStructure, index));	
		}, this);

		return columns;
	},

	getColumnFormatter : function(columnStructure){
		KapibaraCommons.Assert(columnStructure.id,"The columnStructure.id should be defined");
		KapibaraCommons.Assert(columnStructure.value,"The columnStructure.value should be defined");

		switch(columnStructure.type){
			case "date" : return this.getDateColumn(columnStructure); break;
			case "currency" : return this.getCurrencyColumn(columnStructure); break;
			case "number" : return this.getNumberColumn(columnStructure); break;
			case "percent" : return this.getPercentColumn(columnStructure); break;
			case "checkbox" : return this.getCheckboxColumn(columnStructure); break;
			case "image" : return this.getImageColumn(columnStructure); break;
			case "edit-button" : return this.getEditColumn(columnStructure); break;
			case "link" : return this.getLinkColumn(columnStructure); break;	
			case "file" : return this.getFileColumn(columnStructure); break;
			default : return this.getTextColumn(columnStructure); break;
		}
	},

	getColumnName : function(columnStructure){
		return KapibaraLocale.GetText(columnStructure.name ? columnStructure.name : columnStructure.id);
	},

	getDateColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getModel method should be defined in sub classes");
	},

	getCurrencyColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getCurrencyColumn method should be defined in sub classes");
	},

	getNumberColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getNumberColumn method should be defined in sub classes");
	},

	getPercentColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getPercentColumn method should be defined in sub classes");
	},

	getCheckboxColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getCheckboxColumn method should be defined in sub classes");
	},

	getImageColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getImageColumn method should be defined in sub classes");
	},

	getEditColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getEditColumn method should be defined in sub classes");
	},

	getLinkColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getLinkColumn method should be defined in sub classes");
	},

	getFileColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getFileColumn method should be defined in sub classes");
	},

	getTextColumn : function(columnStructure){
		KapibaraCommons.Assert(false,"The getTextColumn method should be defined in sub classes");
	}


})