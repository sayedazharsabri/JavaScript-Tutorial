//Block Statement
if(true){
    let x = 5;
    console.log(x);
}


//Conditional statement

let n1 = 3;
let n2 = 4;

if(n1 > n2){
    console.log("n1 is greater");
}else{
    console.log("n2 is greater");
}

//--Falsy values
if(false){
    console.log("In if 1");// controle never reach here
}else{
    console.log("In else 1"); // 
}

// undefined
let x;
if(x){
    console.log("In if 2");// controle never reach here
}else{
    console.log("In else 2"); // 
}

// null
if(null){
    console.log("In if 3");// controle never reach here
}else{
    console.log("In else 3"); // 
}

// 0
if(0){
    console.log("In if 4");// controle never reach here
}else{
    console.log("In else 4"); // 
}

// NaN
if(NaN){
    console.log("In if 5");// controle never reach here
}else{
    console.log("In else 5"); // 
}

// the empty string ("")
if(""){
    console.log("In if 6");// controle never reach here
}else{
    console.log("In else 6"); // 
}


if(NaN == false){
    console.log("It was falsy value not false");// controle never reach here
}else{
    console.log("Surprize"); // 
}


if(NaN === false){
    console.log("It was falsy value not false");// controle never reach here
}else{
    console.log("Surprize"); // 
}


if(0 === false){
    console.log("It was falsy value not false");// controle never reach here
}else{
    console.log("Surprize"); // 
}