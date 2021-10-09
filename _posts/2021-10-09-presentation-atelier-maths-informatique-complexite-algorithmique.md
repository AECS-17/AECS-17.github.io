---
layout: presentation
title:  Atelier maths/info
subtitle: Introduction à la complexité algorithmique
summary: "Présentation de l'atelier math/informatique du 9 octobre."
categories: presentations
tile-image: math-001.jpg
---

<section markdown="1">

## Objectifs

* S'amuser à résoudre de mini-jeux.
* S'initier de façon ludique à la complexité algorithmique.

</section>

<section markdown="1">

## Le bon tri

* On chronomètre qui est le plus rapide à trier un jeu de 32 cartes (préalablement mélangé), sans tenir compte des couleurs. Quelques stratégies :
  - Cartes initialement dans une main, on les passe une par une dans l'autre en les insérant au bon endroit.
  - Cartes dans les deux mains, on les parcourt et jette une par une la plus petite sur la table.
  - On les dispose toutes face visible sur la table, on fusionne progressivement en groupe de 2, 4, 8, 16, 32 cartes en triant à chaque fois.

<aside class="notes" markdown="1">
- Quelle est meilleure stratégie en pratique ? Mesure : chacune prend environ 1 minute.
- Le but de l'analyse de la complexité algorithmique est d'expliquer ce qui se passe asymptotiquement (e.g un jeu d'un milliard de cartes). Les deux premiers algorithmes de tris ont une complexité quadratique tandis que le tri fusion a une complexité linéarithmique.
- L'algorithme de tri fusion est de type diviser pour règner : on peut trier en parallèle pour aller plus vite.
</aside>

</section>

<section markdown="1">

## L'âge du capitaine

* Le capitaine choisit dans sa tête un âge entre 1 et 128 ans.
* Les autres font chacun leur tour des propositions.
* Le capitaine confirme si la réponse est correcte ou indique s'il est "plus vieux" ou "plus jeune".
* Nombre d'essais maximum : 128.

<aside class="notes" markdown="1">
* Algorithme 1 : Essayer les 128 possibilités. Complexité linaire : 128 essais maximum.
* Algorithme 2 : Recherche dichotomique. Complexité logarithmique : log<sub>2</sub>(128) = 7 essais maximum.
* Expliquer puissance de 2 et logarithme en base 2.
</aside>
</section>

<section markdown="1">

## Multiplication rapide

* On choisit un nombre de 3 chiffres (e.g. 452) et un nombre de deux 2 chiffres (e.g. 37). Poser la multiplication (e.g. 452 × 37).
* Les enfants de l'AECS ne connaissant que leurs tables d'addition prétendent qu'il est plus facile de poser les additions successives (e.g. 452 + 452 = 904, puis 904 + 452 = 1356, etc).
* Comparer le nombre d'opérations élémentaires (additions et multiplications) nécessaires dans les deux cas. Peut-on améliorer la 2e technique ?

<aside class="notes" markdown="1">
* Pour 452 × 37 on trouve 15 opérations.
* Pour la deuxième méthode, on dépasse ce nombre arrivé à 452 + 452 + 452 + 452 + 452 (et il reste encore 32 termes à ajouter).
* Oui, en groupant les termes, de façon similaire à l'exponentiation rapide.
</aside>

</section>

<section markdown="1">

## L'oreille musicale

* Une personne joue trois notes simultanément au piano (on utilisera un enregistrement préalable).
* Les autres peuvent lui demander de ré-écouter autant de fois que nécessaire.
* Les autres tâtonnent au piano afin de reproduire les trois notes jouées.
* Nombre de possibilités pour un piano de 88 touches : 88 × 87 × 86 = 658416 possibilités.

<aside class="notes" markdown="1">
* Algorithme 1 : jouer tous les accords possibles. Complexité cubique : 88³ ; 7-8 jours maximum en jouant un accord par seconde.
* Algorithme 2 : chanter chacune des trois notes ; jouer à chaque fois les 88 notes chromatiquement pour trouver la note. Complexité linaire : 3×88 ; 3 minute 24 maximum en jouant une note par seconde.
* Algorithme 3 : idem mais faire à chaque fois une recherche dichotomique (plus aigu / plus grave). Complexité logarithmique : 3×log<sub>2</sub>(88) ; 20 secondes maximum en jouant une note par seconde.
* Algorithme 4 : idem mais trouver directement chaque note (oreille absolue) ou l'intervalle par rapport à une note de référence (oreille relative). Pas plus de 6 essais.
</aside>

</section>

<section markdown="1">

## Les tours de Hanoï

* On dispose de trois emplacements : départ, intermédiaire, arrivée.
* L'emplacement de départ comporte des livres empilés du plus grand au plus petit.
* Le but est déplacer cette pile dans l'emplacement d'arrivée en un un minimum de coups, tout en respectant les règles suivantes :
   - On ne peut déplacer plus d'un livre à la fois ;
   - On ne peut placer un livre que sur un autre livre plus grand que lui ou sur un emplacement vide.

<aside class="notes" markdown="1">
* Expliquer la solution, le nombre minimal de déplacement est 2 puissance le nombre de livres moins 1.
* C'est une complexité exponentielle, elle augmente très rapidement ! Donner exemple en supposant un déplacement par seconde.
</aside>
</section>
