
let name = "azhar";
let password = "12";
try{


/*
.
.
.
.
*/

if(name.length < 5){
    throw new Error("User name is too short");
}


if(password.length < 6){
    throw new Error("Invalid password");
}
console.log("working");
/*
.
.
.
.
*/

}
catch(error){

    console.log(error);
}