<div id="profile">

	<div class="wrap">

		<?php
		
			/* Get People */

			$args = array(

				'numberposts'	=> 1,
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

				$attachment_id = get_field('people_photo');

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

			<div class="hero">

				<div class="hero-image-wrap">

					<img src="<?php echo $person_large[0]; ?>" alt="" />

				</div>

			</div>

			<div class="profile-wrap">

				<div class="profile">
		
					<div class="name"><?php the_title(); ?></div>
					
					<div class="position"><?php the_field('people_position'); ?></div>
		
					<p class="bio"><?php the_field('bio'); ?></p>
		
					<div class="back-to">
		
						<a href="javascript:;"><span>&larr;</span> Back to People</a>
		
					</div>
		
				</div>

			</div>

		<?php endforeach; ?>

	</div>

</div>