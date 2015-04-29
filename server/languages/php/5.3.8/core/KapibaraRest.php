<?php
// load required files
require '../libs/Slim-2.6.2/Slim/Slim.php';
require '../libs/RedBean-4.2/rb.php';

// register Slim auto-loader
\Slim\Slim::registerAutoloader();

// set up database connection
R::setup('mysql:host=localhost;dbname=kapibara','root','');
R::freeze(true);

// initialize app
$app = new \Slim\Slim();

// handle GET requests for /:entity
$app->get('/:entityName', function ($entityName) use ($app) {  
  // query database for all entity
	$entities = R::find(rtrim($entityName,"s")); 

  // send response header for JSON content type
	$app->response()->header('Content-Type', 'application/json');

  // return JSON-encoded response body with query results
	echo json_encode(R::exportAll($entities));
});

// handle GET requests for /:entity/:id
$app->get('/:entityName/:id', function ($entityName, $id) use ($app) {    
	try {
    // query database for single entity
		$entity = R::findOne($entityName, 'id=?', array($id));

		if ($entity) {
      // if found, return JSON response
			$app->response()->header('Content-Type', 'application/json');
			echo json_encode(R::exportAll($entity));
		} else {
      // else throw exception
			throw new ResourceNotFoundException();
		}
	} catch (ResourceNotFoundException $e) {
    // return 404 server error
		$app->response()->status(404);
	} catch (Exception $e) {
		$app->response()->status(400);
		$app->response()->header('X-Status-Reason', $e->getMessage());
	}
});

// handle POST requests to /entity
$app->post('/entityName', function ($entityName) use ($app) {    
	try {
    // get and decode JSON request body
		$request = $app->request();
		$body = $request->getBody();
		$input = json_decode($body); 

    // store entity record
		$entity = R::dispense($entityName);

		$attributes = get_object_vars ( $input );

		foreach ($attributes as $key => $val) {
			$entity->{$key} = (string)$input->{$key};
		}
		
		$id = R::store($entity);    

    // return JSON-encoded response body
		$app->response()->header('Content-Type', 'application/json');
		echo json_encode(R::exportAll($entity));
	} catch (Exception $e) {
		$app->response()->status(400);
		$app->response()->header('X-Status-Reason', $e->getMessage());
	}
});

// handle PUT requests to /:entity/:id
$app->put('/:entityName/:id', function ($entityName, $id) use ($app) {    
	try {
    // get and decode JSON request body
		$request = $app->request();
		$body = $request->getBody();
		$input = json_decode($body); 
		
    // query database for single entity
		$entity = R::findOne($entityName, 'id=?', array($id));  
		
    // store modified entity
    // return JSON-encoded response body
		if ($entity) {      
			
			$attributes = get_object_vars ( $input );
			foreach ($attributes as $key => $val) {
				$entity->{$key} = (string)$input->{$key};
			}
			
			R::store($entity);    
			$app->response()->header('Content-Type', 'application/json');
			echo json_encode(R::exportAll($entity));
		} else {
			throw new ResourceNotFoundException();    
		}
	} catch (ResourceNotFoundException $e) {
		$app->response()->status(404);
	} catch (Exception $e) {
		$app->response()->status(400);
		$app->response()->header('X-Status-Reason', $e->getMessage());
	}
});

// handle DELETE requests to /:entity/:id
$app->delete('/:entityName/:id', function ($entityName, $id) use ($app) {    
	try {
    // query database for entity
		$request = $app->request();
		$entity = R::findOne($entityName, 'id=?', array($id));  
		
    // delete entity
		if ($entity) {
			R::trash($entity);
			$app->response()->status(204);
		} else {
			throw new ResourceNotFoundException();
		}
	} catch (ResourceNotFoundException $e) {
		$app->response()->status(404);
	} catch (Exception $e) {
		$app->response()->status(400);
		$app->response()->header('X-Status-Reason', $e->getMessage());
	}
});
// run
$app->run();