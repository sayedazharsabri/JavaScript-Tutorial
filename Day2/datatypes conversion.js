let n = 1;
console.log(typeof(n)); //number

n = "Hi Azhar";//? Dynamic type
console.log(typeof(n)); //string

//Note: typescript

let num1 = 3;
let num2 = '5';
console.log(num1+num2); // string and + -> perform concatination 35

let num3 = '3';
let num4 = 5;
console.log(parseInt(num3)+num4); // 8


let n5 = '3.5';
let n6 = 5;
console.log(parseFloat(n5)+n6); // 8.5


let n7 = '8';
let n8 = 5;
console.log(+n7+n8); // 13

console.log(n7 - n8);// 3

console.log(n8 - n7);// -3

console.log(n7 * n8);// 40
console.log(n8 * n7);// 40

console.log(n7 / n8);// 40
console.log(n8 / n7);// 40


n9 = '101';
console.log(parseInt(n9,2));//5, it handle 101 as binary
