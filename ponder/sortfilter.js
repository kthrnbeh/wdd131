nums=[12,10,8,3];
function compareFN(a,b) {
  if (a < b) {
    return -1;
  } else if (a > b) {
    return 1;
  }
  return 0;
}
console.log(nums.sort(compareFN));



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
function compareFn(a,b) {
  if (a.price < b.price) {
    return -1;
  } else if (a.price > b.price) {
    return 1;
  }
 return 0;
}
function compareFn(a,b) {
  if (a.productName < b.productName) {
    return -1;
  } else if (a.productName > b.productName) {
    return 1;
  }
 return 0;
}

const products = [
  {
    productName: "Wireless Mouse",
    price: 29.99
  },
  {
    productName: "Bluetooth Keyboard",
    price: 49.99
  },
  {
    productName: "Laptop Stand",
    price: 39.99
  }
];

let productSort = products.sort(compareFn);
console.log(productSort);


const animals = [
  {
    name: "Lion",
    traits: ["brave", "strong", "fierce", "wild"]
  },
  {
    name: "Elephant",
    traits: ["large", "gentle", "smart", "wild"]
  },
  {
    name: "Fox",
    traits: ["sly", "quick", "clever", "wild"]
  },
  {
    name: "Dog",
    traits: ["loyal", "friendly", "playful", "cuddly"]
  },
  {
    name: "Cat",
    traits: ["quiet", "independent", "curious", "cuddly"]
  }
];
let query = "dog";
let filteredList= animals.filter(searchList);
function searchList(item){
    return item.name.toLocaleLowerCase().includes(query.toLowerCase());
}
console.log(filteredList);
let queryTrait = "strong";
let filteredTraits= animals.filter(searchTraits);
function searchTraits(item){
    return item.traits.find(trait => trait.toLowerCase().includes(queryTrait.toLowerCase()));
}
console.log(filteredTraits);

