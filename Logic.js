

const navButton = document.querySelector('.nav-button');
const navMenu = document.querySelector('.nav-menu');

function ToggleMenu()
{
    navButton.classList.toggle('active');
    navMenu.classList.toggle('active');
}

const birth = new Date("2005-03-23");
const diffTime = Math.abs(new Date() - birth);
const diffYears = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 365)); 

document.getElementById("age").innerHTML = '('+ diffYears + ')';
