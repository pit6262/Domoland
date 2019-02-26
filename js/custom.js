$(window).on('load', function(){
	if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
		$('html').addClass('ios');
	};
	$('body').removeClass('loaded');
});

$(function(){


	/* ---------------------------------------------- /*
	 * Styler
	/* ---------------------------------------------- */
    if($('.styler').length){
        $('.styler').styler();
    };
    // $("body").niceScroll({
    //     cursorcolor: '#C4C4C4',
    //     cursorwidth: '14px',
    //     cursorborder: '',
    //     cursorborderradius: '2px',
    //     autohidemode: false,
    //     background: '#dadada'

    // });

    $('[data-popup]').click(function(){
        var dataPopup = $(this).data('popup')
       
        $(' #' + dataPopup +'').addClass('active')
        setTimeout(function() {
            $(' #' + dataPopup +'').addClass('opened')
        }, 200)
        
        $('html').addClass('b-fixed')
        
        $('.overlay').show()
        return false;
    });

    $('.sp-slose').click(function(){
        $(this).parents('.simple-popup').removeClass('opened')
       
        setTimeout(function() {
            $('.simple-popup').removeClass('active')
        }, 100)

        $('html').removeClass('b-fixed')
        $('.overlay').hide()
        return false;
    });

    $('.js-remove').click(function(){
        $(this).parents('.checkout-cart-list__item').fadeOut(1000, function(){$(this).remove()});
        return false;
    });

    $('.boxes-number:not(.flex) .number-active').on('click', function(){
    	$('.number-list').slideDown(200);
        $(this).addClass('active')
        $('.d-navbar-mobile').removeClass('open')
        $('html').removeClass('b-fixed')
        $('.overlay').hide();
    })

    $('.boxes-number:not(.flex) .number-list__link').on('click', function(){
    	var NumberText = $(this).html();
    	$('.number-active').html(NumberText).removeClass('active')
    	$(this).parents('.number-list').slideUp(200);
    	
    })

    $(document).click( function(event){
      if( $(event.target).closest(".boxes-number:not(.flex)").length ) 
        return;
      $(".number-list").slideUp(200);
      $('.number-active').removeClass('active')
      
      event.stopPropagation();
    });

    $('.dnm-drop > a').on('click', function(){
        var tye = $(this).parent('.dnm-drop.open')
        $('.dnm-drop').not(tye).removeClass('open')
        
        $(this).parent().toggleClass('open')
        return false;
    })

    $('.open-menu').on('click', function(){
        $('.d-navbar-mobile').addClass('open');
        $('html').addClass('b-fixed')
        $('.overlay').show();
        $('.number-list').slideUp(200);
        return false;
    })

    $('.open-catalog').on('click', function(){
        $('.d-wp-main').slideToggle(200);
        $(this).toggleClass('active')
        $('.number-list').slideUp(200);
        return false;
    })

     $(document).click( function(event){
      if( $(event.target).closest(".d-wp-main__sidebar").length ) 
        return;
      $(".d-wp-main.hidden").slideUp(200);
      $('.open-catalog').removeClass('active')
      
      event.stopPropagation();
    });

   


    $('.d-dropdown').on('mouseover', function(){
        $('.overlay').show();
        
        return false;
    })

    $('.d-dropdown').on('mouseout ', function(){
        $('.overlay').hide();
        

        return false;
    })


    $('.more-items').on('click', function(){
        namebl = $(this).find('span').html();

        $(this).toggleClass('active').parents('.d-dropdown-list').find('.hid-items').slideToggle(0)
        if(namebl == 'Ещё'){
            $(this).find('span').html('Cвернуть');
        }else{
           $(this).find('span').html('Ещё');
        }
        return false;
    })

    
    $('.d-navbar-mobile-close').on('click', function(){
        $('.d-navbar-mobile').removeClass('open');
        $('html').removeClass('b-fixed')
        $('.overlay').hide();
        return false;
    })

    $('.tabs-selected').on('click', function(){
       $(this).toggleClass('active').parent().find('.nav-tab-list').toggleClass('open')
        return false;
    })

    $('.sort__item').on('click', function(){
        $('.sort__item').removeClass('active')
        $(this).addClass('active')
        return false;
    })

    $('.drop-mobile__toggle').on('click', function(){
        var toggleTthis = $(this)
        var toggleTthisParents = $(this).parents('.drop-mobile')
        $('.drop-mobile').not(toggleTthisParents).removeClass('open')
        $('.drop-mobile__toggle').not(toggleTthis).removeClass('active')
        $(this).toggleClass('active')
        $(this).parents('.drop-mobile').toggleClass('open')
 
        return false;
    })

    $('.d-text__link').on('click', function(){
        $(this).hide()
        $(this).parents('.d-text').find('.d-text__content').addClass('open')
 
        return false;
    })
    $('.delivery-column .column').on('click', function(){
        $(this).addClass('open')
        $(this).parent().addClass('selected')
        $('.switch-all').show()
        return false;
    })
     $('.switch-all').on('click', function(){
        $(this).hide()
        $('.delivery-column .column').removeClass('open')
        $('.delivery-column').removeClass('selected')
        return false;
    })

    $('.brands-alphabet__item:not(.disabled)').on('click', function(){
        var dataId = $(this).data('id')
        if(dataId == 'all') {
            $('.brands-column').removeClass('selected').show();
            $('.brands-alphabet__item').removeClass('active')
            $(this).addClass('active');
        } else {
            $('.brands-alphabet__item').removeClass('active')
            $(this).addClass('active');
            $('.brands-column').removeClass('selected').hide();

            $(".brands-column[data-id=" + dataId + "]").addClass('selected')
        }   

        return false;
    })

    $('.brands-category-list__link').on('click', function(){
        
        $('.brands-category-list__link').removeClass('active')
        $(this).addClass('active');
       

        return false;
    })

    $('.open-comment').on('click', function(){
        $('.b-comment').slideToggle(200)
        
        return false;
    })

    if($('.cd-slider').length){
        $('.cd-slider').magnificPopup({
            delegate: 'a',
            type: 'image',
            mainClass: 'mfp-img-mobile',
            gallery: {
                enabled: true,
                navigateByImgClick: true,
                preload: [0,1] // Will preload 0 - before current, and 1 after the current image
            },
            zoom: {
                enabled: true,
                duration: 300, // don't foget to change the duration also in CSS
                opener: function(element) {
                    return element.find('img');
                }
            }

        });

    }


   

    $('.overlay').on('click', function(){
        $('.d-navbar-mobile').removeClass('open')
        $('html').removeClass('b-fixed')
        $('.simple-popup').removeClass('opened')
        setTimeout(function() {
            
            $('.simple-popup').removeClass('active')
        }, 100)
        $(this).hide();
        return false;
    })
    
    if($('.cd-slider').length){
        $('.cd-slider').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: true,
            adaptiveHeight: true,
            asNavFor: '.cd-slider-nav',
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
            responsive: [

                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        dots: true,
                    }
                },
            ]
        });
        $('.cd-slider-nav').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            asNavFor: '.cd-slider',
           
            focusOnSelect: true,
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
             responsive: [

                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 2
                    }
                },
            ]
        });
    };

    if($('.banner-slider').length){
        $('.banner-slider').slick({
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
        	autoplay: true,
        });
    };

    if($('.sd-product-slider').length){
        $sd_product_slider = $('.sd-product-slider');
          settings = {
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        slidesToShow: 1,
                        arrows: false,

                    }
                },
            ]
          }
          $sd_product_slider.slick(settings);

          // reslick only if it's not slick()
          $(window).on('resize load', function() {
            if ($(window).innerWidth() > 1025) {
              if ($sd_product_slider.hasClass('slick-initialized')) {
                $sd_product_slider.slick('unslick');
              }
              return
            }

            if (!$sd_product_slider.hasClass('slick-initialized')) {
              return $sd_product_slider.slick(settings);
            }
          });
        
    };

    if($('.product-slider').length){
        $('.product-slider').slick({
        	slidesToShow: 4,
        	slidesToScroll: 1,
        	prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        	nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
        	responsive: [
                {
                    breakpoint: 1251,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        arrows: false,
                        centerMode: true,
                    }
                },

                
            ]
        });
    };
    if($('.product-slider-colmn3').length){
        $('.product-slider-colmn3').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1251,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        arrows: false,
                        centerMode: true,
                    }
                },

                
            ]
        });
    };
    if($('.brands-slider').length){
        $('.brands-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            autoplay: true,
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
            responsive: [

                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 3
                    }
                },

                {
                    breakpoint: 768,
                    settings: {
                        variableWidth: true,
                        arrows: false,
                        centerMode: true,
                        
                    }
                },

            ]
        });
    };

    if($('.box-article').length){
        $('.box-article').slick({
            slidesToShow: 3,
            slidesToScroll: 1,
            arrows: false,
            prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
            nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
            responsive: [
                {
                    breakpoint: 1251,
                    settings: {
                        slidesToShow: 3,
                        variableWidth: true,
                    }
                },
                {
                    breakpoint: 768,
                    settings: {
                        arrows: false,
                        variableWidth: true,
                        
                    }
                },
                {
                    breakpoint: 381,
                    settings: {
                        arrows: true,
                        variableWidth: false,
                        slidesToShow: 1
                        
                    }
                },
            ]
        });
    };

    if($('.popular-category').length){
     $slick_slider = $('.popular-category');
      settings = {
        slidesToShow: 2,
        slidesToScroll: 1,
        prevArrow: '<button class="slick-arrow slick-prev"><svg class="icon icon-arrow-left"><use xlink:href="#icon-arrow-left"></use></svg></button>',
        nextArrow: '<button class="slick-arrow slick-next"><svg class="icon icon-arrow-right"><use xlink:href="#icon-arrow-right"></use></svg></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    variableWidth: true,
                    arrows: false,
                    
                }
            },
        ]
      }
      $slick_slider.slick(settings);

      // reslick only if it's not slick()
      $(window).on('resize load', function() {
        if ($(window).innerWidth() > 900) {
          if ($slick_slider.hasClass('slick-initialized')) {
            $slick_slider.slick('unslick');
          }
          return
        }

        if (!$slick_slider.hasClass('slick-initialized')) {
          return $slick_slider.slick(settings);
        }
      });
    }



	/* ---------------------------------------------- /*
	 * Tabs
	/* ---------------------------------------------- */
	$('.tabs a:not(.disabled)').click(function(){
        var htmltext = $(this).html();
        $(this).parents('.tab-wrap').find('.tabs-selected').html(htmltext)
        $(this).parents('.tabs').removeClass('open')
        $('.tabs-selected').removeClass('active')
		$(this).parents('.tab-wrap').find('.tab-cont').addClass('hide');
		$(this).parent().siblings().removeClass('active');
		var id = $(this).attr('href');
		$(id).removeClass('hide');
		$(this).parent().addClass('active');
        $(this).parents('.tab-wrap').find('.slick-slider').slick('setPosition');
        
		return false
	});

    $('.checkout-steps li:not(.nextform)').click(function(){
        $(this).parents('.checkout-steps-tabs').find('.checkout__column').addClass('hidden');
        $(this).siblings().removeClass('active');
        var id = $(this).find('a').attr('href');
        $(id).removeClass('hidden');
        $(this).addClass('active');
        return false
    });

    $('.fl-wrap__head').on('click', function(){
        var el = $(this);
        el.next('.fl-wrap__body').slideToggle(200);
        el.toggleClass('open');
        return false;
    });

    $('.accordion__head').on('click', function(){
        var el = $(this);
        var answer = $(this).next();
        $('.accordion__head').not(el).removeClass('open')
        $('.accordion__body').not(answer).slideUp(200)
        el.next('.accordion__body').slideToggle(200);
        el.toggleClass('open');
        return false;
    });

    $( "#slider-range" ).slider({
        range: true,
        min: 20,
        max: 20000,
        values: [ 20, 12258 ],
        slide: function( event, ui ) {
            $( "#f-price1" ).val( ui.values[ 0 ] );
            $( "#f-price2" ).val( ui.values[ 1 ] );

        }
    });
    $("#f-price1").on('change keyup paste', function() {
        $("#slider-range").slider('values',0,$(this).val());
    });
    $("#f-price2").on('change keyup paste', function() {
        $("#slider-range").slider('values',1,$(this).val());
    });

    $('a.anchor').bind('click.smoothscroll',function () {
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body,html').animate({scrollTop: bl_top}, 900);
        return false;
    });

    $('.delivery-column .column').bind('click.smoothscroll',function () {
            var id = $(this).attr('id');
  
            $('html,body').animate({scrollTop: $("#"+id).offset().top - 100},'800');
        return false;
    });
    $('.reviews-anchor').bind('click.smoothscroll',function () {
        $('.tabs').find('.nav-tab-list__item').removeClass('active');
        $('.reviews-link').parent().addClass('active');
        $('.boxes-tab-cont').find('.tab-cont').addClass('hide')
        $('.boxes-tab-cont').find('#tab_3').removeClass('hide')
        var target = $(this).attr('href'),
            bl_top = $(target).offset().top;
        $('body,html').animate({scrollTop: bl_top}, 900);
        return false;
    });
    


    $(".up").removeClass("fixed");
    $(window).on('scroll load', function(){
        if ($(this).scrollTop() > 500) {
            $(".up").addClass("fixed");
        } else {
             $(".up").removeClass("fixed");
        };
    });

    if($('#thanks').length){
        $("#thanks").validate({         
            rules: {
                email: {
                    required: true,
                    email: true
                },


            },
            messages: {
                email: {
                    required: "Введите правильный email",
                    email: 'Введите правильный email'
                    
                },
            },
            submitHandler: function() {
                $('#popup-thanks').addClass('active')
                setTimeout(function() {
                    $('#popup-thanks').addClass('opened')
                }, 200)
                
                $('html').addClass('b-fixed')
                
                $('.overlay').show()
            }

        });
    };
    if($('#subscribe').length){
        $("#subscribe").validate({         
            rules: {
                email: {
                    required: true,
                    email: true
                },


            },
            messages: {
                email: {
                    required: "Введите правильный email",
                    email: 'Введите правильный email'
                    
                },
            },

        });
    };
    if($('#subscribe-mobile').length){
        $("#subscribe-mobile").validate({         
            rules: {
                email: {
                    required: true,
                    email: true
                },


            },
            messages: {
                email: {
                    required: "Введите правильный email",
                    email: 'Введите правильный email'
                    
                },
            },

        });
    };

    if($('#search').length){
        $("#search").validate({         
            rules: {
                search: {
                    required: true,
                    minlength: 3
                },


            },
            messages: {
                search: {
                    required: "",
                    minlength: ''
                    
                },
            },

        });
    };
    if($('#search-mobile').length){
        $("#search-mobile").validate({         
            rules: {
                search: {
                    required: true,
                    minlength: 3
                },


            },
            messages: {
                search: {
                    required: "",
                    minlength: ''
                    
                },
            },

        });
    };
    if($('#callback').length){
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $("#callback").validate({         
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    username: true,
                },
                tel: {
                    required: true,

                },


            },
            messages: {
                name: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                    
                },
                tel: "Неправильный номер",
            },
            submitHandler: function() {
                $('#popup-thanks').addClass('active')
                setTimeout(function() {
                    $('#popup-thanks').addClass('opened')
                }, 200)
                $('html').addClass('b-fixed')
                $('#popup-callback').removeClass('opened')
                setTimeout(function() {
                    $('#popup-callback').removeClass('active')
                    
                }, 200)
                
            }

        });
    };
    if($('#login').length){
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $("#login").validate({         
            rules: {
                login: {
                    required: true,
                    minlength: 3,
                    username: true,
                },
                password: {
                    required: true,
                    minlength: 6
                },


            },
            messages: {
                login: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                    
                },
                password: {
                    required: "Поле не заполнено",
                    minlength: 'Пароль должен состоять как минимум из 6 символов'
                    
                },
            },

        });
    };
    if($('#checkoutLogin').length){
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $("#checkoutLogin").validate({         
            rules: {
                login: {
                    required: true,
                    minlength: 3,
                    username: true,
                },
                password: {
                    required: true,
                    minlength: 6
                },


            },
            messages: {
                login: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                    
                },
                password: {
                    required: "Поле не заполнено",
                    minlength: 'Пароль должен состоять как минимум из 6 символов'
                    
                },
            },

        });
    };

     if($('#registration').length){
        
        $("#registration").validate({         
            rules: {
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true,

                },
                password: {
                    required: true,
                    minlength: 6
                },
                password_again: {
                    required: true,
                    equalTo: "#password"
                },

                


            },
            messages: {
                email: {
                    required: "Поле не заполнено",
                    email: "Введите правильный email"
                    
                },
                password: {
                    required: "Поле не заполнено",
                    minlength: 'Пароль должен состоять как минимум из 6 символов'
                    
                },
                password_again: {
                    required: "Поле не заполнено",
                    equalTo: "Пароли не совпадают",
                    
                },
                tel: "Неправильный номер",
            },

        });
    };

    if($('#formProfile').length){
        
        $("#formProfile").validate({         
            rules: {
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true,

                },
                password: {
                    required: true,
                    minlength: 6
                },
                password_again: {
                    required: true,
                    equalTo: "#fpassword"
                },

                


            },
            messages: {
                email: {
                    required: "Поле не заполнено",
                    email: "Введите правильный email"
                    
                },
                password: {
                    required: "Поле не заполнено",
                    minlength: 'Пароль должен состоять как минимум из 4 символов'
                    
                },
                password_again: {
                    required: "Поле не заполнено",
                    equalTo: "Пароли не совпадают",
                    
                },
                tel: "Неправильный номер",
            },

        });
    };

    if($('#comment').length){
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $("#comment").validate({         
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    username: true,
                },
                message: {
                    required: true,


                },


            },
            messages: {
                name: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                    
                },
                message: "Поле не заполнено",
            },

        });
    };
     if($('#formContacts').length){
        $.validator.addMethod("username", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $("#formContacts").validate({         
            rules: {
                name: {
                    required: true,
                    minlength: 3,
                    username: true,
                },
                message: {
                    required: true,
                },
                email: {
                    required: true,
                    email: true
                },  

            },
            messages: {
                name: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                    
                },
                message: "Поле не заполнено",
                email: {
                    required: "Поле не заполнено",
                    email: "Введите правильный email"
                    
                },
            },
            submitHandler: function() {
                $('#popup-thanks').addClass('active')
                setTimeout(function() {
                    $('#popup-thanks').addClass('opened')
                }, 200)

                $('html').addClass('b-fixed')
                
                $('#popup-callback').removeClass('opened')
                setTimeout(function() {
                    $('#popup-callback').removeClass('active')
                    
                }, 200)
                
            }


        });
    };
    if($('#windowWrite').length){
        // Custom method to validate username
        $.validator.addMethod("usernameRegex", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
        $.validator.addMethod("surnameRegex", function(value, element) {
            return this.optional(element) || /^[a-zA-Zа-яА-Я]*$/i.test(value);
        }, "Имя пользователя должно содержать только буквы");
    }
    $(".nextform").click(function(){
       
        // debug: true,
        //  success: "valid",
        var form = $("#windowWrite");

        form.validate({
            invalidHandler: function() {

                setTimeout(function() {
                  $('select.styler').trigger('refresh');
                }, 1)

           },
                        
            rules: {
                username: {
                    required: true,
                    minlength: 3,
                    usernameRegex: true,
                },
                surname: {
                    required: true,
                    minlength: 3,
                    surnameRegex: true,
                },
                email: {
                    required: true,
                    email: true
                },
                tel: {
                    required: true,

                },
                sity: {
                    required: true,

                },
                delivery: {
                    required: true,

                },
                street: {
                    required: true,

                },
                house: {
                    required: true,

                },
                payment: {
                    required: true,

                },

            },
            messages: {
                username: {
                    required: "Поле не заполнено",
                    minlength: "Имя должно состоять как минимум из 3 символов"
                },
                surname: {
                    required: "Поле не заполнено",
                    minlength: "Фамилия должна состоять как минимум из 3 символов"
                },
                 email: {
                    required: "Введите правильный email",
                    email: 'Введите правильный email'
                    
                },

                tel: "Неправильный номер",
                sity: "Поле не заполнено",
                delivery: "Поле не заполнено",
                street: "Поле не заполнено",
                house: "Поле не заполнено",
                payment: "Поле не заполнено",
            },

            
  

        });
        if (form.valid() === true){
            if ($('#tab_11').is(":visible")){
                current_fs = $('#tab_11');
                next_fs = $('#tab_22');
                setTimeout(function() {
                  $('select.styler').trigger('refresh');
                }, 1)
                
            } else {
                $('.step2').addClass('nextform')
            }
            $('.checkout-steps__item').removeClass('active')
            $('.step2').removeClass('nextform').addClass('active')
           
            next_fs.removeClass('hidden'); 
            current_fs.addClass('hidden');
        }

 
    });

    if($('#clockdiv').length){
        function getTimeRemaining(endtime) {
          var t = Date.parse(endtime) - Date.parse(new Date());
          var seconds = Math.floor((t / 1000) % 60);
          var minutes = Math.floor((t / 1000 / 60) % 60);
          var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
          var days = Math.floor(t / (1000 * 60 * 60 * 24));
          return {
            'total': t,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
          };
        }

        function initializeClock(id, endtime) {
          var clock = document.getElementById(id);
          var daysSpan = clock.querySelector('.days');
          var hoursSpan = clock.querySelector('.hours');
          var minutesSpan = clock.querySelector('.minutes');
          var secondsSpan = clock.querySelector('.seconds');

          function updateClock() {
            var t = getTimeRemaining(endtime);

            daysSpan.innerHTML = t.days;
            hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
            minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
            secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
              clearInterval(timeinterval);
            }
          }

          updateClock();
          var timeinterval = setInterval(updateClock, 1000);
        }

        var deadline = new Date(Date.parse(new Date()) + 4 * 27 * 56 * 57 * 1000);
        initializeClock('clockdiv', deadline);
    };

    $('.js-minus').click(function () {
        var $input = $(this).parent().find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.js-plus').click(function () {
        var $input = $(this).parent().find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    if($('.tel-mask').length){
        $('.tel-mask').mask('+38 (999) 999-99-99');
    };




});

if($('#map').length){
    function initMap() {
        var myLatLng = {lat: 50.458130, lng: 30.434955};

        // Create a map object and specify the DOM element
        // for display.
        var map = new google.maps.Map(document.getElementById('map'), {
          center: myLatLng,
          zoom: 17,
          disableDefaultUI: true
        });

        // Create a marker and set its position.
        var marker = new google.maps.Marker({
          map: map,
          position: myLatLng,
          title: ' г. Киев ул. Желябова 8/4'
        });
    }

    initMap()

};



