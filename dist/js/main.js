const swiper = new Swiper(".testimonials__swiper", {
  // Optional parameters
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
const products_swiper = new Swiper(".products__swiper", {
  // Optional parameters
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: ".products-swiper-pagination",
    clickable: true,
  },
  breakpoints: {
    768: {
      slidesPerView: 2,
    },
    1220: {
      slidesPerView: 3,
    },
  },
});

AOS.init();
