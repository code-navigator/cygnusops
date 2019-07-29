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