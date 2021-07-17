let x = 113;
let y = 44;
let z = 6;

if(x > y && x > z){
    console.log("x");
}else if(y>z){
    console.log("y");
}else{
    console.log("z");
}

if(x > y || x < z){
    console.log("here",x);
}