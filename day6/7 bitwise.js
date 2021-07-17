let x = 3 & 2;
console.log(x);

let a = 5;// 0101
//check if last bit is 1
let n = 1;// 0001

let isLastBitIs1 = a & n;
if(isLastBitIs1 == 1){
    console.log("Yes");
}else{
    console.log("Not");
}