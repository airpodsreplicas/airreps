---
description: "Correction du contrôle du volume des AirPods sur macOS (Intel)."
---

# Le Problème : Le Curseur de Volume ne fonctionne pas.

C'est l'un des problèmes les plus connus sur la version **Intel** de macOS, où le curseur de volume qui contrôle le volume audio ne fonctionne tout simplement pas, mais agit seulement comme un interrupteur (cela arrive à la plupart des répliques, bien que certaines ne soient pas affectées). Bien qu'Apple ne regardera jamais ce problème, nous pouvons le contourner avec un [outil open source](https://github.com/briankendall/proxy-audio-device).

:::warning
Ce guide est destiné à ceux qui ont des Macs basés sur Intel (i3, i5, i7 ; pas les puces de la série M). Si votre Mac Apple Silicon (puce série M) ne lit pas l'audio avec vos AirReps actuels, consultez la section [Bugs Courants](/fr/troubleshooting/other-common-bugs.md).
:::

## **Prérequis**

Avant le tutoriel, veuillez vous assurer que vous avez :
- Accès `sudo` (ou que votre compte macOS a un accès administrateur)
- L'installateur de paquets `brew` (sinon, suivez simplement cette [section](#installation-de-brew))

:::tip
PS : utiliser `brew` est beaucoup plus facile que l'installation manuelle, mais si vous voulez éviter d'utiliser `brew`, vous pouvez lire et suivre les étapes [ici](https://github.com/briankendall/proxy-audio-device#manual-installation).
:::

## **Installation de `brew`**

Si vous n'avez pas `brew` installé sur votre système, on peut commencer ici. Entrez sur [cette](https://brew.sh/) page, copiez la commande et exécutez-la dans Terminal.

![Installation via Terminal](/volume_fix/brew-installation.gif)

:::warning
Vous pourriez être invité à entrer votre mot de passe, allez-y et entrez votre mot de passe comme d'habitude (votre mot de passe peut sembler caché, mais ce n'est pas le cas dans ce contexte).
:::

## **Installation**

### **Téléchargement**
Une fois que tout est prêt, vous pouvez commencer en ouvrant Terminal, puis exécutez la commande suivante :
`brew install --cask proxy-audio-device`

![installer proxy-audio-device](/volume_fix/app-installation.gif)

:::tip
Pendant l'installation, il est normal que l'audio du système glitch un peu. Assurez-vous donc de faire cela dans un environnement sans « beat de cuisine » (Aucun logiciel de manipulation audio en cours d'exécution).
:::

### **Configuration**
1. Naviguez vers Launchpad, lancez le nouvellement installé `Proxy Audio Device Settings` pour commencer le processus de configuration, cela ressemblera à quelque chose comme ça :

![icône de l'app](/volume_fix/app_icon.png)

2. Une fois ouvert, une fenêtre apparaîtra comme ceci.

![interface de l'app](/volume_fix/app_window.png)

Ne soyez pas tenté de quitter ce tutoriel, la plupart des gens comme vous peuvent configurer comme suit :

- `Proxy device name` : Nom de la sortie, vous pouvez laisser tel quel.
- `Proxied device` : Source audio (sélectionnez le nom de vos AirReps)
- `Buffer size` : Temps autorisé pour macOS pour traiter l'audio (simplifié) (veuillez **laisser tel quel**, car 512 est suffisant pour la majorité)
- `Proxy device is active` : Comment le logiciel fonctionne en arrière-plan. C'est là que ça devient délicat, mais cela se résume à ces options :
    + Si vous n'êtes pas dérangé par la coupure audio (sons de courte durée), choisissez `When proxied device is active`
    + Pour la plupart des gens, choisissez `When user is not idle`
    + Pour les personnes voulant un audio constant, ou pour le gaming, choisissez `Always`.

3. Enfin, naviguez vers Centre de Contrôle > Son > l'icône « > », et choisissez le périphérique audio nouvellement créé (`Proxy Audio Device` par défaut).

![choisir périphérique audio](/volume_fix/change-audio-device.gif)


## **Effets Secondaires**

Bien que ça fonctionne bien la plupart du temps, certains utilisateurs peuvent rencontrer ces problèmes :
::: details Pas d'icône « Sons » dans la barre du haut
C'est... dommage en fait, vous devez naviguer vers « Centre de Contrôle » pour contrôler l'audio (ou utiliser un raccourci).
:::

:::details Pas d'audio lors de la déconnexion
L'application est conçue pour toujours se connecter au périphérique sélectionné. Vous devez manuellement resélectionner « Haut-parleur Interne » vous-même.
:::

:::details Craquement/pop ou audio unilatéral
Vous pouvez contourner cela en augmentant la taille du buffer / ou en choisissant `Always` dans l'option `Proxy Device in Active` de l'application.
:::

## **Désinstallation**

Si vous souhaitez supprimer l'application, vous pouvez simplement exécuter cette commande dans Terminal :

`brew remove --cask proxy-audio-device`

...puis redémarrez votre système.

## **Optionnel : Sondage**

J'ai créé un sondage [ici](http://poll-maker.com/poll5643879x05fb4568-166) pour déterminer si cette solution de contournement fonctionne réellement. C'est incroyablement simple à faire et cela aide beaucoup à avoir une vue d'ensemble de cette solution, je vous serais très reconnaissant si vous partagiez vos impressions !

[![sondage](/volume_fix/poll.png)](http://poll-maker.com/poll5643879x05fb4568-166)
