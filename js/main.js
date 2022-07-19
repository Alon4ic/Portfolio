$(function(){

    $('.carousel__inner').slick({
        arrows: false,
        dots: true,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 841,
              settings: {
                slidesToShow: 2,
              }
            },
            {
              breakpoint: 601,
              settings: {
                slidesToShow: 1,
              }
            },     
          ]
        });
});

gsap.to('path', {
  strokeDashoffset: -3,
  repeat: -1,
  ease: 'none'
})
