const navMenuBurger = document.getElementById('nav-burger');
const navBar = document.getElementById('nav-bar');

navMenuBurger.addEventListener('click', (e) => {
    toggleMenu();
})

navMenuBurger.addEventListener('keypress', (e) => {
    e.preventDefault();
    if (e.key === 'Enter')
        toggleMenu();
})

const toggleMenu = () => {
    navMenuBurger.getElementsByClassName('menu')[0]
        .classList.toggle('active');
    navBar.classList.toggle('active');
}