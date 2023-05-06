<?php get_header(); ?>

	<?php
	
		/* Hero */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/hero.php" ); ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">
		
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
					<article class="summary">
			
						<h1>
						
							<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
							
						</h1>

						<footer>

							<time datetime="<?php echo date(DATE_W3C); ?>"><?php the_time('j F Y') ?></time>

							<p class="author">by <?php the_author() ?></p>
		
						</footer>
			
						<?php the_content(); ?>

						<div class="more">
	
							<a href="<?php the_permalink() ?>">Read More</a>
	
						</div>

					</article>
		
				<?php endwhile; ?>
		
				<?php post_navigation(); ?>
		
				<?php else : ?>
		
					<h2><?php _e('Nothing Found','tune'); ?></h2>
		
				<?php endif; ?>
		
			</div>
	
			<?php get_sidebar(); ?>

		</div>

	</div>

<?php get_footer(); ?>
