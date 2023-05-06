<?php

/*

	Template Name: Contact
	
*/
	
?>

<?php get_header(); ?>

	<div id="content">

		<div class="wrap">

			<h1 class="page-title"><?php the_title(); ?></h1>

			<div id="main" role="main">

				<?php if (have_posts()) : while (have_posts()) : the_post(); ?>
		
					<?php the_content(); ?>

				<?php endwhile; endif; ?>

				<div class="form">

					<?php gravity_form(

						// $id_or_title

						"Contact",
						
						// $display_title
						
						false,
						
						// $display_description
						
						false,
						
						// $display inactive
						
						false,
						
						// $field_values
						
						null,
						
						// $ajax
						
						false,
						
						// $tabindex
						
						1
						
					); ?>
				
				</div>
		
			</div>

			<div id="secondary">

				<div class="contacts">
				
					<ul>

						<li><strong>24-hour Emergency Contact Phone:</strong> <?php the_field('emergency_phone', 'option'); ?></li>

						<li>
						
							<strong>Street Address:</strong>

							<div class="vcard">

								<div class="adr">

									<div class="street-address"><?php the_field('street_address', 'option'); ?></div>

									<span class="locality"><?php the_field('street_address_city', 'option'); ?></span>,
									
									<span class="region"><?php the_field('street_address_state', 'option'); ?></span>
									
									<span class="postal-code"><?php the_field('street_address_zip_code', 'option'); ?></span>

								</div>

							</div>
							
						</li>

						<li>
						
							<strong>Mailing Address:</strong>

							<div class="vcard">
							
								<div class="adr">
							
									<div class="street-address"><?php the_field('mailing_address_street_po', 'option'); ?></div>

									<span class="locality"><?php the_field('mailing_address_city', 'option'); ?></span>,
									
									<span class="region"><?php the_field('mailing_address_state', 'option'); ?></span>
									
									<span class="postal-code"><?php the_field('mailing_address_zip_code', 'option'); ?></span>

								</div>

							</div>
							
						</li>

						<li><strong>Main Phone:</strong> <?php the_field('main_phone', 'option'); ?></li>

						<li><strong>Service Phone:</strong> <?php the_field('service_phone', 'option'); ?></li>

						<li><strong>Fax:</strong> <?php the_field('fax', 'option'); ?></li>

						<li><strong>Bid Fax:</strong> <?php the_field('bid_fax', 'option'); ?></li>

					</ul>
				
				</div>
			
			</div>

		</div>

	</div>

<?php get_footer(); ?>