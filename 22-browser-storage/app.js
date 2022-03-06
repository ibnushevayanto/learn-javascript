const storeBtn = document.getElementById("store-btn");
const retBtn = document.getElementById("retrieve-btn");

// * Create IndexDB

const dbRequest = indexedDB.open("StorageDummy", 1);

dbRequest.addEventListener("upgradeneeded", (e) => {
  const db = e.target.result;
  const objStore = db.createObjectStore("products", { keyPath: "id" });

  objStore.transaction.complete = function (e) {
    const productStore = db
      .transaction("products", "readwrite")
      .objectStore("products");
    productStore.add({
      id: "p1",
      title: "A first product",
      price: 2000,
      tags: ["Expensive"],
    });
  };
});

dbRequest.addEventListener("error", (e) => {
  console.log(e);
});

storeBtn.addEventListener("click", () => {});

retBtn.addEventListener("click", () => {});
