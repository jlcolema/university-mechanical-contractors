<?php get_header(); ?>

	<?php
	
		/* Hero */
	
	?>

	<?php if ( has_post_thumbnail()) { ?>

		<?php
		
			/* Featured Thumbnail */
			
		?>

		<div id="hero">
		
			<div class="wrap">

				<div class="hero">
			
					<span data-picture data-alt="">
	
					<?php
	
						$thumb_id = get_post_thumbnail_id();
	
						$large = wp_get_attachment_image_src($thumb_id, 'article_hero', true);
	
						$small = wp_get_attachment_image_src($thumb_id, 'image_small', true);
	
					?>

						<span data-src="<?php echo $small[0]; ?>"></span>
	
						<span data-src="<?php echo $large[0]; ?>" data-media="(min-width: 420px)"></span>
	
						<?php /*
	
						<span data-src="<?php echo $image_large[0]; ?>" data-media="(min-width: 640px)"></span>
	
						*/ ?>
	
						<!--[if (lt IE 9) & (!IEMobile)]>
	
							<span data-src="<?php echo $large[0]; ?>"></span>
	
						<![endif]-->
	
						<noscript>
						
							<img src="<?php echo $small[0]; ?>" alt="" />
	
						</noscript>
	
					</span>

				</div>

			</div>
		
		</div>
	
	<?php } ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">
		
				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
			
					<article id="post-<?php the_ID(); ?>" class="hentry">
						
						<h1><?php the_title(); ?></h1>

						<footer>

							<time datetime="<?php echo date(DATE_W3C); ?>"><?php the_time('j F Y') ?></time>

							<p class="author">by <?php the_author() ?></p>
		
						</footer>
			
						<?php the_content(); ?>
						
					</article>

					<div id="share">
					
						<h3>Share</h3>
						
						<ul>
						
							<li class="facebook">
							
								<a href="#" rel="external">Facebook</a>

							</li>
	
							<li class="twitter">
							
								<a href="#" rel="external">Twitter</a>
								
							</li>
	
							<li class="google">
							
								<a href="#" rel="external">Google Plus</a>
								
							</li>
	
							<li class="pinterest">
							
								<a href="#" rel="external">Pinterest</a>
								
							</li>
	
							<li class="email">
							
								<a href="#" rel="external">Email</a>
								
							</li>
	
						</ul>
					
					</div>

					<?php comments_template(); ?>
			
				<?php endwhile; endif; ?>
		
			</div>
		
			<?php get_sidebar(); ?>

		</div>
		
	</div>

<?php get_footer(); ?>