let objInit = {name:"azahr", address:"India"}
console.log(objInit);


function emplyee(name, designation, salary, age) {
    //this always point the current object
    this.name = name;
    this.designation = designation;
    this.payment = salary;
    this.age = age
}

let objFn = new emplyee("Azhar","Sr Software Engineer",0,30)
let objFn1 = new emplyee("Salman","Software Engineer",80000,28)
console.log(objFn);
console.log(objFn1);




//--
let obj1 = {name:"azahr", address:"India"}
let obj2 = obj1;
obj2.name = "Aditya";
obj2.address = "Delhi";
console.log('obj1',obj1);
console.log('obj2',obj2);
/*obj1 { name: 'Aditya', address: 'Delhi' }
obj2 { name: 'Aditya', address: 'Delhi' }*/

console.log("=-=================================-=");
let objA = {
        name:"azahr", 
        country:"India",
        display:function(){
            console.log(`${this.name} lives in ${this.country}`);
        }
    }
objA.display();    
let objB = Object.create(objA);
objB.name = "Ajay";
objB.country = "India";
console.log(objA);
console.log(objB);
objB.display();