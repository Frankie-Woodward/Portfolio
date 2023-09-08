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

const darkGradient = 'linear-gradient(to bottom, rgb(7, 6, 110), rgb(17, 21, 28))';
const mainDarkMode = 'rgba(182, 192, 219, 0.73)';
const mainBorder = 'rgba(71, 115, 209, 0.73)';
// border-color: rgb(106, 106, 141);
// background-color: rgba(71, 115, 209, 0.73)

dark_modeBtn.addEventListener('click', function() {
    body.style.backgroundImage = darkGradient;
    mainSection.style.backgroundColor = mainDarkMode;
   mainSection.style.borderColor = mainBorder;
});