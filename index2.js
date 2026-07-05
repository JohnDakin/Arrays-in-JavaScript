let cities = ["Delhi", "Lucknow", "Bangalore", "Mumbai"]

let removedCity = cities.pop();
// console.log(cities);
// console.log(removedCity);

const words = ["HTML", "CSS", "JavaScript"];

// words.forEach(word=>console.log(word));

const numbers = [20, 10, 18, 12];

const sum = numbers.reduce((x,y)=> x + y);
// console.log(sum);

const numbers1 = [7, 14, 8, 128, 56];

const found = numbers1.find(element=>element > 10);
// console.log(found);

let city = ["Delhi", "Lucknow", "Patna", "Bangalore"];

// let sortedArray = city.sort();
let sortedArray = city.toSorted();

// console.log(sortedArray);
// console.log(city);

let numbers3 = [23, 1,45,10,230,13, 100];

let sortedNumbers3 = numbers3.toSorted((a, b)=>{
  return a === b ? 0: a > b ? 1 : -1;
});

// console.log(sortedNumbers3);
// console.log(numbers3);

let city2 = ["Delhi", "Lucknow", "Banglore"];

let pushed = city2.slice();

pushed.push("Mumbai");

// console.log(pushed);
// console.log(city2);


const words2 = ["HTML", "CSS", "JavaScript", "Python"];

const longWords = words2.filter(word=>word.length > 4);
// console.log(longWords);

// console.log(Array instanceof Object); // true
// console.log(Object instanceof Array) // false

const numbers4 = [1, 2, 3, 4, 5];

const doubled = numbers4.map(number=>number * 2);
// console.log(doubled);

// console.log(numbers4);


const names = ["John", "Dakin", "Ochieng", "Omondi"];

// const splicedMethod = names.splice(0,1,"Mike");
const splicedMethod = names.toSpliced(0,1,"Mike");


// console.log(splicedMethod);
// console.log(names);

const numbers5 = [6, 11, 9, 100, 46];
// const indexFound = numbers5.find(num=>num  === 6);
// const indexFound = numbers5.findIndex(num=>num  > 6);
// const indexFound = numbers5.findLast(num=>num  > 56);
const indexFound = numbers5.findLastIndex(num=>num  > 6);

// console.log(indexFound);

let primeNumbers = [2, 3, 5, 7];
let evenNumbers = [2, 4, 6, 8];

let joinedArrays = primeNumbers.concat(evenNumbers);

// console.log(joinedArrays.join("-"));

function elimination(array){
  let result = [];
  array.forEach(element => {
    if(!result.includes(element)){
      result.push(element);
    }
    
  });
   console.log(result);
  return result;
}

// elimination(joinedArrays);

function Computers(brand){
  this.brand = brand;
}

const Comp = new Computers("HP");

// console.log(Comp);

const colors = new Array("purple", "red", "green", "orange");
// console.log(colors[1]);


const filler = ["purple", "red", "green", "orange"]
filler.fill("pink",1, 1);

// console.log(filler);
