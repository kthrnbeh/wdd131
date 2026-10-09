
const menu = document.querySelector('nav');
const btn = document.querySelector('.menu-btn');
const menu = document.querySelector('nav');
const gallery = document.querySelector('.gallery');
const modal = document.querySelector('dialog');
const modalImage = modal.querySelector('img');
const closeButton = modal.querySelector('.close-viewer');

btn.addEventListener('click',toggleMenu);

function toggleMenu() {
    menu.classList.toggle('hide');
}

// Event listener for opening the modal
gallery.addEventListener('click', openModal);

function openModal(e) {
    
// Code to show modal  - Use event parameter 'e'   
    
}
// Close modal on button click
closeButton.addEventListener('click', () => {
    modal.close();
});

// Close modal if clicking outside the image
modal.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.close();
    }
});
          