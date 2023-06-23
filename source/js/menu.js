/* Отображение меню*/

const mainNav = document.querySelector('.main-nav');

const menuToggle = document.querySelector('.menu-toggle');

mainNav.classList.remove('main-nav--no-js');
menuToggle.classList.remove('menu-toggle--no-js');

function openMenu () {
  menuToggle.classList.toggle('menu-toggle--close');
  mainNav.classList.toggle('main-nav--active');
}

menuToggle.addEventListener('click', openMenu);
