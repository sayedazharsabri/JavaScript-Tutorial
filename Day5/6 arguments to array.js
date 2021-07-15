function addNumbers(){
    let sum = 0;

    // /TypeError: arguments.forEach is not a function
    // arguments.forEach(element => {
    //     sum = sum + element;
    // });
    // console.log(sum);

    let arr = Array.from(arguments);
    arr.forEach(element => {
        sum = sum + element;
    });
    console.log(sum);
}

addNumbers(2,3,4,5);

addNumbers(2,3);

addNumbers(1,2,3,4,5,6,7,8,9,10);