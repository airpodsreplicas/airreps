---
title: 'Guide de l’APK StarFun : égaliseur et firmware pour les répliques Huilian AirPods'
description: 'Où trouver StarFun pour Android et iOS, quelles répliques Huilian AirPods l’utilisent, comment régler l’égaliseur et mettre à jour le firmware en toute sécurité, et quoi vérifier si l’application ne détecte pas vos écouteurs.'
category: Utiliser vos répliques
order: 20
---
# Guide de StarFun APK : égaliseur et micrologiciel pour les répliques d’AirPods Huilian

StarFun est l’application compagnon des répliques d’AirPods équipées de chipsets **Huilian** (247, 277, 377 et 377H3). Pour les modèles Huilian, elle fait ce que [FlyCC](/fr/articles/flycc-app-guide) fait pour les modèles Airoha et TigerBuilder : vous pouvez l’utiliser pour régler l’égaliseur et mettre à jour le micrologiciel. Si vous possédez une réplique Huilian comme les AirPods Pro 3 V7 Huilian ou les Pro 2 V5.4, StarFun est l’application à installer.

> **En bref :** StarFun est l’application destinée aux répliques d’AirPods basées sur Huilian : les AirPods Pro 3 V7 Huilian et V6 Huilian, les AirPods Pro 2 V5.4 et V5.3 Huilian, et les AirPods 4 V2 Huilian. Téléchargez-la sous forme d’APK Android ou depuis l’App Store iOS via [Applications utiles](/fr/useful-apps#huilian). Utilisez-la pour régler l’égaliseur et, uniquement en cas de problème, mettre à jour le micrologiciel. Les modèles TigerBuilder utilisent FlyCC. Si aucune application ne se connecte à vos écouteurs, il s’agit probablement d’un clone Jieli d’entrée de gamme.

## Quelles répliques utilisent StarFun

Voici les versions dont les tableaux répertorient StarFun comme application pour régler l’égaliseur et les paramètres :

| Modèle | Version | Chipset | Connexion iCloud |
| :--- | :--- | :--- | :--- |
| AirPods Pro 3 | V7 Huilian | Huilian 377H3 | ✅ |
| AirPods Pro 3 | V6 Huilian | Huilian 247 | ✅ |
| AirPods Pro 2 | V5.4 Huilian | Huilian 377 | ✅ |
| AirPods Pro 2 | V5.3 Huilian | Huilian 277 Pro Max | ✅ |
| AirPods 4 | V2 Huilian | Huilian 247 | ✅ |

Le tableau des AirPods 3 répertorie aussi StarFun pour la version V1.2 (Huilian A10), mais aucun vendeur de confiance ne propose actuellement d’AirPods 3.

Ces cinq modèles font également partie des modèles à connexion iCloud du guide. La connexion iCloud est exclusive aux répliques basées sur Huilian. Si vous en avez acheté une paire pour passer d’un appareil Apple à l’autre, StarFun est l’application qu’il vous faut. Comparez les versions sur les pages des versions [Pro](/fr/version-info/pro) et [AirPods](/fr/version-info/airpods).

## Télécharger StarFun pour Android ou iOS

StarFun existe en deux versions, toutes deux accessibles depuis la page [Applications utiles](/fr/useful-apps#huilian) :

- **Android :** [APK StarFun](https://airreps.link/starfun)
- **iPhone :** [StarFun sur l’App Store](https://airreps.link/istarfun)

La version Android est un fichier APK et non un téléchargement depuis Google Play. Si Android bloque l’installation, activez **Installer des applications inconnues** (également appelé **Installer des applications inconnues**) pour votre navigateur ou votre gestionnaire de fichiers. Cette option se trouve généralement dans les paramètres, sous Sécurité ou Accessibilité. Ouvrez ensuite le fichier `.apk` téléchargé et appuyez sur **Installer**.

Avant d’ouvrir StarFun, connectez les écouteurs à votre téléphone depuis les réglages Bluetooth habituels.

## Régler l’égaliseur

L’égaliseur peut varier selon le vendeur, si bien que des écouteurs de la même version peuvent avoir un son différent d’un lot à l’autre. Pour régler l’égaliseur des appareils Huilian, le guide recommande StarFun, tout comme FlyCC pour TigerBuilder et BullSuper pour HR. Sur les AirPods 4 V2 Huilian, les profils d’égalisation personnalisés de StarFun se synchronisent directement avec iOS.

Vous ne voulez pas faire vos réglages de zéro ? Les membres de la communauté partagent leurs réglages d’égalisation sur Discord (voir la fin de ce guide). Pour découvrir le son des répliques avec leurs réglages d’origine, consultez [Qualité sonore](/fr/introduction/sound-quality).

## Mettre à jour le micrologiciel avec StarFun

Commencez par respecter la règle d’or de la communauté : **si ça marche, n’y touchez pas.** Les mises à jour du micrologiciel servent principalement à corriger les problèmes causés par les mises à jour majeures d’iOS ou les bogues matériels graves. Si vos écouteurs se connectent sans problème et que leur son vous convient, une mise à jour ne fait qu’ajouter un risque de les rendre inutilisables.

Si une mise à jour est nécessaire, commencez par suivre cette liste de précautions :

1. Chargez les deux écouteurs et le boîtier à plus de 80 %.
2. Laissez le boîtier branché au secteur pendant la mise à jour.
3. Laissez les deux écouteurs dans le boîtier, couvercle ouvert.
4. Laissez l’écran de votre téléphone allumé pour éviter que le transfert ne s’interrompe.

Mettez ensuite le micrologiciel à jour dans StarFun :

1. Vérifiez que les écouteurs sont connectés à votre téléphone et que le couvercle est ouvert.
2. Ouvrez **StarFun** et appuyez sur l’icône **Paramètres / Micrologiciel**.
3. Comparez la version actuelle du micrologiciel à la dernière version disponible dans le cloud.
4. Appuyez sur **Mettre à niveau**. L’application écrit les blocs de configuration l’un après l’autre.
5. Une fois les écouteurs redémarrés, oubliez-les dans le menu Bluetooth de votre téléphone et effectuez une réinitialisation logicielle.

N’utilisez StarFun qu’avec des écouteurs Huilian. Installer un micrologiciel conçu pour un autre chipset peut rendre les écouteurs inutilisables, et un micrologiciel destiné à une puce Airoha rend immédiatement une carte Huilian inutilisable.

Si la mise à jour reste bloquée à un certain pourcentage pendant plus de 5 minutes, ne fermez pas le couvercle et ne retirez pas les écouteurs. Réessayez ou redémarrez l’application en laissant les écouteurs en place. Si les écouteurs ne répondent plus du tout, suivez les instructions de réinitialisation matérielle de [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods), puis rouvrez StarFun. Dans la plupart des cas, il est possible de relancer la mise à jour à partir de 0 %. Le [guide de mise à jour du micrologiciel](/fr/articles/how-to-update-fake-airpods-firmware) couvre tous les chipsets.

## StarFun ne trouve pas vos écouteurs ?

Suivez ces étapes dans l’ordre :

- **Jumelez-les d’abord dans les réglages Bluetooth.** StarFun nécessite que les écouteurs soient déjà connectés à votre téléphone.
- **Vérifiez la puce.** StarFun est destinée aux modèles Huilian. Les modèles TigerBuilder (Airoha) utilisent FlyCC, et les modèles HR utilisent BullSuper. Pour identifier votre puce, la méthode habituelle consiste à essayer une à une les applications de la page [Applications utiles](/fr/useful-apps) et à voir laquelle se connecte.
- **Aucune application ne se connecte ?** Votre paire est probablement un clone d’entrée de gamme équipé d’un chipset Jieli, qui n’est pris en charge par aucune des applications de la communauté. Les vrais AirPods Apple ne répondent pas non plus à ces applications.
- **La connexion se coupe sans arrêt ?** Videz le cache de jumelage en réinitialisant le contrôleur comme indiqué dans le [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods). Pour les problèmes de jumelage en général, consultez [De faux AirPods ne se connectent pas](/fr/articles/fake-airpods-wont-connect).

## Pour en savoir plus

- Vous avez un modèle TigerBuilder ? Consultez le [Guide de FlyCC APK](/fr/articles/flycc-app-guide).
- Vous hésitez entre les deux versions V7 ? Comparez les [AirPods Pro 3 V7 Huilian et V7 TB](/fr/articles/airpods-pro-3-v7-huilian-vs-v7-tb).
- Vous utilisez vos répliques avec un Mac ? Le guide recommande les modèles Huilian ; consultez [Les faux AirPods fonctionnent-ils avec un Mac ?](/fr/articles/fake-airpods-on-mac)
- Tous les téléchargements d’applications au même endroit : [Applications utiles](/fr/useful-apps).

## Demander conseil à la communauté

Vous cherchez un réglage d’égalisation de départ plutôt que de tout régler de zéro ? Les membres de la communauté partagent leurs propres réglages sur le [Discord AirReps](https://airreps.link/dghelp), et la plupart des préréglages sont épinglés dans **#help-and-advice**. Lorsque vous posez votre question, précisez la version Huilian que vous possédez.

## FAQ

::: details StarFun est-elle disponible sur iPhone ?
Oui. StarFun est disponible sur l’App Store iOS ainsi que sous forme d’APK Android. Les deux versions sont accessibles depuis [Applications utiles](/fr/useful-apps#huilian).
:::

::: details Quelles répliques d’AirPods fonctionnent avec StarFun ?
Les répliques basées sur Huilian : les AirPods Pro 3 V7 Huilian et V6 Huilian, les AirPods Pro 2 V5.4 et V5.3 Huilian, et les AirPods 4 V2 Huilian. Le guide du micrologiciel répertorie les chipsets Huilian 247, 277, 377 et 377H3 comme compatibles avec StarFun.
:::

::: details Quelle application utiliser avec les répliques TigerBuilder ?
FlyCC. Les modèles TigerBuilder, y compris les AirPods Pro 3 V7 TB, utilisent FlyCC, tandis que StarFun est destinée aux chipsets Huilian. Installer un micrologiciel conçu pour un autre chipset peut rendre les écouteurs inutilisables ; veillez donc à toujours choisir l’application correspondant à votre puce.
:::

::: details Où télécharger l’APK StarFun ?
Depuis le [lien de téléchargement de StarFun](https://airreps.link/starfun) sur notre page [Applications utiles](/fr/useful-apps#huilian). Si Android bloque l’installation, activez « Installer des applications inconnues » dans vos paramètres.
:::
