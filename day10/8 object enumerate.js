let obj = {name:"Azhar",addrss:"India",mobile:"1234",email:"sayedazharsabri@gmail.com"};

for (const key in obj) {
    console.log(`Value on ${key} is ${obj[key]}`);
}

let getKeys = Object.keys(obj);
console.log(getKeys);