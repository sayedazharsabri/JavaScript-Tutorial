function updateName(student){
    student.name = 'Hi ' + student.name;
    console.log(student); 
}

let objS = {name: "Azhar"};
updateName(objS);
console.log("Old Object is  ",objS);
//Pass by reference

