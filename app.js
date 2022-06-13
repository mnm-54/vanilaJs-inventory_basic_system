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
  create_action_btn(
    addButton,
    `<i class="fa-solid fa-circle-plus"></i>`,
    "increment product by 1",
    "add-btn",
    action
  );

  const subButton = document.createElement("button");
  create_action_btn(
    subButton,
    `<i class="fa-solid fa-circle-minus"></i>`,
    "decrement product by 1",
    "sub-btn",
    action
  );

  // trash button
  const trashButton = document.createElement("button");
  create_action_btn(
    trashButton,
    `<i class="fa-solid fa-trash"></i>`,
    "Delete element",
    "trash-btn",
    action
  );

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

let create_action_btn = (
  element,
  innerValue,
  title,
  css_class,
  parentElement
) => {
  element.title = title;
  element.innerHTML = innerValue;
  element.classList.add(css_class);
  parentElement.appendChild(element);
};

let inventoryUpdate = (brand, amount) => {
  let data = document.querySelector(".value-" + brand);
  data.innerText = parseInt(data.innerText) + parseInt(amount);
};

let productAction = (e) => {
  let item = e.target;
  let tbldtata = item.parentElement;
  tblrw = tbldtata.parentElement;

  let currentAmount = parseInt(tblrw.childNodes[2].innerHTML);
  let brandName = tblrw.childNodes[1].innerHTML;

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
