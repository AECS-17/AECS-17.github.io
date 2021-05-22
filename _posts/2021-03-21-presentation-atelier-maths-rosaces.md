---
layout: presentation
title:  "Atelier Maths"
subtitle: Dessin de Rosaces
summary: "Présentation de l'atelier de mercredi sur les dessins de rosaces."
date:   2021-03-21 12:00:00
tile-image: math-002.jpg
tags: maths activités
---

<script type="text/javascript" src="{{ site.baseurl }}/assets/js/presentations/drawings.js"></script>

<section markdown="1">

## Objectifs

<div style="font-size: 25%"><img src="{{ site.baseurl }}/images/presentations/compas.png" alt="Image éléphant dans GIMP (finale)" style="width: 20%;"/><br/><a href="https://commons.wikimedia.org/wiki/File:Drawing-a-circle-with-the-compasses.svg">CC BY-SA, Arnaud333</a></div>

* S'amuser à dessiner différents types de rosaces à la règle et au compas.
* Entrevoir quelques concepts et théorèmes mathématiques sous-jacents.

</section>

<section markdown="1">

## Un même problème sous plusieurs angles...

* Maternelle : Partage équitable d'un gâteau 🥧
* Élémentaire : Dessin de rosaces 💮
* Collège : Tracé de [polygones réguliers](https://fr.wikipedia.org/wiki/Polygone_r%C3%A9gulier) ⬡
* Lycée : Calcul de [valeurs trigonométriques](https://fr.wikipedia.org/wiki/Table_de_lignes_trigonom%C3%A9triques_exactes#Tables_de_valeurs) 📐
* Université : Décomposition d'une [extension cyclotomique](https://fr.wikipedia.org/wiki/Extension_cyclotomique) du [corps](https://fr.wikipedia.org/wiki/Corps_(math%C3%A9matiques)) des [nombres rationels](https://fr.wikipedia.org/wiki/Nombre_rationnel) en [tour d'extensions quadratiques](https://fr.wikipedia.org/wiki/Tour_d%27extensions_quadratiques) 🤔💭💫

</section>

<section markdown="1">

## Constructions à la règle et au compas

* Tracer la droite passant par deux points. ✅
* Tracer le cercle centré en un point et de rayon la distance entre deux points. ✅
* Utilisation de graduations ou d'autres instruments ([rapporteur](https://fr.wikipedia.org/wiki/Rapporteur), [équerre](https://fr.wikipedia.org/wiki/%C3%89querre), ...). ❌
* Construction approximative avec une éventuelle succession d'ajustements. ❌

</section>

<section markdown="1">

## La rosace à 6 pétales

Rosace "classique" avec des cercles de rayon fixe :

<canvas id="six_petales" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Taille des pétales 1/3

La longueur est égale au rayon du cercle.
La largeur "classique" est un quart de la longueur.

<canvas id="taille_petale1" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Taille des pétales 2/3

Pour un rayon d'arcs fixe et une longueur de pétale divisée par deux, la largeur
est divisée par *quatre*.

<canvas id="taille_petale2" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Taille des pétales 3/3

Pour une longueur de pétale fixe et un rayon d'arcs multiplié par deux, la largeur est *divisée* par deux.

<canvas id="taille_petale3" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Dessin des pétales 1/2

En choisissant la longueur et le rayon des arcs
(plus les rayons sont grands, plus la largeur est petite).

<canvas id="dessin_petale1" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Dessin des pétales 2/2

En choisissant la longueur et la largeur des pétales.

<canvas id="dessin_petale2" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">


## Rosace dédoublée

En ajoutant les bissectrices des 6 pétales, on obtient une rosace à 12 pétales.

<canvas id="doubler_petales" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Rosace extraite

En sélectionnant un pétale sur deux ou sur trois, on extrait une rosace à 3 ou 2 pétales.

<canvas id="extraire_petales" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## Rosace à 5 pétales

En utilisant les sommets d'un pentagone régulier, on dessine une rosace à 5 pétales.

<canvas id="cinq_petales" style="border: 1px solid black;"></canvas>

</section>


<section markdown="1">


## Rosaces dédoublées

On dédouble les rosaces à 2 et 5 pétales...

<canvas id="petales_dedoublees" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">


## PPCM de deux rosaces

En combinant les rosaces à 3 et 5 pétales, on obtient celle à 15 = 3 × 5 = [PPCM](https://fr.wikipedia.org/wiki/Plus_petit_commun_multiple)(3, 5) pétales !

<canvas id="ppcm_petales" style="border: 1px solid black;"></canvas>

</section>

<section markdown="1">

## En résumé

Rosaces avec au plus une vingtaine de pétales :

* On construit des rosaces à 5 ou 6 pétales.
* On divise le nombre de pétales : 2, 3.
* On le double : 4, 8, 10, 12, 16, 20.
* On considère les PPCMs : 15.

Et celles à 7, 9, 11, 13, 14, 17, 18, 19 pétales ?

</section>

<section markdown="1">


## Pour aller plus loin

Théorèmes de [Thalès](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Thal%C3%A8s), de [Mohr-Mascheroni](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Mohr-Mascheroni), de [Bachet-Bézout](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Bachet-B%C3%A9zout) et de [Gauss-Wantzel](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Gauss-Wantzel).

<canvas id="rosaces" style="border: 1px solid black;"></canvas>

</section>