
// JavaScript 
const navBars = document.querySelector('.nav-bars');
const linkNav = document.querySelector('.link-nav');
const iconNav = document.querySelector('.icon-nav');

navBars.addEventListener('click', () => {
    linkNav.classList.toggle('active');
    iconNav.classList.toggle('active');
});
