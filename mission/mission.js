
let selectElem = document.querySelector('select');
let logo = document.querySelector('img');
let body = document.querySelector('body');

selectElem.addEventListener('change', changeTheme);

function changeTheme() {
    let current = selectElem.value;
    if (current == 'dark') {
        // code for changes to colors and logo
        body.style.backgroundColor = 'black';
    } 
    else if (current == 'light') {
        // code for changes to colors and logo
        body.style.backgroundColor = 'white';
    }
    else {
        // code for changes to colors and logo
        body.style.backgroundColor = 'white';
    } 
}           
                    