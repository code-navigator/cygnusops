<?php
function get_procedures_matching_category($request) {
  global $wpdb;
  
  // Run query, filtering on matching category
  $results = $wpdb->get_results("
    SELECT * 
    FROM wp_terms
    INNER JOIN wp_term_relationships
      ON wp_terms.term_id = wp_term_relationships.term_taxonomy_id 
    INNER JOIN wp_posts 
      ON wp_posts.ID = wp_term_relationships.object_id 
    WHERE wp_terms.slug = '" . $request['slug'] . "'"
  );

  
    return $results;
  }