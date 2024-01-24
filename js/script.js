const menuToggle = document.querySelector(".menu-toggle");
const spanToggle = document.querySelectorAll(".menu-toggle span");
const menuLink = document.querySelector(".menu ul");
const searchMenu = document.querySelector(".search img");
const showSearch = document.querySelector(".search input");
const nav = document.querySelector("nav");

// Toggle Menu
menuToggle.addEventListener("click", () => {
  const spanArray = [...spanToggle];

  spanArray.map((e) => {
    return e.classList.toggle("active");
  });
  menuLink.classList.toggle("active");
});

// Search Menu
searchMenu.addEventListener("click", () => {
  showSearch.classList.toggle("active");
});
