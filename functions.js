// toggle for dark mode background
// Message to email box
// Comment box that displays in a thread
// carousel of cool pics with information container 



// carousel of project pics with information container 
// modal and carousel



// click-able image to enter site
const enterBtn = document.querySelector('.enter_here');
enterBtn.addEventListener('click', function() {
    const newPageUrl = 'Links/About_Me/about_me.html';
    window.location.href = newPageUrl;
});


const dark_modeBtn = document.querySelector('.dark_mode');
const body = document.body;
const mainSection = document.querySelector('.main_section');
const header = document.querySelector('header');
const footer = document.querySelector('footer')

// const darkHeader = ;
// const darkFooter = ;
const darkGradient = 'linear-gradient(to bottom, rgb(7, 6, 110), rgb(17, 21, 28))';
const mainDarkMode = 'rgba(182, 192, 219, 0.73)';
const mainDarkBorder = 'rgba(71, 115, 209, 0.73)';

const lightHeader = 'fixed linear-gradient(to bottom, #c0d5f7, var(--bs-primary-bg-subtle))';
const lightFooter = 'background-color: rgb(69, 111, 196)';
const lightGradient = 'linear-gradient(to top, #2b5db3, var(--bs-primary-bg-subtle))';
const mainLightMode =  'rgba(12, 64, 174, 0.73)'; 
const mainLightBorder = 'rgb(38, 38, 198)';

let isDarkMode = false;

dark_modeBtn.addEventListener('click', function() {
    if (isDarkMode) {
        body.style.backgroundImage = lightGradient;
        mainSection.style.backgroundColor = mainLightMode;
        mainSection.style.borderColor = mainLightBorder;
        header.style.backgroundImage = lightHeader;
        footer.style.backgroundColor = lightFooter;
    }
    else {
        body.style.backgroundImage = darkGradient;
        mainSection.style.backgroundColor = mainDarkMode;
        mainSection.style.borderColor = mainDarkBorder;
    }
    isDarkMode = !isDarkMode;
});

document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.nav-link.active');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "index.html"; 
    });
});



