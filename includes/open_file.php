<?php
function open_file (){
  
  // Store the file name into variable 
  $file = 'c:/test.pdf'; 
  $filename = 'test.pdf'; 
    
  // Header content type 
  header('Content-type: application/pdf'); 
    
  header('Content-Disposition: inline; filename="' . $filename . '"'); 
    
  header('Content-Transfer-Encoding: binary'); 
    
  header('Accept-Ranges: bytes');
  
  header('Access-Control-Allow-Origin');

  header('Access-Control-Allow-Headers: {$_SERVER["HTTP_ACCESS_CONTROL_REQUEST_HEADERS"]}');
    
  // Read the file 
  return readfile($file); 
  
}

