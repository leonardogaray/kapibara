<?php
	header('Content-Type: application/json');

	switch($_GET["get"]){
		case "jslibs" :
			$CONFIG_JSPATHS_JSON = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/config/paths.json");
			$CONFIG_JSPATHS_JSON = json_decode($CONFIG_JSPATHS_JSON, true);

			$APP_CONFIG_FILES_JSON = json_decode(file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/app/" . $_GET["app"] . "/config/config.json"),true);

			$libs = explode(",",$APP_CONFIG_FILES_JSON["jslibs"]["ui"]);
			$returnLibs = array("libs" => array());

			foreach($libs as $lib){
				$libData = explode("|",$lib);
				array_push($returnLibs["libs"],$CONFIG_JSPATHS_JSON[$libData[0]][$libData[1]]);
			}
			echo json_encode($returnLibs);
			break;

		case "config" : 
			$FILES_JSON = json_encode(ReadFolderDirectory($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/app/Test"));
			echo $FILES_JSON;
	}
	

	function ReadFolderDirectory($dir,$listDir= array()){
	    $listDir = array();
	    if($handler = opendir($dir)){
	        while (($sub = readdir($handler)) !== FALSE){
	            if ($sub != "." && $sub != ".." && $sub != "Thumb.db"){
	                if(is_file($dir."/".$sub)){
	                	$content = file_get_contents($dir."/".$sub);
	                    $listDir[$sub] = json_decode($content);
	                }elseif(is_dir($dir."/".$sub)){
	                    $listDir[$sub] = ReadFolderDirectory($dir."/".$sub, $listDir); 
	                } 
	            } 
	        }    
	        closedir($handler); 
	    } 
	    return $listDir;    
	}



