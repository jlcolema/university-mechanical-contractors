	<?php
	
		/* get projects */
		$args = array(
			'numberposts'=>1,
			'post_type'=>'factoids',
			'orderby'=>'rand',
			'order'=>'ASC',
			'post_status'=>'publish'
		);
		$items = get_posts($args);
	
	?>
	
	<ul>
	
		<?php foreach($items as $item): ?>
		
			<li>	
				<?php echo wpautop(get_field('copy', $item->ID)); ?>
			</li>
				
		<?php endforeach; ?>
	
	</ul>