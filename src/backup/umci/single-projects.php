<?php get_header(); ?>

	<div id="main">

		<div>Title: <?php echo $post->post_title; ?></div>
		
		<div>Permalink: <?php echo get_permalink($post->ID); ?></div>		
		
		<div>Year completed: <?php echo get_field('year_completed', $post->ID); ?></div>
		
		<div>Description: <?php echo get_field('description', $post->ID); ?></div>
		
		<?php
		
			// thumbnail image
			$image_url = wp_get_attachment_image_src( get_field('thumbnail_image', $post->ID), 'full');
			$image_url = $image_url[0];
			
		?>
		<div>Thumbnail Image: <img src="<?php echo $image_url; ?>" alt="" /></div>	
		
		<?php
		
			// hero image
			$image_url = wp_get_attachment_image_src( get_field('hero_image', $post->ID), 'full');
			$image_url = $image_url[0];
			
		?>
		<div>Hero Image: <img src="<?php echo $image_url; ?>" alt="" /></div>
		
		<div>Expertise: 
		<?php
 
			$values = get_field('expertise', $post->ID);

			if($values) { ?>
			
				<ul>
			 
					<?php foreach($values as $value) { ?>
						
						<li><?php echo $value->post_title; ?></li>
					
					<?php } ?>
			 
				</ul>
			
			<?php } ?>
			 
		</div>
		
		<div>Core Markets: 
		<?php
 
			$values = get_field('core_markets', $post->ID);

			if($values) { ?>
			
				<ul>
			 
					<?php foreach($values as $value) { ?>
						
						<li><?php echo $value->post_title; ?></li>
					
					<?php } ?>
			 
				</ul>
			
			<?php } ?>
			 
		</div>
		
		<div>Quick Facts: 
		<?php
 
			$values = get_field('quick_facts', $post->ID);

			if(get_field('quick_facts', $post->ID)): ?>
			 
				<ul>
			 
				<?php while(has_sub_field('quick_facts', $post->ID)): ?>
			 
					<li><?php the_sub_field('fact'); ?></li>
			 
				<?php endwhile; ?>
			 
				</ul>
			 
			<?php endif; ?>
			 
		</div>
		
		<div>Features: 
		<?php
 
			$values = get_field('features', $post->ID);

			if(get_field('features', $post->ID)): ?>
			 
				<ul>
			 
				<?php while(has_sub_field('features', $post->ID)): ?>
			 
					<li><?php the_sub_field('feature'); ?></li>
			 
				<?php endwhile; ?>
			 
				</ul>
			 
			<?php endif; ?>
			 
		</div>
		
		<div>Challenges/Lessons Learned: 
		<?php
 
			$values = get_field('challenges', $post->ID);

			if(get_field('challenges', $post->ID)): ?>
			 
				<ul>
			 
				<?php while(has_sub_field('challenges', $post->ID)): ?>
			 
					<li><?php the_sub_field('challenge'); ?></li>
			 
				<?php endwhile; ?>
			 
				</ul>
			 
			<?php endif; ?>
			 
		</div>

<?php get_footer(); ?>
