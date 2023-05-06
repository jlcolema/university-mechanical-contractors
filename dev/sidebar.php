<div id="secondary">

	<div class="secondary-nav">

		<?php $defaults = array(

			'theme_location'  => 'primary',
			'menu'            => '', 
			'container'       => '', 
			'container_class' => '', 
			'container_id'    => '',
			'menu_class'      => 'menu', 
			'menu_id'         => '',
			'echo'            => true,
			'fallback_cb'     => 'wp_page_menu',
			'before'          => '',
			'after'           => '',
			'link_before'     => '',
			'link_after'      => '',
			'items_wrap'      => '<ul>%3$s</ul>',
			'depth'           => '',
			'walker'          => ''

		); ?>

		<?php wp_nav_menu( $defaults ); ?>

	</div>

	<?php

		/* Factoid */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/factoid.php" ); ?>

</div>