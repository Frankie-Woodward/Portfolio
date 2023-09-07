
const resBtn = document.getElementById('resumeBtn');  //openModal button
const modal = document.getElementById('resumeModal');  //modal for id
const close = document.getElementById('close');  // id for close to close modal

// Function to change modal display to 'block'

const myModal = function () {
    modal.style.display = 'block';
}
resBtn.addEventListener('click', myModal);

const closeModal = function () {
    modal.style.display = 'none';
}
close.addEventListener('click', closeModal);


