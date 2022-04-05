//Ici on crée le point d'entrée de notre programme.
//Au préalable on aura lancé le paramétrage pré-requis à savoir : npm init dans lequel on créé un "start", et on 
//installe les dépendances nécessaires suibantes : node-dev pour récupérer les modules , express, ejs.
//On oublira pas de créer un fichier .gitignore afin d'éviter le push des fichiers node_modules.

//On appelle le module server via require.
require('./modules/server');