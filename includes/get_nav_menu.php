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
    INNER JOIN wp_postmeta
      ON wp_posts.id = wp_postmeta.post_id
    WHERE post_type = 'nav_menu_item'
      AND post_status = 'publish'
      AND meta_key IN ('name', 'icon', 'path', '_menu_item_menu_item_parent')
  ");

  // Loop through results
  foreach($results as $result) {

    $id = $result->ID;

    switch($result->meta_key) {
      case '_menu_item_menu_item_parent':
        $parent = $result->meta_value;
        break;
      case 'name':
        $name = $result->meta_value;
        break;
      case 'icon':
        $icon = $result->meta_value;
        break;
      case 'path':
        $path = $result->meta_value;
        $write = true;
        break;
    }

    if($write) {
      $tempArray = array(
        'id' => (int)$id,
        'parent' => (int)$parent,
        'name' => $name,
        'icon' => $icon,
        'path' => $path
      );

      // Push menu item to array
      array_push($arr, $tempArray);
      
      // Clear temp variables
      $parent = '';
      $name = '';
      $icon = '';
      $path = '';
      $write = false; 
    }
  }
    return get_nested_children($arr, 0);
  }