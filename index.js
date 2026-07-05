/*
const mixedArray = [100, true, 'tapaScript', {}];

const salad = ['tomato', 'mushroom','ovacado','brocolli','cabbage','orange','carrot'];

function Car(model){
  this.model = model
}

const bmwCar = new Car("BMW X1");
// console.log(bmwCar)

const anotherSalad = new Array('tomato', 'mushroom','ovacado','brocolli','cabbage','orange','carrot');

// console.log("Salad: ",salad);
// console.log("Another Salad: ",anotherSalad);

// console.log(salad === anotherSalad);

const two = new Array(1, 2);
// console.log(two);

// const element = array[index]

// console.log(salad[0]);
// console.log(salad[2]);
// console.log(salad[3]);

// for(let i = 0; i <=salad.length-1; i++){
//   console.log(`Element at index ${i} is ${salad[i]}`);
// }


// push() - end
const ret = salad.push('peanuts');
// console.log(ret);
// console.log(salad);

// unshift() - start
const unRet = salad.unshift('peanuts');
// console.log(unRet);
// console.log(salad);

//pop() - remove the end element
// console.log(salad);
const popRet = salad.pop();
// console.log(popRet);
// console.log(salad);

//shift() - remove the start element
// console.log(salad);
const ShiftRet = salad.shift();
// console.log(ShiftRet);
// console.log(salad);

//slice = copy
const saladCopy = salad.slice();
// console.log("Salad Before Copy:", salad);
// console.log("Salad After Copy:",saladCopy);
// console.log(salad === saladCopy);

Array.isArray( ['tomato', 'ovacado','brocolli','cabbage','orange','potatoe','carrot']);

const arr = [1, 2, 3, 4];
// console.log(Array.isArray(arr));


//Array Destructuring

// const tomato = salad[0];
// const mushroom = salad[1];

// const [tomato, mushroom]= ['tomato', 'mushroom'];
// console.log(tomato);
// console.log(mushroom);

// const [tomato, mushroom = 'mushroom'] = ['tomato'];
// console.log(tomato);
// console.log(mushroom);

// const [tomato, ,carrot] = ['tomato', 'mushroom', 'carrot'];
// console.log(tomato);
// console.log(carrot);

//Nested Array
// [1, 2, [4, [6, 8, ['q']]]]

let fruits = ['apple', 'orange', 'banana', 'mango', ['ovacado', 'pears', 'pineapple']];

// const veg = fruits[4][2];
// console.log(veg);

let [, , , ,[, ,pineapple]] = ['apple', 'orange', 'banana', 'mango', ['ovacado', 'pears', 'pineapple']];
// console.log(pineapple);

//Rest and Spread
//rest = variables
//spread = array values
const [tomato, mushroom, ...rest] = ['tomato', 'mushroom','ovacado','brocolli','cabbage','orange','carrot'];
// console.log(rest);

const mySalad = ['tomato', 'mushroom','ovacado','brocolli','cabbage','orange','carrot'];

const mySaladCopy = [...mySalad];
// console.log(mySaladCopy)
// console.log(mySalad === mySaladCopy);

//Swaping

// let first = 'emoji1';
// let second = 'emoji2';


// [first, second] = [second, first]
// console.log(first);
// console.log(second);

const emotions = ['happy face', 'sad face'];
const vegies = ['brocolli', 'cabbage', 'maize', 'carrot'];

const emotionalVegies= [...emotions, ...vegies];
// console.log(emotionalVegies);

//length

const arr1 = [11, 21, 73];
const arr2 = new Array(7);

// console.log(arr1.length);
// console.log(arr2.length);

//2 ** 32 - 1 // 4292967295

arr1.length = 9;
// console.log(arr1)
*/
//concat()

const first = [1, 2, 3];
const second = [4, 5, 6];
const third = [7, 8, 9];
const merged = first.concat(second, third);
// console.log(merged);

//join()

const emotions = ['happy', 'sad', 'suprise', 'excitment'];

const join = emotions.join("<=>");
// console.log(join);

// [].join()

//fill()
const colors = ['red', 'blue', 'green'];
colors.fill("pink",1,3);
// console.log(colors);

//includes()

// const names = ['tom', 'alex', 'bob', 'john'];

// console.log(names.includes('Tom'));
// console.log(names.includes('july'));


//indexOf() and lastIndexOf()

// const names = ['tom', 'alex', 'bob', 'tom'];
// console.log(names.indexOf('bob'));
// console.log(names.indexOf('rob'));

// console.log(names.indexOf('tom'));
// console.log(names.lastIndexOf('tom'));


//reverse()
// const names = ['tom', 'alex', 'bob'];

// console.log(names.reverse());

//sort()
// The default sort() method converts the elements type into strings
// The default sorting order is ascending.

// const names = ['tom', 'alex', 'bob'];

// console.log('After default sorting: ', names.sort());

const artists = [
  'John White Abbott',
  'Leonard de Vinci',
  'Charles Aubry',
  'Anna Atkins',
  'Barent Avercamp'
]

// console.log("Default sorting of artists array", artists.sort());

artists.sort(function(a, b){
  return a === b ? 0 : a > b ? -1 : 1;
})

// console.log("Sorts the artist names in (Descending)", artists);


let ages = [2, 1000, 10, 3, 23, 12, 30, 21];

ages.sort();
// console.log("Age with default sorting", ages);

ages.sort(function(a, b){
  //comaparator function
  return a === b ? 0: a > b ? 1 : -1;
})

// console.log("Age with default sorting", ages);


//splice()

// splice(start, deleteCount, item, item1, item2)

const names = ['tom', 'alex', 'bob'];

// console.log(names.splice(0,1, "john"));
// console.log(names);

// names.splice(1,0,'zack');
// names.splice(2,1,'zack');

// console.log(names);

//at()

const junkFoodILove = ['hotdog','ice cream', 'bugger', 'soda', 'pizza', 'yoghurt', 'cake', 'popcorn'];

junkFoodILove.at(0);

// console.log(junkFoodILove.at(3));

// console.log(junkFoodILove.at(-1));

// console.log(junkFoodILove.at(-5));

// console.log(junkFoodILove.at(-8));


// console.log(junkFoodILove.at(10));


// copyWithin()

// copyWithin(target, start, end)

const array = [1, 2, 3, 4, 5, 6, 7];
// console.log(array.copyWithin(0, 3, 6));

const array1 = [1, 2, 3, 4, 5, 6, 7];
// console.log(array1.copyWithin(0, 4));

//flat()
/*
{
  const arr1 = [0, 1, 2, [3, 4]];
  console.log(arr1.flat());

  const arr2 = [0, 1, [2, [3, [4, 5]]]];
  console.log(arr2.flat(Infinity));

  console.log([1,2,[3,4,[5,6,[7,8]]],9,10].flat(4))


}
*/

{

  const employees = [
    {name: "Bob", dept: "Engineering", salary: 5000},
    {name: "Alex", dept: "HR", salary: 3000},
    {name: "Ravi", dept: "Engineering", salary: 7000},
    {name: "John", dept: "Engineering", salary: 1000},
    {name: "Tom", dept: "Sales", salary: 6000}

  ];

  const groupedByDept = Object.groupBy(employees, ({dept})=> dept)
  // console.log(groupedByDept);


  const groupedByMoreThan5000 = Object.groupBy(employees, ({salary})=>{
    return salary >= 5000? "More than 5k": "Less than 5k";
  });

  // console.log(groupedByMoreThan5000);

}

// toReversed()

const items = [1, 2, 3];
const reversedItems = items.toReversed();
// console.log(reversedItems);
// console.log(items);

//toSorted()

// const months = ["March", "Jan", "Feb", "Dec"];

// const sortedMonths = months.toSorted();

// console.log(sortedMonths);
// console.log(months);


//toSpliced()

const months = ["March", "Jan", "Feb", "Dec"];

const months2 = months.toSpliced(1, 0, "Feb");
// console.log(months);
// console.log(months2);

//with()

const numbers = [1, 2, 3, 4, 5];

// with(index, value)

// const newArray = numbers.with(2, 6);
// const anotherArray = numbers.with(-2, 8);

// console.log(anotherArray);
// console.log(newArray);
// console.log(numbers)

//Array Like

{key: 'value'}//object
[1,2,3]//array

const arr_like = {0: 'I',1: 'am',2: 'array-like',length: 3};

// console.log(arr_like);

arr_like[2]; //'array-like
arr_like.length; // 3

// console.log("is arr_like is an array? ",Array.isArray(arr_like)); //false

// console.log("is arr_like is an object?", arr_like instanceof Object); //true

// function checkArgs(){
//   console.log("Array Like Args", arguments);
//   // arguments.pop();
//   const argArr =  [...arguments]
//   console.log("Converted Array Args",argArr);
//   argArr.forEach((elem) => {
//     console.log(elem);
//   });
// }

// checkArgs(1, 45);

// console.log("HTML Collection as Array Like", document.getElementsByTagName('li'));

// const collectionArray = Array.from(document.getElementsByTagName('li'));
// console.log("Converted Array: ", collectionArray);

//fromAsync()

const collectionPromise = Array.fromAsync(document.getElementsByTagName('li'));
// console.log("Converted Array: ", collectionPromise);

// collectionPromise.then((value)=>console.log(value));

// const ret = Array.fromAsync({
//   0: Promise.resolve('tapaScript'),
//   1: Promise.resolve('Google'),
//   2: Promise.resolve('Apple'),
//   length:3
// }).then((value)=>console.log(value))

// console.log(ret);

//of()

const a = new Array(2, 3, 4);
const b = [4, 5, 6];

const c = Array.of(2, true, 'test', {"name": "Alex"}, [1, 2, 3]);
// console.log(c);

//filter()

let customer = [
  {
    'id': 0o1,
    'f_name': 'Abby',
    'l_name': 'Thomas',
    'gender': 'M',
    'married': true,
    'age': 32,
    'expense': 500,
    'purchased': ['Shampoo', 'Toys', 'Book']
  },
  {
    'id': 0o2,
    'f_name': 'jerry',
    'l_name': 'Tom',
    'gender': 'M',
    'married': true,
    'age': 64,
    'expense': 100,
    'purchased': ['Stick', 'Blade']
  },
  {
    'id': 0o3,
    'f_name': 'Dianna',
    'l_name': 'Cherry',
    'gender': 'F',
    'married': true,
    'age': 22,
    'expense': 1500,
    'purchased': ['Lipstick', 'Nail Polish', 'Bag', 'Book']
  },
  {
    'id': 0o4,
    'f_name': 'Dev',
    'l_name': 'Currian',
    'gender': 'M',
    'married': true,
    'age': 82,
    'expense': 90,
    'purchased': ['Book']
  },
  {
    'id': 0o5,
    'f_name': 'Maria',
    'l_name': 'Gomes',
    'gender': 'F',
    'married': false,
    'age': 7,
    'expense': 300,
    'purchased': ['Toys']
  }
];

// filter() - Get 'Senior Citizens' By filtering out other customers

// const newArray = arr_like.filter((element, indexed, array)=>{
//   //Do something here...
// });

// const seniorCustomers = customer.filter((customer)=>{
//   return customer.age >= 60;
// });

// console.log("Senior Customer list", seniorCustomers);


//map() - Transofrm to add title and full name

const customersWithFullName = customer.map((customer)=>{
  let title = "";
  if(customer.gender === "M"){
    title = "Mr.";
  }else if(customer.name === "F" && customer.married){
    title = "Mrs.";
  }else{
    title = "Miss";
  }

  customer['full_name'] = `${title} ${customer.f_name} ${customer.l_name}`;

  return customer;
});

// console.log("Customer after adding full name: ", customersWithFullName);

//reduce() - The average of the Customers who have purchased the item, 'Book'.

// const arr = [1, 2, 3, 4, 5];

// let result = arr.reduce((accumulator, currentValue)=>{
//   return accumulator + currentValue;
// })

// console.log(result);


let count = 0;
const total = customer.reduce((accumulator, customer)=>{
  if(customer.purchased.includes("Book")){
    accumulator += customer.age;
    count++;
  }
  return accumulator;
}, 0);

// console.log("Customer Avg age Purchased Book:", Math.floor(total/ count));

//reduceRight()

let number = [100, 40, 15];

const subsResult = number.reduceRight((accumulator, current)=>{
  return accumulator - current;
});

// console.log("Subs",subsResult);

// some() - Do we have a Young Customer(age less than 10 years)?

const hasYoungCustomer = customer.some((customer)=>{
  return customer.age < 10;
});

// console.log("has young customer (age < 10):", hasYoungCustomer);

//every()

const isAllMarried = customer.every((customer)=>{
  return customer.married;
});

// console.log(isAllMarried);

//find() - find the youngest customer

// const foundYoungCustomer = customer.find((customer)=>{
//   return customer.age < 10;
// })

// console.log(foundYoungCustomer);

//findIndex() method

const foundYoungCustomer = customer.findIndex((customer)=>{
  return customer.age < 10;
})

// console.log(foundYoungCustomer);


//findLast()
const lastFoundYoungCustomer = customer.findLast((customer)=>{
  return customer.age < 10;
})

// console.log(lastFoundYoungCustomer);

//Array Method Chaining

//Use Case: Get the total amount spent by Married customers

//reduce()
//filter()

// find all the married customers

const totalExpense = customer.filter((customer)=>{
  return customer.married;
}).map((marriedCustomer)=>{
  return marriedCustomer.expense;
}).reduce((accum, expense)=>{
  return accum + expense;
}, 0);



// console.log(totalExpense);

const arr = [1,2,3,4,5];
let sum = 0;
arr.forEach((elem)=>{
  sum += elem
  // console.log(elem);
});
// console.log(sum);

//entries()
const arrItr = arr.entries();
// console.log(arrItr.next().value); //[0, 1]
// console.log(arrItr.next().value); //[1, 2]

// for(const [index, element] of arrItr){
//   console.log(index, element);
// }


//values()

// const arrItr2 = arr.values();
// for(const value of arrItr2){
//   console.log(value);
// }

//flatMap()

const arr1 = [1, 2, 3, 4];

console.log(arr1.map(item=> item * 2));
console.log(arr1.flatMap(item=> item * 2));

console.log(arr1.map(item=> [item * 2]));
console.log(arr1.flatMap(item=> [item * 2]));


arr1.map(item => [[item * 2]]);
arr1.flatMap(item => [[item * 2]]);

