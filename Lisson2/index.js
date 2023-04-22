// const jsonExport = require('jsonExport')

// const Member = [
//     {name:'Quan1',
//     age:20},
//     {name:'Quan2',
//     age:21},
//     {name:'Quan3',
//     age:22}
// ];
// jsonExport(Member,function(error,csv){
//     if(error){
//         return console.log(error);
//     }   console.log(csv);
// })

const express = require('express');

const app = express();

const teacherRuoter  = require('./teacher');
const studentRouter  = require('./students');

app.use('/teacher',teacherRuoter)
app.use('/students',studentRouter)

const port = 3000;

app.listen(port,()=>{
    console.log(`Sever listening ai http:locahost:${port}`) ;
})

