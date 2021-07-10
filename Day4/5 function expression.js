const square = function(num){
    console.log("Square: ",num*num);
}


square(5);
square(4);


const getCube = function cube(num){
    console.log("Cube: ",num*num*num);
}

// cube(5);//ReferenceError: cube is not defined
getCube(5);