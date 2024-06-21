//2.Convert all the strings to title caps in a string array
//Arrow Function

const convertToTitleCaps = (str) => {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    const result = str.join(' ');
    return result
};
let res=convertToTitleCaps("Hello world hello ");
console.log(res);