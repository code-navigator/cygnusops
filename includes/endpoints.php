<?php

/**
 * Custom endpoints
 */

//  Retrieve Wordpress menu structure
add_action( 'rest_api_init', function() {
  register_rest_route('wp/v2', 'menu', array(
    'methods' => 'GET',
    'callback' => 'cygnusops_get_nav_menu'
  ));
  // Retrieve procedures matching a category
  register_rest_route('wp/v2', '/cat/(?P<slug>[a-z]+)', array(
    'methods' => 'GET',
    'callback' => 'get_procedures_matching_category'
  ));

  register_rest_route('wp/v2', '/db', array(
    'methods' => 'GET',
    'callback' => 'connect_to_db'
  ));

  register_rest_route('wp/v2', '/files', array(
    'methods' => 'GET',
    'callback' => 'open_file'
  ));
});