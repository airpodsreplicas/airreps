---
title: Politique de confidentialité
description: 'Comment le bot Discord AirReps collecte, utilise et protège les données.'
ogLabel: JURIDIQUE
sidebar: false
---
# Politique de confidentialité

Cette page explique ce que le bot Discord AirReps collecte, pourquoi nous le conservons et comment vous pouvez nous demander de le supprimer.

**Dernière mise à jour :** 23 août 2026

## Introduction

L’équipe du personnel d’AirReps gère le bot Discord AirReps (« le Bot »), utilisé dans la communauté [AirReps](https://airpodsreplicas.com). Cette Politique de confidentialité décrit comment nous collectons, utilisons, stockons et protégeons les informations lorsque vous invitez ou utilisez le Bot. Utiliser le Bot signifie que vous acceptez les pratiques décrites ci-dessous.

Ces pages accompagnent nos [Conditions d’utilisation](/fr/bot/terms). Discord possède également sa propre [Politique de confidentialité](https://discord.com/privacy).

## Informations que nous collectons

Le Bot conserve les informations dont il a besoin pour exécuter les fonctionnalités listées dans les Conditions. Cela comprend :

- Les identifiants utilisateur Discord, noms d’utilisateur, noms d’affichage, identifiants de serveur (guild) et identifiants de salon
- Les identifiants de rôle lorsque vous choisissez un rôle de langue ou lorsque les outils du personnel doivent vérifier des autorisations
- L’utilisation des commandes (quelle commande slash a été exécutée et quand), y compris les journaux facultatifs des commandes du personnel
- Le texte des commentaires que vous envoyez avec `/feedback`
- Les participations aux giveaways : votre identifiant utilisateur Discord et, si le giveaway l’exige, l’UID KakoBuy que vous saisissez
- Les statistiques des membres : nombres d’arrivées et de départs, horodatages d’arrivée, ancienneté, heure de la journée des arrivées et des départs, ainsi que les identifiants utilisés pour distinguer un retour d’une première arrivée
- Le contenu des messages et les pièces jointes lorsqu’une fonctionnalité en temps réel en a besoin : l’anti-arnaque (texte, signatures d’images et copie de la première image pour le rapport destiné aux modérateurs), le convertisseur KakoBuy (URL Weidian / Taobao / 1688 / Tmall dans un message) et le miroir Reddit (texte et images du salon d’annonces configuré)

Ces données sont associées à votre identité Discord et aux serveurs où le Bot est utilisé. Les données persistantes sont stockées dans une base de données SQLite locale sur la machine qui exécute le Bot. La détection anti-arnaque utilise une courte fenêtre en mémoire contenant les messages récents.

Nous ne vous demandons ni adresse e-mail, ni numéro de téléphone, ni informations de paiement, ni nom légal. Un UID KakoBuy n’est conservé que si vous en saisissez un lors d’un giveaway. Si vous envoyez vous-même ces informations au personnel par e-mail, cela ne relève pas du Bot.

## Comment nous utilisons vos informations

Nous utilisons ces données pour :

- Afficher les catalogues de vendeurs et les assistants de commande (`/jenny`, `/hicity`, `/earhive`, `/ultimateguide`, `/wise`, `/text`, `/alipay`, `/eartip`, `/resethelp`)
- Convertir des devises avec `/convert`
- Attribuer les rôles de langue que vous choisissez
- Transmettre les commentaires à un salon du personnel
- Organiser des giveaways (`/gs`) et vérifier les UID KakoBuy lorsqu’un organisateur active cette option
- Générer des rapports quotidiens / hebdomadaires / mensuels sur les membres et publier des messages liés aux étapes importantes
- Mettre à jour le nombre de membres du salon vocal
- Envoyer un message privé de bienvenue lorsque vous rejoignez le serveur AirReps configuré
- Signaler les spams d’arnaques entre salons, mettre le compte en sourdine, supprimer la série de messages, vous envoyer un message privé et signaler l’incident au salon de modération
- Répondre aux liens de marketplaces avec une URL de paiement KakoBuy (code affilié `airreps`)
- Republier certaines annonces Discord sur [r/airreps](https://www.reddit.com/r/airreps)
- Diagnostiquer les erreurs et conserver une trace d’audit du personnel lorsque la journalisation est activée

Nous pouvons examiner les statistiques agrégées des membres afin d’améliorer le serveur. Nous ne vendons pas de données personnelles.

## Services tiers

Le Bot communique avec plusieurs services pour effectuer les opérations décrites ci-dessus :

- **Discord** — l’API qui exécute chaque commande, événement, message privé et mise en sourdine. Les conditions et la politique de confidentialité de Discord s’appliquent. Nous ne contrôlons pas Discord.
- **Frankfurter (taux de la BCE)** — `/convert` envoie le montant et les codes de devise pour obtenir un taux. Les taux sont mis en cache en mémoire pendant quelques heures.
- **Reddit** — lorsque le miroir est activé, le texte et les images des annonces sont téléversés via l’API de Reddit vers le subreddit configuré.
- **KakoBuy** — les URL de produits converties sont envoyées à KakoBuy (y compris un code affilié AirReps) afin que la réponse puisse inclure un lien de paiement et une miniature.

Nous ne partageons des données que lorsque cela est nécessaire au fonctionnement de ces fonctionnalités, lorsque la loi nous y oblige ou pour prévenir un préjudice grave. Nous ne vendons ni ne louons de données à des fins publicitaires.

## Conservation et suppression des données

La durée de conservation dépend de la fonctionnalité :

- **Les giveaways** restent dans SQLite jusqu’à ce qu’un organisateur les termine ou les supprime (participations, UID facultatifs, gagnants).
- **Les statistiques des membres** (compteurs d’arrivées et de départs, intervalles horaires, identifiants des membres partis, horodatages d’arrivée) sont conservées afin que les rapports quotidiens/hebdomadaires/mensuels et la détection des retours continuent de fonctionner. Les horodatages d’arrivée peuvent rester après le départ d’une personne afin que son ancienneté soit exacte si elle revient.
- **Les tampons anti-arnaque** sont conservés brièvement en mémoire (quelques dizaines de secondes). Le rapport dans le salon de modération, y compris l’aperçu enregistré de l’image, reste dans Discord comme n’importe quel autre message du personnel.
- **Les commentaires** sont publiés dans un salon du personnel et y restent sous forme de message Discord.
- **Les journaux de commandes**, lorsqu’ils sont activés, sont des messages Discord dans un salon de journalisation.
- **Les publications Reddit** restent sur Reddit conformément aux propres règles de conservation de Reddit.
- Les objets Discord mis en cache suivent les règles normales de mise en cache de l’API.

Si vous souhaitez obtenir une copie ou demander la suppression de données que nous avons stockées dans SQLite (participation à un giveaway, horodatage d’arrivée ou données similaires), rejoignez le [serveur Discord AirReps](https://airreps.link/discord) et envoyez un message au personnel. Nous traiterons les demandes dans un délai raisonnable. Nous ne pouvons pas effacer les messages, mises en sourdine ou publications Reddit qui se trouvent désormais uniquement sur Discord ou Reddit.

## Sécurité

Nous limitons l’accès aux données stockées aux membres de l’équipe du personnel qui en ont besoin et utilisons des mesures de protection techniques courantes sur l’hôte qui contient le fichier SQLite. Aucune configuration n’est parfaite. Si vous pensez qu’une fuite a eu lieu ou que des données ont été consultées sans autorisation, prévenez immédiatement le personnel.

## Modifications de cette Politique de confidentialité

Nous pouvons réviser cette politique lorsque le Bot ou la loi évolue. La date « Dernière mise à jour » en haut de la page indique la version actuelle. Continuer à utiliser le Bot après une modification signifie que vous acceptez la nouvelle politique.

## Contact

Pour toute question concernant cette politique ou toute demande de suppression : rejoignez le [serveur Discord AirReps](https://airreps.link/discord) et envoyez un message au personnel.
