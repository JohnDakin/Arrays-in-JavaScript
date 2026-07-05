const c = Array.of(2, true, 'test', {"name": "Alex"}, [1, 2, 3]);
// console.log(c);

const objectMe ={
  f_name : "John",
  l_name : "Dakin",
  age : 22,
  profession: "Software Engineer",
  hello(){
    console.log(`My name is ${this.f_name} ${this.l_name} i am a ${this.profession}.`);
  }
}

// console.log(typeof objectMe);

objectMe['fullName'] = `My name is ${objectMe.f_name} ${objectMe.l_name} i am a ${objectMe.profession}.`;

// console.log(objectMe.fullName)

// objectMe.hello()


function elements(){
  const arrayArgs = [...arguments];
  console.log(arrayArgs);
}

// elements(23, 45,67);

const forcedArray = Array.from(objectMe);
const forcedArrayMe = [...forcedArray,23,45]
// console.log(typeof forcedArrayMe);
// console.log(typeof forcedArray);

const promiseMe = Array.fromAsync(objectMe);
// .then(value=>console.log(value));
// console.log(promiseMe);
// console.log(typeof promiseMe);

const n = new Array(45,);
// console.log(n);
const x = new Array();
// console.log("Empty Array: ",x)

const y = new Array("foo");
// console.log(y);

const z = Array.of(["hello", "John", 34, true],[45,78], [{name: "Ian", age: 20}]);
// console.log(z);
// console.log(z.length);

const a = Array.of(34);
// console.log(a);

