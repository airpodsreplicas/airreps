---
title: 'Comment mettre à jour le micrologiciel de faux AirPods : guide étape par étape'
description: 'Comment mettre à jour en toute sécurité le micrologiciel de répliques d’AirPods à l’aide de FlyCC, CloudCC et Starfun — règles de recharge sûre, prévention du blocage et situations où il vaut mieux ne pas toucher au micrologiciel.'
category: Dépannage
order: 16
---
# Comment mettre à jour le firmware de faux AirPods : guide étape par étape

Contrairement aux AirPods Apple authentiques, qui se mettent à jour silencieusement en arrière-plan via iOS, les répliques d’AirPods se mettent à jour par l’intermédiaire d’applications compagnons communautaires fonctionnant sur Android ou macOS. La mise à jour du firmware peut résoudre des bugs de synchronisation avec iOS, améliorer la stabilité de la réduction active du bruit (ANC) ou corriger les déconnexions.

Cependant, le flashage du firmware écrit directement dans la mémoire flash interne des écouteurs. Une mise à jour interrompue peut rendre définitivement un contrôleur inutilisable. Ce guide présente les procédures de flashage sûres et testées par la communauté pour chaque chipset de réplique majeur.

> **Réponse rapide :** Pour mettre à jour le firmware de répliques d’AirPods, identifiez d’abord votre chipset afin de choisir l’utilitaire approprié : **FlyCC** (Airoha), **CloudCC** (TigerBuilder) ou **Starfun** (Huilian). Vérifiez que les deux écouteurs et le boîtier de charge sont chargés à plus de 80 %. Laissez le couvercle du boîtier ouvert, laissez les deux écouteurs à l’intérieur, démarrez la mise à jour OTA dans l’application et ne fermez pas le couvercle, ne désactivez pas le Bluetooth et ne quittez pas l’application avant que la progression n’atteigne 100 %.

::: warning Règle d’or : si ça fonctionne, n’y touchez pas
Les mises à jour du firmware des répliques ne fonctionnent pas comme les correctifs de jeux vidéo. Elles sont principalement publiées pour corriger les changements bloquants causés par les mises à jour majeures d’iOS ou pour résoudre de graves bugs matériels. Si vos écouteurs se connectent actuellement sans problème, offrent un excellent son et que l’ANC fonctionne parfaitement, **ne mettez pas le firmware à jour**. Un flashage inutile ne fait qu’introduire un risque de rendre l’appareil inutilisable.
:::

## La liste de contrôle de sécurité avant la mise à jour

Avant d’appuyer sur le bouton de mise à jour, vérifiez ces quatre conditions sans exception :

1. **Niveau de batterie supérieur à 80 %** : vérifiez que les deux écouteurs et le boîtier de charge sont chargés à au moins 80 %. Si un écouteur tombe à court d’énergie pendant le flashage, le chargeur d’amorçage sera corrompu.
2. **Laissez le boîtier connecté à l’alimentation** : branchez le boîtier de charge sur un adaptateur secteur 5 V/1 A ou une batterie externe pendant la mise à jour.
3. **Laissez le couvercle ouvert** : les écouteurs doivent rester posés sur leurs broches de charge, avec le couvercle du boîtier ouvert, pendant toute la durée du transfert.
4. **Désactivez le verrouillage automatique / la mise en veille de l’écran** : gardez l’écran de votre téléphone allumé. Si votre téléphone passe en veille profonde ou ferme les processus en arrière-plan, le transfert Bluetooth peut se bloquer.

## Étape 1 : identifier votre chipset et votre application

Flasher un binaire de firmware destiné à une puce Airoha sur une carte Huilian rendra instantanément l’appareil inutilisable. Faites correspondre votre utilitaire à votre puce à partir de notre [catalogue d’applications utiles](/fr/useful-apps) :

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** $\to$ Utilisez **FlyCC** (lisez notre [guide de l’application FlyCC](/fr/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** $\to$ Utilisez **CloudCC**.
- **Chipsets Huilian (247, 277, 377, 377H3)** $\to$ Utilisez **Starfun**.
- **Chipsets Jieli (Jerry)** $\to$ Les clones Jieli d’entrée de gamme ne prennent pas en charge les mises à jour OTA du firmware.

## Étape 2 : procédures de mise à jour étape par étape

### Méthode A : mise à jour avec FlyCC (Airoha)

1. Connectez vos AirPods à votre appareil Android via les réglages Bluetooth standard.
2. Lancez **FlyCC** et vérifiez que votre modèle apparaît sur l’écran d’accueil.
3. Appuyez sur **Firmware Update** (ou **OTA Update**).
4. Appuyez sur **Check for Updates**. Si une nouvelle version est détectée, l’application affichera le numéro de build et le journal des modifications.
5. Appuyez sur **Start Update**. Deux étapes s’afficheront : le transfert du binaire vers l’écouteur gauche, puis vers l’écouteur droit.
6. Lorsque la progression atteint 100 %, attendez le message : *« Update Successful »*.
7. Fermez le couvercle du boîtier de charge et laissez-le immobile pendant 60 secondes afin de permettre le redémarrage des microcontrôleurs.

### Méthode B : mise à jour avec CloudCC (TigerBuilder)

1. Placez les deux écouteurs dans le boîtier avec le couvercle ouvert.
2. Ouvrez **CloudCC** et appuyez sur **Search Device**.
3. Sélectionnez votre appareil TigerBuilder une fois qu’il est détecté.
4. Accédez à l’onglet **Firmware** et appuyez sur **Query Latest Version**.
5. Sélectionnez le package cloud et appuyez sur **Download and Update**.
6. Gardez le téléphone posé juste à côté du boîtier de charge jusqu’à ce que l’invite confirme la fin de l’opération.

### Méthode C : mise à jour avec Starfun (Huilian)

1. Vérifiez que les écouteurs sont connectés à votre téléphone et que le couvercle est ouvert.
2. Ouvrez **Starfun** et appuyez sur l’icône **Settings / Firmware**.
3. Comparez la version actuelle du firmware avec la dernière version disponible dans le cloud.
4. Appuyez sur **Upgrade**. L’application écrira les blocs de configuration séquentiellement.
5. Après le redémarrage, oubliez l’appareil dans le menu Bluetooth de votre téléphone et effectuez une réinitialisation logicielle.

## Que faire si une mise à jour se bloque ou échoue

Si une mise à jour reste bloquée à un pourcentage précis (par exemple, à 45 % pendant plus de 5 minutes) :

1. **Ne fermez pas le couvercle et ne retirez pas les écouteurs.**
2. Vérifiez si la connexion Bluetooth a été interrompue. Si l’application le permet, appuyez sur **Retry** ou redémarrez l’application tout en laissant les écouteurs en place.
3. Si les écouteurs deviennent complètement inopérants, suivez notre [guide pour réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods) afin d’effectuer une réinitialisation matérielle du contrôleur de 15 secondes.
4. Rouvrez l’application de mise à jour : dans la plupart des cas, le chargeur d’amorçage de récupération vous permettra de reflasher le package à partir de 0 %.

## Guides de dépannage associés

- Les écouteurs n’apparaissent pas dans l’application de firmware ? Consultez [Les faux AirPods ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous rencontrez des problèmes après une mise à jour ? Suivez [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods).
- Vous utilisez une configuration de l’écosystème Apple ? Lisez [Les faux AirPods fonctionnent-ils avec les nouveaux iPhone ?](/fr/articles/do-fake-airpods-work-with-new-iphone).
- Vous avez besoin de liens de téléchargement d’applications ? Consultez [Applications utiles](/fr/useful-apps).

## FAQ

::: details Puis-je mettre à jour le firmware de répliques d’AirPods sur un iPhone ?
Non. iOS n’autorise pas les applications compagnons à écrire le firmware via Bluetooth sur des accessoires non MFi. Vous devez emprunter un téléphone Android (ou utiliser un Mac compatible) pour flasher les mises à jour du firmware. Une fois mis à jour, le firmware reste définitivement sur les écouteurs.
:::

::: details Une mise à jour donnera-t-elle à ma réplique d’AirPods accès au réseau Localiser d’Apple ?
Non. Le réseau Localiser repose sur des certificats cryptographiques propriétaires d’Apple qui ne peuvent pas être ajoutés par des mises à jour du firmware.
:::

::: details Une mise à jour du firmware peut-elle rendre mes faux AirPods inutilisables ?
Oui, si la mise à jour est interrompue par une batterie déchargée, la fermeture prématurée du couvercle ou le flashage d’un binaire de firmware destiné à un autre chipset. Suivez toujours la liste de contrôle de sécurité avant la mise à jour ci-dessus.
:::
