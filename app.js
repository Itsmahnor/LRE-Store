// first slider
$('.slider-one')
.not(".slick-intialized")
.slick({
  autoplay:true,
  autoplaySpeed:1000,
  dots:true,
  prevArrow:"slider-btn .prev",
  nextArrow:".slider-btn .next"
});

// slider2
$('.multiple-items').slick({

  slidesToShow: 3, // Number of slides to show at once
    slidesToScroll: 1, // Number of slides to scroll
    autoplay: true,
    autoplaySpeed: 3000,
    dots: true,
    prevArrow: '.slider-btn .prev1',
    nextArrow: '.slider-btn .next1',
    responsive: [
      {
        breakpoint: 1024, // Breakpoint for medium screens
        settings: {
          slidesToShow: 3 // Number of slides to show at this breakpoint
        }
      },
      {
        breakpoint: 768, // Breakpoint for small screens
        settings: {
          slidesToShow: 2 // Number of slides to show at this breakpoint
        }
      },
      {
        breakpoint: 480, // Breakpoint for extra small screens
        settings: {
          slidesToShow: 1 // Number of slides to show at this breakpoint
        }
      }
    ]
});
// slider3
$('.center').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  prevArrow: '.slider-btn .prev2',
    nextArrow: '.slider-btn .next2',
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
