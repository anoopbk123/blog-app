// Grab elements
const selectElement = selector => {
    const element = document.querySelector(selector);
    if(element) return element;
    throw new Error(`${selector} is not found`);
};
//Nav styles on scroll
const scrollHeader = () => {
    const headerElement = selectElement('#header');
    if(this.scrollY >= 15){
        headerElement.classList.add('activated');
    }
    else{
        headerElement.classList.remove('activated');
    }
};
window.addEventListener('scroll', scrollHeader);
// Open menu & search pop-up
const menuToggleIcon = selectElement('#menu-toggle-icon');
const toggleMenu = () => {
    const mobileMenu = selectElement('#menu');
    mobileMenu.classList.toggle('activated');
    menuToggleIcon.classList.toggle('activated');
};
menuToggleIcon.addEventListener('click', toggleMenu);
// Open/Close search form popup
const formOpenBtn = selectElement("#search-icon");
const formCloseBtn = selectElement("#form-close-btn");
const searchFormContainer = selectElement("#search-form-container");

formOpenBtn.addEventListener('click', () => {
    searchFormContainer.classList.add('activated');
})
formCloseBtn.addEventListener('click', () => {
    searchFormContainer.classList.remove('activated');
});
// -- Close the search form popup on ESC keypress
window.addEventListener('keyup', event => {
    if(event.key === 'Escape') searchFormContainer.classList.remove('activated');
})
// Switch theme/add to local storage
const bodyElement = document.body;
const currentTheme = localStorage.getItem('currentTheme');
if(currentTheme){
    bodyElement.classList.add('light-theme')
}
const themeToggleBtn = selectElement('#theme-toggle-btn');
themeToggleBtn.addEventListener('click', () => {
    bodyElement.classList.toggle('light-theme');

    if(bodyElement.classList.contains('light-theme')){
        localStorage.setItem('currentTheme', 'light-theme');
    }
    else{
        localStorage.removeItem('currentTheme');
    }
})
// Swiper
const swiper = new Swiper(".swiper", {
    // How many slides to show
    slidesPerView: 1,
    // How much space between slides
    spaceBetween: 20,
    // Make the next and previous buttons work
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    // Make the pagination indicators work
    pagination: {
        el: '.swiper-pagination'
    },
    //Responsive breakpoints for how many slides to show at that view
    breakpoints: {
        // 700px and up shoes 2 slides
        700: {
          slidesPerView: 2
        },
        // 1200px and up shoes 3 slides
        1200: {
            slidesPerView: 3
        }
    }   
});