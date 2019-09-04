<?php

function connect_to_db () {
  $serverName = "SQ03"; //serverName\instanceName
  $connectionInfo = array( "Database"=>"Cygnus", "UID"=>"sa", "PWD"=>"N@4u2C0k!");
  $conn = sqlsrv_connect( $serverName, $connectionInfo);
  
  if( $conn ) {
       return "Connection established";
  }else{
       return "Connection could not be established";
       die( print_r( sqlsrv_errors(), true));
  }
}


