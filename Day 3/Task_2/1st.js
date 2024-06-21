// 1.Print odd numbers in an array
//arrow function
const printOddNumbers = (arr) =>{
    for(var ind=0;ind<arr.length;ind++)
        {
            if(arr[ind]%2==1)
                {
                    console.log(arr[ind]);
                }
        }
};
printOddNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9]);