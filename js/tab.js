const tabItem = document.querySelectorAll(".choose__menu-btn");
const tabContent = document.querySelectorAll(".cars");

tabItem.forEach(function (element) {
  element.addEventListener("click", open);
});

function open(e) {
  const tabTarget = e.currentTarget;
  const button = tabTarget.dataset.button;

  tabItem.forEach(function (el) {
    el.classList.remove("choose__menu-btn-active");
  });
  tabTarget.classList.add("choose__menu-btn-active");

  tabContent.forEach(function (el) {
    el.classList.remove("cars--active");
  });

  document.querySelector(`#${button}`).classList.add("cars--active");
}
