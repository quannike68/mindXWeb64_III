var express = require('express');
const Joi = require('joi');
var router = express.Router();


let books = [
    {id:1, litle:'Book 1', author:'Author 1'},
    {id:2, litle:'Book 2', author:'Author 2'},
    {id:3, litle:'Book 3', author:'Author 3'},
]

const bookSchema = Joi.object({
    title:Joi.string().min(3).required(),
    author:Joi.string().min(5).required()
});

//Viet 1 endpoint http//:localhost:3000/books/get-all (GET)
router.get('/get_all',(req,res) =>{
    //tra ve 1 danh sach toan bo ca quyen sach
    res.send(books)
});

//Viet 1 endpoint http//:localhost:3000/books/create (POST)
router.post('/create',(req,res) =>{
    const validationResult = bookSchema.validate(req.body);
    if(validationResult.error){
        return res.status(400).send(validationResult.error.details[0].message)
    }
    const book = {
        id:books.length+1,
        title:req.body.title,
        author:req.body.author
    }
    books.push(book);
    res.send(book)
});

//Viet 1 endpoint http//:localhost:3000/books/:id (PUT)

//Viet 1 endpoint http//:localhost:3000/books/:id (DELETE)

//Ket hop them 1 vai kien thuc khac - Su dung joi de validata dau vao

//Handle cac case loi 

//Hoc cac su dung Postman

module.exports = router;