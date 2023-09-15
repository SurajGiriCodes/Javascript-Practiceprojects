const data = [
  {
    id: 1,
    Name: "Bill Anderson",
    position: "The BOSS",
    img: `./images/img2.jpg`,
    text: "Edison bulb put a bird on it humblebrag, marfa pok pok heirloom fashion axe cray stumptown venmo actually seitan. VHS farm-to-table schlitz, edison bulb pop-up 3 wolf moon tote bag street art shabby chic.",
  },

  {
    id: 2,
    Name: "Jhon Depth",
    position: "WED DEVELOPER",
    img: `./images/img3.jpg`,
    text: "I'm baby meggings twee health goth +1. Bicycle rights tumeric chartreuse before they sold out chambray pop-up. Shaman humblebrag pickled coloring book salvia hoodie, cold-pressed four dollar toast everyday carry",
  },

  {
    id: 3,
    Name: "Anna Johnson",
    position: "WED DEVELOPER",
    img: `./images/img4.jpg`,
    text: "Helvetica artisan kinfolk thundercats lumbersexual blue bottle. Disrupt glossier gastropub deep v vice franzen hell of brooklyn twee enamel pin fashion axe.photo booth jean shorts artisan narwhal.",
  },
  {
    id: 3,
    Name: "Peter Jones",
    position: "INTERN",
    img: `./images/img1.jpg`,
    text: "Sriracha literally flexitarian irony, vape marfa unicorn. Glossier tattooed 8-bit, fixie waistcoat offal activated charcoal slow-carbmarfa hell of pabst raclette post-ironic jianbing swag.",
  },
];

const cart = [];

const imgin = document.querySelector("img");
const h3 = document.querySelector("h3");
const h4 = document.querySelector("h4");
const p = document.querySelector("p");
const btn1 = document.querySelector(".SideScroll #btn2");
const btn2 = document.querySelector(".SideScroll #btn1");
const btn3 = document.querySelector(".btn3");

//set stating items
let count = 0;

//load intial item
window.addEventListener("DOMContentLoaded", function () {
  showData(count);
});

//show person based on data
function showData(person) {
  imgin.src = data[person].img;
  h3.textContent = data[person].Name;
  h4.textContent = data[person].position;
  p.textContent = data[person].text;
}

//show next person
btn1.addEventListener("click", function () {
  count++;
  if (count > data.length - 1) {
    count = 0;
  }
  showData(count);
});

//show back person
btn2.addEventListener("click", function () {
  count--;
  if (count < 0) {
    count = data.length - 1;
  }
  showData(count);
});

btn3.addEventListener("click", function () {
  count = Math.floor(Math.random() * data.length);
  showData(count);
});
