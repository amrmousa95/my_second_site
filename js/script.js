/*global $, console, alert */
$(function () {
	'use strict';
	//make the header take the height of the window

	var myheader = $(".header");

	myheader.height($(window).height());

	$(window).resize(function() {
		myheader.height($(window).height());
	});

	
	// add class active to navbar
	$(".links li").click(function() {
		$(this).addClass('active').siblings().removeClass('active');
	});

	// make bxslider in center
	// $('.bxslider').each(function() {
	// 	$(this).css('paddingTop', ($(window).height() - $('.bxslider li').height()) / 2 );
	// });
	//bxslider
	$('.bxslider').bxSlider({
		pager:false
	});

	// smooth scroll

	$('.links li a').click(function () {
		$('html, body').animate({

			scrollTop: $('#' + $(this).data('value')).offset().top 

		}, 2500);
		
	});

	// Our Auto Slider
	(function autoSlider() {

		$('.slider .active').each(function() {

			if (!$(this).is(':last-child')) {

				$(this).delay(2000).fadeOut(1000, function () {

					$(this).removeClass('active').next().addClass('active').fadeIn();

					autoSlider();
				});
			}

			else {

				$(this).delay(2000).fadeOut(1000, function() {

					$(this).removeClass('active');

					$('.slider div').eq(0).addClass('active').fadeIn();
					
					autoSlider();
				});
			}
		});

	}());
//Trigger NiceScroll
	$('html').niceScroll({
		cursorcolor : '#1abc9c',
		cursorwidth : '8px',
		cursorborder: '1px solid #1abc9c'
	});

	// Trigger mixItUp
	var mixer = mixitup('.our-projects');
	var mixer = mixitup(containerEl);
	var mixer = mixitup(containerEl, {
		selectors: {
			target: '.blog-item'
		},

		animation: {
			duration: 300
		}
	});

	

	


});