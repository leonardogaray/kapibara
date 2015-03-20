<?php
	
	switch($_GET["get"]){
		case "jslibs" :
			$CONFIG_JSON = file_get_contents($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/config/paths.json");
			$config = json_decode($CONFIG_JSON, true);	
			echo $CONFIG_JSON;
			break;
		case "modules" : 
			$FILES_JSON = json_encode(ReadFolderDirectory($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/app/Test"));
			echo $FILES_JSON;
	}
	

	function ReadFolderDirectory($dir,$listDir= array()){
	    $listDir = array();
	    if($handler = opendir($dir)){
	        while (($sub = readdir($handler)) !== FALSE){
	            if ($sub != "." && $sub != ".." && $sub != "Thumb.db"){
	                if(is_file($dir."/".$sub)){
	                    $listDir[] = $sub;
	                }elseif(is_dir($dir."/".$sub)){
	                    $listDir[$sub] = ReadFolderDirectory($dir."/".$sub); 
	                } 
	            } 
	        }    
	        closedir($handler); 
	    } 
	    return $listDir;    
	}



