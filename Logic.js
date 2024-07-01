

const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

function ToggleMenu()
{
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
}