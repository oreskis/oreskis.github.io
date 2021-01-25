/*
 _____      						 _______
|  __ \  							|_ _ _ _| _
| |__) | 					     _	   | |	 | |
|  ___/    ___    __ _    __ _  | |    | |	 | |__     ___ 	 _ __  _ __    ___
| |\ \    / _ \  / _` |  / _` | | |    | |	 | '_ \   / _ \ | '_ \| '_ \  / _ \
| | \ \  |  __/ | (_| | | (_| | | |    | |	 | | | | |  __/ | |  ||  | | |  __/
|_|  \ \  \___|  \__, |  \__,_| |_|    |_|   |_| |_|  \___| |_|  ||  |_|  \___|
                  __/ |
                 |___/
================================================================================ */

(function($) {
  "use strict";

  /*
  ONE PAGE CLICK REMOVE IN CLASS
  ================================== */
  var NavG = $('.navigation li');
  NavG.on('click', function(e) {
    var NavColl = $('.navbar-collapse .navigation');
    if ($(e.target).is('a')) {
      NavColl.parent().removeClass('in');
    }
  });

  /*
  STICKY
  ================================== */
  var WinD = $(window);
  WinD.on('scroll', function() {
    var AcSticky = $('#active-sticky');
    var scroll = $(window).scrollTop();
    var AESticky = AcSticky;
    if (scroll < 245) {
      AESticky.removeClass("is-sticky , gradient-1");
    } else {
      AESticky.addClass("is-sticky , gradient-1");
    }
    return false;
  });

  /*
  ONE PAGE NAVIGATE
  ================================== */
  var OnePNav = $('.onepage-nev');
  var top_offset = OnePNav.height() - -50;
  OnePNav.onePageNav({
    currentClass: 'active',
    scrollOffset: top_offset,
  });

  /*
  VENOBOX ACTIVE
  ================================ */
  var VenBOx = $('.venobox');
  VenBOx.venobox();
  var VenBOxv = $('.venoboxvid');
  VenBOxv.venobox();
  /*
  SLICK CAROUSEL AS NAV
  ===================================*/
  var InterFS = $('#interface-slider');
  InterFS.slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    focusOnSelect: true,
    dots: true,
    centerPadding: '270px',
    arrows: false,
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          centerPadding: '40px',
        }
      }
    ]
  });

  /*
  TESTIMONIAL SLICK CAROUSEL
  ===================================*/
  var TeSTExt = $('#test-slide-text');
  TeSTExt.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    draggable: false,
    autoplay: true,
    autoplaySpeed: 4000,
    asNavFor: '#test-slide-image',
    animateIn: 'fadeInLeft',
    animateOut: 'fadeOutDown',
  });
  /* Testimonial slick carousel as nav */
  var TeSImg = $('#test-slide-image');
  TeSImg.slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    asNavFor: '#test-slide-text',
    dots: false,
    arrows: false,
    centerMode: true,
    autoplay: true,
    autoplaySpeed: 4000,
    focusOnSelect: true,
    centerPadding: '120px',
    responsive: [{
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 2,
          centerPadding: '20px',
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          centerPadding: '0px',
        }
      }
      // You can unslick at a given breakpoint now by adding:
      // settings: "unslick"
      // instead of a settings object
    ]
  });

  /*
  WOW JS
  ================================== */
  var wow = new WOW({
    mobile: false, // trigger animations on mobile devices (default is true)
  });
  wow.init();

  /*
  MAIL CHIMP AJAX ACTIVE
  ================================ */
  // Mailchimp
  var mCForm = $('#mc-form');
  mCForm.ajaxChimp({
    callback: mailchimpCallback,
    //Replace this with your own mailchimp post URL. Don't remove the "". Just paste the url inside "".
    url: "http://regaltheme.us16.list-manage.com/subscribe/post?u=9779a0e5298ed51ec0ff0a92b&amp;id=5466926a9f"
  });

  function mailchimpCallback(resp) {
    if (resp.result === 'success') {
      alert(resp.msg);

    } else if (resp.result === 'error') {
      alert(resp.msg);
    }
    return false;
  }

  /*
  PARALLAX
  ================================ */
  var parallax = document.querySelectorAll(".parallax"),
    speed = .4;
  window.onscroll = function() {
    [].slice.call(parallax).forEach(function(el, i) {
      var windowYOffset = window.pageYOffset,
        elBackgrounPos = "0 " + (windowYOffset * speed) + "px";
      el.style.backgroundPosition = elBackgrounPos;
    });
  };

  /*
  SCROLLUP
  ================================== */
  $.scrollUp({
    scrollText: '<i class="zmdi zmdi-chevron-up"></i>',
    easingType: 'linear',
    scrollSpeed: 900,
    animation: 'fade'
  });

  WinD.on('load', function() {
    /*
    PRELOADER
    ================================== */
    var preeLoad = $('#loading-wrap');
    preeLoad.fadeOut(1000);
    return false;
  });

})(jQuery);
