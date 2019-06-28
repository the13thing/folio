(function($) {

  "use strict"; // Start of use strict

  // Smooth scrolling using jQuery easing
  $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: (target.offset().top - 54)
        }, 1000, "easeInOutExpo");
        return false;
      }
    }
  });

  // Closes responsive menu when a scroll trigger link is clicked
  $('.js-scroll-trigger').click(function() {
    $('.navbar-collapse').collapse('hide');
  });

  // Activate scrollspy to add active class to navbar items on scroll
  $('body').scrollspy({
    target: '#mainNav',
    offset: 56
  });

  // Collapse Navbar
  var navbarCollapse = function() {
    if ($("#mainNav").offset().top > 100) {
      $("#mainNav").addClass("navbar-shrink");
    } else {
      $("#mainNav").removeClass("navbar-shrink");
    }
  };
  // Collapse now if page is not at top
  navbarCollapse();
  // Collapse the navbar when page is scrolled
  $(window).scroll(navbarCollapse);

})(jQuery); // End of use strict



// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(document).ready(function(){

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  $('.loader').fadeOut();
  $('.loaderBG').fadeOut();

  onScroll();
});

var foreground = document.querySelector(".mastheadforeground");
window.addEventListener("scroll", onScroll);

$(document).bind('keyup', function (e) {
  if (e.which == 39) {
      $('.carousel').carousel('next');
  } else if (e.which == 37) {
      $('.carousel').carousel('prev');
  }
});

function onScroll(e) {
  var scroll = window.pageYOffset;
  //var translate = "translate(-" + scroll/1.1 + "px, 0px)";
  // var scale = "scale(" + scroll/200+ ")"
  // foreground.style.transform = scale;
  $(foreground).css("background-size",100+(scroll/50) + "%");
}