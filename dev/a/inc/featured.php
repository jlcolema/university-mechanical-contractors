<?php
 
	$post_object = get_field('featured_project');

	if( $post_object ): 
 
	// override $post
	
	$post = $post_object;
	
	setup_postdata( $post ); 

?>

	<div class="featured">

		<div class="section-header">
	
			<h2>Featured <span>Build / Construction</span> Project</h2>
	
			<div class="more">
	
				<a href="/projects/">View All</a>
	
			</div>
	
		</div>
	
		<div class="featured-project">

			<?php

				$attachment_id = get_field('thumbnail_image');

				$large = "full";
				$medium = "thumbnail_small";
				// $small = "image_small";

				// Large (400 x 250)
				
				$image_large = wp_get_attachment_image_src( $attachment_id, $large);

				// Medium (230 x 9999)
				
				$image_medium = wp_get_attachment_image_src( $attachment_id, $medium);

				// Small (?)
				
				// $image_small = wp_get_attachment_image_src( $attachment_id, $small);

			?>
	
			<span data-picture data-alt="<?php the_title(); ?>">

				<span data-src="<?php echo $image_large[0]; ?>"></span>

				<span data-src="<?php echo $image_medium[0]; ?>" data-media="(min-width: 480px)"></span>
				
				<!--[if (lt IE 9) & (!IEMobile)]>

					<span data-src="<?php echo $image_medium[0]; ?>"></span>
				
				<![endif]-->
				
				<noscript>
				
					<img src="<?php echo $image_large[0]; ?>" alt="" />

				</noscript>

			</span>

			<div class="copy">
	
				<h1>
	
					<a href="<?php the_permalink(); ?>"><?php the_title(); ?></a>
	
				</h1>
	
				<p class="excerpt">
					
					<?php the_excerpt(); ?>
					
				</p>
	
			</div>
	
		</div>
	
	</div>

	<?php /*

	<div>
	
		<h3><a href="<?php the_permalink(); ?>"><?php the_title(); ?></a></h3>
	
		<span>Post Object Custom Field: <?php the_field('field_name'); ?></span>
	
	</div>

	*/ ?>

	<?php wp_reset_postdata(); // IMPORTANT - reset the $post object so the rest of the page works correctly ?>

<?php endif; ?>