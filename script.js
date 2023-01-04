const productCardPlanWrapers = document.querySelectorAll(
  ".product-card__plan-wrapper"
);
const productCardPlanCurrent = document.querySelectorAll(
  ".product-card__plan-current"
);
const productCardPlans = document.querySelectorAll(".product-card__plan");

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

function choosePlan(elem) {
  elem.addEventListener("click", () => {
    elem.parentNode.parentNode.childNodes[1].innerHTML = elem.innerHTML;
  });
}

productCardPlanWrapers.forEach((elem) => {
  elem.addEventListener(
    "click",
    toggleProductCardPlansActive(productCardPlanWrapers)
  );
});

productCardPlans.forEach((elem) => {
  choosePlan(elem);
});

document.querySelector("body").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-card__plan-wrapper")) {
    productCardPlanWrapers.forEach((elem) => {
      removeProductCardPlansActive(elem);
    });
  }
});
