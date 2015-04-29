<?php

require '../libs/Slim-2.6.2/Slim/Slim.php';
require '../libs/RedBean-4.2/rb.php';
require 'KapibaraOdataUriParser.php';

// register Slim auto-loader
\Slim\Slim::registerAutoloader();

// initialize app
$app = new \Slim\Slim();

class KapibaraOdata {

	function __construct(){		
	}
	
	public function query($uri){
		$this->uri = $uri;
		$kapibaraOdataUriParser = new KapibaraOdataUriParser();

		$this->parsedUri = $kapibaraOdataUriParser->getParsedUri($this->uri);

		if(isset($this->parsedUri["entity"] && isset($this->parsedUri["filter"]){
			$entities = R::find($this->parsedUri["entity"], );
		}else{
			$entities = R::find($this->parsedUri["entity"]);
		}
		
		return $this->toOdata(R::exportAll($articles));
	}

	private function toOdata($values){
		$result = array();

		$result["value"] = $values;

		return json_encode($result);
	}
}

// handle GET requests for /article
$app->get('/', function () use ($app) {  
  	// set up database connection
	R::setup('mysql:host=localhost;dbname=kapibara','root','');
	R::freeze(true);

	$kapibaraOdata = new KapibaraOdata();
	
	// send response header for JSON content type
	$app->response()->header('Content-Type', 'application/json');

  	// return JSON-encoded response body with query results
	echo $kapibaraOdata->query("/article/\$filter=id eq 1");
});

$app->run();