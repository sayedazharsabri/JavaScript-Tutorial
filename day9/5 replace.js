const str = 'str 1 and str 2 is str 3';
// console.log(str.replace('str', 'STR'));


const regex = /str/g;
console.log(str.replace(regex, 'STR'));//STR 1 and STR 2 is STR 3
