/*
let numbers = [1, 2, 4, 8];

// console.log(numbers);

numbers[4] = 16;

// console.log(numbers);

numbers.push(32);

// console.log(numbers);

numbers.unshift(0);

// console.log(numbers);

let lastNumber = numbers.pop();

// console.log(numbers);

// console.log(lastNumber);

let firstNumber = numbers.shift();

// console.log(numbers);

// console.log(firstNumber);

numbers.splice(4, 1);

// console.log(numbers);

//Loops in Arrays

// let list = [
//   'milk',
//   'eggs',
//   'butter',
//   'bread',
//   'bacon',
//   'sausage',
//   'juice'
// ];

let list = [
  {text: 'milk', cost: 4, need: false},
  {text: 'egg', cost: 10, need: true},
  {text: 'butter', cost: 5, need: false},
  {text: 'bread', cost: 3, need: true},
  {text: 'bacon', cost: 12, need: true}

];

list.sort((a, b)=>{
  if(a.text === b.text) return 0;

  if(a.text > b.text) return -1;

  return 1;

  // return a === b ? 0 : a > b ? -1 : 1;
});

let html = '';
let total = 0;

// list.sort().reverse();
// list.sort((a, b)=>{
//   // if(a === b) return 0;

//   // if(a > b) return -1;

//   // return 1;

//   return a === b ? 0 : a > b ? -1 : 1;
// });


list.forEach(({text, cost, need}) => {
  if(need){
    html += `<li>${text}</li>`;
    total +=cost;
  }
});

//keys = index, values = items [index, value]
//entries() returns an iterator does not return an index, you need to destructure to get the index

// for(let [index, {text, cost, need}] of list.entries()){
//   if(need){
//     html += `<li>${index} ${text}</li>`;
//     total +=cost;
//   }
// }

// for(let index = 0; index < list.length; index++){
//   let item = list[index];

//   if(item.need){
//     html += `<li>${item.text}</li>`;
//     total +=item.cost;
//   }
// }

let index = 0;
let item;

// while(item = list[index++]){
//   if(item.need){
//     html += `<li>${item.text}</li>`;
//     total +=item.cost;
//   }

// }

document.getElementById('list').innerHTML = html;
document.getElementById('cost').innerHTML = `$${total}`;

*/
/*
let list = [
  'bacon',
  'milk',
  'eggs',
  'butter',
  'bread',
  'bacon',
  'sausage',
  'juice',
  {text: 'bread', cost: 3}
];

// console.log(list.indexOf('bacon', 1));
// console.log(list.lastIndexOf('bacon'));

console.log(list.findIndex((item)=>{
  return item.text === 'bread';
}));
*/

/*
let numbers = [
  5,
  9,
  23,
  54,
  97,
  1
];

let list = [
  {text: 'milk', cost: 4, need: false},
  {text: 'eggs', cost: 10, need: true},
  {text: 'butter', cost: 5, need: false},
  {text: 'bread', cost: 3, need: true},
  {text: 'bacon', cost: 12, need: true}

];

let item = list.find((element) => {
  return element.cost < 5;
})

// let even = numbers.find(number => number % 2 === 0);

// console.log(even);

// console.log(numbers.includes(24));
// console.log(list.some((item)=>{
//   return item.need;
// }));

// console.log(numbers.every((num)=> num % 2 !== 0));
*/

/*
let odd = [1, 3, 5, 7, 9];
let even = [2, 4, 6, 8, 10];
let letters = ['a', 'b', 'c', 'd', 'e'];

// let numbers = odd.concat(even, letters);
let alphanumeric = [...odd, ...even, ...letters];



// console.log(numbers);
console.log(odd);
console.log(even);
console.log(letters);
console.log(alphanumeric);
*/
/*
let list = [
  {text: 'milk', cost: 4, need: false},
  {text: 'eggs', cost: 10, need: true},
  {text: 'butter', cost: 5, need: false},
  {text: 'bread', cost: 3, need: true},
  {text: 'bacon', cost: 12, need: true}

];


let copy = list.slice(0, 3);

// console.log(copy[0] === list[0]);
console.log(copy);
*/
 /*
let list = [
  'bacon',
  'milk',
  'eggs',
  'butter',
  'bread'
];

let html = list.join("<br/>");

document.getElementById('list').innerHTML = html;
*/

// Transforming Array to a new Array
let list = [
  {text: 'milk', cost: 4, need: false},
  {text: 'eggs', cost: 10, need: true},
  {text: 'butter', cost: 5, need: false},
  {text: 'bread', cost: 3, need: true},
  {text: 'bacon', cost: 12, need: true}

];

// let listElements = list.map(({text, cost, need})=>{
//   if(need){
//     return `<li>${text} $${cost}</li>`;
//   }else{
//     return '';
//   }
// });

let listElements = list
                    .filter((item)=> item.need && item.cost < 12)
                    .map(({text, cost}) => `<li>${text} $${cost}</li>`)
                    .join('');

document.getElementById('list').innerHTML = listElements;