nums=[12,10,8,3];
console.log(nums.sort(compareFN));

function compareFn(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
 return 0;
}

const simpleList = ["oranges", "grapes", "lemons", "apples", "Bananas", "watermelons", "coconuts", "broccoli", "mango"];
let simpleSort =simpleList.sort();
console.log(simpleSort);
let lowerList =simpleList.map(function(fruit){
    return fruit.toLocaleLowerCase();
})
let lowerSort =lowerList.sort();
console.log(lowerSort);

let searchTerm="co";
let filterFruit =lowerSort.filter(searchFruit);

function searchFruit(item){
    return item.includes(searchTerm);
}
console.log(filterFruit);
