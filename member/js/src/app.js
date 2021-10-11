$('.lecutre-recommended-list').slick({
  lazyLoad: 'ondemand',
  slidesToShow: 4,
  slidesToScroll: 4,
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: false,
  responsive: [
    {
      breakpoint: 1280,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 4
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1.3,
        slidesToScroll: 1
      }
    }
  ]
});
