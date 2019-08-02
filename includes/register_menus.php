<?php 

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
