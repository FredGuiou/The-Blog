//On créé un routeur via Express.

const express = require('express');
const router = express.Router();

//On crée la route vers la view de la page d'accueil "/"
router.get('/', (req, res) =>{
    res.render('index.ejs');
});



module.exports = router;