const productCardPlanWrapers = document.querySelectorAll(
  ".product-card__plan-wrapper"
);
const productCardPlanCurrent = document.querySelectorAll(
  ".product-card__plan-current"
);
const productCardPlans = document.querySelectorAll(".product-card__plan");
const productCardDiscount = document.querySelectorAll(
  ".product-card__discount"
);
const productCardReducedPrice = document.querySelectorAll(
  ".product-card__reduce"
);
const productCardPrice = document.querySelectorAll(".product-card__prize");

function calcProductCardDiscount(elem) {
  let chosenPlanYear = elem.childNodes[1].childNodes[2].textContent.trim();
  let currentDiscount =
    elem.parentNode.parentNode.parentNode.childNodes[7].childNodes[1]
      .childNodes[1];

  currentDiscount.textContent =
    chosenPlanYear == "1 Year" ? 20 : chosenPlanYear == "2 Year" ? 30 : 50;
}

function calcProductCardReducedPrice(elem) {
  let chosenPlanYear = elem.childNodes[1].childNodes[2].textContent.trim();
  let currentReducedPrice =
    elem.parentNode.parentNode.parentNode.childNodes[7].childNodes[3];

  currentReducedPrice.textContent =
    chosenPlanYear == "1 Year"
      ? "$59.99"
      : chosenPlanYear == "2 Year"
      ? "$89.99"
      : "$149.99";
}

function calcProductCardPrice(elem) {
  let chosenPlanYear = elem.childNodes[1].childNodes[2].textContent.trim();
  let currentPrice =
    elem.parentNode.parentNode.parentNode.childNodes[7].childNodes[5];

  currentPrice.innerHTML =
    chosenPlanYear == "1 Year"
      ? "$39<sup class='cent'>,99*</sup>"
      : chosenPlanYear == "2 Year"
      ? "$59<sup class='cent'>,99*</sup>"
      : "99<sup class='cent'>,99*</sup>";
}

function choosePlan(elem) {
  elem.addEventListener("click", () => {
    elem.parentNode.parentNode.childNodes[1].innerHTML = elem.innerHTML;
    calcProductCardDiscount(elem);
    calcProductCardReducedPrice(elem);
    calcProductCardPrice(elem);
  });
}

productCardPlans.forEach((elem) => {
  choosePlan(elem);
});

function removeProductCardPlansActive(elem) {
  elem.classList.remove("product-card__plan-wrapper--active");
}

function toggleProductCardPlansActive(elems) {
  elems.forEach((item) => {
    item.addEventListener("click", () => {
      item.classList.toggle("product-card__plan-wrapper--active");
    });
  });
}

productCardPlanWrapers.forEach((elem) => {
  elem.addEventListener(
    "click",
    toggleProductCardPlansActive(productCardPlanWrapers)
  );
});

document.querySelector("body").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-card__plan-wrapper")) {
    productCardPlanWrapers.forEach((elem) => {
      removeProductCardPlansActive(elem);
    });
  }
});
