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


function fillPortfolioItems () {
  var portfolioItems = [
    {
      category: "videography",
      href:"portfolioModalWeddingAnaJoao",
      imgSrc:"img/portfolio/wedding/anajoaoTrailer.jpg",
      title:"Wedding of Ana & João",
      subtitle:"Videography"
    },
    {
      category: "videography",
      href:"portfolioModalWeddingjessica",
      imgSrc:"img/portfolio/wedding/jessicaTrailer.jpg",
      title:"Wedding of Jessie & Simao",
      subtitle:"Videography"
    },
    {
      category: "videography",
      href:"portfolioModalHTD",
      imgSrc:"img/portfolio/htd/1.jpg",
      title:"Home Tech Decisions Youtube Channel",
      subtitle:"Videography"
    },
    {
      category: "development",
      href:"portfolioModalPGM",
      imgSrc:"img/portfolio/pgm/1.jpg",
      title:"PGM Online Store",
      subtitle:"Development"
    },
    {
      category: "development",
      href:"portfolioModalEspecialDigitalMain",
      imgSrc:"img/portfolio/especial.digital/1.jpg",
      title:"especial.digital Website",
      subtitle:"Development"
    },
    {
      category: "development",
      href:"portfolioModalAbc",
      imgSrc:"img/portfolio/abc/1.jpg",
      title:"Aveiro Business Center Website",
      subtitle:"Development"
    },
    {
      category: "videography photography",
      href:"portfolioModalRally",
      imgSrc:"img/portfolio/rally/1.jpg",
      title:"WRC Rally Portugal",
      subtitle:"Videography/Photography"
    },
    {
      category: "videography",
      href:"portfolioModalIntro",
      imgSrc:"img/portfolio/intro/1.jpg",
      title:"Introduction",
      subtitle:"Videography"
    },
    {
      category: "videography",
      href:"portfolioModalNazare",
      imgSrc:"img/portfolio/nazare/1.jpg",
      title:"APB Tour Nazare Pro 18",
      subtitle:"Videography"
    },
    {
      category: "photography",
      href:"portfolioModalPhotos",
      imgSrc:"img/portfolio/photos/1.jpg",
      title:"Everyday Photos",
      subtitle:"Photography"
    },
    {
      category: "development",
      href:"portfolioModalRealEstate",
      imgSrc:"img/portfolio/realEstateAerial/1.jpg",
      title:"Real Estate Aerial Videos",
      subtitle:"Videography"
    },
  ];


  var portfolioThumbsHtml = "";
  var portfolioModalsHtml = "";

  $.each(portfolioItems, function (ind, val) {
    var itemHtml = '<div class="col-lg-4 col-md-6 portfolio-item portfolio-thumbnail all animate' + val.category + '">' +
      '<a class="portfolio-link" data-toggle="modal" href="#' + val.href + '">' +
      '<div class="portfolio-hover">' +
      '<div class="portfolio-hover-content">' +
      '<i class="fas fa-plus fa-3x"></i>' +
      ' </div>' +
      '    </div>' +
      '    <div class="img-container">' +
      '      <img class="img-fluid" src="' + val.imgSrc + '" alt="">' +
      '    </div>' +
      '  </a>' +
      '  <div class="portfolio-caption">' +
      '    <h4>' + val.title + '</h4>' +
      '    <p class="text-muted">' + val.subtitle + '</p>' +
      '  </div>' +
      '</div>';
    portfolioThumbsHtml += itemHtml;
  });



  var portfolioModalItems = [
    {
      id:"portfolioModalWeddingAnaJoao",
      title:"Wedding of Ana & João",
      category:"Videography",
      idCarousel:"carouselAnaJoao",
      carouselItems: [
        {
          href: "https://www.youtube.com/embed/4r21-7TJ9N4",
          img: "img/portfolio/wedding/anajoaoTrailer.jpg"
        }, 
        {
          href: "https://www.youtube.com/embed/BF_5hKxJW2Y",
          img: "img/portfolio/wedding/anajoao.jpg"
        }],
      description:"I had the opportunity to capture this beautiful wedding of Ana & João.",
      date:"September 2019",
      client:"RisePDF",
    },
    {
      id:"portfolioModalWeddingjessica",
      title:"Wedding of Jessie & Simao",
      category:"Videography",
      idCarousel:"carouselJess",
      carouselItems: [
        {
          href: "https://www.youtube.com/embed/bBksqHQJ7OU",
          img: "img/portfolio/wedding/jessicaTrailer.jpg"
        }, 
        {
          href: "https://www.youtube.com/embed/Aq6hgtJpI2s",
          img: "img/portfolio/wedding/jessica.jpg"
        }],
      description:"I had the opportunity to capture this beautiful wedding of Jessie and Simão and the baptize of their son, Enzo.",
      date:"August 2019",
      client:"RisePDF",
    },
    {
      id:"portfolioModalHTD",
      title:"Home Tech Decisions Youtube Channel",
      category:"Videography",
      idCarousel:"carouselHtd",
      carouselItems: [
        {
          href: "https://www.youtube.com/embed/bsZVWNCEoXk",
          img: "img/portfolio/htd/2.jpg"
        }, 
        {
          href: "https://www.youtube.com/embed/1ozW2BW6WuE",
          img: "img/portfolio/htd/3.jpg"
        },
        {
          href: "https://www.youtube.com/embed/9wyYHOk7kCE",
          img: "img/portfolio/htd/4.jpg"
        }],
      description:"Home Tech Decisions is a Youtube technology channel focused on home tech equipment.",
      date:"2020-2021",
      client:"Home Tech Decisions",
    },
    {
      id:"portfolioModalPGM",
      title:"PGM Online Store",
      category:"Development",
      idCarousel:"carouselPGM",
      carouselItems: [
        {
          href: "https://www.youtube.com/embed/bsZVWNCEoXk",
          img: "img/portfolio/htd/2.jpg"
        }, 
        {
          href: "https://www.youtube.com/embed/1ozW2BW6WuE",
          img: "img/portfolio/htd/3.jpg"
        },
        {
          href: "https://www.youtube.com/embed/9wyYHOk7kCE",
          img: "img/portfolio/htd/4.jpg"
        }],
      description:"Working along with especial.digital, we created an online store for PGM according to their specific needs.",
      date:"December 2019",
      client:"PGM",
      skills: "Shopify, Node.js, HTML5, SCSS, JS, jQuery"
    },
    {
      id:"portfolioModalEspecialDigitalMain",
      title:"especial.digital Website",
      category:"Development",
      idCarousel:"carouselEspecialDigital",
      carouselItems: [
        {
          img: "img/portfolio/especial.digital/gif.gif"
        }, 
        {
          img: "img/portfolio/especial.digital/1.jpg"
        }, 
        {
          img: "img/portfolio/especial.digital/2.jpg"
        }, 
        {
          img: "img/portfolio/especial.digital/3.jpg"
        }, 
        {
          img: "img/portfolio/especial.digital/4.jpg"
        }, 
        {
          img: "img/portfolio/especial.digital/5.jpg"
        },
        {
          img: "img/portfolio/especial.digital/6.jpg"
        },
        {
          img: "img/portfolio/especial.digital/1_mobile.jpg"
        },
        {
          img: "img/portfolio/especial.digital/2_mobile.jpg"
        }
       ],
      description:"A responsive website built for especial.digital, according to their design.",
      date:"August 2019",
      client:"especial.digital",
      skills: "HTML5, SCSS, Bootstrap, JS, jQuery"
    },
    {
      id:"portfolioModalAbc",
      title:"Aveiro Business Center's Website",
      category:"Development",
      idCarousel:"carouselAbc",
      carouselItems: [
        {
          img: "img/portfolio/abc/gif.jpg"
        }, 
        {
          img: "img/portfolio/abc/1.jpg"
        }, 
        {
          img: "img/portfolio/abc/1-mobile.jpg"
        }, 
        {
          img: "img/portfolio/abc/bo.jpg"
        }, 
        {
          img: "img/portfolio/abc/bo2.jpg"
        }, 
        {
          img: "img/portfolio/abc/2.jpg"
        },
        {
          img: "img/portfolio/abc/5.jpg"
        },
        {
          img: "img/portfolio/abc/4.jpg"
        },
        {
          img: "img/portfolio/abc/7.jpg"
        }
       ],
      description:"This was a project where a content management system was needed so the technology I chose was Netlify CMS. I started with a HugoGo template and adapted my components and visual elements accordingly. The website is responsive, multilanguage and it has a user friendly backoffice as well.",
      date:"June 2019",
      client:"Aveiro Business Center",
      skills: "HTML5, Tachyons, JS, React, jQuery"
    },
    
    {
      id:"portfolioModalRally",
      title:"WRC Rally Portugal 2019",
      category:"Videography/Photography",
      idCarousel:"carouselRally",
      carouselItems: [
        {
          img: "img/portfolio/rally/1.jpg"
        }, 
        {
          img: "img/portfolio/rally/2.jpg"
        }, 
        {
          img: "img/portfolio/rally/3.jpg"
        }, 
        {
          img: "img/portfolio/rally/4.jpg"
        }, 
        {
          img: "img/portfolio/rally/5.jpg"
        },
        {
          img: "img/portfolio/rally/6.jpg"
        },
        {
          img: "img/portfolio/rally/7.jpg"
        },
        {
          img: "img/portfolio/rally/8.jpg"
        }
       ],
      description:"After a long, and I mean long hike under the harsh sun of Gois' dusty hills , I settled with a tripod, the camera and a microphone. Chainsaws, clouds of dust, loads of beer... oh and rally cars. This is pure rally!",
      date:"June 2019",
      client:"Personal project"
    },
    
    {
      id:"portfolioModalIntro",
      title:"Introduction",
      category:"Videography",
      idCarousel:"carouselIntroduction",
      carouselItems: [
        {
          img: "img/portfolio/intro/1.jpg",
          href: "https://www.youtube.com/embed/JhT31GBZVek"
        }
       ],
      description:"I decided to mix some footage that I previously shot with some simple motion graphics and effects for a fast introduction of myself and my skills. From the footage to the song, everything in this video was created from scratch.",
      date:"May 2019",
      client:"Personal project"
    },
    
    {
      id:"portfolioModalNazare",
      title:"APB Tour Nazare Pro 18",
      category:"Videography",
      idCarousel:"carouselAPB",
      carouselItems: [
        {
          img: "img/portfolio/nazare/1.jpg",
          href: "https://www.youtube.com/embed/aq_niXr01Hg"
        }
       ],
      description:"I spent a day at the beach watching the world bodyboard championship and seeing these crazy tricks I couldn't stop myself from shooting the event.",
      date:"October 2018",
      client:"Personal project"
    },
    
    {
      id:"portfolioModalPhotos",
      title:"Everyday Photos",
      category:"Photography",
      idCarousel:"carouselPhotos",
      carouselItems: [
        {
          img: "img/portfolio/photos/1.jpg"
        },
        {
          img: "img/portfolio/photos/2.jpg"
        },
        {
          img: "img/portfolio/photos/3.jpg"
        },
        {
          img: "img/portfolio/photos/4.jpg"
        },
        {
          img: "img/portfolio/photos/5.jpg"
        },
        {
          img: "img/portfolio/photos/6.jpg"
        },
        {
          img: "img/portfolio/photos/7.jpg"
        },
        {
          img: "img/portfolio/photos/8.jpg"
        },
        {
          img: "img/portfolio/photos/9.jpg"
        },
        {
          img: "img/portfolio/photos/10.jpg"
        },
        {
          img: "img/portfolio/photos/11.jpg"
        },
        {
          img: "img/portfolio/photos/12.jpg"
        },
        {
          img: "img/portfolio/photos/13.jpg"
        },
        {
          img: "img/portfolio/photos/14.jpg"
        },
        {
          img: "img/portfolio/photos/15.jpg"
        },
        {
          img: "img/portfolio/photos/16.jpg"
        },
       ],
      description:"These are some of my everyday photographs, not linked in any way, no caption, just what I see and what the camera captures.",
      date:"Ongoing",
      client:"Personal project"
    },
    {
      id:"portfolioModalRealEstate",
      title:"Real Estate Aerial Videos",
      category:"Videography",
      idCarousel:"carouselRealEstate",
      carouselItems: [
        {
          img: "img/portfolio/realEstateAerial/fernbrook.jpg",
          href: "https://www.youtube.com/embed/zOp1s8_5wpg"
        },
        {
          img: "img/portfolio/realEstateAerial/stonegate.jpg",
          href: "https://www.youtube.com/embed/ObD4yYa1omE"
        },
        {
          img: "img/portfolio/realEstateAerial/bluehouse.jpg",
          href: "https://www.youtube.com/embed/xWNbUmRZxwA"
        },
        {
          img: "img/portfolio/realEstateAerial/logcabin.jpg",
          href: "https://www.youtube.com/embed/v3CJA1Qdglg"
        },
        {
          img: "img/portfolio/realEstateAerial/reservecreek.jpg",
          href: "https://www.youtube.com/embed/MgGI1CIcE2s"
        },
        {
          img: "img/portfolio/realEstateAerial/rushcreek.jpg",
          href: "https://www.youtube.com/embed/SpDCE_MFEkc"
        },
        {
          img: "img/portfolio/realEstateAerial/marathon.jpg",
          href: "https://www.youtube.com/embed/qXdCuHpuIJ4"
        },
        {
          img: "img/portfolio/realEstateAerial/weaver.jpg",
          href: "https://www.youtube.com/embed/4gIwZLMvjks"
        },
        {
          img: "img/portfolio/realEstateAerial/avalonrun.jpg",
          href: "https://www.youtube.com/embed/CA34ljyFxx8"
        },
        {
          img: "img/portfolio/realEstateAerial/plymouth.jpg",
          href: "https://www.youtube.com/embed/VXECuoMpXyI"
        },
        {
          img: "img/portfolio/realEstateAerial/millenium.jpg",
          href: "https://www.youtube.com/embed/ruvlSwfIOhk"
        },
        {
          img: "img/portfolio/realEstateAerial/hilde.jpg",
          href: "https://www.youtube.com/embed/gLEgqq01XO0"
        },
       ],
      description:"These are some videos I edit for a real estate agent that shoots the videos on location and then sends them to me for the final editing.",
      date:"Ongoing",
      client:"Gopher Aerial"
    },
  ]
  $.each(portfolioModalItems, function (ind, val) {
    var carouselHtmlItemsIndicators = '', carouselHtmlItems = '', counter = 0;

    $.each(val.carouselItems, function (ind, carouselItems){
      var indicatorClass = counter === 0 ? ' active' : '';
      carouselHtmlItemsIndicators += val.carouselItems.length>1  ? '' : ' <li data-target="#' + val.idCarousel + '" data-slide-to="' + counter + '" class="'+ indicatorClass + '"></li>';
      var style = '<style>*{padding:0;margin:0;overflow:hidden}html,body{height:100%}img,span{position:absolute;width:100%;top:0;bottom:0;margin:auto}' + 
      'span{height:1.5em;text-align:center;font:48px/1.5 sans-serif;color:white;text-shadow:0 0 0.5em black}span:hover{color:red}</style>';

      if (carouselItems.href){
        carouselHtmlItems += '<div class="carousel-item' + indicatorClass + '">' + 
        '<iframe srcdoc="' + style + '<a href=' + carouselItems.href + '?autoplay=1&controls=0><img src=' + carouselItems.img + 
        '><span>▶</span></a>" loading="lazy" width="100%" height="100%" src="' + carouselItems.href + '"' + 
        'frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>' + 
        '</div>';
      }
      else {
        carouselHtmlItems += '<div class="carousel-item ' +indicatorClass + '">' +
          '<img class="d-block" src="' +carouselItems.img + '">' + 
        '</div>'
      }
      
      counter++;
    });

    var date = val.date ? '<li><b>Date:</b> ' + val.date + '</li>' : '';
    var client = val.client ? '<li><b>Client:</b> ' + val.client + '</li>' : '';
    var category = val.category ? '<li><b>Category:</b> ' + val.category + '</li>' : '';
    var skills = val.skills ? '<li><b>Skills:</b> ' + val.skills + '</li>' : '';

    var itemHtml = '<div class="portfolio-modal modal fade" id="' + val.id + '" tabindex="-1" role="dialog" aria-hidden="true">' + 
    '<div class="modal-dialog">' + 
'     <div class="modal-content">' + 
'       <div class="close-modal" data-dismiss="modal">' + 
'         <div class="lr">' + 
'           <div class="rl"></div>' + 
'         </div>' + 
'       </div>' + 
'       <div class="container">' + 
'         <div class="row">' + 
'             <div class="modal-body bg-light">' + 
'               <!-- Project Details Go Here -->' + 
'               <h2 class="text-uppercase">' + val.title + '</h2>' + 
'               <p class="item-intro text-muted">' + val.category + '</p>' + 
'               <div id="' + val.idCarousel + '" class="carousel slide" data-ride="carousel" data-interval="false"> ' + 
'                   <ol class="carousel-indicators">' + carouselHtmlItemsIndicators + 
'                   </ol>' + 
'                   <div class="carousel-inner">' + carouselHtmlItems +
'                   <a class="carousel-control-prev" href="#' + val.idCarousel + '" role="button" data-slide="prev">' + 
'                     <span class="carousel-control-prev-icon" aria-hidden="true"></span>' + 
'                     <span class="sr-only">Previous</span>' + 
'                   </a>' + 
'                   <a class="carousel-control-next" href="#' + val.idCarousel + '" role="button" data-slide="next">' + 
'                     <span class="carousel-control-next-icon" aria-hidden="true"></span>' + 
'                     <span class="sr-only">Next</span>' + 
'                   </a>' + 
'               </div>' + 
'             </div>' + 
'               <p>' + val.description + '</p>' + 
'               <ul class="list-inline">' + 
date + 
client + 
category + 
skills + 
'               </ul>' + 
'               <button class="btn btn-primary" data-dismiss="modal" type="button">' + 
'                 <i class="fas fa-times"></i>' + 
'                 Close Project</button>' + 
'         </div>' + 
'       </div>' + 
'     </div>' + 
'   </div>' + 
'   </div>' + 
' </div>' ;

    portfolioModalsHtml += itemHtml;
  });



  $('.portfolio-container').html(portfolioThumbsHtml);
  $('.portfolio-modals').html(portfolioModalsHtml);

  var portfolioIsotope = $('.portfolio-container').isotope({
    itemSelector: '.portfolio-thumbnail',
    layoutMode: 'fitRows'
  });

  $('#portfolio-flters li').on( 'click', function() {
    $("#portfolio-flters li").removeClass('filter-active');
    $(this).addClass('filter-active');

    portfolioIsotope.isotope({ filter: $(this).data('filter') });
  });

  onScroll();
  animate();
}

// ========================================================================= //
//  Porfolio isotope and filter
// ========================================================================= //
$(document).ready(function(){

  fillPortfolioItems();

  
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


$(window).on("load", function() {
  $('.loader').fadeOut();
  $('.loaderBG').fadeOut()});
;

function animate(){
  $('.animate').css("opacity",0);
  $('section').each(function(index,item){
      var waypoint = new Waypoint({
          element: $(item),
          handler: function(direction) {
              var delay = 0.1;
              $(item).find('.animate').each(function(index,item){
                  anime.timeline({loop: false})
                  .add({
                    targets: item,
                    translateY: [100,0],
                    translateZ: 0,
                    opacity: [0,1],
                    easing: "easeOutExpo",
                    duration: 1500,
                    delay: delay
                  })
                  delay+=100;
                  $(item).removeClass( "animate" )
              })            
          },
              offset: '50%'
        })
  });
} 