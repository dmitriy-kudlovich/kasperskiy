const productCardPlans = document.querySelectorAll(
  ".product-card__plan-wrapper"
);

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

productCardPlans.forEach((elem) => {
  elem.addEventListener(
    "click",
    toggleProductCardPlansActive(productCardPlans)
  );
});

document.querySelector("body").addEventListener("click", (event) => {
  if (!event.target.classList.contains("product-card__plan-wrapper")) {
    console.log(event.target);
    productCardPlans.forEach((elem) => {
      removeProductCardPlansActive(elem);
    });
  }
});
