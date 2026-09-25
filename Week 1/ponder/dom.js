const title = document.querySelector('h1');

console.log(title);

title.textContent = 'Web Page Components';
let topics = document.querySelectorAll('#topics');
//topics.style.color= 'red';

document.getElementById('topics').style.color = 'purple';

let list=document.querySelector('list');

list.style.border = '3px solid black';

let paragraphs = document.querySelectorAll('p');

//para.style.backgroundColor = 'lightblue';

para.classList.add('background');

//document.querySelector('body').classList.add('background');
let image=document.querySelector('img');
image.setAttribute('src', 'images/web.png');


let selectElem = document.getElementById('webdevlist');
selectElem.addEventListener('change', function(){
    let codeValue = selectElem.value;
    console.log(codeValue);
    document.getElementById('code').style.color = 'red';
})
                