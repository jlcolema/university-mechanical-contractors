<?php

/* Template Name: People */

?>


<?php get_header(); ?>

	<div id="main">

	<?php
	
		/* get projects */
		$args = array(
			'numberposts'=>-1,
			'post_type'=>'people',
			'orderby'=>'menu_order',
			'post_status'=>'publish'
		);
		$items = get_posts($args);
	
	?>
	
	<ul>
	
		<?php foreach($items as $item): ?>
				
			<?php
			
				// thumbnail image
				$image_url = wp_get_attachment_image_src( get_field('thumbnail_image', $item->ID), 'full');
				$image_url = $image_url[0];
				
			?>
			<li>
				<a href="<?php echo get_permalink($item->ID); ?>"><img src="<?php echo $image_url; ?>" alt="" /></a>	
				<div><?php echo $item->post_title; ?></div>
			</li>
				
		<?php endforeach; ?>
	
	</ul>

<?php get_footer(); ?>
