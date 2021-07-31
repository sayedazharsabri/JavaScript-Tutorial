/*
- Hexadecimal escape sequences => '\x7A'
- Unicode escape sequences => '\u007A'
*/

const chr = '\x7A';
console.log("Hexadecimal char ", chr);//Hexadecimal char  z

const ch1 = '\u007A';
console.log("Unicode char ",ch1);//Unicode char  z

if('\x7A' == '\u007A'){
    console.log("Yes");//Yes
}