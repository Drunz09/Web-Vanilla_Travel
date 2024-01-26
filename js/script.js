// Toggle Menu Opem
const menuToggle = document.querySelector(".menu-toggle");
const spanToggle = document.querySelectorAll(".menu-toggle span");
const menuLink = document.querySelector(".menu ul");
const menuLi = document.querySelectorAll(".menu ul li a");

menuToggle.addEventListener("click", () => {
  menuLink.classList.toggle("active");
  spanToggle.forEach((e) => {
    return e.classList.toggle("active");
  });

  menuLi.forEach((e) =>
    e.addEventListener("click", () => {
      menuLink.classList.remove("active");
      spanToggle.forEach((e) => {
        return e.classList.remove("active");
      });
    })
  );
});

// Search Menu
const searchMenu = document.querySelector(".search img");
const showSearch = document.querySelector(".search input");

searchMenu.addEventListener("click", () => {
  showSearch.classList.toggle("active");
});

// NavChange
const nav = document.querySelector("nav");
const header = document.querySelector("header");

window.onscroll = () => {
  let headerHeight = header.scrollHeight;
  if (window.scrollY > headerHeight - 100) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
};
