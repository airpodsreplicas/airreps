---
description: Apprenez à contribuer au projet AirReps en suivant ce guide étape par étape. Forkez et clonez le dépôt, configurez votre environnement de développement, apportez des modifications et soumettez une pull request pour révision. Commencez à contribuer dès aujourd'hui !
---

# Guide de Contribution

Nous sommes ravis de votre intérêt à contribuer à notre projet. Pour faciliter votre processus de contribution, nous avons fourni un guide détaillé, étape par étape, ci-dessous.

::: tip
Pour faciliter la gestion de vos contributions, nous recommandons d'utiliser [GitHub Desktop](https://desktop.github.com/), un client GitHub avec interface graphique.
:::

## Forker et Cloner le Dépôt

Suivez ces étapes pour forker le dépôt, le cloner, créer une nouvelle branche et configurer votre environnement de développement local :

1. Allez sur la page GitHub du projet [en cliquant ici](https://github.com/AirPodsReplicas/AirReps)
2. Cliquez sur `Fork` en haut à droite. Cela créera une copie du dépôt dans votre compte GitHub
3. Ouvrez [GitHub Desktop](https://desktop.github.com/).
4. Dans le menu supérieur de GitHub Desktop, naviguez vers `File` > `Clone Repository...`.
5. Dans la catégorie GitHub.com, vous devriez voir le dépôt que vous avez forké.
6. Pour cloner le dépôt, cliquez sur `Clone`.
7. Une fois le processus de clonage terminé, naviguez vers `Current Branch`, puis sélectionnez `New Branch`. Entrez ici un nom descriptif pour votre nouvelle branche.

::: warning
La branche principale est une branche protégée. En tant que telle, l'édition directe n'est pas autorisée. Créez toujours une nouvelle branche pour vos modifications.
:::

8. Naviguez vers le répertoire `airreps` dans votre environnement local.
9. Ouvrez le projet dans un environnement de développement intégré (IDE) de votre choix. Nous recommandons [Visual Studio Code](https://code.visualstudio.com/), un IDE gratuit et riche en fonctionnalités. Vous pouvez également utiliser des IDE assistés par IA comme [Cursor](https://cursor.com/) ou [Google Antigravity](https://antigravity.google), qui peuvent faciliter grandement la contribution en aidant avec les suggestions de code et la documentation.

## Configuration de l'Environnement de Développement

Choisissez l'une des deux options ci-dessous pour configurer votre environnement de développement :

### Option 1 (Recommandée)

Pour configurer un environnement de développement optimal :

1. [Installez Bun](https://bun.sh/). Ce projet utilise Bun comme gestionnaire de paquets et environnement d'exécution.
2. [Installez Node.js](https://nodejs.org/). Nous recommandons la version Long-Term Support (LTS).
3. Après l'installation, ouvrez le terminal dans votre IDE et exécutez la commande suivante :

```shell
bun install
```

4. Démarrez le serveur de développement de la documentation :

```shell
bun run docs:dev
```

5. Le terminal affichera alors une URL locale, comme `http://localhost:5173`. Visitez cette URL dans votre navigateur web pour voir la documentation. La page se rafraîchira automatiquement lorsque vous modifierez les fichiers sources.

### Option 2

Cette méthode vous permet de travailler directement avec les fichiers markdown, bien qu'elle puisse ne pas rendre correctement certaines fonctionnalités spécifiques à VitePress.

1. Ouvrez [Visual Studio Code](https://code.visualstudio.com/) ou votre IDE préféré.
2. Installez l'extension [Markdown Preview Enhanced](https://marketplace.visualstudio.com/items?itemName=shd101wyy.markdown-preview-enhanced) pour Visual Studio Code. Elle se trouve dans l'onglet `Extensions` de la barre latérale.
3. Ouvrez n'importe quel fichier markdown du répertoire `docs`.
4. Pour activer l'aperçu Markdown, ouvrez la palette de commandes avec `Ctrl + Shift + P` (Windows) ou `Cmd + Shift + P` (Mac).
5. Recherchez `Markdown Preview` et sélectionnez `Markdown: Open Preview`.

::: warning
Gardez à l'esprit que VitePress offre des fonctionnalités supplémentaires non disponibles dans le markdown standard. Par conséquent, cette méthode peut ne pas refléter précisément le formatage final lorsqu'il est consulté sur le site de documentation réel.
:::

## Soumettre des Modifications

Une fois vos modifications effectuées, suivez les étapes ci-dessous pour les soumettre pour révision :

1. Si vous avez choisi l'Option 1 sous [Configuration de l'Environnement de Développement](#option-1-recommandée), assurez-vous que les pages se compileront correctement en exécutant la commande suivante :

```shell
bun run docs:build
```

::: danger
Si la sortie affiche `Command failed` ou tout autre message d'erreur, il y a un problème. Le message d'erreur devrait vous donner un aperçu du problème. Si vous n'êtes pas sûr du problème, vous pouvez contacter les membres de notre équipe sur notre [serveur Discord](https://airreps.link/discord).
:::

2. Ouvrez GitHub Desktop. Le panneau de gauche affichera le nombre de fichiers modifiés.
3. Vous pouvez voir les modifications apportées à chaque fichier. Sélectionnez un fichier à la fois et remplissez le champ `Summary (required)`. Si nécessaire, fournissez des détails supplémentaires dans le champ `Description`. Cliquez sur `Commit to the branch you created` pour valider vos modifications.
4. Maintenant, cliquez sur `Push changes to x` *(x étant le nom de la branche que vous avez créée)* pour télécharger vos modifications sur GitHub.

::: tip
Si vous avez validé tous les fichiers, bravo ! Votre prochaine étape sera de pousser vos modifications vers GitHub et de créer une Pull Request.
:::

## Créer une Pull Request

Suivez ces étapes pour créer une pull request proposant de fusionner vos modifications dans la branche principale :

1. Une fois toutes vos modifications validées et poussées vers votre branche distante, il est temps de créer une pull request.
2. Allez sur votre dépôt forké sur le site web de GitHub.
3. Cliquez sur `New pull request`. Vous serez redirigé vers la page du dépôt original.
4. Assurez-vous que le dépôt de base est `base: main` et que le dépôt source est `<votre_nom_utilisateur>/<nom_de_votre_branche>`.
5. Passez en revue vos modifications et remplissez le formulaire avec une description claire de ce que vous avez changé et pourquoi. *Pour référence, vous pouvez consulter cette [pull request exemplaire](https://github.com/AirPodsReplicas/AirReps/pull/20).*
6. Cliquez sur `Create pull request`.
7. Après avoir soumis votre pull request, GitHub Actions tentera de compiler vos modifications pour détecter d'éventuels problèmes. S'il n'y a pas de problèmes, un contributeur du dépôt examinera vos modifications et les fusionnera ou demandera des modifications supplémentaires.

## Que Pouvez-Vous Contribuer ?

Après une fusion réussie, votre profil GitHub sera automatiquement inclus dans la section `Contributeurs` située en bas de notre page d'accueil. Si vous préférez que votre profil soit omis de cette section pour une raison quelconque, veuillez contacter un membre de notre équipe pour obtenir de l'aide pour la suppression du profil.

- **Corriger des fautes de frappe ou des erreurs** - Vous avez repéré une erreur ? Soumettez une correction rapide !
- **Mettre à jour des informations obsolètes** - Aidez à maintenir le guide à jour
- **Ajouter du nouveau contenu** - Documentez de nouveaux addons, fonctionnalités ou configurations
- **Améliorer la clarté** - Rendez les explications plus faciles à comprendre
- **Ajouter des captures d'écran** - Les guides visuels sont toujours utiles
- **Suggérer des améliorations** - Vous avez des idées ? Ouvrez une issue pour en discuter

Merci pour votre engagement à améliorer notre projet !
