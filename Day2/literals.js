console.log("Literals ");

console.log("decimal",117);
console.log("octal",0o77);
console.log("hexa decimal",0x00111);
console.log("binary",0b0011);
console.log("Binary",0B0011);


console.log("Object literal");

let obj = {name:"azhar", mobile:"8978"};
console.log(obj);
console.log(obj.name);

console.log("Object literal with square bracket");
let obj1 = {'':"azhar", '!':"8978"};
console.log(obj1['']);
console.log(obj1['!']);


console.log("String literals");
let s1 = 'string in single quote';
let s2 = "string in double quote";

let name1 = 'azhar';
let s4 = 'Hi '+name1+' \n How are you?';
let s3 = `Hi ${name1} 
How are you?`

console.log("s1",s1);
console.log("s2",s2);
console.log("s3",s3);
console.log("s4",s4);