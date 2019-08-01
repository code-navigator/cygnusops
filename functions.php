<?php

/**
 * Enqueue the Vue single page application
 */
function cygnusops_enqueue_scripts() {
  // Register Vue script
  wp_register_script(
    'vue_script',
    'http://localhost:3000/app.js',
    array(),
    false,
    true
  );

  // Register Google fonts
  wp_register_style(
    'fonts', 
    "https://fonts.googleapis.com/css?family=Roboto:100,300,400,500,700,900", 
    array(),
    false,
    'all'
  );

  // Register Google's Material Design icons
  wp_register_style(
    'icons',
    "https://fonts.googleapis.com/css?family=Material+Icons",
    array(), 
    'all'
  );

  wp_register_style(
    'style',
    "http://localhost:3000/app.css",
    array(), 
    'all'
  );

  // Enqueue the Vue script
  wp_enqueue_script('vue_script');

  // Enqueue fonts
  wp_enqueue_style('fonts');

  // Enqueue Material Design icons
  wp_enqueue_style('icons');

  wp_enqueue_style('style');
}
add_action( 'wp_enqueue_scripts', 'cygnusops_enqueue_scripts');

/**
 * Add menu support
 */
function cygnusops_init() {
  register_nav_menus(
    array(
      'primary-menu' => __( 'Header Menu')
    )
  );
}
add_action( 'init', 'cygnusops_init');

/**
 * Get Wordpress Menu meta data including custom fields
 */
function cygnusops_get_nav_menu() {
  global $wpdb;
  $arr = array();
  $write = false;
  
  $results = $wpdb->get_results(
    "SELECT * " .
    "FROM wp_posts " .
    "INNER JOIN wp_postmeta " .
      "ON wp_posts.id = wp_postmeta.post_id " .
    "WHERE post_type = 'nav_menu_item' " .
      "AND post_status = 'publish' " .
      "AND meta_key IN ('name', 'icon', 'path', '_menu_item_menu_item_parent')"
  );

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

      array_push($arr, $tempArray);
      
      $parent = '';
      $name = '';
      $icon = '';
      $path = '';
      $write = false; 
    }
  }
    return get_nested_children($arr, 0);
  }

/**
 * Endpoint for retrieving menu info
 */
add_action( 'rest_api_init', function() {
  register_rest_route('wp/v2', 'menu', array(
    'methods' => 'GET',
    'callback' => 'cygnusops_get_nav_menu'
  ));
});


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


