//selectors
const productInput = document.querySelector(".product-input");
const amount = document.querySelector(".amount-input");
const price = document.querySelector(".amount-price");
const productlist = document.querySelector(".product-list");
const addBtn = document.querySelector(".add-button");
const brand = document.querySelector(".filter-brand");

// event listeners
addBtn.addEventListener("click", addProduct);
productlist.addEventListener("click", productAction);

// functions
function addProduct(event) {
  event.preventDefault();

  inventoryUpdate(brand.value, amount.value);

  // create product row
  const productRow = document.createElement("tr");
  productRow.classList.add("product");
  // product row values
  const productName = document.createElement("td");
  productName.innerText = productInput.value;
  productName.classList.add("product-item");
  productRow.appendChild(productName);

  const productBrand = document.createElement("td");
  productBrand.innerText = brand.value;
  productBrand.classList.add("product-item");
  productRow.appendChild(productBrand);

  const productAmount = document.createElement("td");
  productAmount.innerText = amount.value;
  productAmount.classList.add("product-item");
  productAmount.classList.add(brand.value);
  productRow.appendChild(productAmount);

  const productPrice = document.createElement("td");
  productPrice.innerText = price.value;
  productPrice.classList.add("product-item");
  productRow.appendChild(productPrice);

  // addition subtruction.,
  const action = document.createElement("td");

  const addButton = document.createElement("button");
  addButton.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
  addButton.classList.add("add-btn");
  action.appendChild(addButton);
  const subButton = document.createElement("button");
  subButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;
  subButton.classList.add("sub-btn");
  action.appendChild(subButton);
  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashButton.classList.add("trash-btn");
  action.appendChild(trashButton);

  productRow.appendChild(action);

  //append to productlist
  productlist.appendChild(productRow);

  productInput.value = "";
  price.value = "";
  amount.value = "";
}

function inventoryUpdate(brand, amount) {
  const data = document.querySelector(".value-" + brand);
  data.innerText = parseInt(data.innerText) + parseInt(amount);
}

function productAction(e) {
  const item = e.target;
  const tbldtata = item.parentElement;
  tblrw = tbldtata.parentElement;

  var currentAmount = parseInt(tblrw.childNodes[2].innerHTML);
  var brandName = tblrw.childNodes[2].classList[1];

  if (item.classList[0] === "trash-btn") {
    tblrw.remove();
    inventoryUpdate(brandName, -1 * currentAmount);
  }
  if (item.classList[0] === "add-btn") {
    currentAmount++;
    tblrw.childNodes[2].innerHTML = currentAmount;
    inventoryUpdate(brandName, 1);
  }
  if (item.classList[0] === "sub-btn") {
    currentAmount--;
    tblrw.childNodes[2].innerHTML = currentAmount;
    inventoryUpdate(brandName, -1);
  }
}
