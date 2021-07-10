
const printSeries = function printNumSeriesRecursion(num){
 
    if(num == 0){
        return 0;
    }
    console.log(num);
    num--;
    //Method 2
    // printNumSeriesRecursion(num);

    //Method 3
    arguments.callee(num);

    // printSeries(num);
}
// printNumSeriesRecursion(5);//ReferenceError: printNumSeriesRecursion is not defined
printSeries(5);