const name = ['Mike', 'John', 'Derick', 'James','Simon', 'John', 'Mike', 'Renson', 'Paul', 'Eliud'];

const lastIndex = name.lastIndexOf('John');

console.log(lastIndex);

const someCheck = name.some((element)=>element.length > 4);
console.log(someCheck);

const everyCheck = name.every((element)=>element.length > 4);
console.log(everyCheck);

// const nameString = name.toString();
const nameString = name.join(', ');

console.log(nameString);

// const fillArray = name.fill("Dakin", 3,6);
// console.log(fillArray);


// const copyWithinArray = name.copyWithin(target, startIndex, endIndex);
// const copyWithinArray = name.copyWithin(2,4,7);
// console.log(copyWithinArray);

// const slicedArray = name.slice(startIndex, endIndex);
const slicedArray = name.slice(1,5);
console.log(name);
slicedArray.push('end.');
console.log(slicedArray);

// const spliceArray = name.splice(startIndex,deleteCount, item1, item2, itemN );
//splice() - modifies the original array use toSpliced() instead
const spliceArray = name.splice(2,4,"Omollo", 'Ongoe');

console.log(spliceArray);
console.log(name);

const ages = [23, 22, 16, 66, 47, 34, 89,100, 39];

//use comparator while sorting numbers using sort() method
// const sortedAges = ages.sort((a, b)=> a===b? 0: a>b?1:-1);
const sortedAges = ages.sort((a, b)=>{
  // if(a === b){
  //   return 0;
  // }
  // if(a > b){
  //   return 1;
  // }
  // return -1;

  //Comparison Operator
  // if(a === b){
  //   return 0;
  // }
  // else if(a > b){
  //   return 1;
  // }
  // else{
  //   return -1;
  // }

  return a - b;
});

console.log(sortedAges);

//from() - converting an array like to an array using an Array like object
// Array.from(arrayLike, mapFn);
//mapFn is optional
const str = "123";

const newStrArray = Array.from(str, (element)=>Number(element));
console.log(newStrArray);

const arrayCheck = Array.isArray(newStrArray);
console.log(arrayCheck);

//entries() - gets array entries and does not take any parameters and returns a new array iterator object
//Array.entries()

const food = ["sushi", "fried chicken", "plantein", "Ugali"];

const foodEntries = food.entries();
console.log(foodEntries);

//use a for...of to loop through the iterator object returned
//you can optionally use the spread operator
for(let foodE of foodEntries){
  console.log(foodE);
}

//Array.keys() - returns a new iterator object and takes in no parameters
//you can also use the spread operator [...foodKeys] ---> [0, 1, 2, 3]
const arrayKeys = food.keys();
console.log(arrayKeys);
for(let key of arrayKeys){
  console.log(key);
}

//Array.values() - is same as the above Array.key() method
const arrayValues = food.values();

for(let value of arrayValues){
  console.log(value);
}

//reduce() - reduce all the elements to one element
// array.reduce(callbackFn, initialValue) initialValue is optional
const numberReduce = [1, 2, 3, 4];

const alreadyReduced = numberReduce.reduce((num, accumulator) => accumulator+=num);
console.log(alreadyReduced);
//Array.reduceRight() - works the same but starts reducing from the right of the array

//Array.flat() - used to flat an array
//you can choose the level of flat you want by default is 1 if you want to flat the whole array you can use the Infinity which is passed to the flat mathod Array.flat(Infinity)

//used especially when you have a three dimensional array and you want to get a two or one dimensional array

//flat() returns a new array doesn't modify the original one
const numbersFlat = [1, 2, 3, [4, [5, [6]]]];

const flatingTheArray = numbersFlat.flat(Infinity);
console.log(flatingTheArray);

//flatMap - is basically calling flat() and map() at the same time
//array.flatMap(callbackFn) = array.map(callbackFn).flat()
//you can use both flat()chained to a map() method or you can just use flatMap() method which is more efficient than chaining flat() & map() together
const foodFlatMap = [["Sushi", "Ugali"], ["Pizza", 'chicken']];

const result = foodFlatMap.map((array)=> [array[0] + array[1]]).flat();
console.log(result);

const flatMapResult = foodFlatMap.flatMap((array)=>{
  return [array[0] + array[1]];
})

console.log(flatMapResult);
