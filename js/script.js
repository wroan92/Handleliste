const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");

const products = ["Melk", "Saft", "Egg"];

productSubmitBtn.addEventListener("click", addProduct);

productInput.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        addProduct();
    }
});
function addProduct() {
  console.log(productInput.value);
  products.push(productInput.value);

  productList.innerHTML = "";
  productInput.value = "";

  for (let i = 0; i < products.length; i++) {
    productList.innerHTML += `<li>${products[i]}</li>`;
  }
}
let button = document.querySelector("#removeBtn");

button.addEventListener("click", () =>{
  products.pop();
});
  

for (let i = 0; i < products.length; i++) {
  productList.innerHTML += `<li>${products[i]}</li>`;
}
