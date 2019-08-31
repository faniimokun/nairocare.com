const navSlide = () => {
  const menuButton = document.querySelector(".menu");
  const nav = document.querySelector(".nav-links");
  const navLinks = document.querySelectorAll(".nav-links li");

  menuButton.addEventListener("click", () => {
    //Toggle Nav
    nav.classList.toggle("nav-active");

    //Animate Links
    navLinks.forEach((link, index) => {
      if (link.style.animation) {
        link.style.animation = "";
      } else {
        link.style.animation = `navLinkFade 0.3s ease forwards ${index / 7 +
          1}s`;
      }
    });
    //Menu Button Animation
    menuButton.classList.toggle("toggle");
  });
};

navSlide();
