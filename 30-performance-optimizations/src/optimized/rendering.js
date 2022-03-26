const productListEl = document.getElementById("product-list");

function createAnElement(product, deleteProductFn){
  const newListEl = document.createElement("li");
  newListEl.innerHTML = `
  <h2>${product.title}</h2>
  <p>${product.price}</p>
  `
  // const prodTitleEl = document.createElement("h2");
  // const prodPriceEl = document.createElement("p");
  const prodDeleteButtonEl = document.createElement("button");

  // prodTitleEl.textContent = product.title;
  // prodPriceEl.textContent = product.price;
  prodDeleteButtonEl.textContent = "DELETE";
  newListEl.id = product.id;

  prodDeleteButtonEl.addEventListener(
    "click",
    deleteProductFn.bind(null, product.id)
  );

  // newListEl.appendChild(prodTitleEl);
  // newListEl.appendChild(prodPriceEl);
  newListEl.appendChild(prodDeleteButtonEl);

  return newListEl
}

export function renderProducts(products, deleteProductFn) {
  productListEl.innerHTML = "";
  products.forEach((product) => {
    const newListEl = createAnElement(product, deleteProductFn)
    productListEl.appendChild(newListEl);
  });
}

export function updateProduct(product, prodId, deleteProductFn, isAdding) {
  if (isAdding) {
    const newListEl = createAnElement(product, deleteProductFn)
    productListEl.insertAdjacentElement('afterbegin', newListEl)
  } else {
    const productEl = document.getElementById(prodId)
    productEl.remove();
  }
}
