// ITERATION 1

function updateSubtotal(product) {
  console.log('Calculating subtotal, yey!');
//... your code goes here
 const price = product.querySelector(".price span")
 const cantidad = product.querySelector(".quantity input")

 let subtotal1 = product.querySelector(".subtotal span")
 
 const resultado = Number(price.innerHTML) * Number(cantidad.value)

 subtotal1.innerHTML = resultado

 return resultado

 //console.log(subtotal1)
 //console.log(resultado)
 //console.log(price)
 //console.log(price.innerText)
 //console.log(price.innerHTML)
}

function calculateAll() {
  // code in the following two lines is added just for testing purposes.
  // it runs when only iteration 1 is completed. at later point, it can be removed.
 // const singleProduct = document.querySelector('.product');
  //updateSubtotal(singleProduct);
  // end of test

  // ITERATION 2
  //... your code goes here
  const productos = document.querySelectorAll(".product")

  let preciototal = 0;

  productos.forEach((eachProductos) => {
    let precio = updateSubtotal(eachProductos) 
    preciototal += precio 
  })
   
  // ITERATION 3
  //... your code goes here

  const totalDOM = document.querySelector("#total-value span")
  totalDOM.innerHTML = preciototal 
}

// ITERATION 4

function removeProduct(event) {
  const target = event.currentTarget;
  console.log('The target in remove is:', target);
  //... your code goes here
}

// ITERATION 5

function createProduct() {
  //... your code goes here
}

window.addEventListener('load', () => {
  const calculatePricesBtn = document.getElementById('calculate');
  calculatePricesBtn.addEventListener('click', calculateAll);

  //... your code goes here
});


