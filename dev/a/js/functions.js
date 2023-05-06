
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


		$(".secondary-nav").find('.sub-menu .sub-menu').before('<div class="toggle">Menu</div>');

		$(".secondary-nav").find('li a').mouseenter(function() {
		
			$(this).parent().toggleClass("hover");
		
		});

		$(".secondary-nav").find('li a').mouseleave(function() {
		
			$(this).parent().toggleClass("hover");
		
		});

		$(".secondary-nav").find(".toggle").click(function() {

			$(this).parent().toggleClass("open");

			// Display subnav container (<ul>)

			$(this).next().slideToggle("fast");

		});

		$(".secondary-nav").find(".toggle").mouseenter(function() {

			$(this).addClass("hover");

			$(this).prev().addClass("hover");

			$(this).parent().addClass("hover");

		});

		$(".secondary-nav").find(".toggle").mouseleave(function() {

			$(this).removeClass("hover");

			$(this).prev().removeClass("hover");

			$(this).parent().removeClass("hover");

		});


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/

		// Displays screen size on the fly.


		// var windowSize = $(window).width();

		// $("#dev").find("p").text(windowSize);

		// $("body").addClass("dev");


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


			if(window.location.href === "http://umc.tunedev.com/projects/#pre-construction") {
		

				$('#project-list').mixitup({
	
					layoutMode: 'grid', // Start in list mode (display: block) by default
					gridClass: 'grid', // Container class for when in grid mode
					effects: ['fade'], // List of effects
					showOnLoad: 'pre-construction'
	
				});

		
			} else if(window.location.href === "http://umc.tunedev.com/projects/#buildconstruction") {

		
				$('#project-list').mixitup({
	
					layoutMode: 'grid', // Start in list mode (display: block) by default
					gridClass: 'grid', // Container class for when in grid mode
					effects: ['fade'], // List of effects
					showOnLoad: 'buildconstruction'
	
				});

		
			} else {


				$('#project-list').mixitup({
	
					layoutMode: 'grid', // Start in list mode (display: block) by default
					gridClass: 'grid', // Container class for when in grid mode
					effects: ['fade'], // List of effects
					showOnLoad: 'all'
	
				});
		
			}

			
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


		// Respond


		/*

		var jRes = jRespond([
		
			{
		
				label: 'two-column',
				enter: 0,
				exit: 479
		
			},{
		
				label: 'three-column',
				enter: 480,
				exit: 639
		
			},{
		
				label: 'four-column',
				enter: 640,
				exit: 979
			
			},{
			
				label: 'eight-column',
				enter: 980,
				exit: 10000
				
			}
		
		]);
		
		
		jRes.addFunc([
		
			{
		
				breakpoint: 'two-column',
		
				enter: function() {
		
					var $person = $(".people .person");
			
					for(var i = 0; i < $person.length; i += 6) {
					
						$person.slice(i, i + 6).wrapAll('<div class="people-group"></div>');
					
					}

				},
		
				exit: function() {
		
					// Stuff...
		
				}
		
			},{
		
				breakpoint: 'three-column',
		
				enter: function() {
		
					var $person = $(".people .person");
			
					for(var i = 0; i < $person.length; i += 15) {
					
						$person.slice(i, i + 15).wrapAll('<div class="people-group"></div>');
					
					}

				},
		
				exit: function() {
		
					// Stuff...
		
				}
		
			},{
			
				breakpoint: 'four-column',
		
				enter: function() {
		
					var $person = $(".people .person");
			
					for(var i = 0; i < $person.length; i += 20) {
					
						$person.slice(i, i + 20).wrapAll('<div class="people-group"></div>');
					
					}

				},
		
				exit: function() {
		
					// Stuff...
		
				}
			
			},{
		
				breakpoint: 'eight-column',
		
				enter: function() {
		
					var $person = $(".people .person");
			
					for(var i = 0; i < $person.length; i += 24) {
					
						$person.slice(i, i + 24).wrapAll('<div class="people-group"></div>');
					
					}

				},
		
				exit: function() {
		
					// Stuff...

				}
		
			},{
			
				breakpoint: '*',
				
				enter: function() {

					// After wrap of group, begin building carousel
				
					$(".people-flexslider").flexslider({
				
						animation: "slide",
						slideshow: false,
						slideshowSpeed: 9000,
						useCSS: false,
						controlNav: false,
						smoothHeight: true,
						selector: ".people-slides > .people-group",
						start: function(slider){
				
							$("body").removeClass("loading");
				
						}
				
					});
				
				},
				
				exit: function() {
				
					$(".person").unwrap();

				}

			}

		]); */


		/*-------------------------------------------
			Mosaic
		-------------------------------------------*/

		// Notes...


		$(".people").gridSlider({

			width: "100%",
			align: "auto", // auto / left / right / center
			cols: 8, // 1-6, 8, 10
			rows: 3,
			col_spacing_size: 0,
			col_spacing_enable: false,
			transition: "slide",
			scroll_axis: "x",
			scroll_speed: 500,
			autoplay_shift_dir: 1,
			image_stretch_mode: "auto",
			ctrl_arrows: true,
			ctrl_pag: false,
			ctrl_always_visible: true,
			hide_grid_cell_overflow: true

		});


		var newHash     = '',

		$heroImage = $('#hero-image');

		$mainContent = $('#profile').find('.wrap');

		$('.person').delegate('a', 'click', function() {

			window.location.hash = $(this).attr('href');

			var heroHeight = $("#mosaic").height();

			$("#hero-image").show();

			// $("#hero-image").css("height", heroHeight);

			return false;

		});
		
		// Not all browsers support hashchange

		// For older browser support: http://benalman.com/projects/jquery-hashchange-plugin/

		$(window).bind('hashchange', function() {

			newHash = window.location.hash.substr(1);

			$(".people").addClass("active");

			$(".ether-ctrl-wrap").addClass("active");

			$mainContent.load(newHash + " .profile-wrap > *");

			$heroImage.load(newHash + " .hero > *");

		});
		
		if(window.location.hash !== '') {

			newHash = window.location.hash.substr(1);

			$(".people").addClass("active");

			$(".ether-ctrl-wrap").addClass("active");

			$mainContent.load(newHash + " .profile-wrap > *");

			$heroImage.load(newHash + " .hero > *");

			var heroHeight = $("#mosaic").height();

			$("#hero-image").show();
		};
		
		

		$(document).on('click','.back-to a', function(e) {

			history.pushState("", document.title, window.location.pathname + window.location.search);

			$(".people").removeClass("active");

			$(".ether-ctrl-wrap").removeClass("active");

			$(".hero-image-wrap").remove();

			$("#hero-image").hide();

			$(".profile").hide();

			return false;

		});


		/*-------------------------------------------
			Media Query Matches
		-------------------------------------------*/

		// Notes...


		/* "Back To" (on Project page) */


		enquire.register('screen and (min-width: 680px)', {

			deferSetup: true,

			match: function() {

				// Move to #main

				$(".single-projects").find(".back-to").appendTo("#main");
			
			},
		
			unmatch: function() {
			
				// Move back to original location (#secondary)
			
				$(".single-projects").find(".back-to").appendTo("#secondary");
			
			}
			
		});


	});


	/* On Window Resize */


	$(window).resize(function() {


		/*-------------------------------------------
			Screen Size
		-------------------------------------------*/

		// Displays screen size on the fly.


		// var windowSize = $(window).width();

		// $("#dev").find("p").text(windowSize);


		/*-------------------------------------------
			Hero Image
		-------------------------------------------*/

		// Notes...


		// var heroHeight = $("#mosaic").height();

		// $("#hero-image img").css("height", heroHeight);


	});
		
	


})(window.jQuery);