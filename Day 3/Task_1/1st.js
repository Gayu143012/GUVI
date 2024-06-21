// 1.Print odd numbers in an array
//IFEE
console.log("IFEE FUCTION");
(function(arr) {
    for(var ind=0;ind<arr.length;ind++)
        {
            if(arr[ind]%2==1)
                {
                    console.log(arr[ind]);
                }
        }
})([1, 2, 3, 4, 5, 6, 7, 8, 9]);

//ANONYMOUS FUCTION
console.log("ANONYMOUS FUCTION");

const printOddNumbers = function(arr) {
    for(var ind=0;ind<arr.length;ind++)
        {
            if(arr[ind]%2==1)
                {
                    console.log(arr[ind]);
                }
        }
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);
