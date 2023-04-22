const promise = new Promise(function(resole,reject){

});

console.log(promise);


const promiseFulfilled = new Promise((resole,reject) => {
    resole();
});
console.log(promiseFulfilled);

const promiseFulReject= new Promise((resole,reject) => {
    reject("co loi say ra");
});
console.log(promiseFulReject);

const promiseGetdata = new Promise((resole,reject) => {
    const memberList = [
        {
            "name" : "tran han quan",
            "age " : 20
        }
    ]
    resole(memberList)
})

promiseGetdata
    .then(function(data ){
        console.log("data get khi fulfilled - resolve dc dall", data);
    } )
    


// SU LY BAT DONG BO

//     Su ly bang callback


