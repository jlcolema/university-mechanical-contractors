<div id="recent">

	<div class="wrap">

		<?php
		
			/* Recent News Articles */
			
		?>

		<div class="news">

			<div class="section-header">

				<h2>UMC News</h2>

				<div class="more">

					<a href="/about/news/">All News</a>

				</div>

			</div>

			<?php 

				$args = array(
				
					'numberposts'	=> 3,
					'post_status'	=> "publish",
					'post_type'	=> "news",
					'orderby'		=> "post_date"

				);
				
				$postslist = get_posts( $args );

				foreach ($postslist as $post) : setup_postdata($post); ?>

				<article class="summary">

					<?php if ( has_post_thumbnail()) { ?>

						<?php
						
							/* Thumbnail */
							
						?>

						<?php echo get_the_post_thumbnail($page->ID, "thumbnail"); ?>

					<?php } else { ?>

						<?php
						
							/* Fallback if no thumbnail is available. */
							
						?>

						<span data-picture data-alt="<?php the_title(); ?>">

							<span data-src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.svg"></span>
	
							<!--[if (lt IE 9) & (!IEMobile)]>
						
								<span data-src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.jpg"></span>
						
							<![endif]-->
						
							<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
						
							<noscript>
						
								<img src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.jpg" alt="<?php the_title(); ?>">
						
							</noscript>
						
						</span>
					
					<?php } ?>

					<h1>

						<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
						
					</h1>

					<footer>

						<time datetime="<?php echo date(DATE_W3C); ?>"><?php the_time('j F Y') ?>

					</footer>

					<div class="excerpt">

						<?php the_excerpt(); ?>

					</div>

				</article>

			<?php endforeach; ?>

		</div>

		<?php
		
			/* Recent Blog Posts */
			
		?>

		<div class="blog">

			<div class="section-header">

				<h2>UMC Blog</h2>

				<div class="more">

					<a href="/about/blog/">Entire Blog</a>

				</div>

			</div>

			<?php 

				$args = array(
				
					'numberposts'	=> 3,
					'post_status'	=> "publish",
					'post_type'	=> "post",
					'orderby'		=> "post_date"

				);
				
				$postslist = get_posts( $args );

				foreach ($postslist as $post) : setup_postdata($post); ?>

				<article class="summary">

					<?php if ( has_post_thumbnail()) { ?>

						<?php
						
							/* Featured Thumbnail */
							
						?>

						<?php echo get_the_post_thumbnail($page->ID, "thumbnail"); ?>

					<?php } else { ?>

						<?php
						
							/* Fallback if no thumbnail is available. */
							
						?>

						<span data-picture data-alt="<?php the_title(); ?>">

							<span data-src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.svg"></span>
	
							<!--[if (lt IE 9) & (!IEMobile)]>
						
								<span data-src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.jpg"></span>
						
							<![endif]-->
						
							<!-- Fallback content for non-JS browsers. Same img src as the initial, unqualified source element. -->
						
							<noscript>
						
								<img src="<?php bloginfo('template_directory'); ?>/a/img/thumbnail-placeholder.jpg" alt="<?php the_title(); ?>">
						
							</noscript>
						
						</span>
					
					<?php } ?>

					<h1>
					
						<a href="<?php the_permalink() ?>"><?php the_title(); ?></a>
						
					</h1>

					<footer>

						<p class="author">by <?php the_author() ?></p>

					</footer>

					<div class="excerpt">

						<?php the_excerpt(); ?>

					</div>

				</article>

			<?php endforeach; ?>

		</div>

	</div>

</div>