<?php

/**
 * Recursive function to convert a flat array to a nested heirachy of nodes
 */
function get_nested_children($flat_array, $parent) {
  $nested_array = array();
    // Loop through entire array
    for($i=0; $i<count($flat_array); $i++) {
      // Find children of the current parent  
      if($flat_array[$i]['parent'] == $parent) {
        // Go to the next level deep using the current node as the parent
        $children = get_nested_children($flat_array, $flat_array[$i]['id']);
            // If there are children attach them to the parent
            if (count($children)) {
                $flat_array[$i]['children'] = $children;
            }
            // Attach the child to the current node
            array_push($nested_array, $flat_array[$i]);
        }
    }
  return $nested_array;
}