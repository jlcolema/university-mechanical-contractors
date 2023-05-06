<?php

/* Template Name: News */

?>

<?php get_header(); ?>

	<div id="main">

	<?php
	
		/* get case studies */
		$args = array(
			'numberposts'=>-1,
			'post_type'=>'news',
			'orderby'=>'menu_order',
			'post_status'=>'publish'
		);
		$items = get_posts($args);
	
	?>
	
	<ul>
	
		<?php foreach($items as $item): ?>
				
			<li>
				<a href="<?php echo get_permalink($item->ID); ?>">
					<?php echo $item->post_title; ?>
					<?php echo $item->post_excerpt; ?>
				</a>
			</li>
				
		<?php endforeach; ?>
	
	</ul>

<?php get_footer(); ?>
