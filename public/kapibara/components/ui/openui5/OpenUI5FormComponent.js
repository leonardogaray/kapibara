var OpenUI5FormComponent = new Class.Registry({
	Register : KapibaraComponentFactory,    

    Extends : OpenUI5Component,

    Implements : KapibaraFormComponent,
    
    type : "form",

    render : function(){
    	
		this.component = new sap.ui.commons.layout.MatrixLayout({
			layoutFixed : true,
			width : '100%'
		});

		var oRow = new sap.ui.commons.layout.MatrixLayoutRow({
		});

		var oCell = new sap.ui.commons.layout.MatrixLayoutCell({ 
		});

		oCell.addContent( this.getForm() );

		oRow.addCell(oCell);	
		
		this.component.addRow(oRow);
		
		return this.component;
    },

    getForm : function(){
		var formColumns = [];

		this.getValue().forEach(function(columnFieldStructure, index){
			formColumns.push(
				new sap.ui.commons.form.FormContainer({
					formElements : this.createFormComponents(columnFieldStructure),
					layoutData : new sap.ui.core.VariantLayoutData({
						multipleLayoutData : [
							new sap.ui.commons.form.GridContainerData({
								halfGrid : true
							}), new sap.ui.commons.layout.ResponsiveFlowLayoutData({
								minWidth : 150
							})
						]
					})
				})
			);

		}, this);
		
		return new sap.ui.commons.form.Form({
			layout: new sap.ui.commons.form.GridLayout(),
			formContainers: formColumns
		})
	},

	createFormComponents : function(columnFieldStructure){
		this.renderedComponents = [];

		columnFieldStructure.forEach(function(fieldStructure){
			this.renderedComponents.push(
				this.getFormElement(fieldStructure)
			);

		}, this);

		return this.renderedComponents;
	},

	getFormElement : function(fieldStructure){
		var component = KapibaraComponentFactory.Create(fieldStructure);
		
		this.addFormComponent(component);
			
		return new sap.ui.commons.form.FormElement({
			label : new sap.ui.commons.Label({
				text : KapibaraLocale.GetText(fieldStructure.name),
				layoutData : new sap.ui.core.VariantLayoutData({
					multipleLayoutData : [new sap.ui.commons.layout.ResponsiveFlowLayoutData({
						weight : 1
					}), new sap.ui.commons.form.GridElementData({
						hCells : "3"
					})]
				})
			}),
			fields : component.render(),
			layoutData : new sap.ui.commons.layout.ResponsiveFlowLayoutData({
				linebreak : true,
				margin : false
			})
		})
	},


})