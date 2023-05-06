
/*-------------------------------------------
	Browser Detection
-------------------------------------------*/

// For when you get desparate.

// http://rog.ie/post/9089341529/html5boilerplatejs

// var b = document.documentElement;
// b.setAttribute('data-useragent',  navigator.userAgent);
// b.setAttribute('data-platform', navigator.platform);

// sample CSS: html[data-useragent*='Chrome/13.0'] { ... }


/*-------------------------------------------
	General Functions
-------------------------------------------*/


(function($){


	/* On Page Ready */

	$(document).ready(function (){


		/*-------------------------------------------
			Navigation Toggle
		-------------------------------------------*/


		/* Primary */


		$("nav").find(".toggle").click(function() {


			// Toggle class of "active" to <nav>


			$(this).parent().toggleClass("active");


			// Display navigation container (<ul>)


			$("nav ul").slideToggle("fast");


		});


		// Secondary


		// $(".secondary-nav").find(".toggle").click(function() {


			// Toggle class of "active" to <nav>...


			// $(this).parent("a").toggleClass("active");


		// });


		/*-------------------------------------------
			Item
		-------------------------------------------*/

		// Notes...


	});


	/* On Page Load */


	$(window).load(function() {


		/*-------------------------------------------
			Carousel
		-------------------------------------------*/

		// Displayed on home and individual
		// project pages.


		$(".flexslider").flexslider({

			animation: "slide",
			slideshowSpeed: 9000,
			useCSS: false,
			start: function(slider){

				$("body").removeClass("loading");

			}

		});


		/*-------------------------------------------
			Project Filters
		-------------------------------------------*/


		/* Nice image loading */
		
		// Not part of MixItUp, but this is a great lightweight way 
		// to gracefully fade-in images with CSS3 after they have loaded.


		function imgLoaded(img){	

			$(img).parent().addClass('loaded');

		};


		// On document ready


		$(function(){

	
			// Instantiate MixItUp

			
			$('#project-list').mixitup({

				layoutMode: 'grid', // Start in list mode (display: block) by default
				listClass: 'list', // Container class for when in list mode
				gridClass: 'grid', // Container class for when in grid mode
				effects: ['fade'], // List of effects 
				listEffects: ['fade'] // List of effects ONLY for list mode

			});
			
			$('#ToGrid').on('click',function(){

				$('.button').removeClass('active');

				$(this).addClass('active');

				$('#project-list').mixitup('toGrid');

			});
			
			// HANDLE MULTI-DIMENSIONAL CHECKBOX FILTERING
			
			/* 	
			*	The desired behaviour of multi-dimensional filtering can differ greatly 
			*	from project to project. MixItUp's built in filter button handlers are best
			*	suited to simple filter operations, so we will need to build our own handlers
			*	for this demo to achieve the precise behaviour we need.
			*/
			
			var $filters = $('#filters').find('li'),

				dimensions = {

					expertise: 'all', // Create string for first dimension

					market: 'all' // Create string for second dimension

				};
				
			// Bind checkbox click handlers:
			
			$filters.on('click',function(){

				var $t = $(this),

					dimension = $t.attr('data-dimension'),

					filter = $t.attr('data-filter'),

					filterString = dimensions[dimension];
					
				if(filter == 'all'){

					// If "all"

					if(!$t.hasClass('active')){

						// if unchecked, check "all" and uncheck all other active filters

						$t.addClass('active').siblings().removeClass('active');

						// Replace entire string with "all"

						filterString = 'all';	

					} else {

						// Uncheck

						$t.removeClass('active');

						// Emtpy string

						filterString = '';
					}

				} else {

					// Else, uncheck "all"

					$t.siblings('[data-filter="all"]').removeClass('active');

					// Remove "all" from string

					filterString = filterString.replace('all','');

					if(!$t.hasClass('active')){

						// Check checkbox

						$t.addClass('active');

						// Append filter to string

						filterString = filterString == '' ? filter : filterString+' '+filter;

					} else {

						// Uncheck

						$t.removeClass('active');

						// Remove filter and preceeding space from string with RegEx

						var re = new RegExp('(\\s|^)'+filter);

						filterString = filterString.replace(re,'');

					};

				};
				
				// Set demension with filterString

				dimensions[dimension] = filterString;
				
				// We now have two strings containing the filter arguments for each dimension:	

				console.info('dimension 1: '+dimensions.expertise);

				console.info('dimension 2: '+dimensions.market);

				/*
				*	We then send these strings to MixItUp using the filter method. We can send as
				*	many dimensions to MixitUp as we need using an array as the second argument
				*	of the "filter" method. Each dimension must be a space seperated string.
				*
				*	In this case, MixItUp will show elements using OR logic within each dimension and
				*	AND logic between dimensions. At least one dimension must pass for the element to show.
				*/
				
				$('#project-list').mixitup('filter',[dimensions.expertise, dimensions.market])			

			});

		});


		/*-------------------------------------------
			Mosaic
		-------------------------------------------*/

		// Notes...


		/*

		$(".people").gridSlider({

			width: "100%",
			align: "auto", // auto / left / right / center
			cols: 8, // 1-6, 8, 10
			rows: 3,
			col_spacing_size: 0,
			col_spacing_enable: false,
			transition: "slide",
			scroll_axis: "x",
			scroll_speed: 1500,
			autoplay_shift_dir: 1,
			image_stretch_mode: "auto",
			ctrl_arrows: true,
			ctrl_pag: false,
			ctrl_always_visible: true,
			hide_grid_cell_overflow: true

		});
		
		*/


		/*-------------------------------------------
			Media Query Matches
		-------------------------------------------*/

		// Notes...


		/* "Back To" (on Project page) */


		enquire.register('screen and (min-width: 680px)', {

			deferSetup: true,

			match: function() {

				// Move to #main

				$("#project").find(".back-to").appendTo("#main");
			
			},
		
			unmatch: function() {
			
				// Move back to original location (#secondary)
			
				$("#project").find(".back-to").appendTo("#secondary");
			
			}
			
		});


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/

		// Displays screen size on the fly.


		var windowSize = $(window).width();

		$("#dev").find("p").text(windowSize);

		$("body").addClass("dev");


	});


	/* On Window Resize */


	$(window).resize(function() {


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/

		// Displays screen size on the fly.


		var windowSize = $(window).width();

		$("#dev").find("p").text(windowSize);


		/*-------------------------------------------
			Item
		-------------------------------------------*/

		// Notes...


	});


})(window.jQuery);