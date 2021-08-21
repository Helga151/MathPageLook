const nav = document.querySelector('.navigation');
const topOfNav = nav.offsetTop;
const toggleMenu = document.querySelector('.hamburger');
const footer = document.querySelector('.footer');

var today = new Date();
var yr = today.getFullYear();
footer.textContent = `©${yr} Olga Gerlich `;

function navScroll() {
    if (topOfNav <= window.scrollY) {
        console.log('teraz');
        nav.classList.add('fixed');
    } else {
        nav.classList.remove('fixed');    
    }
}

let activeMenu = true;
toggleMenu.classList.add('hamburger--active'); //start with cross 

function slideMenu() {
    console.log(nav.offsetWidth, toggleMenu.offsetWidth);
    if(activeMenu) {
        nav.style.transform = `translateX(-${nav.offsetWidth - toggleMenu.offsetWidth - 25}px)`; //obliczyć padding
        activeMenu = false;
        toggleMenu.classList.remove('hamburger--active'); 
        nav.classList.add('rolledUp');
    }
    else {
        nav.style.transform = `translateX(0)`;
        activeMenu = true;
        toggleMenu.classList.add('hamburger--active');
        nav.classList.remove('rolledUp');
    }
}

window.addEventListener('scroll', navScroll);
toggleMenu.addEventListener('click', slideMenu)
