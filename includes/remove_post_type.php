<?php   

// Remove default post type
function remove_post_type() {
  remove_menu_page('edit.php');
}
add_action('admin_menu', 'remove_post_type');