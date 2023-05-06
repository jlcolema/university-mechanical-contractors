<?php

/*

	Template Name: People
	
*/
	
?>

<?php get_header(); ?>

	<?php
	
		/* Mosaic */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/mosaic.php" ); ?>

	<?php
	
		/*
		
			Profile
			
			This loads information about the individual, on click / tap.
			
		*/
		
	?>

	<div id="profile">
		
		<div class="wrap"></div>
		
	</div>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
					<h1><?php the_title(); ?></h1>
		
					<?php the_content(); ?>

				<?php endwhile; endif; ?>

			</div>

			<?php get_sidebar(); ?>

		</div>
		
	</div>

<?php get_footer(); ?>