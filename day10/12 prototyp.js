function Student(name, age){
    this.name = name;
    this.age = age;
}

let student1 = new Student("Kavi",23);



let student2 = new Student("Salman",28);




console.log("---------------------------")

console.log(Student.prototype);

Student.prototype.display = function(){
    console.log(`Hi ${this.name}`);
}

student1.display();
student2.display();
