// Main nav

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
  };
});

// Tabs

function openTab(tabNumber) {
  !tabNumber ? tabNumber = 1 : tabNumber;

  const tabImages = document.querySelectorAll(".tab-image");
  const tabTexts = document.querySelectorAll(".tab-text");
  const tabButtons = document.querySelectorAll(".tab-button");

  tabImages.forEach(img => img.classList.remove("active"));
  tabTexts.forEach(txt => txt.classList.remove("active"));
  tabButtons.forEach(btn => btn.classList.remove("active"));

  document.getElementById(`tab-image-${tabNumber}`).classList.add("active");
  document.getElementById(`tab-text-${tabNumber}`).classList.add("active");
  document.getElementById(`tab-button-${tabNumber}`).classList.add("active");
}

openTab();