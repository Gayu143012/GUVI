//2.Convert all the strings to title caps in a string array

//IFEE 
console.log("IFEE FUCTION");
(function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const result = str.join(' ');
    console.log(result);
})("hello world");

//ANONYMOUS 
console.log("ANONYMOUS FUCTION");
const Convert=function(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const result = str.join(' ');
    return result
};
let res=Convert("Hello world hello ");
console.log(res);
