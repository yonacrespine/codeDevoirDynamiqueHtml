function addProduct() {
  const productName = document.getElementById("productName").value;
  const productMarque = document.getElementById("productMarque").value;
  const productPrice = document.getElementById("productPrice").value;
  const productStock = document.getElementById("productStock").value;
  const tableBody = document.getElementById("productsTable");

  let html = `<tr>
                <td> ${productName} </td>
                <td> ${productMarque} </td>
                <td> ${productPrice} </td>
                <td> ${productStock} </td>



    </tr>`;

  tableBody.innerHTML += html;
}

function saveProduct() {
  const productName = document.getElementById("productName").value;
  const productMarque = document.getElementById("productMarque").value;
  const productPrice = document.getElementById("productPrice").value;
  const productStock = document.getElementById("productStock").value;
  const image = document.getElementById("image").value;
  const tableBody = document.getElementById("productsTable");

  // localStorage.setItem("productName", productName)
  // localStorage.setItem("productMarque", productMarque)
  // localStorage.setItem("productPrice", productPrice)
  // localStorage.setItem("productStock", productStock)
  // localStorage.setItem("image", image)

  const products = {
    productName: productName,
    productMarque: productMarque,
    productPrice: productPrice,
    productStock: productPrice,
    image: image,
  };
  const json = JSON.stringify(products);
  localStorage.setItem("products", json);
}

function loadProduct() {
  const json = localStorage.getItem("products");
  const products = JSON.parse(json);

  const tableBody = document.getElementById("productsTable");

  let html = `<tr>
    <td> ${products.productName} </td>
    <td> ${products.productMarque} </td>
    <td> ${products.productPrice} </td>
    <td> ${products.productStock} </td>
    <td> <img src="${products.image}" /> </td>




</tr>`;

  tableBody.innerHTML += html;
}

function supprim() {}
