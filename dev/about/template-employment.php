<?php

/*

	Template Name: Employment
	
*/
	
?>

<?php get_header(); ?>

	<?php
	
		/* Hero */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/hero.php" ); ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
					<h1><?php the_title(); ?></h1>
		
					<?php the_content(); ?>

					<div class="vcard">

						<h2>Please direct resumes to <a href="mailto:<?php the_field('resume_email', 'option'); ?>"><?php the_field('resume_email', 'option'); ?></a> or mail them to:</h2>
	
						<div class="fn n org"><?php bloginfo('name'); ?></div>
	
						<div class="adr">
	
							<div class="street-address"><?php the_field('street_address', 'option'); ?></div>
	
							<span class="locality"><?php the_field('street_address_city', 'option'); ?></span>, 
	
							<span class="region"><?php the_field('street_address_state', 'option'); ?></span> 
	
							<span class="postal-code"><?php the_field('street_address_zip_code', 'option'); ?></span>
						
						</div>
	
					</div>
	
					<p><?php the_field('eoe_statement', 'option'); ?></p>

					<?php
					
						/* Get Jobs */
	
						$args = array(
	
							'numberposts'	=> -1,
							'post_type'	=> 'jobs',
							'orderby'		=> 'menu_order',
							'post_status'	=> 'publish'
	
						);
	
						$items = get_posts($args);
					
					?>
	
					<div class="openings">

						<h3>Current Openings</h3>

						<?php
	
							/* Individual Jobs */
							
						?>

						<ul>
	
							<?php foreach($items as $item): ?>
								
							<li>
	
								<a href="<?php echo get_permalink($item->ID); ?>">
								
									<?php echo $item->post_title; ?>
	
								</a>
	
							</li>
								
							<?php endforeach; ?>

						</ul>

					</div>

				<?php endwhile; endif; ?>

			</div>

			<?php get_sidebar(); ?>

		</div>
		
	</div>

<?php get_footer(); ?>