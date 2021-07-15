function addNumbers(){
    let sum = 0;
    for (let index = 0; index < arguments.length; index++) {
        const element = arguments[index];
        sum = sum + element;
    }
    console.log(sum);
}

addNumbers(2,3,4,5);

addNumbers(2,3);

addNumbers(1,2,3,4,5,6,7,8,9,10);