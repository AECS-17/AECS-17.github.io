---
layout: presentation
title:  Atelier maths/informatique
subtitle: Introduction à la complexité algorithmique
summary: "Présentation de l'atelier du 9 octobre."
categories: presentations
tile-image: math-001.jpg
---

<section markdown="1">

## Objectifs

* S'amuser à résoudre de mini-jeux. 🎲 ♣️
* S'initier de façon ludique à la complexité algorithmique. 💻⌚

</section>

<section markdown="1">

## La course au tri

* On mélange un jeu de 32 cartes ♣️❤️♠️♦️.
* On chronomètre ⌚ le temps nécessaire pour les ranger dans l'ordre croissant (7, 8, 9, 10, Valet, Dame, Roi, As) sans tenir compte des couleurs.
* Le vainqueur est la personne la plus rapide 🏆.
* On recommence en faisant des équipes de deux ou quatre qui peuvent se coordonner pour trier les cartes plus rapidement 🧑🏾👩🏼👨🏻👩🏿.

<aside class="notes" markdown="1">
* Mesurer le temps avec (en pratique, une minute chacun ?):
  - Cartes initialement dans une main, on les passe une par une dans l'autre en les insérant au bon endroit.
  - Cartes dans les deux mains, on les parcourt et jette une par une la plus petite sur la table.
  - On les dispose toutes face visible sur la table, on fusionne progressivement en groupe de 2, 4, 8, 16, 32 cartes en triant à chaque fois.
* Le but de l'analyse de la complexité algorithmique est d'expliquer ce qui se passe asymptotiquement (e.g un jeu d'un milliard de cartes). Les deux premiers algorithmes de tris ont une complexité quadratique tandis que le tri fusion a une complexité linéarithmique.
* L'algorithme de tri fusion est de type diviser pour règner : on peut trier en parallèle pour aller plus vite.
</aside>

</section>

<section markdown="1">

## L'âge du capitaine

* Deux équipages s'affrontent, ils possèdent chacun un capitaine fictif 👮🏿.
* Chaque équipage décide l'âge secret du capitaine (entre 1 et 128 ans) et le note sur un papier ✍🏼.
* A tour de rôle, les équipages essayent de deviner l'âge du capitaine adverse ❓.
* Le capitaine indique si la réponse est correcte ✅ ou s'il est plus vieux 👴 ou plus jeune 🧒.
* Les vainqueurs sont ceux qui trouve l'âge en premier 🏆.

<aside class="notes" markdown="1">
* Algorithme 1 : Essayer les 128 possibilités. Complexité linaire : 128 essais maximum.
* Algorithme 2 : Recherche dichotomique. Complexité logarithmique : log<sub>2</sub>(128) = 7 essais maximum.
* Expliquer puissance de 2 et logarithme en base 2.
</aside>
</section>

<section markdown="1">

## Uno Solitaire 

* On tire 4 cartes numériques d'un jeu de Uno pour obtenir 2 nombres de 2 chiffres, disposés comme pour poser une multiplication 🧮.
* On effectue la multiplication en mettant de coté les paires de cartes correspondant aux multiplications de deux chiffres effectuées ♠️♥️.
* Vérifier le nombre de paires obtenues et l'exactitude du résultat ✅.
* Variante : n'autoriser qu'additions (paires de cartes), décrémentations (carte ↔️) et moitiés (carte +2).

<aside class="notes" markdown="1">
* Montrer le jeu et le compte du nombre d'opération.
* Pour la variante, utiliser un algorithme similaire à l'exponentiation rapide.
</aside>

</section>

<section markdown="1">

## L'oreille musicale

* Deux joueurs : le musicien et l'auditeur.
* Le musicien joue trois notes simultanément au piano 🎹 ou un autre instrument harmonique.
* L'auditeur peut demander à ré-écouter autant de fois que nécessaire 🎶 et a le droit de chanter ou jouer sur l'instrument.
* Le but est de rechercher et reproduire les trois notes jouées 🤔 en essayant de toucher l'instrument le moins possible.

<aside class="notes" markdown="1">
* Nombre de possibilités pour un piano de 88 touches : 88 × 87 × 86 = 658416 possibilités.
* Algorithme 1 : jouer tous les accords possibles. Complexité cubique : 88³ ; 7-8 jours maximum en jouant un accord par seconde.
* Algorithme 2 : chanter chacune des trois notes ; jouer à chaque fois les 88 notes chromatiquement pour trouver la note. Complexité linaire : 3×88 ; 3 minute 24 maximum en jouant une note par seconde.
* Algorithme 3 : idem mais faire à chaque fois une recherche dichotomique (plus aigu / plus grave). Complexité logarithmique : 3×log<sub>2</sub>(88) ; 20 secondes maximum en jouant une note par seconde.
* Algorithme 4 : idem mais trouver directement chaque note (oreille absolue) ou l'intervalle par rapport à une note de référence (oreille relative). Pas plus de 6 essais.
</aside>

</section>

<section markdown="1">

## Les tours de Hanoï

* On dispose de trois emplacements : départ, intermédiaire, arrivée.
* L'emplacement de départ comporte des livres empilés du plus grand au plus petit 📚. 
* Le but est de déplacer cette pile sur l'arrivée 🏁 en respectant les règles suivantes :
   - Ne pas déplacer plus d'un livre à la fois ;
   - Ne placer un livre que sur un autre livre plus grand ou sur un emplacement vide.

<aside class="notes" markdown="1">
* Expliquer la solution, le nombre minimal de déplacement est 2 puissance le nombre de livres moins 1.
* C'est une complexité exponentielle, elle augmente très rapidement ! Donner exemple en supposant un déplacement par seconde.
</aside>
</section>
