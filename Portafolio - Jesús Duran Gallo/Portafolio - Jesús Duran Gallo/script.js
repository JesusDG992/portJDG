document.addEventListener("DOMContentLoaded", () => {
  const menu = document.getElementById("nav-menu");
  const toggle = document.querySelector(".menu-toggle");

  toggle.addEventListener("click", () => {
    menu.classList.toggle("active");
  });

  document.querySelectorAll(".nav-link").forEach(link => {
    link.addEventListener("click", () => {
      menu.classList.remove("active");
    });
  });
});