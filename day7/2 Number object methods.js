let x = 3/'r';
console.log(x);

if(!Number.isNaN(x)){
    console.log('x is a number');
}else{
    console.log('x is NaN');
}


let xSafe = +9007199254740992;
console.log("Is safe ",Number.isSafeInteger(xSafe));//Is safe  false

let n1 = '1';
let n2 = '1.1';
console.log(Number.parseInt(n1));
console.log(Number.parseFloat(n2));

