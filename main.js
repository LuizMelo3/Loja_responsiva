$(document).ready(function() {
$('.carossel-imagens').slick({
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 640, 
      settings: {
        slidesToShow: 1,  
        arrows: false,  
      }
    }
  ]
});
});