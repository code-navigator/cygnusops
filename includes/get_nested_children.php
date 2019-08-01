<?php

function get_nested_children($flat_array, $parent) {
  $nested_array = array();

    for($i=0; $i<count($flat_array); $i++) {
        
      if($flat_array[$i]['parent'] == $parent) {
            $children = get_nested_children($flat_array, $flat_array[$i]['id']);
            if (count($children)) {
                $flat_array[$i]['children'] = $children;
            }

            array_push($nested_array, $flat_array[$i]);
        }
    }
  return $nested_array;
}