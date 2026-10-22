//forEach
const steps =['one','two','three']
//steps.forEach(function(item)){
   // console.log(item);
//}
steps.forEach(showSteps);
function showSteps(step){
    console.log(step);
};
//.map
let myList=document.querySelector('myList');
const stepHtml =steps.map(listTemplate);
function listTemplate(step){
    return `<li>$(step)</li>`
};
myList.innerHtml=stepsHtml.join('');

let grades = ['A', 'B', 'C'];
let point;
let gpaPoints=grades.map(convert);

function convert(grade) {
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
          
