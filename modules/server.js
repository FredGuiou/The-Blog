//On require le module Express et on le lance.

const express = require('express');
const app = express();

//On dit à Express que le moteur de vues sera Ejs.
app.set('view engine', 'ejs');
// On dit a express ou trouver les vues dasn le répertoire "views".
app.set('views', 'views');

//On dit à Express où se trouvent les fichiers staiques (Css, Imgaes etc...).
app.use(express.static('static'));

//On require le module routeur qu'on aura créé dans un fichier séparé.
//On lance le routeur.
const router = require('./router');
app.use(router);

//On lance une écoute sur le port 3000.
const server = app.listen(3000, () => {
    console.log('Listening on http://localhost:3000');
});

//On exporte notre Serveur.
module.exports = server;