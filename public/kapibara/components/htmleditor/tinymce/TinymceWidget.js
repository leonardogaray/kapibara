var TinymceWidget = new Class.Kapibara({
	Static : {
    },

	Extends : KapibaraWidget,

	render : function(config){
        this.widget = tinymce.init({
	        selector: "#" + config.id,
	        /*plugins: [
	            "advlist autolink lists link image charmap print preview anchor",
	            "searchreplace visualblocks code fullscreen",
	            "insertdatetime media table contextmenu paste"
	        ],*/
	        toolbar: "insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image",
	        menubar : false
	    });
    }

});
	