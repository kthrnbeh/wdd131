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