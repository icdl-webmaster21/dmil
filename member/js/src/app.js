$('.lecutre-recommended-list').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4.5,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
});
