const btnToggle = document.querySelector(".nav-toggle");
const navigates = document.querySelector(".navigate");

btnToggle.addEventListener("click", function () {
  // if (navigates.classList.contains("show-navigate")) {
  //   navigates.classList.remove("show-navigate");
  // } else {
  //   navigates.classList.add("show-navigate");
  // }
  navigates.classList.toggle("show-navigate");
});
