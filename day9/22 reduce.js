// reduce
// 	the purpose of reducing the list of items down to a single value

let a = [10, 20, 30]
let total = a.reduce((accumulator, currentValue) =>{
     return accumulator + currentValue 
    },0)
console.log(total) // Prints 60