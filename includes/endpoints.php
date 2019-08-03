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
});