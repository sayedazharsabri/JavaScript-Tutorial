//- replace, 
// - replaceAll, 

const str = "Hi its a animal, and its a big animal";

console.log(str);

const str1 = str.replace("animal","bird");
console.log(str1);//Hi its a bird, and its a big animal

/*
If you're seeing the error "TypeError: replaceAll is not a function", 
it is likely due to the method not implemented/supported by the browser version 
(or the Node.js version) that you're using.
*/

// NodeJs is not supporting replaceAll, here you can execute it using regex.
//for replaceAll u may test this in browser console
// const str = "Hi its a animal, and its a big animal";
// const str1 = str.replaceAll("animal","bird");
// console.log(str1);