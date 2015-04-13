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

// handle GET requests for /article
$app->get('/articles', function () use ($app) {  
  // query database for all article
	$articles = R::find('article'); 

  // send response header for JSON content type
	$app->response()->header('Content-Type', 'application/json');

  // return JSON-encoded response body with query results
	echo json_encode(R::exportAll($articles));
});

// handle GET requests for /article/:id
$app->get('/article/:id', function ($id) use ($app) {    
	try {
    // query database for single article
		$article = R::findOne('article', 'id=?', array($id));

		if ($article) {
      // if found, return JSON response
			$app->response()->header('Content-Type', 'application/json');
			echo json_encode(R::exportAll($article));
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

// handle POST requests to /article
$app->post('/article', function () use ($app) {    
	try {
    // get and decode JSON request body
		$request = $app->request();
		$body = $request->getBody();
		$input = json_decode($body); 

    // store article record
		$article = R::dispense('article');
		$article->title = (string)$input->title;
		$article->url = (string)$input->url;
		$article->date = (string)$input->date;
		$id = R::store($article);    

    // return JSON-encoded response body
		$app->response()->header('Content-Type', 'application/json');
		echo json_encode(R::exportAll($article));
	} catch (Exception $e) {
		$app->response()->status(400);
		$app->response()->header('X-Status-Reason', $e->getMessage());
	}
});

// handle PUT requests to /article/:id
$app->put('/article/:id', function ($id) use ($app) {    
	try {
    // get and decode JSON request body
		$request = $app->request();
		$body = $request->getBody();
		$input = json_decode($body); 
		
    // query database for single article
		$article = R::findOne('article', 'id=?', array($id));  
		
    // store modified article
    // return JSON-encoded response body
		if ($article) {      
			$article->title = (string)$input->title;
			$article->url = (string)$input->url;
			$article->date = (string)$input->date;
			R::store($article);    
			$app->response()->header('Content-Type', 'application/json');
			echo json_encode(R::exportAll($article));
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

// handle DELETE requests to /article/:id
$app->delete('/article/:id', function ($id) use ($app) {    
	try {
    // query database for article
		$request = $app->request();
		$article = R::findOne('article', 'id=?', array($id));  
		
    // delete article
		if ($article) {
			R::trash($article);
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