<?php 

// Create custom post type for procedures
function create_procedure_type() {

  // Labels
  $labels = array(
    'name' => __('Procedures'),
    'singular' => ('Procedure')
  );

  $supports = array(
    'title',
    'thumbnail',
    'editor',
    'revisions',
    'page-attributes',
    'excerpt'
  );

  // Options
  $args = array(
    'taxonomies'  => array( 'category' ),
    'has_archive' => false,
    'hierarchical' => true,
    'labels' => $labels,
    'menu_icon' => 'dashicons-media-text',
    'public' => true,
    'rest_base' => 'procedures',
    'rewrite' => array(
      'slug' => 'procedures',
      'with-front' => false
    ),
    'show_in_rest' => true,
    'supports' => $supports,
  );

  // Register type
  register_post_type( 'procedure', $args );
}
add_action( 'init', 'create_procedure_type' );