const str = String("Hi I am here");
const firstChar = str.charAt(0);
console.log("First character is ",firstChar);//First character is  H
console.log("First character is ",str[0]);//First character is  H


const indexOfI = str.indexOf('I');//case sensitive
console.log("Index of I is ",indexOfI);//Index of I is  3

const indexOfi = str.indexOf('i');//case sensitive
console.log("Index of i is ",indexOfi);//Index of i is  1

const indexOfe = str.indexOf('e');//case sensitive
console.log("Index of e is ",indexOfe);//Index of e is  9

const indexOfLaste = str.lastIndexOf('e');//case sensitive
console.log("Last Index of e is ",indexOfLaste);//Last Index of e is  11