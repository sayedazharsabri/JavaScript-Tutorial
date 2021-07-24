console.log(Math.PI);

let max = Math.max(2,3,4,5);
let min = Math.min(2,3,4,5);
console.log('max',max);
console.log('min',min);


let ran = Math.random();//0-1
console.log(ran);

//one digit
let ran1 = Math.floor(Math.random()*10,1);//0-1
console.log("one digit",ran1);


//two digit
let ran2 = Math.floor(Math.random()*100,1);//0-1
console.log("Two digit",ran2);

let num1 = 34500000;
let num2 = num1.toExponential();

console.log(num2);

let num3 = Number(1.34567).toFixed(2);
console.log(num3);