// toggle class aktif
const navbarNav = document.querySelector(".navbar-nav");

// ketika humberger menu di klik
document.querySelector("#menu").onclick = () => {
  navbarNav.classList.toggle("aktif");
};

// klik diluar sidebar untuk menghilangkan nav
const hamburger = document.querySelector("#menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("aktif");
  }
});
