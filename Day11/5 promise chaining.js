function returnUser(){
    return new Promise((resolve, reject)=>{
        resolve({name:"Azhar"})
    });
}

returnUser()
    .then((userData)=>{
        return userData.name;
    })
    .then((userName)=>{
        console.log("Hi ",userName);
    })
    .catch((err)=>{
        console.log(err);
    })