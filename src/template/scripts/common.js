$(document).ready(function($) {

	$('.input_phone .input__wrap').mask('+7 (000) 000-00-00');

	var reviewsList = $('.reviews__list');
	reviewsList.slick({
		slidesToShow: 2,
		adaptiveHeight: false,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		}]
	})

	var carouselList = $('.carousel__list');
	carouselList.slick({
		slidesToShow: 4,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 3,
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 2,
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}}, {
		}]
	})

	var interestedList = $('.interested__list');
	interestedList.slick({
		slidesToShow: 5,
		responsive: [{
			breakpoint: 1220,
			settings: {
				slidesToShow: 4,
				adaptiveHeight: true
			}}, {
			breakpoint: 992,
			settings: {
				slidesToShow: 3,
				adaptiveHeight: true
			}}, {
			breakpoint: 767,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		}]
	})
	var partnersList = $('.partners__list'),
			articlesList = $('.articles__list'),
			certificatesList = $('.certificates__list');

	  settings_slider = {
	    dots: false,
	    // more settings
	  }
	  slick_on_mobile( articlesList, settings_slider);
	  slick_on_mobile( partnersList, settings_slider);
	  slick_on_mobile( certificatesList, settings_slider);

	// slick on mobile
	  function slick_on_mobile(slider, settings){
	    $(window).on('load resize', function() {
	      if ($(window).width() > 767) {
	        if (slider.hasClass('slick-initialized')) {
	          slider.slick('unslick');
	        }
	        return
	      }
	      if (!slider.hasClass('slick-initialized')) {
	        return slider.slick(settings);
	      }
	    });
	};

	function valueElementForm(nameElement, nameBlock) {
		var newNameElement = '.' + nameElement;
			element = $(newNameElement);
		element.each(function(index, el) {
			var elementInput = $(this).find(nameBlock),
				elementLabel = $(this).find($('label')),
				elementValue = index + 1;
			elementInput.attr('id', nameElement + '-' + elementValue);
			elementLabel.attr('for', nameElement + '-' + elementValue);
		});
		
	}
	valueElementForm('checkbox', 'input');
	valueElementForm('input_label', 'input');
	valueElementForm('radio', 'input');
	
	$('.select select').selectmenu()

	$('.inrement__btn').click(function(event) {
		var input = $(this).siblings('.inrement__input').find('input'),
				inputVal = Number(input.val());

		console.log(inputVal);

		if(inputVal < 100 && inputVal > 0) {
			if ($(this).hasClass('inrement_btn-plus')) {
				if (inputVal < 99) {
					input.val(inputVal+1);
				}
			} else if($(this).hasClass('inrement_btn-minus')){
				if (inputVal > 1) {
					input.val(inputVal-1);
				}
			}
		}
	});

	$('.order__tabs').tabs();

	var dateInput = $('.input_date input');
	dateInput.datepicker({
		firstDay: 0,
		dateFormat: 'dd . mm . yy',
		dayNamesMin: ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'],
		monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь']
	});
	dateInput.mask('00 . 00 . 0000');

	var orderLink = $('.order__map-title');
	orderLink.click(function(event) {
		var textHide = $(this).find('.text-hide'),
				textShow = $(this).find('.text-show'),
				map = $(this).next('.order__map-wrap');
		textHide.toggle();
		textShow.toggle();
		map.slideToggle(300);
	});

	var hum = $('.hum'),
			humClass = 'hum_toggle',
			nav = $('.nav'),
			navClass = 'nav_toggle';

	hum.click(function(event) {
		hum.toggleClass(humClass);
		nav.toggleClass(navClass);
	});


});
