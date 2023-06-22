import Swiper, { Navigation, Pagination } from 'swiper';
// Слайдер / свайпер
// Swiper.use([Navigation, Pagination]);
// import 'swiper/scss/bundle';
// import 'swiper/css/navigation';
// import 'swiper/css/pagination';
import 'swiper/scss';
import 'swiper/scss/pagination';
import 'swiper/scss/navigation';
import 'swiper/scss/a11y';

const swiper = new Swiper(".promo__slider", {
  modules: [Navigation, Pagination],
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: ".swiper-pagination",
  },
  mousewheel: true,
  keyboard: true,
});
