
document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.nav-link.active');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "/../../index.html"; // Navigate to the same URL
    });
});
const dark_modeBtn = document.querySelector('.dark_mode');
const body = document.body;
const leftContent = document.querySelector('.left_content');
const rightContent = document.querySelector('.right_content');

const lightGradient = 'linear-gradient(to bottom, rgb(24, 86, 195), var(--bs-primary-bg-subtle)';
const mainLightMode =  'rgba(12, 64, 174, 0.73)'; 
const mainLightBorder = 'rgb(38, 38, 198)';

const darkGradient = 'linear-gradient(to bottom, rgb(7, 6, 110), rgb(17, 21, 28))';
const mainDarkMode = 'rgba(182, 192, 219, 0.73)';
const mainBorder = 'rgba(71, 115, 209, 0.73)';

let isDarkMode = false;

dark_modeBtn.addEventListener('click', function() {
    if (isDarkMode) {
        body.style.backgroundImage = lightGradient;
        leftContent.style.backgroundColor = mainLightMode;
        leftContent.style.borderColor = mainLightBorder;
        rightContent.style.backgroundColor = mainLightMode;
        rightContent.style.borderColor = mainLightBorder;
    }
    else {
    body.style.backgroundImage = darkGradient;
    leftContent.style.backgroundColor = mainDarkMode;
    leftContent.style.borderColor = mainBorder;
    rightContent.style.backgroundColor = mainDarkMode;
    rightContent.style.borderColor = mainBorder;
} 
isDarkMode = !isDarkMode;
});

