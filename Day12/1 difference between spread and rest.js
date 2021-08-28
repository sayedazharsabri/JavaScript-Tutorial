function printData(...rest){

    rest.forEach((elem)=>{
        console.log("You sent :",elem);
    })

    const [firstElement] = [...rest];
    console.log("First Element: ", firstElement);  
}


printData(1,2,3,4,5,6,7,8,9,10,11);