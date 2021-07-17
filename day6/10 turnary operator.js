let x = 9;

//if x is the multiple of 3 then assign x to y , otherwise assign 0 to y
let y;
if(x%3 == 0){
    y = x;
}else{
    y = 0;
}
console.log("using if ",y);

//if x is the multiple of 3 then assign x to z , otherwise assign 0 to z
let z = x%3==0?x:0;
console.log("using if ",z);