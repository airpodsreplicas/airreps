---
title: 'Comment mettre à jour le firmware de faux AirPods : guide étape par étape'
description: 'Comment mettre à jour le firmware de répliques d’AirPods en toute sécurité avec FlyCC, CloudCC et Starfun — règles de charge en toute sécurité, comment éviter de rendre les écouteurs inutilisables et quand ne pas toucher au firmware.'
category: Dépannage
order: 16
---
# Comment mettre à jour le micrologiciel de faux AirPods : guide étape par étape

Contrairement aux véritables AirPods d’Apple, qui se mettent à jour discrètement en arrière-plan via iOS, les répliques d’AirPods se mettent à jour à l’aide d’applications compagnon communautaires fonctionnant sur Android, iOS ou macOS. Une mise à jour du micrologiciel peut résoudre des bogues de négociation avec iOS, améliorer la stabilité de la réduction active du bruit (ANC) ou corriger les pertes de connexion.

Toutefois, le flashage du micrologiciel écrit directement dans la mémoire flash interne des écouteurs. Une mise à jour interrompue peut rendre définitivement un contrôleur inutilisable. Ce guide présente les procédures de flashage sûres, testées par la communauté, pour chaque grand chipset de réplique.

> **Réponse rapide :** Pour mettre à jour le micrologiciel de répliques d’AirPods, identifiez d’abord votre chipset afin de choisir l’utilitaire adéquat : **FlyCC** (Airoha, y compris TigerBuilder) ou **Starfun** (Huilian). Assurez-vous que les deux écouteurs et le boîtier de charge sont chargés à plus de 80 %. Laissez le couvercle du boîtier ouvert, gardez les deux écouteurs à l’intérieur, démarrez la mise à jour OTA dans l’application et ne fermez pas le couvercle, ne désactivez pas le Bluetooth et ne quittez pas l’application avant que la progression n’atteigne 100 %.

::: warning Règle d’or : si ça fonctionne, n’y touchez pas
Les mises à jour du micrologiciel des répliques ne fonctionnent pas comme les correctifs de jeux vidéo. Elles sont principalement publiées pour corriger les changements incompatibles provoqués par les grandes mises à jour d’iOS ou résoudre de graves bogues matériels. Si vos écouteurs se connectent actuellement sans problème, offrent un excellent son et que la réduction active du bruit fonctionne parfaitement, **ne mettez pas leur micrologiciel à jour**. Un flashage inutile ne fait qu’ajouter un risque de rendre l’appareil inutilisable.
:::

## Liste de contrôle de sécurité avant la mise à jour

Avant d’appuyer sur le bouton de mise à jour, vérifiez impérativement ces quatre conditions :

1. **Niveau de batterie supérieur à 80 %** : assurez-vous que les deux écouteurs et le boîtier de charge sont chargés à au moins 80 %. Si un écouteur tombe en panne de batterie au milieu du flashage, le chargeur d’amorçage sera corrompu.
2. **Laissez le boîtier branché à une source d’alimentation** : pendant la mise à jour, branchez le boîtier de charge à un adaptateur secteur 5 V/1 A ou à une batterie externe.
3. **Laissez le couvercle ouvert** : pendant toute la durée du transfert, les écouteurs doivent rester posés sur leurs broches de charge, couvercle du boîtier ouvert.
4. **Désactivez le verrouillage automatique et la mise en veille de l’écran** : gardez l’écran de votre téléphone allumé. Si votre téléphone passe en veille profonde ou ferme les processus en arrière-plan, le transfert Bluetooth risque de s’interrompre.

## Étape 1 : identifier votre chipset et votre application

Flasher sur une carte Huilian un fichier de micrologiciel destiné à une puce Airoha rendra immédiatement l’appareil inutilisable. Choisissez l’utilitaire correspondant à votre puce dans notre [catalogue d’applications utiles](/fr/useful-apps) :

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → utilisez **FlyCC** (consultez notre [guide de l’application FlyCC](/fr/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → utilisez **FlyCC**. CloudCC est obsolète depuis que TigerBuilder a intégré la fonctionnalité OTA à FlyCC ; utilisez-le uniquement comme solution de contournement en cas de problème d’autorisation de stockage.
- **Chipsets Huilian (247, 277, 377, 377H3)** → utilisez **Starfun**.
- **Chipsets Jieli (Jerry)** → les répliques Jieli bas de gamme ne prennent pas en charge les mises à jour OTA du micrologiciel.

## Étape 2 : procédures de mise à jour étape par étape

### Méthode A : mettre à jour avec FlyCC (Airoha)

1. Connectez vos AirPods à votre appareil Android via les paramètres Bluetooth habituels.
2. Lancez **FlyCC** et vérifiez que votre modèle apparaît sur l’écran d’accueil.
3. Appuyez sur **Mise à jour du micrologiciel** (ou **Mise à jour OTA**).
4. Appuyez sur **Rechercher les mises à jour**. Si une nouvelle version est détectée, l’application affiche le numéro de build et le journal des modifications.
5. Appuyez sur **Démarrer la mise à jour**. Deux étapes s’affichent : le transfert du fichier binaire vers l’écouteur gauche, puis vers l’écouteur droit.
6. Lorsque la progression atteint 100 %, attendez le message : *« Mise à jour réussie »*.
7. Fermez le couvercle du boîtier de charge et laissez-le sans y toucher pendant 60 secondes, le temps que les microcontrôleurs redémarrent.

### Méthode B : solution de contournement avec CloudCC (TigerBuilder)

Les appareils TigerBuilder se mettent à jour avec FlyCC (méthode A). Utilisez CloudCC uniquement si FlyCC rencontre un problème d’autorisation de stockage :

1. Placez les deux écouteurs dans le boîtier, couvercle ouvert.
2. Ouvrez **CloudCC** et appuyez sur **Rechercher un appareil**.
3. Une fois votre appareil TigerBuilder détecté, sélectionnez-le.
4. Ouvrez l’onglet **Micrologiciel** et appuyez sur **Rechercher la dernière version**.
5. Sélectionnez le paquet disponible dans le cloud et appuyez sur **Télécharger et mettre à jour**.
6. Laissez le téléphone juste à côté du boîtier de charge jusqu’à ce que le message confirme la fin de la mise à jour.

### Méthode C : mettre à jour avec Starfun (Huilian)

1. Assurez-vous que les écouteurs sont connectés à votre téléphone et que le couvercle est ouvert.
2. Ouvrez **Starfun** et appuyez sur l’icône **Paramètres / Micrologiciel**.
3. Comparez la version actuelle du micrologiciel à la dernière version disponible dans le cloud.
4. Appuyez sur **Mettre à niveau**. L’application écrira les blocs de configuration séquentiellement.
5. Après le redémarrage, oubliez l’appareil dans le menu Bluetooth de votre téléphone, puis effectuez une réinitialisation logicielle.

## Que faire si une mise à jour se bloque ou échoue

Si une mise à jour se fige à un certain pourcentage (par exemple, à 45 % pendant plus de 5 minutes) :

1. **Ne fermez pas le couvercle et ne retirez pas les écouteurs.**
2. Vérifiez si le Bluetooth s’est déconnecté. Si l’application le permet, appuyez sur **Réessayer** ou redémarrez l’application sans déplacer les écouteurs.
3. Si les écouteurs ne répondent plus du tout, suivez notre [guide de réinitialisation des faux AirPods](/fr/articles/how-to-reset-fake-airpods) pour effectuer une réinitialisation matérielle de 15 secondes du contrôleur.
4. Rouvrez l’application de mise à jour — dans la plupart des cas, le chargeur d’amorçage de récupération vous permettra de reflasher le paquet à partir de 0 %.

## Guides de dépannage associés

- Vos écouteurs n’apparaissent pas dans l’application de mise à jour du micrologiciel ? Consultez [Faux AirPods qui ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous rencontrez des problèmes après une mise à jour ? Suivez [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods).
- Vous utilisez un appareil de l’écosystème Apple ? Lisez [Les faux AirPods fonctionnent-ils avec les nouveaux iPhone ?](/fr/articles/do-fake-airpods-work-with-new-iphone).
- Vous avez besoin des liens de téléchargement des applications ? Consultez [Applications utiles](/fr/useful-apps).

## FAQ

::: details Puis-je mettre à jour le micrologiciel de répliques d’AirPods sur un iPhone ?
Non. iOS n’autorise pas les applications compagnon à écrire le micrologiciel par Bluetooth sur des accessoires non-MFi. Vous devez emprunter un téléphone Android (ou utiliser un Mac compatible) pour flasher les mises à jour du micrologiciel. Une fois la mise à jour installée, le micrologiciel reste définitivement sur les écouteurs.
:::

::: details Une mise à jour permettra-t-elle à ma réplique d’AirPods d’accéder au réseau Localiser d’Apple ?
Non. Le réseau Localiser repose sur des certificats cryptographiques propriétaires d’Apple qui ne peuvent pas être ajoutés au moyen d’une mise à jour du micrologiciel.
:::

::: details Une mise à jour du micrologiciel peut-elle rendre mes faux AirPods inutilisables ?
Oui, si la mise à jour est interrompue par une batterie déchargée, la fermeture prématurée du couvercle ou le flashage d’un fichier de micrologiciel destiné à un autre chipset. Respectez toujours la liste de contrôle de sécurité avant la mise à jour ci-dessus.
:::
