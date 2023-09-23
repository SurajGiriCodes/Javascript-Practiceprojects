const colors = ["#839073", "#7CAE7A", "#D4CBE5", "#BEA8AA", "#9E9885"];

const btn = document.querySelector(".container button");
const span = document.querySelector("span");

let index = 0;
btn.addEventListener("click", function onClick() {
  document.body.style.backgroundColor = colors[index];
  ++index;
  index = index >= colors.length - 1 ? 0 : index + 0;
  span.textContent = colors[index];
});
