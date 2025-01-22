let header = document.querySelector('header');
let menu = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

// scroll
window.addEventListener('scroll', ()=>{
    header.classList.toggle('active', window.scrollY > 0);
});

// hamburger click
menu.onclick = () => {
    navbar.classList.toggle('active');
}
window.onscroll = ()=>{
    navbar.classList.remove('active');

}
