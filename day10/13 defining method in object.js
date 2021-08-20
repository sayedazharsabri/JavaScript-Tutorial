let obj = {
    name:"Azhar",
    display:function(salary){
        console.log(`${this.name} earning ${salary} rupees`);
    },  
    printAge(age){
        console.log(`${this.name} is ${age} year old`);
    }
}


obj.display(10);

obj.printAge(30);