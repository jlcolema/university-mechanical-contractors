<?php get_header(); ?>

	<div id="main">

		<div>Name: <?php echo $post->post_title; ?></div>
		
		<div>Title: <?php echo get_field('title', $post->ID); ?></div>
		
		<?php
		
			// hero image
			$image_url = wp_get_attachment_image_src( get_field('hero_image', $post->ID), 'full');
			$image_url = $image_url[0];
			
		?>
		<div>Hero Image: <img src="<?php echo $image_url; ?>" alt="" /></div>
		
		<div>Bio: <?php echo get_field('bio', $post->ID); ?></div>
		
	</div>

<?php get_footer(); ?>
