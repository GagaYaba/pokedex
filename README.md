# pokedex
Gaëlle Lanic
B3 Dev A

Pokémon Trainer Selection App

Description
Cette application permet de sélectionner un dresseur Pokémon, afficher ses informations et son équipe de Pokémon capturés. Chaque dresseur a un starter, un âge, une région d'origine et un avatar. Lorsque l'utilisateur clique sur un dresseur, un Pokédex affiche les Pokémon qu'il a capturés.

Fonctionnalités
Affichage d'une liste de dresseurs Pokémon avec leur avatar, nom, âge, région, et starter.

Possibilité de choisir un dresseur et voir les Pokémon qu'il a capturés dans un Pokédex.

Utilisation de TypeScript avec React et Vite pour une application moderne et performante.

Mise en place d'un système de récupération des Pokémon capturés via une API externe (https://tyradex.vercel.app/).

Structure du projet
Components : Contient des composants réutilisables, tels que TrainerCard pour afficher un dresseur et TrainerList pour afficher la liste des dresseurs.

Views : Contient des vues principales, comme TrainerSelection, qui gère la logique de sélection du dresseur et l'affichage du Pokédex.

Types : Définit les types TypeScript, comme Trainer et la structure des données.

Styles : Fichiers CSS pour le style de l'application, avec un design inspiré de l'ancien Game Boy.

Fonctionnement
L'application charge une liste de dresseurs avec leurs informations.

L'utilisateur peut cliquer sur un dresseur pour afficher ses informations et une liste de Pokémon capturés.

L'interface utilise un style minimaliste rappelant les jeux Pokémon anciens avec des éléments centrés et des animations au survol des cartes de dresseur.

Technologies utilisées
React : pour construire l'interface utilisateur.

TypeScript : pour le typage strict et la sécurité du code.

Vite : pour une expérience de développement rapide et moderne.

API externe : pour récupérer les données des Pokémon capturés.