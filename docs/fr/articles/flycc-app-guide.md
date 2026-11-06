---
title: 'Guide de l’APK FlyCC : comment configurer et régler les répliques d’AirPods Airoha'
description: 'Comment télécharger, installer et utiliser FlyCC en toute sécurité — réglage personnalisé de l’égaliseur, attribution des commandes tactiles, mises à jour du firmware et dépannage des échecs de connexion.'
category: Utiliser vos répliques
order: 13
---
# Guide de l’APK FlyCC : configurer et régler les répliques d’AirPods Airoha

FlyCC est l’application compagnon indispensable des répliques d’AirPods équipées de **chipsets Airoha** (notamment les Airoha 1562AE, 1562E, 1562F et 1571AM). Les réglages natifs d’iOS d’Apple ne donnant accès qu’à des commandes de base, FlyCC permet d’accéder aux réglages avancés du matériel : égalisation paramétrique personnalisée, calibration des capteurs tactiles, réglage de la réduction active du bruit (ANC) et mise à jour du micrologiciel par OTA.

> **Réponse rapide :** FlyCC est un utilitaire tiers gratuit pour Android, iOS et macOS, conçu spécialement pour les répliques d’AirPods basées sur Airoha. Il permet de personnaliser les profils sonores grâce à un égaliseur intégré, de modifier la sensibilité aux pincements et aux pressions, et d’installer des mises à jour du micrologiciel par OTA. Il ne détectera pas les répliques équipées de puces Huilian, BES ou Jieli d’entrée de gamme.

::: tip Android, iPhone ou Mac
FlyCC est disponible sous forme d’APK Android et sur l’App Store d’iOS ; les deux sont accessibles depuis [Applications utiles](/fr/useful-apps#tigerbuilder). Vous pouvez également utiliser la version communautaire pour macOS. Les réglages enregistrés sur les écouteurs sont conservés même lorsque vous passez à un autre téléphone.
:::

## Chipsets compatibles

FlyCC fonctionne exclusivement avec le **matériel Airoha**. Si vos écouteurs se connectent, cela confirme qu’ils embarquent une véritable puce Airoha :

- **Airoha 1562AE / 1571AM** — Prise en charge complète : calibration de l’ANC à deux micros, égaliseur personnalisé, options audio spatial avec suivi de la tête et mises à jour OTA.
- **Airoha 1562E / 1563E** — Égaliseur standard, commandes tactiles et outils de mise à jour du micrologiciel.
- **Airoha 1562F** — Commandes héritées de réglage de l’ANC et de l’égaliseur.

Si FlyCC analyse les appareils indéfiniment sans jamais détecter vos écouteurs, votre paire utilise une puce d’un autre fabricant (par exemple Huilian, qui utilise [Starfun](/fr/useful-apps)) ou une puce Jieli d’entrée de gamme.

## Comment télécharger et installer FlyCC en toute sécurité

Comme FlyCC communique avec du matériel Bluetooth non certifié MFi, l’application est distribuée directement sous forme d’APK plutôt que par Google Play.

1. Téléchargez le dernier APK vérifié depuis le [répertoire des applications utiles](/fr/useful-apps).
2. Sur votre appareil Android, accédez à **Paramètres → Sécurité** et activez **« Installer des applications inconnues »** pour votre navigateur ou votre gestionnaire de fichiers.
3. Ouvrez le fichier `.apk` téléchargé et appuyez sur **Installer**.
4. Autorisez l’accès demandé aux **appareils Bluetooth / à proximité** et à la **localisation**. (Android exige l’autorisation de localisation pour détecter les périphériques Bluetooth à basse consommation ; FlyCC ne collecte pas de données GPS.)

## Principales fonctionnalités et utilisation

### 1. Égaliseur personnalisé et réglage audio

Par défaut, certaines séries de répliques ont des basses exagérément accentuées. FlyCC comprend un égaliseur à 10 bandes pour affiner le rendu sonore :

- **Réduction des basses** : baissez les curseurs 31 Hz, 62 Hz et 125 Hz de 2 à 3 dB pour obtenir une scène sonore plus claire et neutre, proche de celle des AirPods Pro vendus au détail.
- **Clarté des voix** : augmentez les bandes 1 kHz et 2 kHz de 1,5 dB pour faire ressortir les podcasts et les voix.
- **Enregistrement sur le matériel** : une fois les réglages effectués, appuyez sur **Enregistrer sur les écouteurs**. Le réglage acoustique est directement écrit dans le DSP Airoha : l’égalisation personnalisée reste donc active lorsque vous reconnectez vos écouteurs à votre iPhone, iPad ou PC.

### 2. Calibration du toucher et des gestes

Si vos écouteurs se mettent parfois en pause par accident lorsque vous les ajustez dans vos oreilles, FlyCC permet de régler la sensibilité du capteur de pression de 1 (pression la plus légère) à 5 (pression ferme). Vous pouvez également associer des fonctions précises aux pressions simples, doubles et triples.

### 3. Réglage de la réduction du bruit

Dans le menu ANC, FlyCC permet de calibrer indépendamment les microphones de captation du bruit ambiant gauche et droit. Si vous ressentez une pression plus forte dans une oreille ou une réduction du bruit plus faible, le curseur de calibration rééquilibre l’inversion de phase.

## Mise à jour sécurisée du micrologiciel (OTA)

FlyCC peut installer des fichiers binaires de micrologiciel mis à jour pour corriger des problèmes de liaison avec iOS ou améliorer la connectivité. Toutefois, l’interruption d’une mise à jour comporte un risque inhérent de rendre l’appareil inutilisable :

1. **Chargez les deux écouteurs et le boîtier à plus de 80 %** avant de commencer.
2. Laissez le boîtier de charge ouvert, avec les deux écouteurs à l’intérieur, à moins de 30 centimètres de votre téléphone.
3. Appuyez sur **Rechercher les mises à jour** dans FlyCC. Si une mise à jour est disponible, téléchargez le paquet.
4. Appuyez sur **Démarrer la mise à jour**. **Ne fermez pas le couvercle du boîtier, ne désactivez pas le Bluetooth et ne changez pas d’application** tant que la barre de progression n’a pas atteint 100 % et que le message « Mise à jour réussie » ne s’affiche pas.
5. Une fois la mise à jour terminée, laissez les écouteurs dans le boîtier fermé pendant 60 secondes avant de les jumeler à nouveau.

Pour consulter un guide complet sur la mise à jour sécurisée des répliques équipées de tous types de chipsets, lisez [Comment mettre à jour le micrologiciel de faux AirPods](/fr/articles/how-to-update-fake-airpods-firmware).

## Dépannage des problèmes de connexion à FlyCC

Si FlyCC ne détecte pas vos écouteurs :

- **Vérifiez la connexion audio active de votre téléphone** : assurez-vous que les écouteurs sont déjà jumelés dans les paramètres Bluetooth natifs d’Android avant d’ouvrir FlyCC.
- **Autorisez l’accès aux appareils à proximité** : sous Android 12 et les versions ultérieures, FlyCC ne peut pas détecter les appareils Bluetooth LE si l’autorisation « Appareils à proximité » n’est pas activée.
- **Identifiez votre puce** : si vos écouteurs refusent de se connecter à FlyCC, essayez de les détecter avec **CloudCC** ou **Starfun**. Si aucune application ne se connecte, consultez [Comment repérer de faux AirPods](/fr/articles/how-to-spot-fake-airpods) pour vérifier s’il s’agit d’une copie équipée d’une puce Jieli d’entrée de gamme.
- **Videz le cache de jumelage** : si les connexions sont interrompues, réinitialisez le contrôleur en suivant notre [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods).

## Guides associés

- Vous utilisez vos répliques au quotidien avec Android ? Consultez [Les répliques d’AirPods sur Android](/fr/articles/airpods-replicas-on-android).
- Vous cherchez d’autres utilitaires pour puces ? Parcourez le [catalogue complet des applications utiles](/fr/useful-apps).
- Vos écouteurs refusent de se connecter ? Suivez les étapes de [Faux AirPods qui ne se connectent pas](/fr/articles/fake-airpods-wont-connect).
- Vous cherchez des modèles Airoha vérifiés ? Consultez le [répertoire des vendeurs de confiance](/fr/links/info).

## FAQ

::: details FlyCC peut-il être installé sans risque sur mon téléphone ?
Oui. Les APK hébergés dans le répertoire communautaire des applications utiles proviennent des circuits d’approvisionnement officiels des fabricants et ont été vérifiés pour détecter les logiciels malveillants. L’application a uniquement besoin d’accéder au Bluetooth pour communiquer avec le processeur audio Airoha.
:::

::: details Puis-je utiliser FlyCC sur un iPhone ?
Oui. FlyCC est disponible sur l’App Store d’iOS ainsi que sous forme d’APK Android ; les deux sont accessibles depuis [Applications utiles](/fr/useful-apps#tigerbuilder). Toutes les modifications de l’égaliseur et des commandes sont enregistrées de façon permanente dans la mémoire interne des écouteurs et sont donc conservées lorsque vous changez d’appareil.
:::

::: details Pourquoi FlyCC indique-t-il « Appareil introuvable » ?
La raison la plus courante est une incompatibilité de puce : FlyCC ne fonctionne qu’avec les puces Airoha. Si vous possédez un modèle Huilian, utilisez Starfun. Les modèles TigerBuilder utilisent FlyCC ; CloudCC n’est qu’une solution de contournement lorsque FlyCC rencontre un problème d’autorisation de stockage. Si aucune application ne se connecte, vous possédez probablement un appareil Jieli d’entrée de gamme.
:::
