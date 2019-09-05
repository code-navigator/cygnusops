<?php

function connect_to_db () {
  $serverName = "DM01"; //serverName\instanceName
  $connectionInfo = array(
		"Database"=>"Filebound", 
		"UID"=>"FBADMIN", 
		"PWD"=>"filebound"
	);
  $conn = sqlsrv_connect(
		$serverName,
		$connectionInfo
	);

	$sql = "SELECT *
		FROM files
		INNER JOIN documents
			ON documents.fileid = files.fileid
		WHERE field1='AMS 2770'
			AND dividerName='SPECIFICATION'
		ORDER BY dateFiled DESC";

	$stmt = sqlsrv_prepare( $conn, $sql );

	$result = sqlsrv_execute( $stmt );
  
  if( $conn ) {
       return sqlsrv_fetch_array( $stmt );
  }else{
       return "Connection could not be established";
       die( print_r( sqlsrv_errors(), true));
  }
}


