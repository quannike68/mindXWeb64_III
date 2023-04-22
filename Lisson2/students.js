const express = require('express');

const studentRouter = express.Router();


const students = [
    {name:'Nguyen Tuan Anh',
    age:20,
    id:1},
    {name:'Tran Anh Quan',
    age:23,
    id:2},
    {name:'Quan Anh Tran',
    age:22,
    id:3}
];
studentRouter.get('/',(req,res) => {
    res.json(students)
})


studentRouter.get('/add',(req,res) =>{
    students.push({name:'Quanike',age:24})
    res.json(students);
})

studentRouter.get('/:id',(req,res) => {
    const idParam = req.params.id;
    teachers.filter()
})

module.exports = studentRouter;