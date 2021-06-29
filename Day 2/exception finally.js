

function validateUser(name, password){
    try{


        /*
        .
        .
        .
        .
        */
        
        if(name.length < 5){
            throw new Error("User name is too short");
        }
        
        
        if(password.length < 6){
            throw new Error("Invalid password");
        }
        console.log("working");
        /*
        .
        .
        .
        .
        */
        return "In try";
        }
        catch(error){
        
            console.log(error);
            return "Fail in catch";
        }finally{
            console.log("Inside finally block");
            return "From finally";// over write the previous return
        }
}



let name = "azhar";
let password = "12343434";
let msg = validateUser(name, password);
console.log("user ",msg)