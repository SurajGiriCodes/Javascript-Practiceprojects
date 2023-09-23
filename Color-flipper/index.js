const colors = [
  "red",
  "orange",
  "yellow",
  "green",
  "blue",
  "purple",
  "pink",
  "brown",
  "silver",
  "gray",
  "aqua",
];

let index = 0;

const btn = document.querySelector(".container button");
const btnText = document.querySelector("span");

btn.addEventListener("click", function onClick() {
  document.body.style.backgroundColor = colors[index];
  ++index;
  index = index >= colors.length - 1 ? 0 : index + 0;
  btnText.textContent = colors[index];
});
