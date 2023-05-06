<?php get_header(); ?>

	<?php
	
		/* Samples */
	
	?>

	<?php include (TEMPLATEPATH . "/a/inc/samples.php" ); ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<h1><?php the_title(); ?></h1>

				<div class="description">

					<h2>Description:</h2>

					<div>

						<?php the_content(); ?>

					</div>

				</div>

				<?php if(get_field('challenges')): ?>

				<div class="challenges">

					<h2>Challenges / Lessons Learned:</h2>

					<ul>

						<?php while(has_sub_field('challenges')): ?>

							<li><?php the_sub_field('challenge'); ?></li>

						<?php endwhile; ?>

					</ul>

				</div>

				<?php endif; ?>

			</div>

			<div id="secondary">

				<div class="meta">

					<div class="complete">

						<h2>Year complete: <?php the_field('year_completed'); ?></h2>

					</div>

					<?php if(get_field('quick_facts')): ?>

					<div class="facts">

						<h3>Quick Facts</h3>

						<ul>
 
							<?php while(has_sub_field('quick_facts')): ?>
 
								<li><?php the_sub_field('fact'); ?></li>
 
							<?php endwhile; ?>
 
						</ul>

					</div>

					<?php endif; ?>

					<?php if(get_field('features')): ?>

					<div class="facts">

						<h3>Features</h3>

						<ul>
 
							<?php while(has_sub_field('features')): ?>
 
								<li><?php the_sub_field('feature'); ?></li>
 
							<?php endwhile; ?>
 
						</ul>

					</div>

					<?php endif; ?>

				</div>

				<div class="back-to">

					<a href="/projects/"><span>&larr;</span> Back to Projects</a>

				</div>

			</div>

		</div>

	</div>

<?php get_footer(); ?>