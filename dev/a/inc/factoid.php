<?php

	/* Get a Random Factoid */

	$args = array(

		'numberposts'=>1,
		'post_type'=>'factoids',
		'orderby'=>'rand',
		'order'=>'ASC',
		'post_status'=>'publish'

	);

	$items = get_posts($args);

?>

<div class="factoid">

	<?php foreach($items as $item): ?>
	
	<?php echo wpautop(get_field('copy', $item->ID)); ?>
			
	<?php endforeach; ?>

</div>