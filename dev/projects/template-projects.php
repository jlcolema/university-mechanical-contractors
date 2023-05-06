<?php

/*

	Template Name: Projects
	
*/
	
?>

<?php get_header(); ?>

	<div id="filter">
	
		<div class="wrap">
	
			<div class="title">Filter Projects:</div>
	
			<div id="filters">
	
				<div class="pulldown expertise">
	
					<span class="filter-by">By Expertise</span>
					
					<?php
		
						$args = array(
							'posts_per_page' => -1,
							'post_type' => 'expertise',
							'orderby' => 'menu_order',
							'order' => 'ASC',
							'post_parent' => 0
						);
						  
						$items = query_posts( $args );
						
					?>
					
					<ul>
						<li class="active" data-filter="all" data-dimension="expertise">All</li>
					
						<?php
						
							foreach($items as $item):
								echo '<li data-filter="' . sanitize_title_with_dashes( $item->post_title ) . '" data-dimension="expertise">' . $item->post_title . '</li>';
							endforeach;
							
						?>

					</ul>
		
				</div>
	
				<div class="pulldown market">
		
					<span class="filter-by">By Core Markets</span>
					
					<?php
		
						$args = array(
							'posts_per_page' => -1,
							'post_type' => 'core-markets',
							'orderby' => 'menu_order',
							'order' => 'ASC',
							'post_parent' => 0
						);
						  
						$items = query_posts( $args );
						
					?>
					
					<ul>
	
						<li class="active" data-filter="all" data-dimension="market">All</li>
					
						<?php
						
							foreach($items as $item):
								echo '<li data-filter="' . sanitize_title_with_dashes( $item->post_title ) . '" data-dimension="market">' . $item->post_title . '</li>';
							endforeach;
							
						?>
		
					</ul>
		
				</div>
	
			</div>
	
		</div>
	
	</div>

	<div id="content">

		<div class="wrap">

			<h1 class="page-title"><?php the_title(); ?></h1>

			<div id="main" role="main">

				<?php
				
					/* get projects */

					$args = array(

						'numberposts'	=> -1,
						'post_type'	=> 'projects',
						'orderby'		=> 'menu_order',
						'post_status'	=> 'publish'

					);

					$items = get_posts($args);
				
				?>

				<div id="project-list">

					<?php
					
						/* Fail Element */
						
					?>

					<div class="fail_element">

						<em>No projects match this criteria.</em>

					</div>

					<?php

						/* Individual Projects */
						
					?>

					<?php foreach($items as $item): ?>
							
						<?php
						
							/* Thumbnail Image */

							$image_url = wp_get_attachment_image_src( get_field('thumbnail_image', $item->ID), 'full');

							$image_url = $image_url[0];
							
							/* get categories for this project */
							$categories = get_field('expertise', $item->ID);
							
							/* get core markets for this project */
							$core_markets = get_field('core_markets', $item->ID);
							
						?>

						<div class="project mix <?php if ($categories) { foreach($categories as $category): echo sanitize_title_with_dashes($category->post_title) . ' '; endforeach; } ?> <?php if ($core_markets) { foreach($core_markets as $core_market): echo sanitize_title_with_dashes($core_market->post_title) . ' '; endforeach; } ?>">

							<a href="<?php echo get_permalink($item->ID); ?>">
							
								<img src="<?php echo $image_url; ?>" alt="" />

								<h2 class="title"><?php echo $item->post_title; ?></h2>

							</a>

						</div>
							
					<?php endforeach; ?>

				</div>

			</div>

		</div>

	</div>

<?php get_footer(); ?>