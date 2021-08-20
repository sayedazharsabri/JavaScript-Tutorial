let arr = [1,2,3,3,3,3,3,3,4,4,5]
console.log(arr);

//covert array to set
let setFromArray = new Set(arr);
console.log(setFromArray);


//covert set to array
let arrayFromSet = Array.from(setFromArray);
arrayFromSet.push(3);
console.log("Array from set",arrayFromSet);



let arrFromSetUsingSpreadOperator = [...setFromArray];
arrFromSetUsingSpreadOperator.push(3);
console.log(arrFromSetUsingSpreadOperator);



