---
title: 'Guide de l’APK FlyCC : comment configurer et régler les répliques d’AirPods Airoha'
description: 'Comment télécharger, installer et utiliser FlyCC en toute sécurité — réglage EQ personnalisé, mappage des commandes tactiles, mises à jour du micrologiciel et dépannage des échecs de connexion.'
category: Utiliser vos répliques
order: 13
---
# Guide de l’APK FlyCC : configurer et régler les répliques d’AirPods Airoha

FlyCC est l’application complémentaire indispensable pour les répliques d’AirPods équipées de **chipsets Airoha** (notamment les Airoha 1562AE, 1562E, 1562F et 1571AM). Comme les réglages iOS natifs d’Apple n’exposent que des commandes basiques, FlyCC offre un accès bas niveau aux composants : réglage d’un égaliseur paramétrique personnalisé, calibration des capteurs tactiles, équilibrage de la réduction active du bruit (ANC) et installation du firmware par OTA.

> **Réponse rapide :** FlyCC est un utilitaire gratuit tiers pour Android et macOS, conçu spécifiquement pour les répliques d’AirPods basées sur Airoha. Il permet de personnaliser les profils audio avec un égaliseur intégré, de modifier la sensibilité des pincements et des pressions, et d’installer les mises à jour du firmware par voie hertzienne. Il ne détectera pas les répliques équipées de puces Huilian, BES ou Jieli d’entrée de gamme.

::: tip Android ou Mac requis
FlyCC ne peut pas être installé depuis l’App Store iOS d’Apple en raison des restrictions d’Apple concernant les appareils tiers. Pour configurer vos écouteurs Airoha, installez l’APK Android sur n’importe quel smartphone Android ou utilisez la version macOS proposée par la communauté. Les réglages enregistrés sur les écouteurs persistent même lorsque ceux-ci sont reconnectés à un iPhone.
:::

## Chipsets pris en charge

FlyCC fonctionne exclusivement avec du **matériel Airoha**. Si vos écouteurs se connectent, cela confirme qu’ils contiennent bien des composants Airoha :

- **Airoha 1562AE / 1571AM** — Prise en charge complète : calibration ANC à double microphone, égaliseur personnalisé, commandes audio spatiales avec suivi de la tête et mises à jour OTA.
- **Airoha 1562E / 1563E** — Égaliseur standard, commandes tactiles et outils de firmware.
- **Airoha 1562F** — Commandes ANC et égaliseur héritées.

Si FlyCC analyse indéfiniment sans jamais détecter vos écouteurs, votre paire utilise les composants d’un autre fabricant (comme Huilian, qui utilise [Starfun](/fr/useful-apps), ou TigerBuilder, qui utilise [CloudCC](/fr/useful-apps)) ou une puce Jieli d’entrée de gamme.

## Comment télécharger et installer FlyCC en toute sécurité

Comme FlyCC communique avec du matériel Bluetooth non certifié MFi, il est distribué directement sous forme d’APK plutôt que par Google Play.

1. Téléchargez le dernier APK vérifié directement depuis le [répertoire Useful Apps](/fr/useful-apps).
2. Sur votre appareil Android, accédez à **Paramètres → Sécurité** et activez **« Installer des applications inconnues »** pour votre navigateur ou votre gestionnaire de fichiers.
3. Ouvrez le fichier `.apk` téléchargé et appuyez sur **Installer**.
4. Accordez les autorisations demandées pour le **Bluetooth / les appareils à proximité** et la **Localisation**. (Android exige les autorisations de localisation pour rechercher les périphériques Bluetooth basse consommation ; FlyCC ne suit pas les données GPS).

## Fonctionnalités principales et utilisation

### 1. Égaliseur personnalisé et réglage audio

D’origine, certaines séries de répliques présentent des basses exagérées. FlyCC inclut un égaliseur à 10 bandes pour affiner la sortie audio :

- **Réduction des basses** : baissez les curseurs 31 Hz, 62 Hz et 125 Hz de 2 à 3 dB pour obtenir une scène sonore plus claire et plus neutre, comparable à celle des AirPods Pro vendus au détail.
- **Clarté des voix** : augmentez les bandes 1 kHz et 2 kHz de 1,5 dB pour mettre davantage en avant les podcasts et les voix.
- **Enregistrement dans le matériel** : une fois les réglages effectués, appuyez sur **Save to Earbuds**. Le réglage acoustique est écrit directement dans le DSP Airoha, ce qui signifie que l’égaliseur personnalisé reste actif lorsque vous reconnectez vos écouteurs à votre iPhone, iPad ou PC.

### 2. Calibration du toucher et des gestes

Si vos écouteurs déclenchent des mises en pause accidentelles lorsque vous les ajustez dans vos oreilles, FlyCC vous permet de régler la sensibilité du capteur de pression de 1 (pression la plus légère) à 5 (pression ferme). Vous pouvez également réattribuer les pressions simples, doubles et triples à des fonctions spécifiques.

### 3. Réglage de la réduction du bruit

Dans le menu ANC, FlyCC permet de calibrer séparément les microphones de retour avant gauche et droit. Si vous avez l’impression qu’un écouteur produit une pression plus forte dans l’oreille ou une réduction du bruit moins efficace, le curseur de calibration rééquilibre l’inversion de phase.

## Mise à jour sécurisée du firmware (OTA)

FlyCC peut installer des binaires de firmware mis à jour afin de corriger les problèmes de synchronisation avec iOS ou d’améliorer la connectivité. Cependant, l’installation comporte un risque inhérent de blocage si elle est interrompue :

1. **Chargez les deux écouteurs et le boîtier à plus de 80 %** avant de commencer.
2. Gardez le boîtier de charge ouvert, avec les deux écouteurs correctement installés à l’intérieur et à moins de 30 centimètres de votre téléphone.
3. Appuyez sur **Check for Updates** dans FlyCC. Si une mise à jour est disponible, téléchargez le paquet.
4. Appuyez sur **Start Update**. **Ne fermez pas le couvercle du boîtier, ne désactivez pas le Bluetooth et ne changez pas d’application** tant que la barre de progression n’a pas atteint 100 % et n’affiche pas « Update Succeeded ».
5. Une fois l’opération terminée, laissez les écouteurs dans le boîtier fermé pendant 60 secondes avant de les appairer à nouveau.

Pour consulter un guide complet sur l’installation sécurisée du firmware de tous les chipsets de répliques, lisez [Comment mettre à jour le firmware de faux AirPods](/fr/articles/how-to-update-fake-airpods-firmware).

## Résolution des problèmes de connexion de FlyCC

Si FlyCC refuse de détecter vos écouteurs :

- **Vérifiez la connexion audio active de votre téléphone** : assurez-vous que les écouteurs sont déjà appairés dans les réglages Bluetooth natifs d’Android avant d’ouvrir FlyCC.
- **Accordez l’autorisation Appareils à proximité** : sous Android 12 et versions ultérieures, FlyCC ne peut pas détecter les appareils Bluetooth LE si l’autorisation « Appareils à proximité » n’est pas activée.
- **Identifiez votre puce** : si vos écouteurs refusent de se connecter à FlyCC, essayez de les rechercher avec **CloudCC** ou **Starfun**. Si aucune application ne se connecte, consultez [Comment repérer de faux AirPods](/fr/articles/how-to-spot-fake-airpods) pour vérifier s’il s’agit d’une copie équipée d’une puce Jieli d’entrée de gamme.
- **Effacez le cache d’appairage** : si les connexions sont interrompues, effectuez une réinitialisation du contrôleur à l’aide de notre [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods).

## Guides associés

- Vous utilisez quotidiennement des répliques avec Android ? Consultez [Les répliques d’AirPods sur Android](/fr/articles/airpods-replicas-on-android).
- Vous avez besoin d’autres utilitaires pour chipsets ? Consultez le [catalogue complet Useful Apps](/fr/useful-apps).
- Vos écouteurs refusent de se connecter ? Suivez les étapes de [Faux AirPods qui ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous cherchez des modèles Airoha vérifiés ? Parcourez le [répertoire des vendeurs de confiance](/fr/links/info).

## FAQ

::: details FlyCC peut-il être installé sans risque sur mon téléphone ?
Oui. Les APK hébergés dans le répertoire communautaire Useful Apps sont extraits des chaînes d’approvisionnement officielles des fabricants et vérifiés comme exempts de logiciels malveillants. L’application nécessite uniquement un accès Bluetooth pour communiquer avec le processeur audio Airoha.
:::

::: details Puis-je utiliser FlyCC sur un iPhone ?
Non. Apple n’autorise pas les applications tierces à accéder aux profils série Bluetooth bruts pour le matériel non certifié MFi. Vous devez utiliser un téléphone Android ou un Mac pour modifier les réglages de FlyCC. Cependant, toutes les modifications de l’égaliseur et des commandes sont enregistrées de façon permanente dans la mémoire interne des écouteurs et sont donc automatiquement conservées sur votre iPhone.
:::

::: details Pourquoi FlyCC affiche-t-il « Device Not Found » ?
La raison la plus courante est une incompatibilité des composants : FlyCC fonctionne uniquement avec les puces Airoha. Si vous possédez un modèle Huilian, utilisez Starfun ; si vous possédez un modèle TigerBuilder, utilisez CloudCC. Si aucune application ne se connecte, vous avez probablement un modèle Jieli d’entrée de gamme.
:::
