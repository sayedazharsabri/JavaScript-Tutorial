function validateUser(name){
    return new Promise((resolve, reject)=>{
        if(name == "abcd"){
            resolve("Yes validat user");
        }else{
            reject("Invalida user!");
        }
    });
}

validateUser("abcd")
    .then((status)=>{
        console.log("Event loop after round 1");
        console.log(status);
    })
    .catch((err)=>{
        console.log(err);
    })

console.log("Event loop round 1");