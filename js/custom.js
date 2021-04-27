$(document).ready(function () {

  $('.logo_slider').slick({
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    slide:'li',
    dots: false,
    arrows:false,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.project-slider').slick({
    dots: true,
    infinite: true,
    speed: 300,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.product-img-slider').slick({
    dots:false,
    infinite:true,
    speed: 300,
    slidesToShow: 1,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow:1,
          slidesToScroll: 1,
          infinite: true,
          dots: false
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });
//  ========  header=====  //
    $(".contact_head").on("click" , function(){
      $(".close-menu-icon").trigger( "click" );
    });

    $(".menu-btn").on("click" , function(){
        $("body").removeClass("modal-open");
    });

    $(".menu-section-sec li a").on("click" , function(e){     
      $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 1000, 'linear');
     $(".subscribe").trigger("click");
    });


    $(".bd-example-modal-lg").scroll(function(){
      if ($(this).scrollTop() >= 1) {
         $('.social_svg').addClass('scroll_svg')         
      } else {
         $('.social_svg').removeClass('scroll_svg')
      }
    });


     $(window).scroll(function(){
      if ($(this).scrollTop() >= 2) {
         $('.header_fix').addClass('sticky_header')         
      } else {
         $('.header_fix').removeClass('sticky_header')
      }
    });


    $('navbar-expand-toggle a').click(function(){
      $('.theme-container.contact-section .fixed-top').css('right' , '17px');
    });

    $('#contact .close').click(function(){
      $('#menu').css('overflow' , 'auto');
      if($(this).hasClass('header_contact')){
        setTimeout(function(){
          $('body').css('overflow' , 'hidden');
        }, 40);
      }else{
        setTimeout(function(){
          $('body').css('overflow' , 'auto');
        }, 40);
      }
      $(this).removeClass('header_contact');
    });

    $('.modal_overflow').click(function(){
       $('body').css('overflow' , 'hidden');
    });

    $('.close[data-dismiss="modal"]').click(function(){
      setTimeout(function(){ 
       $('body').css('overflow' , 'auto');
     }, 30);
    });

      $('.contact_head').click(function(){
        $('#contact .close').addClass('header_contact');
      });

    $('body').click(function(e){
           var menu_contain = $(".side-menu");
           // if the target of the click isn't the container nor a descendant of the container
           console.log(menu_contain.has(e.target).length === 0);
           console.log(!menu_contain.is(e.target));
           if (!menu_contain.is(e.target) && menu_contain.has(e.target).length === 0)
           {
             $('body').removeClass("body-toogle-menu");
             $('.app-container').removeClass("expanded");
           }
     });


   $('.selectform-input').on("click", function(){
       $(".method-dropdown .nav-tabs").slideToggle("slow");
       $(this).toggleClass("opened");
     });

     $('.method-dropdown .nav-tabs .nav-item').on("click", function(){
       var val = $(this).text();
       var data = $(this).attr('data-name');

       $('.selectform-input').val(val);
       $(".method-dropdown .nav-tabs").slideToggle("slow");
        $('.selectform-input').css("color","#909090");
        $('.selectform-input').toggleClass("opened");
     });

     var HHeight = $('header').innerHeight();
     var scrollHeight = HHeight + 100;
      $(window).scroll(function(){
        if ($(this).scrollTop() >= scrollHeight){
            $('.stickywrap').addClass('stickyHeader');
            $('.theme-container').css('padding-top',HHeight+'px');
        }
        else{
          $('.stickywrap').removeClass('stickyHeader');
          $('.theme-container').css('padding-top','0px');
        }
      });
      
      var THeight = HHeight - 45;
      $('.scroll_down_btn').click(function() {
          var hrf = $(this).attr("href");
          $('html, body').animate({
          scrollTop: $(hrf).offset().top
          }, 500);
          return false;
        });


// ========== FAQ's =========== 
      
     $(window).scroll(function(){
      if ($(this).scrollTop() >= 1) {
         $('.faq_nav').addClass('faq_head')         
      } else {
         $('.faq_nav').removeClass('faq_head')
      }
    });


//  ========  from-top-arrow =====  //

    $("#side-menu,#SBC_Nav").metisMenu();

    $('.digital-book-img').slick({
       slidesToShow: 1,
       slidesToScroll: 1,
       dots: true,
       arrows: false,
       fade: true,
       autoplay: true,
       autoplaySpeed: 4000,
       adaptiveHeight: true
    });
    $('.gallery-model-trigger').click(function(e){
          e.preventDefault();
          console.log('called');
          setTimeout(function(){
          $('.gallery-top').slick('refresh');
           $('.gallery-top1').slick('refresh');
        },500);
    });
});

$(function() {
  if($(window).width() < 768){
  $(".product-menu ul li").slice(0, 6).show();
  $("#loadMore").on('click', function(e) {
    e.preventDefault();
    $(".product-menu ul li:hidden").slice(0, 6).slideDown();
    if ($(".product-menu ul li:hidden").length == 0) {
      $("#loadMore").hide();
      }
      console.log($(".product-menu ul li:hidden").length == 0);
    });
  $(".product-menu1 ul li").slice(0, 6).show();
  $("#loadMore1").on('click', function(e) {
    e.preventDefault();
    $(".product-menu1 ul li:hidden").slice(0, 6).slideDown();
    if ($(".product-menu1 ul li:hidden").length == 0) {
      $("#loadMore1").hide();
      }
    });
  }
});

