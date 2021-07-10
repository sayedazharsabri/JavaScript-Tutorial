function addOne(arr){
    arr[0] = arr[0] + 1;
    arr[1] = arr[1] + 1;
    arr[2] = arr[2] + 1;
    arr[3] = arr[3] + 1;
    arr[4] = arr[4] + 1;
}

let arr1 = [1,2,3,4,5];
addOne(arr1);
console.log("Old Array is  ",arr1);
//Pass by reference

