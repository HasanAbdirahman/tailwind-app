const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileBtn = document.getElementById("mobile-menu");
  const toggleMenu = () => {
    mobileBtn.classList.toggle("hidden");
    mobileBtn.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };
  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileBtn.addEventListener("click", toggleMenu);
};
// we let the dom to load first
document.addEventListener("DOMContentLoaded", initApp);
