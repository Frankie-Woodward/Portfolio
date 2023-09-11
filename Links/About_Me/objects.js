
document.addEventListener('DOMContentLoaded', function () {
    const homeLink = document.querySelector('.nav-link.active');

    homeLink.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent the default link behavior
        window.location.href = "../../index.html"; // Navigate to the same URL
    });
});

const dark_modeBtn = document.querySelector('.dark_mode');
const body = document.body;
const leftContent = document.querySelector('.left_content');
const rightContent = document.querySelector('.right_content');
const header = document.querySelector('header');
const footer = document.querySelector('footer');

const lightHeader = 'fixed linear-gradient(to bottom, #c0d5f7, var(--bs-primary-bg-subtle))';
const lightFooter = 'background-color: rgb(69, 111, 196)';

const lightGradient = 'linear-gradient(to top, #2b5db3, var(--bs-primary-bg-subtle))';
const mainLightMode =  'rgba(12, 64, 174, 0.73)'; 
const mainLightBorder = 'rgb(38, 38, 198)';

const darkGradient = 'linear-gradient(to bottom, rgb(7, 6, 110), rgb(17, 21, 28))';
const mainDarkMode = 'rgba(182, 192, 219, 0.73)';
const mainBorder = 'rgba(71, 115, 209, 0.73)';

const darkHeader = 'rgba(7, 27, 71, 0.73)';
const darkFooter = 'rgba(7, 27, 71, 0.73)';

let isDarkMode = false;

dark_modeBtn.addEventListener('click', function() {
    if (isDarkMode) {
        body.style.backgroundImage = lightGradient;
        leftContent.style.backgroundColor = mainLightMode;
        leftContent.style.borderColor = mainLightBorder;
        rightContent.style.backgroundColor = mainLightMode;
        rightContent.style.borderColor = mainLightBorder;
        header.style.backgroundImage = lightHeader;
        footer.style.backgroundColor = lightFooter;
    }
    else {
    body.style.backgroundImage = darkGradient;
    leftContent.style.backgroundColor = mainDarkMode;
    leftContent.style.borderColor = mainBorder;
    rightContent.style.backgroundColor = mainDarkMode;
    rightContent.style.borderColor = mainBorder;
    footer.style.backgroundColor = darkFooter;
    header.style.backgroundColor = darkHeader;
} 
isDarkMode = !isDarkMode;
});

// Personal Images inside of carousel
let currentImgIndex = 0;
let previousImgIndex = 0;

const images = document.getElementsByClassName('images');

const next = document.querySelector('.next')
const prev = document.querySelector('.prev')

next.addEventListener('click', function() {
    previousImgIndex = currentImgIndex;
    currentImgIndex++
    images[previousImgIndex].style.display = 'none';
    if (currentImgIndex >= images.length) {
        currentImgIndex = 0;
    }
    images[currentImgIndex].style.display = "block"
})

prev.addEventListener('click', function() {
    images[currentImgIndex].style.display = 'none';
    currentImgIndex = previousImgIndex
    previousImgIndex--
    if (currentImgIndex < 0) {
        currentImgIndex = images.length - 1;
    }
    images[currentImgIndex].style.display = 'block';
})