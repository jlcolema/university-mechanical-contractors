<?php

	// Translations can be filed in the /languages/ directory
	
	load_theme_textdomain( 'tune', TEMPLATEPATH . '/languages' );
	
	$locale = get_locale();
	$locale_file = TEMPLATEPATH . "/languages/$locale.php";

	if ( is_readable($locale_file) )
	require_once($locale_file);
	
	// Add RSS links to <head> section

	automatic_feed_links();
	
	// Load jQuery

	if ( !function_exists('core_mods') ) {

		function core_mods() {

			if ( !is_admin() ) {
				wp_deregister_script('jquery');
				wp_register_script('jquery', ("http://ajax.googleapis.com/ajax/libs/jquery/1.8.2/jquery.min.js"), false);
				wp_enqueue_script('jquery');
			}

		}

		core_mods();

	}
	
	// Clean up the <head>

	function removeHeadLinks() {
		remove_action('wp_head', 'rsd_link');
		remove_action('wp_head', 'wlwmanifest_link');
	}

	add_action('init', 'removeHeadLinks');
	remove_action('wp_head', 'wp_generator');

	// Nav Menu

	register_nav_menu( 'primary', __( 'Primary Menu', 'tune' ) );

	// Post Thumbnails

	add_theme_support( 'post-thumbnails' );

	// Widgets
	
	if (function_exists('register_sidebar')) {

		register_sidebar(array(
			'name' => __('Sidebar Widgets','tune' ),
			'id'   => 'sidebar-widgets',
			'description'   => __( 'These are widgets for the sidebar.','tune' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		));

		register_sidebar(array(
			'name' => __('Footer Widgets','tune' ),
			'id'   => 'footer-widgets',
			'description'   => __( 'These are widgets for the footer.','tune' ),
			'before_widget' => '<div id="%1$s" class="widget %2$s">',
			'after_widget'  => '</div>',
			'before_title'  => '<h2>',
			'after_title'   => '</h2>'
		));

	}


error_reporting(E_ALL);
ini_set('display_errors', '1');

	/*-------------------------------------------
		Dump
	-------------------------------------------*/
	function dump($data) {
	    if(is_array($data)) { //If the given variable is an array, print using the print_r function.
	        print "<pre>-----------------------\n";
	        print_r($data);
	        print "-----------------------</pre>";
	    } elseif (is_object($data)) {
	        print "<pre>==========================\n";
	        var_dump($data);
	        print "===========================</pre>";
	    } else {
	        print "=========&gt; ";
	        var_dump($data);
	        print " &lt;=========";
	    }
	} 



add_filter( 'wpseo_metabox_prio', function() { return 'low';});