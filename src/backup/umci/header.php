<!doctype html>

<html class="no-js" <?php language_attributes(); ?>>

<head id="www-sitename-com" profile="http://gmpg.org/xfn/11">

	<meta charset="<?php bloginfo('charset'); ?>">

	<?php if (is_search()) { ?>
	<meta name="robots" content="noindex, nofollow" />
	<?php } ?>

	<title><?php wp_title(''); ?></title>

	<meta name="title" content="<?php wp_title(''); ?>">
	<meta name="description" content="<?php bloginfo('description'); ?>">

	<meta name="google-site-verification" content="">

	<meta name="author" content="Your Name Here">
	<meta name="Copyright" content="Copyright 2013 Your Name Here. All Rights Reserved.">

	<!-- <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0"> -->

	<!-- <link rel="apple-touch-icon-precomposed" href="<?php bloginfo('template_directory'); ?>/a/img/apple-touch-icon.png"> -->

	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/a/img/favicon.png">

	<link type="text/css" href="<?php bloginfo('stylesheet_url'); ?>" rel="stylesheet" media="screen, projection" />

	<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/print.css" rel="stylesheet" media="print" />

	<!--[if lt IE 10]>
		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie9.css" rel="stylesheet" media="screen, projection" />
	<![endif]-->

	<!--[if lt IE 9]>
		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie8.css" rel="stylesheet" media="screen, projection" />
	<![endif]-->

	<!--[if lt IE 8]>
		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie7.css" rel="stylesheet" media="screen, projection" />
	<![endif]-->

	<script type="text/javascript">

		<!--

			document.write('<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/enhanced.css" rel="stylesheet" media="screen, projection" />');

		//-->

	</script>

	<!--[if lt IE 9]>

		<script src="<?php bloginfo('template_directory'); ?>/a/js/html5shiv.js"></script>

		<script src="<?php bloginfo('template_directory'); ?>/a/js/selectivizr.js"></script>

		<script src="<?php bloginfo('template_directory'); ?>/a/js/respond.js"></script>

	<![endif]-->

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>

</head>

<body <?php body_class(); ?>>

	<div id="page">

		<header id="header">

			<hgroup>

				<h1 id="site-title"><a href="<?php echo get_option('home'); ?>/"><?php bloginfo('name'); ?></a></h1>

				<h2 id="site-description"><?php bloginfo('description'); ?></h2>

			</hgroup>

			<nav id="access">

				<?php wp_nav_menu( array( 'theme_location' => 'primary' ) ); ?>

			</nav>

			<?php get_search_form(); ?>

		</header>

		<div id="content">
