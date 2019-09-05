<?php
function open_file (){
  
  // Store the file name into variable 
  $file = 'test.pdf'; 
  $filename = 'test.pdf'; 
    
  // Header content type 
  header('Content-type: application/pdf'); 
    
  header('Content-Disposition: inline; filename="' . $filename . '"'); 
    
  header('Content-Transfer-Encoding: binary'); 
    
  header('Accept-Ranges: bytes'); 
    
  // Read the file 
  return readfile($file); 
  
}

