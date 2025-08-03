// Navbar toggle
const menuBtn = document.querySelector(".menu-btn");
const cancelBtn = document.querySelector(".cancel-btn");
const navbar = document.querySelector(".navbar .menu");
menuBtn.onclick = () => {
  navbar.classList.add("active");
  menuBtn.style.display = "none";
};
cancelBtn.onclick = () => {
  navbar.classList.remove("active");
  menuBtn.style.display = "block";
};

var typed = new Typed(".typing", {
    strings: ["Web Developer", "Backend Engineer", "React Developer", "Java Programmer"],
    typeSpeed: 70,
    backSpeed: 40,
    loop: true
  });
  
// Scroll to top button
const scrollBtn = document.querySelector(".scroll-button");
window.onscroll = () => {
  scrollBtn.classList.toggle("show", window.scrollY > 500);
};

document.querySelectorAll('.circle').forEach(circle => {
    const percent = parseInt(circle.dataset.percent);
    const degree = percent * 3.6;
    circle.style.setProperty('--progress', `${degree}deg`);
  });

// Hamburger menu toggle
const mobileMenu = document.getElementById("mobile-menu");
const navLinks = document.getElementById("nav-links");

mobileMenu.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});


