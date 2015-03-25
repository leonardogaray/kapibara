<?php
class KapibaraPackageReader {
	private $base_path;
	private $packages_path;
	private $app_path;
	private $package_app_path;
	private $application;

	function __construct($application){
		$this->base_path = $_SERVER['DOCUMENT_ROOT'] . "/kapibara/server";
		$this->packages_path = $this->base_path . "/config/packages.json";
		$this->app_path = $this->base_path . "/app/%s";
		$this->package_app_path = $this->app_path . "/config/package.json";

		$this->setApplication($application);
		$this->loadPackages();
		$this->loadAppPackages();
	}

	public function getConfig(){
		$paths = array();
		$paths["package"] = $this->app_package;
		$paths["packages"] = $this->packages["packages"];
		$paths["files"] = $this->getApplicationFiles();

		return $paths;
	}

	private function setApplication($application){
		$this->application = $application;
	}

	private function getApplication(){
		return $this->application;
	}	

	private function loadAppPackages(){
		$this->app_package = json_decode($this->readFile(sprintf($this->package_app_path,$this->getApplication())), true);
	}

	private function loadPackages(){
		$this->packages = json_decode($this->readFile($this->packages_path), true);
	}

	private function readFile($file_path){
		try{
			return file_get_contents($file_path);
		}catch(Exception $e){
			echo "Problems to load packages.json file. " . $e->getMessage();
		}
	}

	private function getApplicationFiles(){
		return $this->readFolderDirectory(sprintf($this->app_path,$this->getApplication()));
	}

	private function readFolderDirectory($dir,$listDir = array()){
	    $listDir = array();
	    if($handler = opendir($dir)){
	        while (($sub = readdir($handler)) !== FALSE){
	            if ($sub != "." && $sub != ".." && $sub != "Thumb.db"){
	                if(is_file($dir."/".$sub)){
	                	$content = file_get_contents($dir."/".$sub);
	                    $listDir[$sub] = json_decode($content);
	                }elseif(is_dir($dir."/".$sub)){
	                    $listDir[$sub] = $this->readFolderDirectory($dir."/".$sub, $listDir); 
	                } 
	            } 
	        }    
	        closedir($handler); 
	    } 
	    return $listDir;    
	}
}