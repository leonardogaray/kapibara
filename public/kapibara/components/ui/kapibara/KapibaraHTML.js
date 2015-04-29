var KapibaraHTML = new Class.Kapibara({
	
	"setHTML" : function(html){
		this.html = html;
	},

	"getHTML" : function(){
		return this.html;
	},

	"setHTMLAttribute" : function(attribute, value){
		$(this.getHTML()).set(attribute, value);
	},

	"getHTMLAttribute" : function(attribute){
		$(this.getHTML()).get(attribute);
	}
})