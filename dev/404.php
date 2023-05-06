<?php get_header(); ?>

	<?php
	
		/* Hero */
	
	?>

	<div id="hero">
	
		<div class="wrap">
	
			<?php
			
				if( get_field("hero_image", 'option') ):
				
			?>
	
				<div class="hero">
	
					<?php
	
						$attachment_id = get_field('hero_image', 'option');
	
						$large = "full";
						$medium = "image_medium";
						$small = "image_small";
	
						// Large (1133 x 480)
						
						$image_large = wp_get_attachment_image_src( $attachment_id, $large);
	
						// Medium (640 x 480)
						
						$image_medium = wp_get_attachment_image_src( $attachment_id, $medium);
	
						// Small (400 x 300)
						
						$image_small = wp_get_attachment_image_src( $attachment_id, $small);
	
					?>
			
					<span data-picture data-alt="">
	
						<span data-src="<?php echo $image_small[0]; ?>"></span>
	
						<span data-src="<?php echo $image_medium[0]; ?>" data-media="(min-width: 420px)"></span>
	
						<span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 640px)"></span>
	
						<!--[if (lt IE 9) & (!IEMobile)]>
	
							<span data-src="<?php echo $image_large[0]; ?>"></span>
	
						<![endif]-->
	
						<noscript>
						
							<img src="<?php echo $image_small[0]; ?>" alt="" />
	
						</noscript>
	
					</span>
	
				</div>
	
			<?php endif; ?>
	
		</div>
	
	</div>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<h1><?php the_field('error_title', 'option'); ?></h1>

				<?php the_field('error_details', 'option'); ?>
		
			</div>

			<?php get_sidebar(); ?>

		</div>
		
	</div>

<?php get_footer(); ?>