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

				<?php endwhile; endif; ?>

				<?php
				
					/* Featured Project */

				?>
			
				<?php include (TEMPLATEPATH . "/a/inc/featured.php" ); ?>
		
			</div>

			<?php get_sidebar(); ?>

		</div>
		
	</div>

<?php get_footer(); ?>