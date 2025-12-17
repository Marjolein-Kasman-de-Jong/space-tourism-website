const mainNavMenuButtons = document.querySelectorAll(".main-nav-menu-button");
const mainNavMenu = document.getElementById("main-nav");

mainNavMenuButtons.forEach(button => {
  button.addEventListener("click", () => {
    mainNavMenu.classList.toggle("open");
  });
});

const currentPage = window.location.pathname.split("/").pop() || "index.html";
const navLinks = document.querySelectorAll(".main-nav-item a");

navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");

    if (linkPage === currentPage) {
        link.closest("li").classList.add("current");
    }
});