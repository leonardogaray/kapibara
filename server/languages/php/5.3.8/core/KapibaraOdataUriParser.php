<?php
class KapibaraOdataUriParser {

	function __construct(){
		$this->expression = array();
	}

	private function initialize(){
		// Fetch parameters
    	$params = explode('$', $this->uri);

    	// Set Entity
    	$this->expression["entity"] = str_replace("/","",$params[0]);

    	// Check every parameter
    	for($i = 1; $i < count($params); $i++){
	        // every parameter has to be a name=value pair!
	        $param = explode('=', $params[$i]);
	        if(!(count($param) == 2))
           		throw new Exception("Invalid parameter. Providence must be name=value");

           	switch($param[0]){
           		case "expand" : $this->expand($param[1]); break;
           		case "filter" : $this->filter($param[1]); break;
           	}
		}
	}

	public function getParsedUri($uri){
		$this->uri = $uri;
		$this->initialize();

		return $this->expression;
	}

	private function filter($filter){
		$this->expression["filter"] = $this->parseFilter($filter);
	}

	//Only support 1 set of operations
	private function parseFilter($filter){
		$parsedFilter = array();

		$components = explode(' ',$filter);

		$parsedFilter["param1"] = $components[0];
		$parsedFilter["operator"] = $this->parseOperator($components[1]);
		$parsedFilter["param2"] = $components[2];

		return $parsedFilter;
	}

	private function expand($expand){
		$this->expression["expand"] = $this->parseExpand($expand);
	}

	private function parseExpand($expand){
		return $expand;
	}

	private function parseOperator($operator){
		switch($operator){
			case "eq" : return "="; break;
			
		}
	}
}