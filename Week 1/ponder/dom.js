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