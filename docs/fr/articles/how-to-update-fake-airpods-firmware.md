---
title: 'Comment mettre à jour le micrologiciel de faux AirPods : guide étape par étape'
description: 'Comment mettre à jour en toute sécurité le micrologiciel de répliques d’AirPods à l’aide de FlyCC, CloudCC et Starfun — règles de recharge sûre, prévention du blocage et situations où il vaut mieux ne pas toucher au micrologiciel.'
category: Dépannage
order: 16
---
# Comment mettre à jour le firmware de faux AirPods : guide étape par étape

Les AirPods Apple authentiques se mettent à jour automatiquement via vos appareils Apple. Ce n’est pas le cas des répliques. Leur firmware est fourni par le fabricant et s’installe avec une application compagnon, uniquement pour les modèles pris en charge par ce fabricant. Une mise à jour peut corriger des problèmes de compatibilité avec iOS ou des coupures de connexion, et ajoute parfois des fonctionnalités.

Une mise à jour écrit un nouveau firmware sur les écouteurs : une mise à jour interrompue ou inadaptée peut donc les rendre inutilisables. La procédure exacte dépend du modèle et de l’application. Ce guide explique donc ce qu’il faut vérifier et comment mettre à jour en toute sécurité, plutôt que de proposer une seule séquence valable pour toutes les paires.

> **Réponse rapide :** Identifiez d’abord votre modèle exact et votre vendeur, puis utilisez l’application indiquée pour ce fabricant dans [Applications utiles](/fr/useful-apps) : **FlyCC** pour les modèles TigerBuilder (Airoha) ou **StarFun** pour Huilian, toutes deux disponibles sur Android et iPhone. Si l’application propose une mise à jour pour votre modèle, suivez ses instructions à l’écran, gardez les écouteurs chargés et près de votre téléphone, et n’interrompez pas la mise à jour. Si vos écouteurs fonctionnent bien et que la mise à jour ne corrige aucun problème que vous rencontrez, passez-vous-en.

::: warning Règle d’or : si ça fonctionne, n’y touchez pas
Les mises à jour du firmware des répliques corrigent surtout des problèmes provoqués par des mises à jour majeures d’iOS ou des bugs connus. Si vos écouteurs se connectent sans problème, sonnent bien et que l’ANC fonctionne, et que la mise à jour ne corrige pas un problème que vous rencontrez réellement, **ne mettez pas à jour le firmware**. Une mise à jour inutile ne fait qu’ajouter des risques.
:::

## Avant la mise à jour

1. **Connaissez votre modèle exact et votre vendeur** : vérifiez votre commande et le nom du produit chez le vendeur, puis retrouvez cette version dans les [pages des versions](/fr/version-info/general). Les numéros de puce indiqués dans les annonces des vendeurs ne sont pas fiables à eux seuls.
2. **Ayez une raison** : cherchez un avis du vendeur, une note sur la page de votre version ou une solution confirmée sur le [Discord AirReps](https://airreps.link/discord) pour un problème que vous rencontrez.
3. **Utilisez la version actuelle de la bonne application** depuis [Applications utiles](/fr/useful-apps) et accordez les autorisations Bluetooth qu’elle demande.
4. **Rechargez d’abord** : rechargez les écouteurs et le boîtier avant de commencer pour que rien ne se décharge pendant la mise à jour.
5. **Gardez une connexion stable** : gardez votre téléphone à proximité, l’écran allumé et l’application ouverte jusqu’à la fin de la mise à jour.

## Étape 1 : choisir l’application selon le fabricant

Notre [catalogue Applications utiles](/fr/useful-apps) est organisé par fabricant. Utilisez l’application indiquée pour votre modèle :

- **TigerBuilder** (puces Airoha comme les 1562AE, 1563E et 1571AM) → **FlyCC**, sur Android et iPhone. Lisez notre [guide de l’application FlyCC](/fr/articles/flycc-app-guide). **CloudCC** est obsolète depuis que TigerBuilder a intégré la fonction OTA à FlyCC ; ne l’utilisez que comme solution de contournement pour le problème d’autorisation de stockage.
- **Huilian** → **StarFun**, sur Android et iPhone.
- Modèles **HR**, **BES** et **V2.5/KKX** → les applications indiquées sous ces rubriques dans Applications utiles.
- **Clones Jieli (Jerry) d’entrée de gamme** → aucune application du catalogue ne les prend en charge.

Toutes les applications ne proposent pas de mises à jour du firmware pour tous les modèles auxquels elles se connectent. N’installez que les mises à jour proposées par la bonne application pour le modèle détecté, et ne chargez jamais un firmware destiné à un autre produit.

## Étape 2 : lancer la mise à jour dans l’application

Les écrans de mise à jour varient selon l’application et le modèle. Suivez donc ce qu’affiche votre application plutôt qu’une séquence générique :

1. Connectez les écouteurs dans les réglages Bluetooth de votre téléphone, puis ouvrez l’application et attendez qu’elle détecte votre modèle.
2. Ouvrez son option de firmware ou de mise à jour, si elle en a une, et comparez la version installée à celle proposée. Si l’application indique que vous avez déjà le firmware le plus récent, c’est terminé.
3. Lisez les instructions que l’application donne pour votre modèle, y compris l’endroit où les écouteurs doivent se trouver pendant la mise à jour, et suivez-les à la lettre.
4. Lancez la mise à jour et ne touchez à rien jusqu’à ce que l’application confirme qu’elle est terminée. Ne fermez pas l’application, ne désactivez pas le Bluetooth et ne vous éloignez pas avec le téléphone.
5. Ensuite, vérifiez la version dans l’application et testez les écouteurs. Si l’appairage pose problème, oubliez les écouteurs puis appairez-les à nouveau (voir [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods)).

Sur **iPhone**, FlyCC et StarFun proposent tous deux des mises à jour du firmware pour certains produits. Les notes de FlyCC sur l’App Store mentionnent la prise en charge OTA de la plateforme AB157x d’Airoha depuis la version 1.1.1, et StarFun cite l’OTA parmi ses fonctions (fiches [FlyCC](https://apps.apple.com/us/app/flycc/id1661245709) et [StarFun](https://apps.apple.com/us/app/starfun/id1633624617) sur l’App Store, vérifiées le 22 octobre 2026). Sur **Android**, utilisez les APK d’Applications utiles. Android 12 et versions ultérieures demandent l’autorisation Appareils à proximité, tandis que les anciennes versions d’Android ou les applications plus anciennes peuvent avoir besoin de la Localisation pour rechercher des appareils Bluetooth ([documentation Android pour les développeurs](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

## Que faire si une mise à jour se bloque ou échoue

- **Laissez-lui du temps et gardez la connexion** : laissez les écouteurs à l’endroit indiqué par l’application et gardez le téléphone à proximité. Si l’application propose sa propre option pour réessayer, utilisez-la.
- **Ne passez pas à une autre application ni à un autre fichier de firmware** pour réparer une mise à jour ratée.
- **Contactez votre vendeur** si la mise à jour échoue ou si les écouteurs ne répondent plus. Indiquez votre numéro de commande, le modèle, le nom et la version de l’application, ainsi que votre téléphone et sa version du système, et joignez des captures d’écran des erreurs éventuelles. Vous pouvez aussi poser la question sur le [Discord AirReps](https://airreps.link/discord).

La récupération dépend du modèle : aucune réinitialisation universelle ne permet d’annuler une mise à jour ratée. Le [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods) concerne les problèmes d’appairage, pas la récupération du firmware.

## Guides de dépannage associés

- Les écouteurs n’apparaissent pas dans l’application de firmware ? Consultez [Les faux AirPods ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous rencontrez des problèmes après une mise à jour ? Suivez [Comment réinitialiser de faux AirPods](/fr/articles/how-to-reset-fake-airpods).
- Vous utilisez une configuration de l’écosystème Apple ? Lisez [Les faux AirPods fonctionnent-ils avec les nouveaux iPhone ?](/fr/articles/do-fake-airpods-work-with-new-iphone).
- Vous avez besoin de liens de téléchargement d’applications ? Consultez [Applications utiles](/fr/useful-apps).

## FAQ

::: details Puis-je mettre à jour le firmware de répliques d’AirPods sur un iPhone ?
Oui, pour certains modèles. FlyCC et StarFun existent en version iPhone sur l’App Store, et tous deux proposent des mises à jour du firmware pour certains produits. Toutes les paires ne reçoivent pas de mise à jour sur iPhone : cela dépend du modèle, de son firmware et de la version de l’application. Par exemple, notre [page AirPods Pro 2](/fr/version-info/pro#airpods-pro-2) conseille de vérifier le firmware des V5.3 TB dans FlyCC sur iOS. Android reste aussi une option avec les APK d’Applications utiles, à condition d’utiliser l’application indiquée pour votre modèle.
:::

::: details Une mise à jour donnera-t-elle à ma réplique d’AirPods accès au réseau Localiser d’Apple ?
Non. Le réseau Localiser repose sur des certificats cryptographiques propriétaires d’Apple qui ne peuvent pas être ajoutés par des mises à jour du firmware.
:::

::: details Une mise à jour du firmware peut-elle rendre mes faux AirPods inutilisables ?
Oui, cela peut arriver. Une mise à jour interrompue par une batterie vide ou une perte de connexion, ou un firmware destiné à un autre produit, peut rendre une paire inutilisable. N’installez que les mises à jour proposées par la bonne application pour votre modèle, suivez ses instructions et passez les mises à jour dont vous n’avez pas besoin.
:::
