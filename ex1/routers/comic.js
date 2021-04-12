const express = require('express');
const router = express.Router();
const Joi = require('joi');
const _ = require('lodash');

var comics = [
    { author : "at1" , title : "title" , imgURL : "url1" },
    { author : "at1" , title : "title1" , imgURL : "url2" },
    { author : "at2" , title : "title2" , imgURL : "url3" }
]


const comic_validation_schema = Joi.object({
    author : Joi.string().min(2).max(25).required(),
    title : Joi.string().min(2).max(25).required(),
    imgURL : Joi.string()
})

router.use(express.json());

//
// get all comics
//

router.get('' , (req,res) => {
    res.send(comics);
});

//
// get comic by author
//

router.get('/author/:author' , (req,res) => {
    let comic = comics.filter( c => c.author === req.params.author);
    if(comic.length == 0){
        return res.status(204).send();
    }
    res.send(comic);
});

//
// get comic by title
//

router.get('/title/:title' , (req,res) => {
    let comic = comics.find( c => c.title === req.params.title);
    if(comic.length == 0){
        return res.status(204).send();
    }
    res.send(comic);
});


//
// add comic
//
router.post('', (req,res) => {

    let result = comic_validation_schema.validate(req.body);
    if(result.error)
        res.status(400).send(result.error);
    let comic = req.body;
    comics.push(comic);

    res.status(201).send(comic);

});


//
// update comic
//
router.put('/:title', async (req,res) => {

    let comic = comics.find(c => c.title == req.params.title);
    if(!comic){
        res.status(404).send('Comic not found');
    }
    comic = _.merge(comic,req.body)
    res.send(comic);
});


//
// delete comic
//
router.delete('/:title', async (req,res) => {

    let comic = comics.find(c => c.title == req.params.title);
    if(!comic){
        res.status(404).send('Comic not found');
    }
    comics = comics.filter(c => c.title != req.params.title);
    res.send(comics);
});


module.exports = router;