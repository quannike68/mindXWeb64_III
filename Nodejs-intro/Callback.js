

myDisplayer = (some) => {
    console.log(some);
};

//Cach 1
// myCalculator = (num1, num2) => {
//     const sum = num1 + num2 ;
//     return sum
// };
// const result = myCalculator(5,5);
// myDisplayer(result);



//Cach 2
// myCalculator = (num1, num2) => {
//     const sum = num1 + num2 ;
    
//     myDisplayer(sum);
// };

// const result = myCalculator(5,5);
// myDisplayer(result);


//Cach 3 Callback

myCalculator = (num1, num2, callback) => {
    const sum = num1 + num2 ;
    callback(sum);
}

myCalculator(5,5,myDisplayer);