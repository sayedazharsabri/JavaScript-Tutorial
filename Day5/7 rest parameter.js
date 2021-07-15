function multipleArgumnets(multiplier,...arg){
    arg.forEach((elem)=>{
        console.log(multiplier*elem);
    })
}
console.log("--------------------------");
multipleArgumnets(2,4,5);
console.log("--------------------------");
multipleArgumnets(2,4,5,6);
console.log("--------------------------");

multipleArgumnets(2,4,5,6,10,19);
console.log("--------------------------");