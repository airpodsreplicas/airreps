---
title: 'Guide de l’application FlyCC : régler les répliques d’AirPods Airoha'
description: 'Comment télécharger, installer et utiliser FlyCC en toute sécurité — réglage personnalisé de l’égaliseur, configuration des commandes tactiles, mises à jour du firmware et résolution des échecs de connexion.'
category: Utiliser vos répliques
order: 13
---
# Guide de l’APK FlyCC : configurer et régler les répliques d’AirPods Airoha

FlyCC est l’application compagnon indispensable pour les répliques d’AirPods équipées de **puces Airoha** (notamment les Airoha 1562AE, 1562E, 1562F et 1571AM). Comme les réglages natifs d’iOS d’Apple n’exposent que des commandes basiques, FlyCC permet d’accéder aux fonctions avancées de la puce : réglage personnalisé de l’égaliseur paramétrique, étalonnage des capteurs tactiles, équilibrage de la réduction active du bruit (ANC) et installation du micrologiciel par OTA.

> **Réponse rapide :** FlyCC est un utilitaire gratuit tiers pour Android, iOS et macOS, spécialement conçu pour les répliques d’AirPods à puce Airoha. Il permet de personnaliser le son avec un égaliseur intégré, de régler la sensibilité au pincement et au toucher, et d’installer des mises à jour du micrologiciel par liaison radio. Il ne détectera pas les répliques équipées de puces Huilian, BES ou Jieli d’entrée de gamme.

::: tip Android, iPhone ou Mac
FlyCC est disponible sous forme d’APK Android et sur l’App Store iOS ; les deux liens figurent dans [Applications utiles](/fr/useful-apps#tigerbuilder). Vous pouvez aussi utiliser la version communautaire pour macOS. Les réglages enregistrés dans les écouteurs sont conservés même lorsque vous passez à un autre téléphone.
:::

<CommunityCta variant="apps" />

## Puces prises en charge

FlyCC fonctionne exclusivement avec le **matériel Airoha / TigerBuilder**. Si vos écouteurs se connectent, cela confirme qu’ils intègrent bien une puce Airoha :

| Puce Airoha | Exemples de modèles répliques | Prise en charge par FlyCC |
| :--- | :--- | :--- |
| **Airoha 1571AM** | Pro 3 V7 TB, Pro 2 V5.3 TB, AirPods 4 V3 TB | Égaliseur, ANC, commandes tactiles, suivi de la tête, OTA complets |
| **Airoha 1562AE** | Pro 2 V5.2 TB, AirPods Max V3 TB, Pro 1 V4.9 | Égaliseur, ANC, commandes tactiles, suivi de la tête, OTA complets |
| **Airoha 1563E / 1562E** | Pro 3 V6 TB, AirPods 4 V2 TB, AirPods 2 V3E | Égaliseur standard, commandes tactiles, outils de micrologiciel |
| **Airoha 1561M / 1562F** | AirPods Max V3P / V2 Metal, anciens modèles | Égaliseur et outils de base pour le micrologiciel |

Si FlyCC recherche les écouteurs indéfiniment sans jamais les détecter, votre paire utilise une puce d’un autre fabricant (par exemple Huilian, qui utilise [StarFun](/fr/articles/starfun-app-guide)) ou une puce Jieli d’entrée de gamme.

## Télécharger et installer FlyCC en toute sécurité

Comme FlyCC communique avec du matériel Bluetooth non MFi, l’application est distribuée directement sous forme d’APK plutôt que par Google Play.

1. Téléchargez la dernière APK vérifiée depuis le [répertoire des applications utiles](/fr/useful-apps).
2. Sur votre appareil Android, accédez à **Paramètres → Sécurité** et activez **« Installer des applications inconnues »** pour votre navigateur ou votre gestionnaire de fichiers.
3. Ouvrez le fichier `.apk` téléchargé et appuyez sur **Installer**.
4. Accordez les autorisations demandées pour le **Bluetooth / les appareils à proximité** et la **localisation**. (Android exige l’autorisation de localisation pour rechercher des périphériques Bluetooth Low Energy ; FlyCC ne suit pas les données GPS.)

## Principales fonctionnalités et mode d’emploi

### 1. Égaliseur personnalisé et réglage audio

À la sortie de la boîte, certaines séries de répliques ont des basses exagérées. FlyCC comprend un égaliseur à 10 bandes pour affiner le rendu audio :

- **Réduction des basses** : baissez les curseurs 31 Hz, 62 Hz et 125 Hz de 2 à 3 dB pour obtenir une scène sonore plus propre et neutre, proche de celle des AirPods Pro vendus en magasin.
- **Clarté des voix** : augmentez les bandes 1 kHz et 2 kHz de 1,5 dB pour mieux faire ressortir les podcasts et les voix.
- **Enregistrement dans les écouteurs** : une fois les réglages terminés, appuyez sur **Enregistrer dans les écouteurs**. Le réglage acoustique est directement inscrit dans le DSP Airoha : l’égaliseur personnalisé reste donc actif lorsque vous reconnectez les écouteurs à votre iPhone, iPad ou PC.

### 2. Étalonnage du toucher et des gestes

Si vos écouteurs mettent la lecture en pause par inadvertance lorsque vous les ajustez dans votre oreille, FlyCC permet de régler la sensibilité du capteur de pression de 1 (pression la plus légère) à 5 (pression ferme). Vous pouvez également associer des fonctions précises aux pressions simples, doubles et triples.

### 3. Réglage de la réduction du bruit

Dans le menu ANC, FlyCC permet d’étalonner séparément les microphones à anticipation gauche et droit. Si vous avez l’impression que la pression dans l’oreille est plus forte d’un côté ou que la réduction du bruit est moins efficace, le curseur d’étalonnage rééquilibre l’inversion de phase.

## Mise à jour du micrologiciel en toute sécurité (OTA)

FlyCC peut installer des fichiers de micrologiciel mis à jour pour corriger les problèmes de connexion avec iOS ou améliorer la connectivité. Toutefois, l’interruption de l’opération comporte un risque inhérent de rendre les écouteurs inutilisables :

1. **Chargez les deux écouteurs et le boîtier à plus de 80 %** avant de commencer.
2. Laissez le boîtier de charge ouvert, les deux écouteurs à l’intérieur, à moins de 30 centimètres de votre téléphone.
3. Appuyez sur **Rechercher des mises à jour** dans FlyCC. Si une mise à jour est disponible, téléchargez le paquet.
4. Appuyez sur **Démarrer la mise à jour**. **Ne fermez pas le couvercle du boîtier, ne désactivez pas le Bluetooth et ne passez pas à une autre application** tant que la barre de progression n’a pas atteint 100 % et que le message « Mise à jour réussie » ne s’affiche pas.
5. Une fois l’opération terminée, laissez les écouteurs dans le boîtier fermé pendant 60 secondes avant de les jumeler de nouveau.

::: warning Remarque concernant les Pro 3 V7 TB
Sur les **AirPods Pro 3 V7 TB**, après une mise à jour du micrologiciel dans FlyCC, la fenêtre contextuelle iOS et le numéro de série disparaissent et doivent être réajoutés dans l’application FlyCC. Les V7 Huilian (StarFun) ne sont pas concernés.
:::

Pour un guide détaillé sur la mise à jour sécurisée des micrologiciels de toutes les puces de répliques, consultez [Comment mettre à jour le micrologiciel de faux AirPods](/fr/articles/how-to-update-fake-airpods-firmware).

## Résoudre les problèmes de connexion avec FlyCC

Si FlyCC ne détecte pas vos écouteurs :

- **Vérifiez la connexion audio active de votre téléphone** : vérifiez que les écouteurs sont déjà jumelés dans les réglages Bluetooth natifs d’Android avant d’ouvrir FlyCC.
- **Accordez l’autorisation Appareils à proximité** : sous Android 12 et versions ultérieures, FlyCC ne peut pas détecter les appareils Bluetooth LE si l’autorisation « Appareils à proximité » n’est pas activée.
- **Identifiez votre puce** : si FlyCC ne parvient pas à se connecter à vos écouteurs, essayez de rechercher les appareils avec **[StarFun](/fr/articles/starfun-app-guide)** (pour les puces Huilian) ou **CloudCC** (solution de contournement uniquement pour les anciens problèmes d’autorisation de stockage sur les modèles TB). Si aucune application ne se connecte, consultez [Comment repérer de faux AirPods](/fr/articles/how-to-spot-fake-airpods) pour vérifier s’il s’agit d’une imitation Jieli d’entrée de gamme.
- **Effacez le cache de jumelage** : si la connexion est instable, réinitialisez le contrôleur à l’aide de notre [guide de réinitialisation](/fr/articles/how-to-reset-fake-airpods).

<CommunityCta variant="stuck" />

## Guides associés

- Vous possédez une réplique Huilian ? Consultez notre [guide de l’application StarFun](/fr/articles/starfun-app-guide).
- Vous utilisez des répliques au quotidien avec Android ? Consultez [Les répliques d’AirPods sur Android](/fr/articles/airpods-replicas-on-android).
- Vous cherchez des utilitaires pour d’autres puces ? Consultez le [catalogue complet des applications utiles](/fr/useful-apps).
- Vous cherchez un modèle Airoha vérifié ? Répondez au [quiz d’une minute](/fr/quiz) ou parcourez le [répertoire des vendeurs de confiance](/fr/links/info).

## FAQ

::: details Puis-je installer FlyCC sur mon téléphone en toute sécurité ?
Oui. Les APK hébergées dans le répertoire communautaire des applications utiles proviennent des chaînes d’approvisionnement officielles des fabricants et ont été vérifiées pour s’assurer qu’elles ne contiennent pas de logiciel malveillant. L’application demande uniquement l’accès au Bluetooth pour communiquer avec le processeur audio Airoha.
:::

::: details Puis-je utiliser FlyCC sur un iPhone ?
Oui. FlyCC est disponible sur l’App Store iOS ainsi que sous forme d’APK Android ; les deux liens figurent dans [Applications utiles](/fr/useful-apps#tigerbuilder). Les changements apportés à l’égaliseur et aux commandes sont enregistrés de manière permanente dans la mémoire interne des écouteurs et sont donc conservés lorsque vous changez d’appareil.
:::

::: details Pourquoi FlyCC affiche-t-il « Appareil introuvable » ?
La cause la plus fréquente est une incompatibilité de puce : FlyCC ne fonctionne qu’avec les puces Airoha. Si vous avez un modèle Huilian, utilisez StarFun. Les modèles TigerBuilder utilisent FlyCC ; CloudCC est uniquement une solution de contournement si FlyCC rencontre le problème d’autorisation de stockage. Si aucune application ne se connecte, vous avez probablement un modèle Jieli d’entrée de gamme.
:::
