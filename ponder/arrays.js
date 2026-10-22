//forEach
const steps =['one','two','three']
//steps.forEach(function(item){
   // console.log(item);
//}
steps.forEach(showSteps);
function showSteps(step){
    console.log(step);
};
//.map
let myList = document.querySelector('#myList');
const stepHtml =steps.map(listTemplate);
function listTemplate(step){
    return `<li>${step}</li>`;
};
myList.innerHTML = stepHtml.join('');

let grades = ['A', 'B', 'C'];
let gpaPoints=grades.map(convert);

function convert(grade) {
    let points;
    switch (grade){
        case 'A':
            points = 4;
            break;
        case 'B':
            points = 3;
            break;
        case 'C':
            points = 2;
            break;
        case 'D':
            points = 1;
            break;
        case 'F':
            points = 0;
            break;
        default:
            alert('not a valid grade');
    }
    return points;
}
console.log(gpaPoints);
          
//.reduce
let totalPoints=gpaPoints.reduce(getTotal);
function getTotal(total,item){
    return total+item;
}
console.log(totalPoints);
let gpaAverage=totalPoints/gpaPoints.length;
console.log(gpaAverage);
//.filter

const words = ['watermelon', 'peach', 'apple', 'tomato', 'grape'];

const shortWords =words.filter(function(word){
    return word.length <6;
})
console.log(shortWords);
//.indexOf
const myArray=[12,34,21,54];
const luckyNumber=21;
let luckyIndex = myArray.indexOf(luckyNumber);
console.log(luckyIndex);

//dynamic content

const students = [
    {last: 'Andrus', first: 'Aaron'},
    {last: 'Masa', first:'Manny'},
    {last: 'Tanda', first: 'Tamanda'}
];
                    