---
title: Le Curseur De Volume Ne Fonctionne Pas Sur macOS
description: Corrigez le problème du curseur de volume sur macOS pour les Intel Macs. Une solution de contournement simple pour reprendre le contrôle de votre sortie audio.
---
# Le Problème : la barre de réglage du volume ne fonctionne pas.

Ceci est l'un des problèmes les plus connus sur la version **Intel** de macOS, où la barre de réglage du volume qui contrôle le volume audio ne fonctionne tout simplement pas, et ne fait qu'agir comme un interrupteur (cela affecte la plupart des replicas, bien que certains ne soient pas concernés). Comme Apple ne s'occupera jamais du problème, nous pouvons contourner ceci avec un [outil open source](https://github.com/briankendall/proxy-audio-device).

:::warning
Ce guide est destiné à ceux qui possèdent des Mac basés sur Intel (i3, i5, i7 ; pas de puce M series). Si votre Mac Apple Silicon (puce M series) ne joue pas de son avec vos AirReps actuels, consultez la section [translated Common Bugs](/fr/troubleshooting/other-common-bugs).
:::

## **Prérequis**

Avant le tutoriel, veuillez vous assurer que :
- Vous avez un accès `sudo` (votre compte macOS doit disposer des privilèges administrateur)
- Vous avez l'installeur de paquets `brew` (si ce n'est pas le cas, suivez cette [section](#brew-installation))

:::tip
PS : utiliser `brew` est beaucoup plus simple que l'installation manuelle, mais si vous voulez éviter `brew`, vous pouvez lire ceci et suivre les étapes [ici](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Installation de `brew`**

Si vous n'avez pas `brew` installé sur votre système, nous pouvons commencer ici. Allez sur cette page : [https://brew.sh/](https://brew.sh/), copiez la commande et exécutez-la dans le Terminal.

<video src="/volume_fix/brew-installation.webm" poster="/volume_fix/brew-installation-poster.webp" width="500" height="443" autoplay loop muted playsinline aria-label="Installation using Terminal"></video>

:::warning
Il se peut qu'on vous demande d'entrer votre mot de passe, allez-y et entrez-le comme d'habitude (votre mot de passe peut sembler caché, mais ce n'est pas le cas ici).
:::

## **Installation**

### **Téléchargement**
Une fois que tout est prêt, vous pouvez commencer en ouvrant le Terminal, puis exécutez la commande suivante :
`brew install --cask proxy-audio-device`

<video src="/volume_fix/app-installation.webm" poster="/volume_fix/app-installation-poster.webp" width="500" height="346" autoplay loop muted playsinline aria-label="install proxy-audio-device"></video>

:::tip
Pendant l'installation, il est normal que l'audio système ait de petits accrochages. Faites cela quand aucun son n'est en train d'être joué ou édité (aucun logiciel de manipulation audio en cours d'exécution).
:::

### **Configuration**
1. Allez dans Launchpad, lancez la nouvelle application installée `Proxy Audio Device Settings` pour commencer le processus de configuration, elle ressemblera à ceci :

![app's icon](/volume_fix/app_icon.png)

2. Une fois ouverte, une fenêtre apparaîtra comme ceci.

![app's ui](/volume_fix/app_window.png)

Ne soyez pas tenté de fermer ce tutoriel, la plupart des gens comme vous peuvent les configurer ainsi :

- `Proxy device name`: Nom de la sortie ; vous pouvez le laisser tel quel.
- `Proxied device`: Source audio (sélectionnez le nom de votre AirRep)
- `Buffer size`: Temps permis pour que macOS traite l'audio (simplifié) (veuillez **le laisser tel quel**, car 512 est suffisant pour la plupart des utilisateurs)
- `Proxy device is active`: Fonctionnement du logiciel en arrière-plan. C'est là que cela devient délicat, mais cela se résume à ces options :
    + Si vous ne supportez pas la coupure de l'audio (sons de courte durée), choisissez `When proxied device is active`
    + Pour la plupart des gens, choisissez `When user is not idle`
    + Pour ceux qui veulent un audio cohérent, ou pour le jeu, choisissez `Always`.

3. Enfin, allez dans Control Center > Sound > l'icône ">", et choisissez le périphérique audio nouvellement créé (`Proxy Audio Device` par défaut).

<video src="/volume_fix/change-audio-device.webm" poster="/volume_fix/change-audio-device-poster.webp" width="500" height="558" autoplay loop muted playsinline aria-label="pick audio device"></video>


## **Effets secondaires**

Bien que cela convienne la plupart du temps, certains utilisateurs peuvent rencontrer ces problèmes :
::: details Pas d'icône "Sounds" dans la barre supérieure
Malheureusement, vous devez aller dans le Control Center pour contrôler l'audio (ou utiliser un raccourci clavier).
:::

:::details Pas de son lorsque déconnecté
L'application est conçue pour se connecter en permanence au périphérique choisi. Vous devez re-sélectionner manuellement "Internal Speaker".
:::

:::details Crépitements/pop ou audio d'un seul côté
Vous pouvez contourner cela en augmentant la taille du buffer, ou en choisissant `Always` dans l'option `Proxy device is active` de l'application.
:::

## **Désinstallation**

Si vous souhaitez supprimer l'application, vous pouvez simplement exécuter cette commande dans le Terminal :

`brew remove --cask proxy-audio-device`

...puis redémarrez votre système.

## **Optionnel : Sondage**

J'ai créé un sondage [ici](http://poll-maker.com/poll5643879x05fb4568-166) pour savoir si ce contournement fonctionne réellement. C'est extrêmement simple à faire, et cela aide beaucoup à obtenir une vue d'ensemble. J'apprécierais vraiment que vous partagiez vos impressions !

[![poll](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
