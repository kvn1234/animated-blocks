<?php
/**
 * Plugin Name: Animated Blocks
 * Plugin URI: https://github.com/virgiliud/animated-blocks
 * Description: Add scroll-based CSS3 animations to Gutenberg blocks.
 * Author: Virgiliu Diaconu
 * Author URI: http://virgiliudiaconu.com/
 * Version: 1.0.0
 * License: GPLv2 or later
 * License URI: http://www.gnu.org/licenses/gpl-2.0.html
 * Text Domain: animated-blocks
 * 
 */

// Exit if accessed directly.
if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

/**
 * Block Initializer.
 */
require_once plugin_dir_path( __FILE__ ) . 'dist/init.php';
