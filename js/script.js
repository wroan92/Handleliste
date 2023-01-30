const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const removeBtn = document.querySelector("#removeBtn");

const products = ["Melk", "Saft", "Egg"];

// Function to update productList
updateProductList = () => {
  productList.innerHTML = products.map((product, index) => `<li onclick="removeProduct(${index})">${product}</li>`).join('');
  productInput.value = "";
}

productSubmitBtn.addEventListener("click", () => {
  products.push(productInput.value);
  
  updateProductList();
});

productInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
        products.push(productInput.value);
        
        updateProductList();
    }
});

removeBtn.addEventListener("click", () => {
  if(products.length > 1){
    products.pop();
    updateProductList();
  }else{
    productList.innerHTML = "Ingen produkter og fjerne.";
  }
});

removeProduct = (i) =>{
  if(products.length >1){
    products.splice(i, 1)
    updateProductList();
  }else{
    productList.innerHTML = "Ingen produkter og fjerne.";
  }
 
}

updateProductList();