var OpenUI5PageComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,
    
    type : "page",

    render : function(){
    	
    	this.component = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%'
		});
    	
		this.getValue().forEach(function(rowStructure){
			var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
			});
			this.component.addRow(oRow);

			var component = KapibaraComponentFactory.Create(rowStructure);

			var oCell = new sap.ui.commons.layout.MatrixLayoutCell();
			oCell.addContent(
				new sap.ui.commons.Panel({
					text : KapibaraLocale.GetText(component.name),
					content : component.render()
				})
			);


			oRow.addCell(oCell);		
		}, this);

		return this.component;
    }

})