<div id="mosaic">

	<div class="wrap">

		<div class="people">

			<?php
			
				/*

			<div class="people-flexslider">

				<div class="people-slides">

				*/
				
			?>

					<?php
					
						/* Get People */
		
						$args = array(
		
							'numberposts'	=> -1,
							'post_type'	=> 'people',
							'orderby'		=> 'menu_order',
							'post_status'	=> 'publish'
		
						);
		
						$items = get_posts($args);
					
					?>
		
					<?php
		
						/* Individual */
						
					?>
		
					<?php foreach($items as $item): ?>
		
						<?php
		
							$attachment_id = get_field('people_photo', $item->ID);
		
							$large = "person_large";
							$medium = "person_medium";
							$small = "person_small";
							$extra_small = "person_extra_small";
		
							// Large (700 x 700)
							
							$person_large = wp_get_attachment_image_src( $attachment_id, $large);
		
							// Medium (500 x 500)
							
							$person_medium = wp_get_attachment_image_src( $attachment_id, $medium);
		
							// Small (400 x 400)
		
							$person_small = wp_get_attachment_image_src( $attachment_id, $small);
		
							// Extra Small (150 x 150)
							
							$person_extra_small = wp_get_attachment_image_src( $attachment_id, $extra_small);
		
						?>
							
						<div class="person">
		
							<a href="<?php echo get_permalink($item->ID); ?>">
		
								<span data-picture data-alt="<?php echo $item->post_title; ?>">
				
									<span data-src="<?php echo $person_small[0]; ?>"></span>
				
									<!-- <span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 420px)"></span> -->
				
									<!-- <span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 640px)"></span> -->
				
									<noscript>
									
										<img src="<?php echo $person_small[0]; ?>" alt="" />
				
									</noscript>
				
								</span>
		
								<div class="overlay">
			
									<div class="name"><?php echo $item->post_title; ?></div>
			
									<div class="position"><?php the_field('people_position', $item->ID); ?></div>
			
								</div>
			
							</a>
			
						</div>
		
					<?php endforeach; ?>

			<?php
			
				/*

				</div>

			</div>

				*/
			
			?>

		</div>

		<div id="hero-image"></div>

	</div>

</div>