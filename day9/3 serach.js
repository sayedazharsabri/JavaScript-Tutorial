let regex = /\w/g

let regex1 = /[^\w\s]/g;

let str = 'Hi I am taking a workshop. I am here';

let resIndex = str.search(regex);
console.log(resIndex);
console.log(str[resIndex]);


let resIndex1 = str.search(regex1);
console.log(resIndex1);
console.log(str[resIndex1]);




