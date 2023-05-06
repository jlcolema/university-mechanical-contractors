		</div>

		<footer id="footer">

			<?php

				if ( ! is_404() )
					dynamic_sidebar('Footer Widgets');

			?>

			<p id="copyright" class="source-org vcard copyright"><small>&copy;<?php echo date("Y"); echo " "; bloginfo('name'); ?></small></p>

		</footer>

	</div>

	<?php wp_footer(); ?>

	<script src="<?php bloginfo('template_directory'); ?>/a/js/functions.js"></script>

</body>

</html>