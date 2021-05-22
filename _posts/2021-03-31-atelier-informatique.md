---
layout: post
title:  "Atelier Informatique"
date:   2021-03-31 12:00:00
summary: "Initiation à la ligne de commande"
tile-image: "informatique-002.jpg"
tags: informatique activités
---

<img style="width: 100%; max-width: 600px;" src="{{ site.baseurl }}/images/posts/atelier-bash-001.jpg" alt="Photo atelier"/>

* Encadrants : Frédéric, Olivier
* Enfants présents : Aurélien, Aïssa, Adnane, Saïd, Ilyès, Jeremy

Il s'agissait du premier atelier informatique pour initier les jeunes au développement de logiciel. Dans cette session, nous avons vu le [langage Bash et la ligne de commande]({{ site.baseurl }}/AECS-informatique/ligne-de-commande/) sous Linux. Notez que la ligne de commande sous macOS et le [Powershell](https://docs.microsoft.com/en-us/powershell/) de Windows utilisent des commandes similaires.

Dans un premier temps, les enfants ont pu essayer les différentes commandes pour manipuler des fichiers et dossiers en comparant avec l'interface graphique :

* `cp` pour copier des fichiers.
* `ls` pour lister le contenu du répertoire courant.
* `touch`, `echo` avec la redirection `>>` ou `mkdir` pour créer des fichiers et dosssiers.
* `mv` pour déplacer des fichiers.
* `pwd` pour afficher le répertoire courant.
* `rm` et `rmdir` pour supprimer des fichiers et dossiers
* `cat` pour éditer afficher le contenu de fichiers (en fait en [concaténer](https://fr.wiktionary.org/wiki/concat%C3%A9ner)).

<img style="width: 100%; max-width: 600px;" src="{{ site.baseurl }}/images/posts/atelier-bash-003.jpg" alt="Photo atelier"/>

Nous avons vu comment obtenir la documentation d'une commande inconnue à l'aide avec l'option `--help` ou la commande `man`. Nous nous sommes aussi amusés avec le métacaractère `*` et l'autocomplétion par la touche `tab`.

Ensuite, nous avons créé et exécuté un [petit script]({{ site.baseurl }}/AECS-17/AECS-informatique/blob/master/ligne-de-commande/count.sh) avec la commande `bash` qui compte lentement de 1 à 100. Il peut être interrompu avec le raccourci clavier `Ctrl+C`. La commande `ps` affiche les processus et nous avons vu comment utilisé la commande `kill` pour tuer ce script ou bien son propre terminal bash. La commande `time` a aussi permis de mesurer son temps d'exécution.

<img style="width: 100%; max-width: 600px;" src="{{ site.baseurl }}/images/posts/atelier-bash-002.jpg" alt="Photo atelier"/>


Enfin Frédéric a mentionné la commande `ssh` pour se connecter à une autre machine et a montré rapidement quelques commandes :

* `wget` pour télécharger des fichiers.
* `sort` et `uniq` pour trier des lignes d'un fichier texte et supprimer les doublons.
* `wc` pour compter les lignes, mots ou caractères d'un fichier.
* `sed` pour effectuer des substitutions dans un fichier.
* Différentes commandes `git` pour gérer un dépôt de développement partagé.

Nous reviendrons sur ces commandes dans de futurs ateliers de développement logiciel.

<img style="width: 100%; max-width: 300px;" src="{{ site.baseurl }}/images/posts/atelier-bash-004.jpg" alt="Photo atelier"/>
