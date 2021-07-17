//in
let obj = {username:"Arush", mobile:8129};
if('username' in obj){
    console.log(obj.username);
}

//instanceof

function xyz(){
    this.x = 5;
}

let y = new xyz();
console.log(y);

console.log(y instanceof xyz);//true
console.log(obj instanceof xyz);//false

