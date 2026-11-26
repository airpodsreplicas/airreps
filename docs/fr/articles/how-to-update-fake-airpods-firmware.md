---
title: Comment mettre à jour le micrologiciel de faux AirPods en toute sécurité
description: 'Mettez à jour le micrologiciel de répliques d’AirPods en toute sécurité avec FlyCC (Airoha/TB) et StarFun (Huilian) : règle des 80 % de batterie, prévention du blocage et cas où ne pas effectuer la mise à jour.'
category: Dépannage
order: 16
---
# Comment mettre à jour le micrologiciel de faux AirPods : guide étape par étape

Contrairement aux vrais AirPods d’Apple, qui se mettent à jour silencieusement en arrière-plan via iOS, les répliques d’AirPods se mettent à jour à l’aide d’applications compagnons communautaires. **FlyCC** et **StarFun** sont toutes deux disponibles sur Android et dans l’App Store iOS, bien que les APK Android restent la solution la plus fiable pour effectuer un flash OTA complet sur tous les chipsets. Une mise à jour du micrologiciel peut corriger des problèmes de synchronisation avec iOS, améliorer la stabilité de la réduction active du bruit (ANC) ou résoudre les déconnexions.

Cependant, le flash du micrologiciel écrit directement dans la mémoire flash interne des écouteurs. Une mise à jour interrompue peut rendre définitivement un contrôleur inutilisable. Ce guide présente les procédures de flash sûres, testées par la communauté, pour les principaux chipsets de répliques.

> **Réponse rapide :** Pour mettre à jour le micrologiciel de répliques d’AirPods, identifiez d’abord votre chipset afin de choisir l’utilitaire approprié : **FlyCC** (Airoha, y compris TigerBuilder) ou **StarFun** (Huilian). Assurez-vous que les deux écouteurs et le boîtier de charge sont chargés à plus de 80 %. Laissez le couvercle du boîtier ouvert, gardez les deux écouteurs à l’intérieur, lancez la mise à jour OTA dans l’application et ne refermez pas le couvercle, ne désactivez pas le Bluetooth et ne quittez pas l’application avant que la progression atteigne 100 %.

::: warning La règle d’or : si tout fonctionne, n’y touchez pas
Les mises à jour du micrologiciel des répliques ne fonctionnent pas comme des correctifs de jeu vidéo. Elles sont principalement publiées pour corriger les changements incompatibles causés par les mises à jour majeures d’iOS ou résoudre de graves problèmes matériels. Si vos écouteurs se connectent actuellement sans problème, offrent un excellent son et que l’ANC fonctionne parfaitement, **ne mettez pas le micrologiciel à jour**. Un flash inutile ne fait qu’introduire un risque de rendre l’appareil inutilisable.
:::

<CommunityCta variant="apps" />

## Liste de vérification de sécurité avant la mise à jour

Avant d’appuyer sur le bouton de mise à jour, vérifiez impérativement ces quatre conditions :

1. **Niveau de batterie supérieur à 80 %** : assurez-vous que les deux écouteurs et le boîtier de charge sont chargés à au moins 80 %. Si un écouteur tombe en panne de batterie en plein flash, le chargeur d’amorçage sera corrompu.
2. **Laissez le boîtier branché à l’alimentation** : branchez le boîtier de charge à un adaptateur secteur ou à une batterie externe de 5 V/1 A pendant la mise à jour.
3. **Laissez le couvercle ouvert** : les écouteurs doivent rester posés sur leurs contacts de charge, couvercle du boîtier ouvert, pendant toute la durée du transfert.
4. **Désactivez le verrouillage automatique et la mise en veille de l’écran** : gardez l’écran de votre téléphone allumé. Si votre téléphone passe en veille profonde ou ferme les processus en arrière-plan, le transfert Bluetooth risque de se bloquer.

## Étape 1 : identifier votre chipset et l’application

Flasher un fichier de micrologiciel destiné à une puce Airoha sur une carte Huilian rendra immédiatement l’appareil inutilisable. Choisissez l’utilitaire adapté à votre puce dans notre [catalogue d’applications utiles](/fr/useful-apps) :

- **Chipsets Airoha (1562AE, 1562E, 1571AM)** → utilisez **FlyCC** (consultez notre [guide de l’application FlyCC](/fr/articles/flycc-app-guide)).
- **Chipsets TigerBuilder (1562AE/TB, 1571AM/TB)** → utilisez **FlyCC**. CloudCC est obsolète depuis que TigerBuilder a intégré la fonctionnalité OTA à FlyCC ; ne l’utilisez comme solution de contournement qu’en cas de problème d’autorisation de stockage.
- **Chipsets Huilian (247, 277, 377, 377H3)** → utilisez **StarFun** (consultez notre [guide de l’application StarFun](/fr/articles/starfun-app-guide)).
- **Chipsets Jieli (Jerry)** → les clones Jieli d’entrée de gamme ne prennent pas en charge les mises à jour du micrologiciel OTA.

## Étape 2 : procédures de mise à jour détaillées

### Méthode A : mise à jour avec FlyCC (Airoha)

1. Connectez vos AirPods à votre téléphone via les réglages Bluetooth habituels.
2. Lancez **FlyCC** et vérifiez que votre modèle apparaît sur l’écran d’accueil.
3. Appuyez sur **Mise à jour du micrologiciel** (ou **Mise à jour OTA**).
4. Appuyez sur **Rechercher des mises à jour**. Si une nouvelle version est détectée, l’application affiche le numéro de build et le journal des modifications.
5. Appuyez sur **Démarrer la mise à jour**. Deux étapes s’affichent : le transfert du fichier binaire vers l’écouteur gauche, puis vers l’écouteur droit.
6. Lorsque la progression atteint 100 %, attendez le message : *« Mise à jour réussie »*.
7. Refermez le couvercle du boîtier de charge et laissez-le sans y toucher pendant 60 secondes pour permettre aux microcontrôleurs de redémarrer.

::: warning Remarque sur le micrologiciel Pro 3 V7 TB
Après une mise à jour du micrologiciel avec FlyCC sur les **AirPods Pro 3 V7 TB**, la fenêtre contextuelle iOS et le numéro de série disparaissent et doivent être réajoutés dans l’application FlyCC. La version V7 Huilian (StarFun) n’est pas concernée.
:::

### Méthode B : solution de contournement avec CloudCC (TigerBuilder)

Les appareils TigerBuilder se mettent à jour avec FlyCC (méthode A). N’utilisez CloudCC que si FlyCC rencontre un problème d’autorisation de stockage :

1. Placez les deux écouteurs dans le boîtier, couvercle ouvert.
2. Ouvrez **CloudCC** et appuyez sur **Rechercher un appareil**.
3. Sélectionnez votre appareil TigerBuilder lorsqu’il est détecté.
4. Accédez à l’onglet **Micrologiciel** et appuyez sur **Rechercher la dernière version**.
5. Sélectionnez le paquet cloud et appuyez sur **Télécharger et mettre à jour**.
6. Laissez le téléphone juste à côté du boîtier de charge jusqu’à ce que le message confirme la fin de l’opération.

### Méthode C : mise à jour avec StarFun (Huilian)

1. Assurez-vous que les écouteurs sont connectés à votre téléphone et que le couvercle est ouvert.
2. Ouvrez **StarFun** et appuyez sur l’icône **Réglages / Micrologiciel**.
3. Comparez la version actuelle du micrologiciel à la dernière version disponible dans le cloud.
4. Appuyez sur **Mettre à niveau**. L’application écrira les blocs de configuration l’un après l’autre.
5. Après le redémarrage, oubliez l’appareil dans le menu Bluetooth de votre téléphone et effectuez une réinitialisation logicielle.

## Que faire si une mise à jour se bloque ou échoue

Si une mise à jour reste bloquée à un pourcentage précis (par exemple, à 45 % pendant plus de 5 minutes) :

1. **Ne refermez pas le couvercle et ne retirez pas les écouteurs.**
2. Vérifiez si la connexion Bluetooth a été interrompue. Si l’application le permet, appuyez sur **Réessayer** ou redémarrez l’application sans déplacer les écouteurs.
3. Si les écouteurs ne répondent plus du tout, suivez notre [guide de réinitialisation des faux AirPods](/fr/articles/how-to-reset-fake-airpods) pour effectuer une réinitialisation matérielle du contrôleur de 15 secondes.
4. Rouvrez l’application de mise à jour : dans la plupart des cas, le chargeur d’amorçage de récupération vous permettra de reflasher le paquet à partir de 0 %.

<CommunityCta variant="stuck" />

## Guides de dépannage associés

- Vous utilisez une réplique Huilian ? Suivez le [guide de l’application StarFun](/fr/articles/starfun-app-guide).
- Vos écouteurs n’apparaissent pas dans l’application de micrologiciel ? Consultez [Les faux AirPods ne se connectent pas](/fr/articles/fake-airpods-wont-connect) ou [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods).
- Vous avez besoin de liens de téléchargement des applications ? Consultez [Applications utiles](/fr/useful-apps).
- Vous passez d’un ancien clone impossible à mettre à jour ? Faites le [quiz d’une minute](/fr/quiz) ou parcourez les [vendeurs de confiance](/fr/links/info).

## FAQ

::: details Puis-je mettre à jour le micrologiciel de répliques d’AirPods sur un iPhone ?
**FlyCC** et **StarFun** sont toutes deux disponibles dans l’App Store iOS pour l’égalisation, les réglages et la vérification de l’état du micrologiciel (et FlyCC sur iOS permet de vérifier ou de mettre à jour des modèles TigerBuilder récents comme V5.3 TB). Toutefois, pour les anciens modèles ou si une application iOS ne permet pas de lancer un flash OTA, emprunter un téléphone Android et y installer l’APK disponible dans [Applications utiles](/fr/useful-apps) reste la solution de secours la plus fiable. Une fois le micrologiciel mis à jour, il reste définitivement installé sur les écouteurs.
:::

::: details Une mise à jour donnera-t-elle à ma réplique d’AirPods accès au réseau Localiser d’Apple ?
Non. Le réseau Localiser repose sur des certificats cryptographiques propriétaires d’Apple qui ne peuvent pas être ajoutés via une mise à jour du micrologiciel.
:::

::: details Une mise à jour du micrologiciel peut-elle rendre mes faux AirPods inutilisables ?
Oui, si la mise à jour est interrompue par une batterie déchargée, si le couvercle est refermé trop tôt ou si un fichier binaire de micrologiciel destiné à un autre chipset est flashé. Suivez toujours la liste de vérification de sécurité avant la mise à jour ci-dessus.
:::
