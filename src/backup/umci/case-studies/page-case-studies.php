<?php

/* Template Name: Case Studies */

?>

<?php get_header(); ?>

	<div id="main">

	<?php
	
		/* get case studies */
		$args = array(
			'numberposts'=>-1,
			'post_type'=>'case-studies',
			'orderby'=>'menu_order',
			'post_status'=>'publish'
		);
		$items = get_posts($args);
	
	?>
	
	<ul>
	
		<?php foreach($items as $item): ?>
				
			<li>
				<a href="<?php echo get_permalink($item->ID); ?>" data-reveal-id="myModal"><?php echo $item->post_title; ?></a>
			</li>
				
		<?php endforeach; ?>
	
	</ul>
	
	<div id="myModal" class="reveal-modal">
		<h1>Modal Title</h1>
		<p>Any content could go in here.</p>
		<a class="close-reveal-modal">&#215;</a>
	</div>

<?php get_footer(); ?>


<link rel="stylesheet" href="<?php bloginfo('template_directory'); ?>/a/inc/reveal/reveal.css">
<script type="text/javascript" src="<?php bloginfo('template_directory'); ?>/a/inc/reveal/jquery.reveal.js"></script>
