var OpenUI5PageComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "page",

    render : function(){
    	
    	this.component = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%'
		});
    	/*
    	//Render the Header
    	if(this.getOptions("header")){
    		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({});
    		this.component.addRow(oRow);
    		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({	
    			content : KapibaraComponentFactory.Create(this.getOption("header")).render()
    		});
    		oRow.addCell(oCell);
    	}

    	//Render the Menu
    	if(this.getOptions("menu")){
    		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({});
    		this.component.addRow(oRow);
    		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({	
    			content : KapibaraComponentFactory.Create(this.getOption("menu")).render()
    		});
    		oRow.addCell(oCell);
    	}
        */

		this.getValue().forEach(function(rowStructure){
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			});
			this.component.addRow(oRow);

			var component = KapibaraComponentFactory.Create(rowStructure);

			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
			/*
            oCell.addContent(
				new sap.ui.commons.Panel({
					text : KapibaraLocale.GetText(component.name),
					content : component.render()
				})
			);
            */
            oCell.addContent(component.render());

			oRow.addCell(oCell);		
		}, this);

		return this.component;
    }

})