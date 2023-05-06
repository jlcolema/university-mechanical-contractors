<div id="carousel">

	<div class="wrap">

		<div class="flexslider">

			<?php 
 
				if(get_field('project_samples')): ?>
 
				<ul class="slides">
 
					<?php while(has_sub_field('project_samples')): ?>

					<li>

						<?php

							$attachment_id = get_sub_field('project_sample');

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

							<span data-src="<?php echo $image_medium[0]; ?>" data-media="(min-width: 400px)"></span>

							<span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 640px)"></span>
		
							<noscript>
							
								<img src="<?php echo $image_small[0]; ?>" alt="" />

							</noscript>
	
						</span>

					</li>

					<?php endwhile; ?>

				</ul> 

			<?php endif; ?>

		</div>

	</div>

</div>