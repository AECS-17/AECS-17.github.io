---
layout: presentation
title:  Atelier maths
subtitle: Trivial Pursuit Arithmétique
summary: "Présentation de l'atelier math du ???."
categories: presentations
tile-image: math-002.jpg
---

<section class="slide" markdown="1">

## Objectifs

* Se divertir avec un jeu de société.
* S'entrainer à effectuer des calculs de tête ou à les poser sur papier.
* Apprendre quelques concepts et algorithmes sur les nombres entiers.

</section>

<section class="slide" markdown="1">

## Matériel nécessaire

* Un [jeu de Trivial Pursuit](https://fr.wikipedia.org/wiki/Trivial_Pursuit).
* Un second dé.
* Un [jeu de 54 cartes](https://fr.wikipedia.org/wiki/Jeu_de_cartes_fran%C3%A7ais).
* Les cartes 1-9 d'un [jeu de Uno](https://fr.wikipedia.org/wiki/Uno).
* Éventuellement un sablier pour limiter le temps de réponse.

</section>

<section class="slide" markdown="1">

## Règle du jeu

Le déroulement général est celui du Trivial Pursuit :

1. Les équipes partent du centre et lancent les dés pour déplacer leur pion sur le plateau.
2. Elles répondent à des questions pour rejouer ou gagner des parts de camembert.
3. Elles retournent à la case centrale pour répondre à la question finale.

</section>

<section class="slide" markdown="1">

## Déplacement

1. On lance les deux dés pour obtenir un premier nombre de 2 à 12.
2. On tire une carte du jeu de 52 cartes pour obtenir un second nombre de 1 à 13 (un joker laissant le choix d'une de ces treize valeurs).
3. On se déplace du nombre de case donné par le reste de la [division euclidienne](https://fr.wikipedia.org/wiki/Division_euclidienne) du premier nombre par le second nombre.

</section>

<section class="slide" markdown="1">

## Déplacement

* La somme des dés est 8, la carte est un 3. On a 8 = 3 × 2 + **2** donc on se déplace de 2 cases.
* La somme des dés est 12, la carte est un 11 (un valet). On a 12 = 11 + **1** donc on se déplace de 1 case.
* Si la carte est un as on se déplace de 0 case, si c'est un roi on se déplace du nombre de cases indiqué par les dés.

</section>

<section class="slide" markdown="1">

## Cases marrons

* Si on est sur une case normale, on tire deux cartes de Uno. Si on trouve la somme de tête, on peut rejouer.

* Si on est sur une case camembert, on tire huit cartes de Uno pour former deux nombres à 4 chiffres. Si on parvient à  calculer leur somme, on gagne un camembert et on peut rejouer.

* Après deux déplacements, on cède son tour.

</section>

<section class="slide" markdown="1">

## Cases jaunes et vertes

* Pour les cases jaunes, on doit calculer le plus grand nombre moins le plus petit.

* Pour les cases vertes, on doit calculer le produit des deux nombres. Pour les cases spéciales, on tire cinq cartes de Uno pour former un premier nombre à 3 chiffres et un second nombre à 2 chiffres.

</section>

<section class="slide" markdown="1">


## Cases oranges

* Pour les cases oranges, on calcule le quotient de la division euclidienne du plus grand nombre par le plus petit.

* Pour les cases oranges camembert, on tire six cartes et forme un dividende de quatre chiffres et un diviseur de deux chiffres.

</section>

<section class="slide" markdown="1">

## Cases oranges

* Sur une case normale, on tire 8 et 4. Le quotient est 2 = 8 ÷ 4.

* Sur une case normale, on tire 9 et 2. On a 9 = **4** × 2 + 1 donc le quotient est 4.

* Sur une case camember, on tire 7, 7, 3, 2, 3, 1. 7732 = **249** × 31 + 13 donc la réponse est 249.

</section>

<section class="slide" markdown="1">

## Cases roses et bleues

* Pour les cases roses, il faut trouver [le plus grand commun diviseur](https://fr.wikipedia.org/wiki/Plus_grand_commun_diviseur) des nombres. Pour les cases bleues, une paire d'entiers satisfaisant [l'identité de Bézout](https://fr.wikipedia.org/wiki/Th%C3%A9or%C3%A8me_de_Bachet-B%C3%A9zout).

* Pour les cases camembert, on tire quatre cartes de Uno pour former deux nombres à deux chiffres.

</section>

<section class="slide" markdown="1">

## Cases roses et bleues

* Sur une case normale, on tire 6 et 8. Les diviseurs de 6 sont 1, 2, 3, 6. Ceux de 8 sont 1, 2, 4, 8. Donc le plus grand en commun est 2. On peut écrire **1** × 8 **−1** × 6 = 2.

* Sur une case camembert, on tire 7, 6, 2, 8. En appliquant l'[algorithme d'Euclide](https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide) on trouve que le plus grand commun diviseur de 76 et 28 est 4. [Sa version étendue](https://fr.wikipedia.org/wiki/Algorithme_d%27Euclide_%C3%A9tendu) donne
**3** × 76 **−8** × 28 = 4.

</section>

<section class="slide" markdown="1">


## Case finale

L'équipe adverse choisit un problème. On tire des cartes pour former les paramètres et on doit résoudre le problème avant un adversaire e.g.

* Calculer somme, différence, produit, quotient de deux nombres.

* Calculer le [PGCD](https://fr.wikipedia.org/wiki/Plus_grand_commun_diviseur), [PPCM](https://fr.wikipedia.org/wiki/Plus_petit_commun_multiple) de deux nombres ou les coefficients de l'identité de Bézout.

* [Décomposer un nombre en facteurs premiers](https://fr.wikipedia.org/wiki/D%C3%A9composition_en_produit_de_facteurs_premiers).

</section>
