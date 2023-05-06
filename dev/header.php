<!doctype html>

<!--[if lt IE 7 ]>
	
	<html class="ie ie6 ie-lt10 ie-lt9 ie-lt8 ie-lt7 no-js" <?php language_attributes(); ?>>
	
<![endif]-->

<!--[if IE 7 ]>

	<html class="ie ie7 ie-lt10 ie-lt9 ie-lt8 no-js" <?php language_attributes(); ?>>
	
<![endif]-->

<!--[if IE 8 ]>

	<html class="ie ie8 ie-lt10 ie-lt9 no-js" <?php language_attributes(); ?>>
	
<![endif]-->

<!--[if IE 9 ]>

	<html class="ie ie9 ie-lt10 no-js" <?php language_attributes(); ?>>
	
<![endif]-->

<!--[if gt IE 9]><!-->

	<html class="no-js" <?php language_attributes(); ?>>
	
<!--<![endif]-->

<head>

	<meta charset="<?php bloginfo('charset'); ?>">

	<!--[if IE]>

		<meta http-equiv="X-UA-Compatible" content="IE=edge, chrome=1" />

	<![endif]-->

	<?php if (is_search()) { ?>
	<meta name="robots" content="noindex, nofollow" />
	<?php } ?>

	<title><?php wp_title(''); ?></title>

	<meta name="description" content="<?php bloginfo('description'); ?>">

	<meta name="author" content="<?php wp_title(''); ?>">

	<meta name="apple-mobile-web-app-title" content="UMC">

	<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0" />

	<meta name="google-site-verification" content="">

	<link rel="shortcut icon" href="<?php bloginfo('template_directory'); ?>/a/img/favicon.png">

	<link rel="apple-touch-icon-precomposed" href="<?php bloginfo('template_directory'); ?>/a/img/touch-icon.png">

	<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/screen.css" rel="stylesheet" media="screen, projection" />

	<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/print.css" rel="stylesheet" media="print" />

	<!--[if IE 10]>

		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie10.css" rel="stylesheet" media="screen, projection" />

	<![endif]-->

	<!--[if IE 9]>

		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie9.css" rel="stylesheet" media="screen, projection" />

	<![endif]-->

	<!--[if IE 8]>

		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie8.css" rel="stylesheet" media="screen, projection" />

	<![endif]-->

	<!--[if IE 7]>

		<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/ie/ie7.css" rel="stylesheet" media="screen, projection" />

	<![endif]-->

	<script type="text/javascript">
	
		<!--
		
			document.write('<link type="text/css" href="<?php bloginfo('template_directory'); ?>/a/css/enhanced.css" rel="stylesheet" media="screen, projection" />');

		//-->
	
	</script>

	<script type="text/javascript" src="//use.typekit.net/zgr5qab.js"></script>
	<script type="text/javascript">try{Typekit.load();}catch(e){}</script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/modernizr.js"></script>

	<meta name="twitter:card" content="">
	<meta name="twitter:site" content="">
	<meta name="twitter:title" content="">
	<meta name="twitter:description" content="">
	<meta name="twitter:url" content="">

	<meta property="og:title" content="" />
	<meta property="og:description" content="" />
	<meta property="og:url" content="" />
	<meta property="og:image" content="" />

	<link rel="pingback" href="<?php bloginfo('pingback_url'); ?>" />

	<?php if ( is_singular() ) wp_enqueue_script( 'comment-reply' ); ?>

	<?php wp_head(); ?>

	<!--[if IE 8]>

		<script src="<?php bloginfo('template_directory'); ?>/a/js/selectivizr.js"></script>

	<![endif]-->

</head>

<body <?php body_id(); ?> <?php body_class(); ?>>

	<p class="move">
	
		<a href="#main">Skip to main content.</a>
	
	</p>

	<header id="header" role="banner">

		<div class="wrap">

			<div id="logo">

				<a href="<?php echo get_option('home'); ?>/"><?php bloginfo('name'); ?></a>

			</div>

			<nav id="nav" role="navigation">

				<div class="toggle">Menu</div>

				<?php $defaults = array(

					'theme_location'  => 'primary',
					'menu'            => '', 
					'container'       => '', 
					'container_class' => '', 
					'container_id'    => '',
					'menu_class'      => 'menu', 
					'menu_id'         => '',
					'echo'            => true,
					'fallback_cb'     => 'wp_page_menu',
					'before'          => '',
					'after'           => '',
					'link_before'     => '',
					'link_after'      => '',
					'items_wrap'      => '<ul>%3$s</ul>',
					'depth'           => 1,
					'walker'          => ''

				); ?>

				<?php wp_nav_menu( $defaults ); ?>

			</nav>

		</div>

	</header>