const Navbar = document.querySelector(".Navbar");
const NavbarOffsetTop = Navbar.offsetTop;
const sections = document.querySelectorAll("section");
const NavbarLinks = document.querySelectorAll(".navbar-link");
const progress = document.querySelector(".progress-bars-wrapper");
const progressBarPercents = [97, 89, 65, 70, 80, 50, 90];

window.addEventListener("scroll", () => {
mainFn();
});

const mainFn = () =>{
  if (window.pageYOffset >= Navbar.offsetTop) {
    Navbar.classList.add("sticky");
  } else {
    Navbar.classList.remove("sticky");
  }

  sections.forEach((section, i) => {
    if (window.pageYOffset >= section.offsetTop - 10) {
      NavbarLinks.forEach((navbarLink) => {
        navbarLink.classList.remove("change");
      });
      NavbarLinks[i].classList.add("change");
    }
  });

  if (window.pageYOffset + window.innerHeight >= progress.offsetTop) {
    document.querySelectorAll('.progress-percent').forEach((el, i) => {
      el.style.width = `${progressBarPercents[i]}%`;
      el.previousElementSibling.firstElementChild.textContent =
      progressBarPercents[i];
    });
  } 
}
mainFn();

//window.addEventListener('resize',() => {
//window.location.reload();
//});
