
const mainNav = document.querySelector('.main-nav');

const menuToggle = document.querySelector('.menu-toggle');

mainNav.classList.remove('main-nav--no-js');
menuToggle.classList.remove('menu-toggle--no-js');

function openMenu () {
  menuToggle.classList.toggle('menu-toggle--close');
  mainNav.classList.toggle('main-nav--active');
}

menuToggle.addEventListener('click', openMenu);


/* Отрисовка карточек товаров */

// const productCards = [
//   {
//     id: 1,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-1.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 2,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-2.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 3,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-3.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 4,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-4.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 5,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-5.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 6,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-6.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 7,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-7.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   },
//   {
//     id: 8,
//     name: "Декаф Флэт Уайт",
//     src: "coffee-can-8.jpg",
//     text: "Кофе без кофеина из Эфиопии с натуральным фермерским молоком",
//     price: 225
//   }
// ];

// const productsContainer = document.querySelector('.product-cards');
// const productTemplate = document.querySelector('#product').content;
// const productContentFragment = document.createDocumentFragment();

// const createProduct = ({id, name, src, text, price}) => {
//   const productTemplateClone = productTemplate.cloneNode(true);
//   productTemplateClone.querySelector('.product').id = id;
//   productTemplateClone.querySelector('.product__photo').src = `img/products/${src}`;
//   productTemplateClone.querySelector('.product__name').textContent = name;
//   productTemplateClone.querySelector('.product__text').textContent = text;
//   productTemplateClone.querySelector('.product__price').textContent = `${price}₽`;
//   return productTemplateClone;
// };

// export const createProductsList = () => {
//   productCards.forEach((product) => {
//     productContentFragment.appendChild(createProduct(product));
//   });
//   productsContainer.querySelectorAll('.product').forEach((product) => product.remove());
//   productsContainer.appendChild(productContentFragment);
// };

// createProductsList();

// /* Свайпер */

// import Swiper, { Navigation, Pagination } from 'swiper';

// const swiper = new Swiper(".slider", {
//   modules: [Navigation, Pagination],
//   loop: true,
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
//   pagination: {
//     el: ".swiper-pagination",
//   },
//   mousewheel: true,
//   keyboard: true,
// });
