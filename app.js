//selectors
const productInput = document.querySelector(".product-input");
const amount = document.querySelector(".amount-input");
const price = document.querySelector(".amount-price");
const productlist = document.querySelector(".product-list");
const addBtn = document.querySelector(".add-button");
const brand = document.querySelector(".filter-brand");

// functions
let addProduct = (event) => {
  event.preventDefault();

  inventoryUpdate(brand.value, amount.value);

  // create product row
  const productRow = document.createElement("tr");
  productRow.classList.add("product");
  // product row values
  const productName = document.createElement("td");
  create_td(productName, productInput, productRow);

  const productBrand = document.createElement("td");
  create_td(productBrand, brand, productRow);

  const productAmount = document.createElement("td");
  create_td(productAmount, amount, productRow);

  const productPrice = document.createElement("td");
  create_td(productPrice, price, productRow);

  // addition subtruction.,
  const action = document.createElement("td");

  const addButton = document.createElement("button");
  addButton.title = "increment product by 1";
  addButton.innerHTML = `<i class="fa-solid fa-circle-plus"></i>`;
  addButton.classList.add("add-btn");
  action.appendChild(addButton);
  const subButton = document.createElement("button");
  subButton.title = "decrement product by 1";
  subButton.innerHTML = `<i class="fa-solid fa-circle-minus"></i>`;
  subButton.classList.add("sub-btn");
  action.appendChild(subButton);
  // trash button
  const trashButton = document.createElement("button");
  trashButton.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  trashButton.title = "Delete element";
  trashButton.classList.add("trash-btn");
  action.appendChild(trashButton);

  productRow.appendChild(action);

  //append to productlist
  productlist.appendChild(productRow);

  productInput.value = "";
  price.value = "";
  amount.value = "";
};

let create_td = (element, inputElement, rowElement) => {
  element.innerText = inputElement.value;
  element.classList.add("product-item");
  rowElement.appendChild(element);
};

let inventoryUpdate = (brand, amount) => {
  const data = document.querySelector(".value-" + brand);
  data.innerText = parseInt(data.innerText) + parseInt(amount);
};

let productAction = (e) => {
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
};

// event listeners
addBtn.addEventListener("click", addProduct);
productlist.addEventListener("click", productAction);
