(function ($) {

$('.mainmenu ul li').addClass('nav-item');
$('.mainmenu ul li a').addClass('nav-link');
$('.mainmenu ul.sub-menu li a').removeClass('nav-link');
$('.mainmenu ul.sub-menu li').removeClass('nav-item');

	$('.owl-carousel-banner').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: true,
		responsiveClass:true,
		responsive:{
			1366:{
				items:1,
			},
			1024:{
				items:1,
			},
			640:{
				items:1,
			},
			0:{
				items:1,
			}
		}
	})

	$('.owl-carousel-blog').owlCarousel({
		loop:true,
		lazyLoad:true,
		margin:0,
		autoplay:true,
		autoplayTimeout:10000,
		smartSpeed: 1000,		
		slideSpeed : 10000,
		touchDrag  : true,
		mouseDrag  : true,
		dots: false,
		nav: false,
		responsiveClass:true,
		responsive:{
			1366:{
				items:3,
			},
			1024:{
				items:3,
			},
			768:{
				items:2,
			},
			640:{
				items:1,
			},
			0:{
				items:1,
			}
		}
	})

	
})(jQuery);
