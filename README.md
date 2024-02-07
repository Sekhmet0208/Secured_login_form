# Projet d'Authentification 

Ce projet est une application web d'authentification implémentant un système d'inscription et de connexion. Il utilise Node.js et Express pour le serveur backend, bcrypt pour le hachage des mots de passe, et SQLite comme système de gestion de base de données. Le frontend est codé en Html, Css et JS sans framework supplémentaire.

## Caractéristiques

- Système d'inscription et de connexion sécurisé.
- Hachage des mots de passe avec bcrypt.
- Stockage des données utilisateur dans SQLite.
- Design frontend en neomorphism.

## Prérequis

- Node.js
- NPM (Node Package Manager)

## Installation


1. **Installer les dépendances NPM**

   À la racine du projet, exécutez :

   ```bash
   npm install
   ```

2. **Démarrer le serveur**

   Toujours à la racine du projet, lancez votre serveur avec :

   ```bash
   node server.js
   ```

## Utilisation

Après avoir démarré le serveur, ouvrez votre navigateur et allez à :

- **Inscription** : `http://localhost:3000/register.html` pour créer un nouveau compte utilisateur.
- **Connexion** : `http://localhost:3000/login.html` pour vous connecter avec un compte existant.

## Structure du Projet

- `server.js` : Le point d'entrée de l'application, configurant le serveur et les routes.
- `database.js` : Script de configuration de la base de données SQLite.
- `/public` : Dossier contenant les fichiers statiques pour le frontend.
  - `register.html` et `login.html` : Formulaires d'inscription et de connexion.
  - `register.css` et `login.css`: Feuille de style pour le design en neomorphism.
  - `register.js` et `login.js` : Scripts côté client pour les formulaires.
