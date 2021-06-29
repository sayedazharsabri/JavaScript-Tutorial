function validateUser(name, password){
    if(name == ""){
        console.log("Invalida user name");
        return;
    } else if(password == "" || password.length < 8){
        console.log("Invalida password");
        return;
    }

    console.log("Yes successfully validated");
}

let username = "Azhar";
let userpassword = "abcdrt123";
validateUser(username, userpassword);