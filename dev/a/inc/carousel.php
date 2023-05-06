<div id="carousel">

	<div class="wrap">

		<div class="flexslider">

			<?php 
 
				if(get_field('carousel_slides')): ?>
 
				<ul class="slides">
 
					<?php while(has_sub_field('carousel_slides')): ?>

					<li>

						<?php

							$attachment_id = get_sub_field('carousel_slide');

							$large = "full";
							$medium = "image_medium";
							$small = "image_small";

							// Large
							
							$image_large = wp_get_attachment_image_src( $attachment_id, $large);

							// Medium
							
							$image_medium = wp_get_attachment_image_src( $attachment_id, $medium);

							// Small
							
							$image_small = wp_get_attachment_image_src( $attachment_id, $small);

						?>

						<span data-picture data-alt="">

							<!-- 400 x 300 -->

							<span data-src="<?php echo $image_small[0]; ?>"></span>

							<!-- 640 x 480 -->

							<span data-src="<?php echo $image_medium[0]; ?>" data-media="(min-width: 400px)"></span>

							<!-- 1133 x 480 -->

							<span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 640px)"></span>

							<!--[if (lt IE 9) & (!IEMobile)]>

								<span data-src="<?php echo $image_large[0]; ?>"></span>

							<![endif]-->

							<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->

							<noscript>
							
								<img src="<?php echo $image_small[0]; ?>" alt="" />

							</noscript>
	
						</span>

					</li>

					<?php endwhile; ?>

				</ul> 

			<?php endif; ?>

			<?php
			
				/* Use this to upgrade the markup above, once multiple image sizes are resolved.

			<ul class="slides">

				<li>

					<span data-picture data-alt="Description of image.">

						<span data-src="/wp-content/themes/umc/a/img/carousel/small/01.jpg"></span>

						<span data-src="/wp-content/themes/umc/a/img/carousel/medium/01.jpg" data-media="(min-width: 420px)"></span>
	
						<span data-src="/wp-content/themes/umc/a/img/carousel/large/01.jpg" data-media="(min-width: 640px)"></span>
	
						<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
	
						<noscript>
						
							<img src="/wp-content/themes/umc/a/img/carousel/small/01.jpg" alt="Description of image." />
						
						</noscript>

					</span>

				</li>

				<li>

					<span data-picture data-alt="Description of image.">

						<span data-src="/wp-content/themes/umc/a/img/carousel/small/02.jpg"></span>

						<span data-src="/wp-content/themes/umc/a/img/carousel/medium/02.jpg" data-media="(min-width: 420px)"></span>
	
						<span data-src="/wp-content/themes/umc/a/img/carousel/large/02.jpg" data-media="(min-width: 640px)"></span>
	
						<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
	
						<noscript>

							<img src="/wp-content/themes/umc/a/img/carousel/small/02.jpg" alt="Description of image." />
						
						</noscript>

					</span>
				
				</li>

				<li>

					<span data-picture data-alt="Description of image.">

						<span data-src="/wp-content/themes/umc/a/img/carousel/small/03.jpg"></span>

						<span data-src="/wp-content/themes/umc/a/img/carousel/medium/03.jpg" data-media="(min-width: 420px)"></span>
	
						<span data-src="/wp-content/themes/umc/a/img/carousel/large/03.jpg" data-media="(min-width: 640px)"></span>
	
						<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
	
						<noscript>
						
							<img src="/wp-content/themes/umc/a/img/carousel/small/03.jpg" alt="Description of image." />
						
						</noscript>

					</span>
				
				</li>

			</ul>

				*/
				
			?>

		</div>

	</div>

</div>