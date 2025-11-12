document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navbarMenu = document.querySelector("ul.menu");
  const dropdowns = document.querySelectorAll(".dropdown");

  // Toggle main menu
  menuToggle.addEventListener("click", () => {
    navbarMenu.classList.toggle("active");
    menuToggle.classList.toggle("open");
  });

  // Mobile dropdown toggle
  dropdowns.forEach(dropdown => {
    dropdown.addEventListener("click", () => {
      if (window.innerWidth <= 900) {
        dropdown.classList.toggle("active");
      }
    });
  });
});
