const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul'); 

menuToggle.addEventListener('click', function () {
    nav.classList.toggle('slide');
});

//javascript for navigation bar effect on scroll
window.addEventListener("scroll", function(){
    var header = document.querySelector("nav");
    header.classList.toggle('sticky', window.scrollY > 0);
  });