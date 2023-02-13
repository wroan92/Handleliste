const productList = document.querySelector("#productList");
const productInput = document.querySelector("#productInput");
const productSubmitBtn = document.querySelector("#productSubmit");
const removeBtn = document.querySelector("#removeBtn");

/* const products = ["Melk", "Saft", "Egg"]; */
var products = [
]

// Function to update productLList
/* updateProductList = () => {
  productList.innerHTML = products.map((x, index) => `<li onclick="removeProduct(${index})">${x}</li>`).join('');

  productInput.value = "";
} */
updateProductList = () => {
  productList.innerHTML = products.map((x, index) => `<li onclick="removeProduct(${index})">${x.product} <br>Ant: ${x.qty}</li><hr>`).join('');
  productInput.value = "";
}

/* productSubmitBtn.addEventListener("click", () => {
  products.push(productInput.value);
  
  updateProductList();
}); */
productSubmitBtn.addEventListener("click", () => {
  const existingProduct = products.find(x => x.product.toLowerCase() === productInput.value.toLowerCase());
  if (existingProduct) {
  existingProduct.qty += 1;
  } else {
  products.push({ product: productInput.value, qty: 1 });
  }
  updateProductList();
  });

  productInput.addEventListener("keypress", event => {
    if (event.key === "Enter") {
    const existingProduct = products.find(x => x.product.toLowerCase() === productInput.value.toLowerCase());
    if (existingProduct) {
    existingProduct.qty += 1;
    } else {
    products.push({ product: productInput.value, qty: 1 });
    }
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