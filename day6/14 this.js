function xyz(){
    this.x = 5;
}

let y = new xyz();
let z = new xyz();

console.log(y);

z.x = 8;
console.log(z);