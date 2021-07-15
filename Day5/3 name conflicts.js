function outer(num){
    let x = 5;
    function inner(x){
        // Local got prefence
        let num = 8;
        console.log(x);//
        console.log(num);//
    }
    inner(7);
}

outer(3);