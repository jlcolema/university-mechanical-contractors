	<?php
	
		/* Recent News and Blog Posts */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/recent.php" ); ?>

	<footer id="footer" role="contentinfo">

		<div class="wrap">

			<?php
			
				/* Sites */
			
			?>

			<?php if(get_field('sites_list', 'option')): ?>

				<div class="sites">

					<ul>
	 
						<?php while(has_sub_field('sites_list', 'option')): ?>
	 
						<li>
						
							<a href="http://<?php the_sub_field('site_url'); ?>"><?php the_sub_field('site_url'); ?></a>
							
						</li>
	 
						<?php endwhile; ?>
	 
					</ul>

				</div>

			<?php endif; ?>

			<?php
			
				/* Connect */
			
			?>
	
			<div class="connect">
	
				<ul>

					<li class="linkedin">
					
						<a href="<?php the_field('linkedin_url', 'option'); ?>" rel="external">LinkedIn</a>

					</li>

					<li class="twitter">
					
						<a href="<?php the_field('twitter_url', 'option'); ?>" rel="external">Twitter</a>
						
					</li>
					
				</ul>
				
			</div>

			<?php
			
				/* Copyright */
			
			?>

			<p id="copyright">&copy; <?php echo date("Y"); echo " "; bloginfo('name'); ?><span>, All rights reserved.</span></p>

		</div>

	</footer>

	<?php
	
		/* Developer Mode
		
	<div id="dev">

		<div>Dev Mode</div>

		<p>
			
			<span class="px"></span>
			
			<span class="em"></span>
			
		</p>
	
	</div>

		*/
		
	?>

	<?php wp_footer(); ?>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/matchmedia.js"></script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/picturefill.js"></script>

	<?php
	
		/* This is only needed on home, individual project and overall people pages */
		
	?>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/flexslider.js"></script>

	<?php
	
		/* This is only needed on the home and individual project pages */
		
	?>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/mixitup.js"></script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/mosaic.js"></script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/jrespond.js"></script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/enquire.js"></script>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/functions.js"></script>

	<!--

		Asynchronous google analytics; this is the official snippet.

		Replace UA-XXXXXX-XX with your site's ID and uncomment to enable.

		<script>

			var _gaq = _gaq || [];
			_gaq.push(['_setAccount', 'UA-XXXXXX-XX']);
			_gaq.push(['_trackPageview']);

			(function() {

				var ga = document.createElement('script'); ga.type = 'text/javascript'; ga.async = true;
				ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
				var s = document.getElementsByTagName('script')[0]; s.parentNode.insertBefore(ga, s);

			})();

		</script>

	-->

</body>

</html>