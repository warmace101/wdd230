const mainnav = 
document.querySelector('.navigation')
const hambutton = 
document.querySelector('#menue');

hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});