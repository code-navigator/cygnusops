<?php

namespace cygnusops;

/**
 * Include all functions files in "/includes"
 */
$files = new \FilesystemIterator( __DIR__.'/includes', \FilesystemIterator::SKIP_DOTS );

// Iterate through list of files
foreach ( $files as $file )
{
  // Include files only, ignoring directories
  ! $files->isDir() and include $files->getRealPath();
}









