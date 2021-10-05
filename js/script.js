const myNav = document.querySelector(".nav");
const faBars = document.querySelector(".fa-bars");
const faClose = document.querySelector(".fa-times");

window.onscroll = function () {
  if (
    document.body.scrollTop >= 100 ||
    document.documentElement.scrollTop >= 100
  ) {
    myNav.classList.add("nav-colored");
    faBars.classList.add("faBars-colored");
    myNav.classList.remove("nav-transparent");
  } else {
    myNav.classList.add("nav-transparent");
    myNav.classList.remove("nav-colored");
    faBars.classList.remove("faBars-colored");
  }
};

// Side overlay
const sideNav = document.querySelector("#sidenav");
faBars.addEventListener("click", () => {
  sideNav.style.width = "250px";
});
faClose.addEventListener("click", () => {
  sideNav.style.width = "0px";
});
