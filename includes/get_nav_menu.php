<?php 

/**
 * Get Wordpress Menu meta data including custom fields
 */
function cygnusops_get_nav_menu() {
  global $wpdb;
  $arr = array();     // Array to return
  $write = false;     // Flag to push data to array
  
  // Run query, filtering on data specific to menus
  $results = $wpdb->get_results("
    SELECT *
    FROM wp_posts
    WHERE post_type = 'procedure'
      AND post_status = 'publish'
  ");

  // Loop through results
  foreach($results as $result) {

      $tempArray = array(
        'id' => (int)$result->ID,
        'parent' => (int)$result->post_parent,
        'path' => $result->post_name,
        'name' => $result->post_title
      );

      // Push menu item to array
      array_push($arr, $tempArray);
  }
  
  return get_nested_children($arr, 0);
}