<?php get_header(); ?>

	<div id="content">

		<div class="wrap">

			<div id="main" role="main">

				<h1><?php the_title(); ?></h1>

				<div class="description">

					<h2>Job Description:</h2>

					<div>

						<?php the_content(); ?>

					</div>

				</div>

				<div class="responsibilities">
				
					<h2>Essential Functions / Major Responsibilities:</h2>

					<?php if(get_field('job_responsibilities')): ?>
 
					<ul>

						<?php while(has_sub_field('job_responsibilities')): ?>

						<li><?php the_sub_field('job_responsibility'); ?></li>

						<?php endwhile; ?>

					</ul>

					<?php endif; ?>
				
				</div>

				<div class="skills">
				
					<h2>Specific Job Skills:</h2>

					<?php if(get_field('job_skills')): ?>
 
					<ul>

						<?php while(has_sub_field('job_skills')): ?>

						<li><?php the_sub_field('job_skill'); ?></li>

						<?php endwhile; ?>

					</ul>

					<?php endif; ?>
				
				</div>

				<div class="experience">
				
					<h2>Education and/or Experience:</h2>

					<?php if(get_field('job_experiences')): ?>
 
					<ul>

						<?php while(has_sub_field('job_experiences')): ?>

						<li><?php the_sub_field('job_experience'); ?></li>

						<?php endwhile; ?>

					</ul>

					<?php endif; ?>

				</div>

				<div class="supervisory">
				
					<h2>Supervisory Responsibilities:</h2>

					<?php if(get_field('job_supervisories')): ?>
 
					<ul>

						<?php while(has_sub_field('job_supervisories')): ?>

						<li><?php the_sub_field('job_supervisory'); ?></li>

						<?php endwhile; ?>

					</ul>

					<?php endif; ?>

				</div>

				<div class="conditions">
				
					<h2>Job Conditions:</h2>

					<div>

						<?php the_field('job_conditions'); ?>
						
					</div>
				
				</div>

			</div>

			<?php get_sidebar(); ?>

		</div>

	</div>

<?php get_footer(); ?>