<?php
	include_once($_SERVER['DOCUMENT_ROOT'] . "/kapibara/server/languages/php/5.3.8/KapibaraPackageReader.php");
	header('Content-Type: application/json');

	$kapibaraPackageReader = new KapibaraPackageReader($_GET["app"]);

	echo json_encode($kapibaraPackageReader->getConfig());


