let names = ["Danny", "Joe", "Sarah", "Molly", "Joe"];
let names2 = ["John", "Tom"];
let names3 = ["Dellie", "Smith"];
let namesCopy = [...names];
let nums = [1, 2, 3, 4, [5, 6, [7, 8]], 9];


// let stringNames = names.toString();
// let stringNames = names.join(' and ');
// console.log(stringNames);

//concat
let joined = names.concat(names2, names3);
// console.log(joined);

//splice() - mutates the original array use toSpliced() which is immutable
namesCopy.splice(1, 1);
// console.log(namesCopy);

// names.splice(1, 2, 'Bill', 'Bob');
// console.log(names);


//slice() - does not mutate the original array
//just takes a copy/slice of the original array from the start and end index specified
let slice = names.slice(1, 3);
// console.log(slice);

//indexOf() - find index of a certain value in the array

let index = names.indexOf('Joe');
// console.log(index);

//lastIndexOf() - finding the last occurence index of a specified element in the array
let lastIndex = names.lastIndexOf('Joe');
// console.log(lastIndex);


//flat() - flattens the array by default it flattens by 1 level, you can specify the number of levels according to your needs or pass infinity which will flat all the levels down for you
let flat = nums.flat(Infinity);
// console.log(flat);

//Higher order array methods
//there are methods that accept functions as arguments and/or return a function
//forEach() - loops over each elements in the array

let count = 0;
names.forEach((n)=>{
  count++;
  console.log(n);
  
});
console.log(count);

//forEach is similar to this for loop
// for(let i = 0; i < names.length; i++){
//   console.log(names[i]);
// };

//map() - loops over each elements and returns a new array
let nums2 = [1, 2, 3, 4, 5, 6];

let doubled = nums2.map(n=> n * 2);
// console.log(doubled);

//filter() - filter elements that match the condition
let posts = [
  {title: 'post 1', author: 'Dan'},
  {title: 'post 2', author: 'Dan'},
  {title: 'post 3', author: 'Sarah'}

];

let dansPosts = posts.filter(p => p.author === 'Dan');
console.log(dansPosts);

//reduce() - reduces the elements in the array down to a single value

//10 - is the value we want to start counting from which is optional to specify
let nums3 = [1, 2, 3, 4, 5, 6];

let total = nums3.reduce((total, currentValue)=> total + currentValue, 10);
console.log(total);

//finding the max value in an array using reduce()
//anything bigger than -Infinity is going to be the new value for a
// let maxVal = nums3.reduce((a, b) => Math.max(a, b), -Infinity);
let maxVal = nums3.reduce((a, b) => a > b ? a : b);

console.log(maxVal);

//some() - loops through the array and check if any single elements meets the specified condition then it returns true or false
let isGreaterThan5 = nums3.some(num => num > 5);
console.log(isGreaterThan5);

//every() - loops through the array and check if every single elements meets the specified condition then it returns true or false

let allGreaterThan0 = nums3.every(n=> n > 0);
console.log(allGreaterThan0);

//find() - find a certain value in an array
let stock = [
  {item: 'Ketchup', Quantity: 32},
  {item: 'Mayo', Quantity: 9},
  {item: 'Hot sause', Quantity: 12}
];

let Mayo = stock.find(s => s.item === 'Mayo');
console.log(Mayo.Quantity);

//findIndex() - finds the index of a certain value in an array

let MayoIndex = stock.findIndex(s => s.item === 'Mayo');
console.log(MayoIndex);

//sort() - Arranges the elements in the array in a specified order either ascending or descending

let names4 = ["Joe", "Sarah", "Danny", "Molly"];

let alph = names4.sort();
console.log(alph);

//one digit numbers are sorted correctly with javascript but two digit numbers brings complication that's why there is need of a comparator to order the numbers in javascript
const nums4 = [2, 4, 11, 8, 5];

let sorted = nums4.sort((a, b) => b - a);

console.log(sorted);