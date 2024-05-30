# Projet Node.js: Gestion des Auteurs et des Livres
## Description
Ce projet est une application Node.js permettant de gérer des auteurs et des livres. Il utilise Express pour créer des routes et Sequelize pour interagir avec une base de données SQLite. L'application fournit des API pour créer, lire, mettre à jour et supprimer des auteurs et des livres, ainsi que pour récupérer tous les auteurs et tous les livres.

## Structure du Projet
index.js : Fichier principal de l'application qui initialise le serveur Express et les modèles Sequelize.
routes/auteur.js : Définition des routes pour les opérations liées aux auteurs.
routes/livre.js : Définition des routes pour les opérations liées aux livres.
controllers/AuteurController.js : Contrôleur pour les opérations CRUD sur les auteurs.
controllers/LivreController.js : Contrôleur pour les opérations CRUD sur les livres.
modeles/AuteurModel.js : Modèle Sequelize pour les auteurs.
modeles/LivreModel.js : Modèle Sequelize pour les livres.
## Initialisation du Projet
index.js

## Configure et démarre le serveur Express.

Initialise les modèles Sequelize et définit les relations entre les modèles.
Synchronise les modèles avec la base de données SQLite.

## Routes

routes/auteur.js
PATCH /: Met à jour un auteur.
GET /all: Récupère tous les auteurs.
GET /:auteurId: Récupère un auteur spécifique.
GET /:auteurId/livres: Récupère tous les livres d'un auteur spécifique.
POST /: Crée un nouvel auteur.
DELETE /:userId: Supprime un auteur.
routes/livre.js
PATCH /: Met à jour un livre.
GET /all: Récupère tous les livres.
POST /: Crée un nouveau livre.
DELETE /:livreId: Supprime un livre.

## Modèles

modeles/AuteurModel.js
Définit la structure de la table des auteurs.
Fournit des méthodes pour créer, lire, mettre à jour et supprimer des auteurs.
modeles/LivreModel.js
Définit la structure de la table des livres.
Fournit des méthodes pour créer, lire, mettre à jour et supprimer des livres.
Contrôleurs

controllers/AuteurController.js
Gère les requêtes pour les opérations CRUD sur les auteurs.
controllers/LivreController.js
Gère les requêtes pour les opérations CRUD sur les livres.
## Démarrage
Pour démarrer le serveur, exécutez la commande suivante :

```bash
Copier le code
node index.js
```
Le serveur écoutera sur le port 5000. Vous pouvez accéder aux différentes API en utilisant un client HTTP comme Postman ou curl.

## Dépendances
express: Framework web pour Node.js.
sequelize: ORM pour Node.js supportant différentes bases de données SQL.
sqlite3: Module SQLite pour Node.js utilisé par Sequelize pour interagir avec la base de données SQLite.
## Installation
Assurez-vous d'avoir Node.js et npm installés. Ensuite, installez les dépendances nécessaires avec :

```bash
Copier le code
npm install express sequelize sqlite3
 ```
