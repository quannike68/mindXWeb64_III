const express = require('express');

const teacherRuoter = express.Router();

const teacher = [
    {name:'Nguyen Tuan Anh 1',
    age:20,
    id:1,
    classid:'2A'},

    {name:'Tran Anh Quan 2',
    age:23,
    id:2,
    classid:'3A'},

    {name:'Quan Anh Tran 3',
    age:22,
    id:3,
    classid:'4A'}
]

teacherRuoter.get('/',(req,res) =>{
    res.json(teacher)
});

teacherRuoter.get('/add',(req,res) => {
    teacher.push({name:'Quan1',age:20,id:4,classid:'5A'});
    res.json(teacher)
})

teacherRuoter.get('/class',(req,res) =>{
    res.send(teacher)
})

teacherRuoter.get('/:id',(req,res) => {
    const idParam  = req.params.id;
    const idParam1 = parseInt(idParam)
    const findTeacher =  teacher.find((teacher) => 
    teacher.id === idParam1)
    if(findTeacher){
        res.json(findTeacher)
    }else res.send('ko tim thay')
})

teacherRuoter.get('/:id/age/:age',(req,res) => {
    const id = req.params.id;
    const id1 = parseInt(id)
    const idAge = req.params.age;

    const filterId = teacher.filter((teacher) => 
        teacher.id === id1
    );

    const findIdAge = filterId.find((teacher) =>{
        teacher.age ===parseInt( idAge);
    })

    if(findIdAge){
        res.json(findIdClass)
    }else res.send(`Ko tim thay teacher class ${idAge}`)
})

module.exports = teacherRuoter;