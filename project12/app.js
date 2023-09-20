const btn = document.querySelectorAll(".tab-btn");
const about = document.querySelector(".about");
const content = document.querySelectorAll(".content");

about.addEventListener("click", function (e) {
  const id = e.target.dataset.id;
  if (id) {
    //remove active from other button
    btn.forEach(function (btnR) {
      btnR.classList.remove("active");
      e.target.classList.add("active");
    });
    content.forEach(function (content) {
      content.classList.remove("active");
      const paragraph = document.getElementById(id);
      paragraph.classList.add("active");
    });
  }
});
