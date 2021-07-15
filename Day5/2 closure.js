function getProductFunction(multiplier){

    return  function (num){
        return multiplier*num;
    }   
}

const double = getProductFunction(2);
let res = double(4);
console.log(res);


const triple = getProductFunction(3);
let res1 = triple(4);
console.log(res1);

const quad = getProductFunction(4);
let res2 = quad(4);
console.log(res2);