let n1 = 234;
console.log(n1);//234


// Don't do like this
let n2 = 0234;
console.log(n2);//156

// Don't do like this
let n3 = 0110;
console.log(n3);//72
// Don't do like this
let n4 = 0967;
console.log(n4); //967


//better to do like below
let xb= 0b0101;
console.log(xb);
let xo= 0o34;
console.log(xo);
let xh = 0xA1;
console.log(xh);
let xd = 234;
console.log(xd);


let exp = 1E4;
console.log(exp);

console.log("Number Object");
//Number object
console.log(Number.MIN_SAFE_INTEGER);

console.log(Number.MAX_SAFE_INTEGER);



