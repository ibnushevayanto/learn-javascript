import { products } from './products'
import { renderProducts } from "./rendering";

function addProduct(e) {
  e.preventDefault()
  import("./product-management.js").then((module) => {
    module.addProduct(e);
  });
}

function deleteProduct(idProduct) {
  import("./product-management.js").then((module) => {
    module.deleteProduct(idProduct);
  });
}

function initProducts() {
  renderProducts(products, deleteProduct);
}

const addProductForm = document.getElementById("new-product");

initProducts();

addProductForm.addEventListener("submit", addProduct);
