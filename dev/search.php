<?php get_header(); ?>

	<div id="main" role="main">

		<?php if (have_posts()) : ?>
	
			<h2><?php _e('Search Results','tune'); ?></h2>
	
			<?php post_navigation(); ?>
	
			<?php while (have_posts()) : the_post(); ?>
	
				<article <?php post_class() ?> id="post-<?php the_ID(); ?>">
	
					<h2><?php the_title(); ?></h2>
	
					<?php posted_on(); ?>
	
					<div class="entry">
	
						<?php the_excerpt(); ?>
	
					</div>
	
				</article>
	
			<?php endwhile; ?>
	
			<?php post_navigation(); ?>
	
		<?php else : ?>
	
			<h2><?php _e('Nothing Found','tune'); ?></h2>
	
		<?php endif; ?>

	</div>

	<?php get_sidebar(); ?>

<?php get_footer(); ?>
