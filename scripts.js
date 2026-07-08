let names = ["Danny", "Joe", "Sarah", "Molly"];
let names2 = ["John", "Tom"];

// let stringNames = names.toString();
// let stringNames = names.join(' and ');
// console.log(stringNames);

//concat
let joined = names.concat(names2);
console.log(joined);

const numbers = [10, 120, 1000, 100, 23, -1];

numbers.forEach((num)=>console.log(num));

const sortedNumbers = numbers.sort((a, b)=>{
  return a === b ? 0 : a < b ? -1 : 1;
})

console.log(sortedNumbers);

const slicedNames = names.slice(2, 4);
console.log(slicedNames);

//push() returns the array length after adding the new elements to the end of the array. It does not return the new array itself.
const addNames = slicedNames.push("Dan", "Fred", 'Steve');

console.log(addNames);
console.log(slicedNames);

const spliceOperation = slicedNames.toSpliced(2, 2, "Ongalo", "Junior", "Mark");

console.log(spliceOperation);
