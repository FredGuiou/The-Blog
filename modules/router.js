//On créé un routeur via Express.

const express = require('express');
const res = require('express/lib/response');
const router = express.Router();

const articles = require('../data/articles.json');

//On crée la route vers la view de la page d'accueil "/"
router.get('/', (req, res) =>{
    res.render('index.ejs', {articles});
});

router.get('/article/:id', (req, res) =>{
    const id = req.params.id;
    const articleDetails = articles.find((element)=>{
        return element.id === parseInt(id);
    });
    if (articleDetails !== undefined) {
        res.render("articleDetails", {articleDetails})
        
    } else {
        res.status(404);
        res.render("404");
    }
});

module.exports = router;