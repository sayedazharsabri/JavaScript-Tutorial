let obj = {name:"Aakarsh", address:"India", mobile:9877667766}


// console.log(obj.email); //undefined

obj.alternateMobile = null;

console.log(obj.alternateMobile);


//.(dot) notation
console.log("Dot notation",obj.mobile);
//Bracket notation
console.log("Bracket notation",obj['mobile']);


const x = "123";
obj[x] = "hi"
console.log("X= ",obj[x])

console.log(obj)


console.log("--------------------------------------------")

let obj1 = new Object()
obj1.name = "Aarush";
obj1.address = "Bharat";
obj1.mobile = 9877668;

console.log(obj1)