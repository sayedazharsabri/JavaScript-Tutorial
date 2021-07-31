const str = String("Hi I am here.");

if(str.includes("I")){
    console.log("Yes it includes I");
}
else{
    console.log("No it does not includes I");
}


//concat
const str1 = "I am going.";
const str2 = str + str1;//+ operator concatinates two strings
console.log("Using concat");
const str3 = str.concat(str1);
console.log(str3);