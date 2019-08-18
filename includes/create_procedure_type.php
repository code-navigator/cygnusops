<?php 

// Create custom post type for procedures
function create_procedure_type() {

  // Labels
  $labels = array(
    'name' => __('Procedures'),
    'singular' => ('Procedure')
  );

  // Options
  $args = array(
    'has_archive' => false,
    'hierarchical' => true,
    'labels' => $labels,
    'menu_icon' => 'dashicons-media-text',
    'public' => true,
    'rest_base' => 'procedures',
    'rewrite' => array( 'slug' => 'procedures'),
    'show_in_rest' => true,
  );

  // Register type
  register_post_type( 'procedure', $args );
}
add_action( 'init', 'create_procedure_type' );