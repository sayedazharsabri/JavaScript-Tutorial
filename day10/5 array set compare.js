let mySet = new Set([2,3,4,5]);
//Delete an element by its value
mySet.delete(3)
console.log(mySet);


let myArray = [2,3,4,5];
//Delete an element by its value
// myArray.delete(2); // myArray.delete is not a function
myArray.splice(myArray.indexOf(3),1);
console.log(myArray);