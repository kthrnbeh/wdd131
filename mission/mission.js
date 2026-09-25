
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = 'black';
        logo.src = 'byui-logo-white.webp';
        body.style.color = 'white';
    } 
    else if (current == 'light') {
        // code for changes to colors and logo
        body.style.backgroundColor = 'white';
        logo.src = 'byui-logo-blue.webp';
        body.style.color = 'black';
    }
    else {
        // code for changes to colors and logo
        body.style.backgroundColor = 'white';
    } 
}           
                    