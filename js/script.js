new Swiper('.image-slider', {
  // Optional parameters
  /* direction: 'vertical', */
  loop: true,
	loopedSlides: 4,

  // pagination
  pagination: {
    el: '.swiper-pagination',
		clickable: true,
		dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  // scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },

	// autoHeight: true,


});