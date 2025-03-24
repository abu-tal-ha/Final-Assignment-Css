const navBars = document.getElementById("nav-bars");
  const linkNav = document.getElementById("link-nav");

  navBars.addEventListener("click", () => {
    linkNav.classList.toggle("active");
  });