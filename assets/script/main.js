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
    
    tabImages.forEach(tabImage => {
      tabImage.style.display = "none";
    });

    tabTexts.forEach(tabText => {
      tabText.style.display = "none";
    });

    tabButtons.forEach(tabButton => {
      tabButton.classList.remove("active");
    });

    document.getElementById(`tab-image-${tabNumber}`).style.display = "flex";
    document.getElementById(`tab-text-${tabNumber}`).style.display = "block";
    document.getElementById(`tab-button-${tabNumber}`).classList.add("active");
}

openTab();