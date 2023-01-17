const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const removeBtn = document.querySelector("#removeBtn");

const products = ["Melk", "Saft", "Egg"];

function updateProductList() {
  productList.innerHTML = products.map(product => `<li>${product}</li>`).join('');
}

productSubmitBtn.addEventListener("click", () => {
  products.push(productInput.value);
  productInput.value = "";
  updateProductList();
});

productInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        products.push(productInput.value);
        productInput.value = "";
        updateProductList();
    }
});

removeBtn.addEventListener("click", () => {
  if(products.length > 0){
    products.pop();
    updateProductList();
  }else{
    productList.innerHTML = "Ingen produkter og fjerne.";
  }
});

updateProductList();