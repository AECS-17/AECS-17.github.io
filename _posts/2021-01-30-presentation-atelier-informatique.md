---
layout: presentation
title: Atelier 💻 🖼️ Informatique
subtitle: AECS, 6 février 2021
summary: "Présentation de l'atelier informatique du 6 février 2021."
date:   2021-01-30 12:00:00
tile-image: informatique-003.jpg
---

<section markdown="1">

## Organisation

* Horaires :<br/>De 14h à 17h, avec une pause goûter 🍪 🍹
* Deux groupes en parallèle :
    1. Bandes Dessinées 🖼️<br/>(dans la pièce principale, pour tout niveau)
    2. Développement 💻<br/>(dans la petite pièce, au moins niveau 3e)

<aside class="notes" markdown="1">
* J'assurerai l’encadrement du groupe « Développement ». Je pourrais aussi aider les autres enfants, mais il faudrait au moins deux bénévoles pour le groupe « Bandes Dessinées ». Idéalement, au moins un encadrant qui soit familier avec le matériel (scanner, rétroprojecteur, ordinateurs) et les logiciels (BDnF, GIMP, Inkscape), ou qui les ait au moins testés au préalable.
* Les images et logiciels utilisés par le groupe « Bandes Dessinées » seront aussi utilisés par le groupe « Développement », donc on peut envisager de faire des présentations en commun sur le rétroprojecteur.
</aside>

</section>
<section markdown="1">

## Bandes Dessinées (1/6)

* Les enfants absents lors de la [première séance]({% post_url 2021-01-30-presentation-atelier-informatique %}) pourront se familiariser avec le logiciel [BDnF](https://bdnf.bnf.fr/index.html) en créant un Webtoon.
* Les autres peuvent continuer leurs bandes dessinées ou en créer de nouvelles.
* Ils peuvent aussi importer dans leur projet BDnF des images téléchargées d’internet.

⚠️ 💾 Penser à sauvegarder régulièrement.

<aside class="notes" markdown="1">
* Les enfants ont créé des profils lors de la séance précédente, il faudra qu’ils retrouvent l’ordinateur qu’ils avaient utilisé. Les nouveaux pourront créer un nouveau profil.
* Pour créer un Webtoon : `Nouveau Projet → planche ou webtoon → webtoon → 800p → Passer à l’édition des cases → Démarrer la mise en page`.
* Pour importer des images : `Galerie → Ajouter des images → Importer des images → Sélectionner des fichiers`
* Pour importer un corpus : `Galerie → Ajouter des images → Importer des images → Ajouter un corpus`
* Pour exporter ou présenter sa BD : `Exporter la planche → Image PNG ou Document PDF`
</aside>

</section>
<section markdown="1">

## Bandes Dessinées (2/6)

* Dessiner et scanner ses propres images.<br/>
  <img src="{{ site.baseurl }}/images/presentations/gimp-image-originale.png" alt="Image éléphant dans GIMP (originale)" style="width: 40%"/>
* Prendre des photos d’objets ou de lieux. 📷

<aside class="notes" markdown="1">
* Penser à apporter des appareils pour prendre des photos.
* Utiliser de préférence un stylo noir sur une page blanche pour les dessins (sauf pour les enfants qui veulent directement colorier l’image).
* Utiliser les ordinateurs connectés au scanner, ou directement le scanner avec une clef USB. Au pire, prendre une photo du dessin marche aussi (c’est ce que j’ai fait pour l’éléphant).
* Utiliser une résolution élevée pour une meilleure qualité. GIMP est capable de reconnaitre la plupart des formats d’image (qui seront probablement JPEG ou PNG).
</aside>

</section>
<section markdown="1">

## Bande Dessinées (3/6)

* Édition ([GIMP](https://fr.wikipedia.org/wiki/GIMP)) pour découper, redimensionner, ajouter un fond transparent, des couleurs, etc.<br/>
  <img src="{{ site.baseurl }}/images/presentations/gimp-image-finale.png" alt="Image éléphant dans GIMP (finale)" style="width: 40%;"/>
* Importer les images dans son projet BDnF.

<aside class="notes" markdown="1">
* GIMP peut utiliser son propre format lors de la sauvegarde. Pour un format accepté par BDnF supportant la transparence, faire `Fichier → exporter sous → mon-image.png → Exporter`.
* Pour obtenir une image noir et blanc, utiliser `Couleur → Luminosité-Contraste`, sélectionner un contraste maximal et jouer sur la luminosité pour obtenir une image convenable. Le nombre de couleurs peut être configuré avec `Image → Mode`.
* `Outil → Nouvelle boîte à outil` (`Ctrl+B`) pour afficher divers outils, notamment les outils de sélection, de remplissage ou de retouche. Pratique pour corriger les défauts.
* `Outils → Couleur vers alpha`, pour générer un fond transparent.
* `Image → Échelle et taille de l’image`, pour redimensionner l’image si nécessaire.
</aside>

</section>
<section markdown="1">

## Bandes Dessinées (4/6)

* Importer les dessins scannés dans [Inkscape](https://fr.wikipedia.org/wiki/Inkscape) et convertir en [images vectorielles](https://fr.wikipedia.org/wiki/Image_vectorielle).<br/>
  <img src="{{ site.baseurl }}/images/presentations/inkscape-image-initiale.png" alt="Image éléphant dans Inkscape (initiale)" style="width: 50%;"/>

<aside class="notes" markdown="1">
* Ouvrir une image PNG va créer une nouvelle image vectorielle avec une image matricielle intégrée. Le contenu de cette dernière ne peut être édité par inkscape, il faut la sélectionner et faire `Chemin → Vectoriser un objet matriciel`. Supprimer l'image matricielle et conserver la copie vectorielle.
* Essayer diverses options, `Plusieurs passes → Couleurs` peut être intéressant si l'image PNG est déjà en couleur.
</aside>

</section>
<section markdown="1">

## Bande Dessinées (5/6)

* Édition (Inkscape) de l’image vectorielle pour ajouter des couleurs, simplifier les chemins, etc.<br/>
  <img src="{{ site.baseurl }}/images/presentations/inkscape-image-finale.png" alt="Image éléphant dans Inkscape (finale)" style="width: 50%;"/>

<aside class="notes" markdown="1">
* `Chemin → Simplifier` (`Ctrl + L`) (répétable plusieurs fois) peut aider à simplifier le chemin.
* Utiliser le mode d’édition de noeuds (`N`) pour faire quelques retouches sur le chemin.
* Utiliser le mode remplissage (`U`) pour ajouter des couleurs.
</aside>

</section>
<section markdown="1">

## Bande Dessinées (6/6)

* Convertir (GIMP) l’image vectorielle [au format recommandé](https://bdnf.bnf.fr/faq.html) et l’importer dans le projet BDnF.
* Fournir des images vectorielles au groupe « Développement » pour en faire des
  [corpus](https://bdnf.bnf.fr/corpus.html).<br/>
  <img src="{{ site.baseurl }}/images/presentations/elephant-image-matricielle.png" alt="Image matricielle éléphant" style="width: 40%;"/>
  <img src="{{ site.baseurl }}/images/presentations/elephant-image-vectorielle.svg" alt="Image vectorielle éléphant" style="width: 40%;"/>

<aside class="notes" markdown="1">
* Ouvrir une image SVG dans GIMP permet de la convertir en format matriciel.
* Bien que le format vectoriel présente divers avantages, il n’est malheureusement pas supporté par BDnF.
</aside>

</section>
<section markdown="1">

## Développement (1/3)

* Les enfants se familiariseront avec le système Linux. Une introduction à la [ligne de commande et au langage bash]({{ site.baseurl }}/AECS-informatique/ligne-de-commande/) sera effectuée. Cela sera utile pour la séance du jour et [les futures]({{ site.baseurl }}/AECS-informatique/#d%C3%A9veloppement-logiciel).<br/>
  <img src="{{ site.baseurl }}/images/presentations/ligne-de-commande.png" alt="Ligne de commande" style="width: 50%;"/>

<aside class="notes" markdown="1">
* `git` pourra être testé avec [ce dépôt](https://github.com/AECS-17/AECS-BDnF-corpus).
* Les commandes `zip`, `sed` et `convert` seront utilisées plus loin.
</aside>

</section>
<section markdown="1">

## Développement (2/3)

* Installer l’application [BDnF pour Linux](https://bdnf.bnf.fr/applications/BDnF-Linux-x86-64.zip) et se familiariser avec.
* Étudier le format ZIP+XML utilisé par les [corpus d’image de BDnF](https://bdnf.bnf.fr/corpus.html) (corpus préinstallés situés dans `BDnF-Linux-x86-64/BDnF_Data/StreamingAssets`).
* Essayer de modifier un corpus, le réimporter et vérifier comment réagit l’application.

<aside class="notes" markdown="1">
Expliquer la structure générale d’un fichier XML, et donner l’exemple d’un fichier SVG.
</aside>

</section>
<section markdown="1">

## Développement (3/3)

* Création ou récupération d’images SVG.
* Étude et exécution d’un [script Make pour générer des corpus BDnF](https://github.com/AECS-17/AECS-BDnF-corpus).<br/>
  <img src="{{ site.baseurl }}/images/presentations/makefile.png" alt="Makefile ouvert dans emacs" style="width: 40%;"/>

<aside class="notes" markdown="1">
* Expliquer la syntaxe RGB hexadécimale des couleurs.
* Expliquer chaque commande et la syntaxe d’un Makefile.
</aside>

</section>