const str = String("Hi I am here");

if(str.startsWith('H')){//case sensitive
    console.log("Yes string starts with H");//Yes string starts with H
}
else{
    console.log("No string does not starts with H");
}


if(str.endsWith('e')){//case sensitive
    console.log("Yes its ends with e");
} else {
    console.log("No, its not ends with e");
}