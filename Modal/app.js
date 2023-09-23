const button = document.querySelector("button");
const banner = document.querySelector(".banner");
const model = document.querySelector(".module");
const cross = document.querySelector(".close-btn");

button.addEventListener("click", function () {
  model.classList.add("open-module");
});

cross.addEventListener("click", function () {
  model.classList.remove("open-module");
});
