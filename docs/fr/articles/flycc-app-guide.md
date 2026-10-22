---
title: 'Guide de l’APK FlyCC : comment configurer et régler les répliques d’AirPods Airoha'
description: "FlyCC pour les répliques TigerBuilder : Android et iPhone, égaliseur et mises à jour selon le modèle, autorisations et connexion."
category: Utiliser vos répliques
order: 13
---
# Guide de l’APK FlyCC : configurer et régler les répliques d’AirPods Airoha

FlyCC est l’application compagnon que notre [catalogue Useful Apps](/fr/useful-apps#tigerbuilder) indique pour les répliques **TigerBuilder**. TigerBuilder est un fabricant de répliques, pas une marque de puces : ses modèles reposent sur des chipsets **Airoha** comme les 1562AE, 1563E et 1571AM. Selon le modèle et son firmware, FlyCC peut régler l’égaliseur, afficher des réglages propres à ce modèle et installer les mises à jour du firmware publiées par le fabricant.

> **Réponse rapide :** FlyCC est une application tierce gratuite pour les répliques d’AirPods TigerBuilder (basées sur Airoha). Elle existe en APK pour Android et en application iPhone sur l’App Store, toutes deux accessibles depuis [Applications utiles](/fr/useful-apps#tigerbuilder). Ce qu’elle permet dépend de votre modèle exact, du firmware et de la version de l’application : généralement l’égaliseur, ainsi que des mises à jour du firmware pour certains modèles. Les modèles Huilian, HR, BES et KKX utilisent les autres applications du catalogue.

::: tip Versions Android et iPhone
FlyCC existe en APK pour Android et en version iPhone sur l’App Store. Le fait que l’application fonctionne sur votre téléphone ne garantit pas qu’elle prenne en charge vos écouteurs : les menus et mises à jour qu’elle affiche dépendent du modèle détecté, du firmware de ce modèle et de la version de l’application. Notre catalogue ne propose pas de version Mac distincte. L’App Store autorise l’application iPhone sur les Mac équipés d’une puce Apple, mais indique qu’elle n’est pas vérifiée pour macOS ; ce guide ne couvre donc pas son utilisation sur Mac.
:::

## Quelles répliques utilisent FlyCC ?

Partez du vendeur et de la version que vous avez achetés, pas seulement du nom de la puce. Les [pages des versions](/fr/version-info/general) indiquent FlyCC pour des modèles TigerBuilder comme les AirPods Pro 3 V7 TB, AirPods 4 V3 TB, AirPods Pro 2 V5.3 TB et AirPods Max V3. Consultez la page de votre version avant d’installer quoi que ce soit.

Une puce Airoha ne suffit pas à déterminer l’application. Les modèles HR utilisent aussi des puces Airoha, mais sont associés à BullSuper et G&Link ; les modèles Huilian utilisent StarFun, et certaines anciennes versions Airoha ne sont prises en charge par aucune application. L’application qui parvient à se connecter est un indice utile, mais un échec de détection dans FlyCC ne prouve pas que vos écouteurs ont une autre puce ni qu’ils ne correspondent pas au modèle commandé. Les autorisations, la version de l’application et la prise en charge du modèle entrent toutes en jeu (voir le dépannage ci-dessous).

## Comment télécharger et installer FlyCC en toute sécurité

Utilisez les liens de [Applications utiles](/fr/useful-apps#tigerbuilder) plutôt que des fichiers republiés sur d’autres sites.

**iPhone :** installez FlyCC depuis l’App Store et autorisez l’accès Bluetooth lorsque iOS le demande. L’application nécessite iOS 13 ou une version ultérieure (version 2.0.16, vérifiée le 22 octobre 2026).

**Android :** la version Android est un APK à télécharger, pas une application Google Play.

1. Téléchargez l’APK depuis [Applications utiles](/fr/useful-apps#tigerbuilder).
2. Lorsque Android vous le demande, autorisez **Installer des applications inconnues** pour le navigateur ou le gestionnaire de fichiers avec lequel vous ouvrez le fichier. Vous pourrez désactiver cette autorisation ensuite.
3. Ouvrez le fichier `.apk` et appuyez sur **Installer**.
4. Accordez l’autorisation Bluetooth demandée par l’application. Sous Android 12 et versions ultérieures, elle s’affiche sous le nom **Appareils à proximité**. Sur les versions plus anciennes d’Android, ou avec des applications plus anciennes, la recherche Bluetooth peut nécessiter l’autorisation de **Localisation** à la place ([documentation Android pour les développeurs](https://developer.android.com/develop/connectivity/bluetooth/bt-permissions)).

FlyCC est un logiciel tiers, et AirReps n’en a réalisé aucun audit de sécurité. L’accès au Bluetooth ou aux appareils à proximité est normal pour une application d’écouteurs ; méfiez-vous des demandes sans rapport avec les écouteurs. La documentation Android explique pourquoi le système demande ces autorisations, pas ce qu’une application donnée en fait. Sur iPhone, les informations de confidentialité de l’App Store sont déclarées par le développeur lui-même, et Apple précise qu’elles n’ont pas été vérifiées par Apple ([fiche App Store](https://apps.apple.com/us/app/flycc/id1661245709)).

## Ce que FlyCC peut faire

Les menus affichés par FlyCC dépendent du modèle détecté : deux paires peuvent donc paraître très différentes dans l’application. Les notes de version de l’application iPhone mentionnent des corrections pour des menus manquants (versions 2.0.12 et 2.0.14). Un menu absent peut donc venir de la version de l’application ou d’un problème de compatibilité, et non d’une autre puce.

### Égaliseur et son

L’égaliseur est la principale raison pour laquelle le guide oriente les propriétaires de modèles TigerBuilder vers FlyCC (voir [qualité sonore](/fr/introduction/sound-quality)). Faites de petits changements et écoutez. Par exemple, baissez un peu les basses si votre lot sonne trop chargé. Les membres de la communauté partagent des préréglages d’égaliseur sur le [Discord AirReps](https://airreps.link/discord). Après être passé à un autre téléphone, vérifiez que votre égaliseur s’applique toujours, car cela peut varier selon le modèle.

### Commandes

Les commandes tactiles et par pression des répliques se modifient normalement dans les réglages Bluetooth de l’iPhone, comme pour de vrais AirPods (voir le [guide des fonctionnalités](/fr/introduction/features)). Si FlyCC affiche des réglages de commandes pour votre modèle, vous pouvez les utiliser, mais tous les modèles ne les proposent pas.

### Mises à jour du firmware (OTA)

D’après sa description sur l’App Store, FlyCC propose des mises à jour du firmware pour certains produits, et ses versions 1.1.1 et 1.1.2 (2024) ont ajouté la prise en charge OTA de la plateforme AB157x d’Airoha. Si FlyCC propose une mise à jour pour votre modèle :

1. Vérifiez que vous en avez besoin : elle doit corriger un problème que vous rencontrez réellement, ou être signalée par votre vendeur ou sur la [page de votre version](/fr/version-info/general). Si vos écouteurs fonctionnent bien, vous pouvez tout à fait laisser le firmware tel quel.
2. Lisez les instructions de mise à jour que FlyCC affiche pour votre modèle et suivez-les.
3. Gardez les écouteurs et le boîtier chargés, le téléphone à proximité avec l’application ouverte, et n’interrompez pas la mise à jour avant que l’application confirme qu’elle est terminée.

Si une mise à jour échoue, contactez votre vendeur ou posez la question sur Discord plutôt que d’essayer le firmware d’une autre application. La procédure complète se trouve dans [Comment mettre à jour le firmware de faux AirPods](/fr/articles/how-to-update-fake-airpods-firmware).

## Résolution des problèmes de connexion de FlyCC

Si FlyCC ne trouve pas vos écouteurs :

- **Connectez-les d’abord** : appairez les écouteurs dans les réglages Bluetooth de votre téléphone, puis ouvrez FlyCC.
- **Vérifiez les autorisations** : sous Android 12 et versions ultérieures, FlyCC a besoin de l’autorisation **Appareils à proximité** ; sur les versions plus anciennes d’Android, il peut avoir besoin de la **Localisation**. Sur iPhone, vérifiez **Réglages → Confidentialité et sécurité → Bluetooth**.
- **Mettez l’application à jour** : FlyCC 2.0.16 pour iPhone mentionne une correction pour certains utilisateurs qui ne parvenaient pas à se connecter.
- **Vérifiez que l’application correspond à votre modèle** : consultez la page de votre version. Si le modèle de votre vendeur provient d’un autre fabricant, utilisez l’application indiquée pour lui dans [Applications utiles](/fr/useful-apps). CloudCC est obsolète pour les modèles TigerBuilder et ne sert que de solution de contournement pour le problème d’autorisation de stockage décrit sur cette page.
- **Ne considérez pas un échec de détection comme une preuve** : si aucune des applications indiquées ne se connecte après ces vérifications, posez la question sur [Discord](https://airreps.link/discord) en précisant votre vendeur et votre modèle. Les clones Jieli très bas de gamme ne fonctionnent avec aucune de ces applications. Si vous n’êtes pas sûr de ce que vous avez reçu, consultez [Comment repérer de faux AirPods](/fr/articles/how-to-spot-fake-airpods).
- **Effacez le cache d’appairage** : si la connexion se coupe, réinitialisez l’appairage à l’aide de notre [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods).

## Guides associés

- Vous utilisez quotidiennement des répliques avec Android ? Consultez [Les répliques d’AirPods sur Android](/fr/articles/airpods-replicas-on-android).
- Vous avez besoin d’autres utilitaires pour chipsets ? Consultez le [catalogue complet Useful Apps](/fr/useful-apps).
- Vos écouteurs refusent de se connecter ? Suivez les étapes de [Faux AirPods qui ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous cherchez des modèles Airoha vérifiés ? Parcourez le [répertoire des vendeurs de confiance](/fr/links/info).

## FAQ

::: details FlyCC peut-il être installé sans risque sur mon téléphone ?
FlyCC est un logiciel tiers qu’AirReps n’a pas audité ; prenez donc les précautions habituelles : téléchargez-le via le lien d’Applications utiles ou depuis l’App Store, vérifiez que les autorisations demandées concernent le Bluetooth et refusez tout ce qui n’a aucun rapport. Les informations de confidentialité de l’App Store sont une déclaration du développeur, pas un audit d’Apple.
:::

::: details Puis-je utiliser FlyCC sur un iPhone ?
Oui. FlyCC est disponible sur l’App Store pour iPhone (iOS 13 ou version ultérieure ; version 2.0.16, vérifiée le 22 octobre 2026), et le framework [Core Bluetooth](https://developer.apple.com/bluetooth/) d’Apple permet aux applications iPhone d’interagir avec des accessoires Bluetooth Low Energy. Ce que FlyCC peut faire sur iPhone dépend de votre modèle, de son firmware et de la version de l’application, et les mises à jour du firmware sont proposées pour certains produits, pas pour toutes les paires. Android reste une option grâce à l’APK disponible dans Applications utiles.
:::

::: details Pourquoi FlyCC ne trouve-t-il pas mes écouteurs ?
Les causes les plus courantes sont une autorisation Bluetooth ou Appareils à proximité manquante, une version obsolète de l’application, des écouteurs pas encore connectés au téléphone, ou un modèle que FlyCC ne prend pas en charge. FlyCC est indiqué pour les modèles TigerBuilder ; les modèles Huilian utilisent StarFun et les modèles HR utilisent BullSuper ou G&Link. Un échec de détection ne prouve pas quelle puce se trouve à l’intérieur : vérifiez le modèle de votre vendeur sur les pages des versions et posez la question sur Discord si aucune des applications indiquées ne se connecte.
:::
