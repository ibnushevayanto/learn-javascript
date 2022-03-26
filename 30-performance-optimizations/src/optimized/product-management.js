import { updateProduct as updateProductFn } from "./rendering";
import { products as productList } from "./products";

const titleEl = document.getElementById("#new-product #title");
const priceEl = document.getElementById("#new-product #price");

export function deleteProduct(prodId) {
  const indexData = productList.findIndex((res) => res.id === prodId);
  const deleteProduct = productList[indexData];
  productList.splice(indexData, 1);
  updateProductFn(deleteProduct, prodId, deleteProduct, false);
}

export function addProduct(e) {
  const title = titleEl.value;
  const price = priceEl.value;

  if (title.trim().length === 0 || price.trim().length === 0 || +price < 0) {
    alert("Please enter some valid input values for title and price.");
    return;
  }

  const newProduct = {
    id: new Date().toString(),
    title: title,
    price: price,
  };

  productList.unshift(newProduct);
  updateProductFn(newProduct, newProduct.id, deleteProduct, true);
}
