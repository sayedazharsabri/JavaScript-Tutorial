function validate(name){
    return new Promise((resolve, reject)=>{
        if(name == "abcd"){
            resolve("Yes validated");
        }else{
            reject("Not validated");
        }
    });
}



validate("azhar")
    .then((result)=>{
        console.log(result);
    })
    .catch((err)=>{
        console.log(err)
    })




// UnhandledPromiseRejectionWarning