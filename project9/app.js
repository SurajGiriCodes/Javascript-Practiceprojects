const items = [
  {
    id: 1,
    img: `./images/img-2.jpg`,
    name: "Diner Double",
    price: "RS 150",
    category: "lunch",
    details:
      "vaporware iPhone mumblecore selvage raw denim slow-carb leggings gochujang helvetica man braid jianbing. Marfa thundercats",
  },
  {
    id: 2,
    img: `./images/img-3.jpg`,
    name: "Godzilla Milkshake",
    price: "RS 170",
    category: "snakes",
    details:
      "ombucha chillwave fanny pack 3 wolf moon street art photo booth before they sold out organic viral.",
  },
  {
    id: 3,
    img: `./images/img-4.jpg`,
    name: "Country Delight",
    price: "RS 250",
    category: "breakfast",
    details:
      "Shabby chic keffiyeh neutra snackwave pork belly shoreditch. Prism austin mlkshk truffaut,",
  },
  {
    id: 4,
    img: `./images/img-5.jpg`,
    name: "Egg Attack",
    price: "RS 200",
    category: "lunch",
    details:
      "franzen vegan pabst bicycle rights kickstarter pinterest meditation farm-to-table 90's pop-up",
  },
  {
    id: 5,
    img: `./images/img-8.jpg`,
    name: "Oreo Dream",
    price: "RS 250",
    category: "snakes",
    details:
      "Portland chicharrones ethical edison bulb, palo santo craft beer chia heirloom iPhone everydays",
  },
  {
    id: 6,
    img: `./images/img-6.jpg`,
    name: "Bacon Overflow",
    category: "snakes",
    price: "RS 350",
    details:
      "carry jianbing normcore freegan. Viral single-origin coffee live-edge, pork belly cloud bread iceland put a bird",
  },
  {
    id: 7,
    img: `./images/img-7.jpg`,
    name: "American Classic",
    price: "RS 230",
    category: "snakes",
    details:
      "on it tumblr kickstarter thundercats migas everyday carry squid palo santo leggings. Food truck truffaut",
  },
  {
    id: 8,
    img: `./images/img-9.jpg`,
    name: "Quarantine Buddy",
    price: "RS 150",
    category: "dinner",
    details:
      "skateboard fam synth authentic semiotics. Live-edge lyft af, edison bulb yuccie crucifix microdosing.",
  },
];

const section = document.querySelector(".section-center");
const container = document.querySelector(".filter");

//load items
window.addEventListener("DOMContentLoaded", function () {
  menuDisplayItems(items);
  displaybuttons();
});

function menuDisplayItems(menuitems) {
  let menuDisplay = menuitems.map(function (item) {
    return `<article class="items">
    <img class="imgclass" src=${item.img} alt=${item.name} />
    <div class="items-det">
      <header>
        <h4>${item.name}</h4>
        <h4 class="price">${item.price}</h4>
      </header>
      <p class="details">
        ${item.details}
      </p>
    </div>
  </article>`;
  });
  menuDisplay = menuDisplay.join("");
  section.innerHTML = menuDisplay;
}

function displaybuttons() {
  const categories = items.reduce(
    function (values, item) {
      if (!values.includes(item.category)) {
        values.push(item.category);
      }
      return values;
    },
    ["all"]
  );
  const categoryBtn = categories
    .map(function (category) {
      return `<button class="filter-btn" data-id=${category}>${category}</button>`;
    })
    .join("");
  container.innerHTML = categoryBtn;
  const filterBtn = document.querySelectorAll(".filter-btn");

  //filter
  filterBtn.forEach(function (btn) {
    btn.addEventListener("click", function (e) {
      const category = e.currentTarget.dataset.id;
      const categoryItems = items.filter(function (menuItem) {
        // console.log(menuItem.category);
        if (menuItem.category === category) {
          return menuItem;
        }
      });
      console.log(categoryItems);
      if (category === "all") {
        menuDisplayItems(items);
        // console.log("igot it");
      } else {
        menuDisplayItems(categoryItems);
      }
    });
  });
}
