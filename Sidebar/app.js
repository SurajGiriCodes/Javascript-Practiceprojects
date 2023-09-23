const menubtn = document.querySelector(".nav-toggle");
const navbar = document.querySelector(".navbar");
const closebtn = document.querySelector(".close-btn");

menubtn.addEventListener("click", function () {
  navbar.classList.toggle("navbar-show");
});

closebtn.addEventListener("click", function () {
  navbar.classList.remove("navbar-show");
});
