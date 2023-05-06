<?php

/*

	Template Name: Home
	
*/
	
?>

<?php get_header(); ?>

	<?php
	
		/* Carousel */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/carousel.php" ); ?>

	<div id="content">

		<div class="wrap">

			<h1 class="page-title"><?php the_title(); ?></h1>

			<div id="main" role="main">

				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
					<?php the_content(); ?>

				<?php endwhile; endif; ?>
		
			</div>

			<div id="secondary">

				<?php

					/* Factoid */
				
				?>

				<?php include (TEMPLATEPATH . "/a/inc/factoid.php" ); ?>
			
			</div>

		</div>

	</div>

<?php get_footer(); ?>