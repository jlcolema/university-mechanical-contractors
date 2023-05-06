<?php get_header(); ?>

	<?php
	
		/* Individual Expertise */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/hero.php" ); ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<h1><?php the_title(); ?></h1>

				<?php the_content(); ?>

			</div>

			<?php get_sidebar(); ?>

		</div>

	</div>

<?php get_footer(); ?>