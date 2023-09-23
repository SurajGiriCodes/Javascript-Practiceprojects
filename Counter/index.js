const btn1 = document.querySelector("#btn-1");
const btn2 = document.querySelector("#btn-2");
const btn3 = document.querySelector("#btn-3");
const span = document.querySelector("span");

let counte = 0;

btn1.addEventListener("click", function onClick() {
  counte--;
  if (counte < 0) {
    span.style.color = "red";
  }
  if (counte === 0) {
    span.style.color = "#222";
  }
  span.textContent = counte;
});

btn2.addEventListener("click", function onClick() {
  counte = 0;
  if (counte === 0) {
    span.style.color = "#222";
  }
  span.textContent = counte;
});

btn3.addEventListener("click", function onClick() {
  counte++;
  if (counte > 0) {
    span.style.color = "green";
  }
  if (counte === 0) {
    span.style.color = "#222";
  }
  span.textContent = counte;
});
