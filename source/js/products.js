import {productCards} from "../mocks/products";

export const productsContainer = document.querySelector('.product-cards');
const productTemplate = document.querySelector('#product').content;
const productContentFragment = document.createDocumentFragment();

const createProduct = ({id, name, src, text, price}) => {
  const productTemplateClone = productTemplate.cloneNode(true);
  productTemplateClone.querySelector('.product').id = id;
  productTemplateClone.querySelector('.product__photo').src = `img/products/${src}`;
  productTemplateClone.querySelector('.product__name').textContent = name;
  productTemplateClone.querySelector('.product__text').textContent = text;
  productTemplateClone.querySelector('.product__price').textContent = `${price}₽`;
  return productTemplateClone;
};

export const createProductsList = () => {
  productCards.forEach((product) => {
    productContentFragment.appendChild(createProduct(product));
  });
  productsContainer.querySelectorAll('.product').forEach((product) => product.remove());
  productsContainer.appendChild(productContentFragment);
};
