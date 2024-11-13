let mySet = new Set();
mySet.add(10);
mySet.add(20);
mySet.add(30);
mySet.add(40);
mySet.add(50);
console.log(mySet);

mySet.add(40); // Adding duplicate element 

console.log(`Set Size is: ${mySet.size}`);
const is30Available = mySet.has(30);
console.log(`Is 30 element available: ${is30Available}`);

mySet.delete(20);

console.log("======== Traversing Set Collection ==========");

for (const element of mySet) {
    console.log(element);
    
}




console.log('========= 1. Approach: Removing duplicate element from the array ====================');
let array = [10, 20, 40, 20, 10, 60];
console.log(array);
const setNum = new Set();
for (const element of array) {
    setNum.add(element);
}
console.log(setNum);

const arrayUnique = [];
for (const element of setNum) {
    arrayUnique.push(element);
}
console.log(arrayUnique);

console.log("======= 2. Approach: Removing duplicate elements using spread operator==========");

const arrayUniqueElements = [...new Set(array)];
console.log(arrayUniqueElements);





const myMap = new Map();
myMap.set(11, "Jenny");
myMap.set(22, "Elon");
myMap.set(33, "Stew");
myMap.set(44, "Bill");
myMap.set(22, "Sundar");
myMap.set(55, "Stew");
console.log(myMap);

console.log(myMap.size);

console.log(`Value for the Key 44 is : ${myMap.get(44)}`);

console.log(`Delete the entry : ${myMap.delete(33)}`);
console.log(myMap);


console.log(age);
var age;

// console.log(city);
// const city = "Pune";

console.log(`Named function is hoisted `);

show();
function show(){
    console.log("Inside show function....");
}

console.log(`Function expression never hoisted`);
// demo();
var demo = function(){
    console.log("Inside function expression"); 
}
demo();