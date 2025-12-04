---
title: "Observer, pas attendre : quand le coding IA a franchi le seuil de vitesse"
slug: "seuil-vitesse"
date: 2025-12-03
---

Je sais que les retours sur l'utilisation de l'IA comme dev, c'est tellement mi-2025, mais je pense qu'il y a encore des choses à dire.

Je viens de construire une interface de query builder en ~2 jours – 5k lignes de code, UI complexe, pas un petit morceau de travail. C'est un playground où les utilisateurs peuvent construire des requêtes à travers plusieurs sources de données avec des filtres avancés. Pense à un Metabase simplifié. Bon candidat pour l'assistance IA, car je savais où je voulais arriver, et une partie du travail était un copier-coller de ce qu'on fait déjà ailleurs.

Sans IA, ça m'aurait pris ~6 jours. Donc oui, 3x plus rapide. Mais ce n'est pas ce qui compte ici. Tout le monde a des histoires de 3x maintenant.

Ce qui compte, c'est que quelque chose de fondamental a changé dans la façon dont le développement se ressent.

## C'est tellement rapide

Les jours où je lance un agent avec un prompt et je vais me faire un café ou surfer sur le web sont finis.

Petite correction ? Quelques secondes. Exécution d'un plan complexe ? 10-20 secondes max. La plupart du temps, Cursor avec Composer-1 met à peine 10 ou 20 secondes pour écrire n'importe quel code.

Ce n'est pas juste une question d'être plus rapide ; c'est maintenant assez rapide pour éviter de perturber ton flow.

J'ai remarqué l'amélioration de la vitesse de Cursor avec Composer-1 il y a quelques semaines, mais c'était ma première grosse feature avec. La différence : maintenant je regarde le processus de pensée de Cursor au lieu d'attendre qu'il finisse et de lire les pensées après. Je reste dans le problème mentalement.

## C'est tellement bon

Oui, parfois j'ai dû aller corriger de petits problèmes moi-même parce qu'il n'y arrivait pas après plusieurs itérations. Mais sur des features entières, ça n'est arrivé que ~5 fois sur 5k lignes.

Une fois, c'était un problème de positionnement pour un dropdown – il s'est avéré que le composant tiers avait une option que j'ai trouvée moi-même. Une autre fois, c'était une erreur dans notre gestion d'état MobX. Les erreurs dans la console n'étaient pas utiles, donc je suis passé au debugging avec `console.log`.

Mais voici la surprise : le code généré est assez propre pour que Cursor lui-même puisse le maintenir, corriger les bugs, et le refactoriser quand nécessaire.

Il n'y a pas si longtemps, après plusieurs prompts, le code nécessitait un nettoyage manuel, sinon l'agent commençait à se perdre. Ces temps sont révolus.

## Le code qui se maintient lui-même

Cursor a tendance à faire de gros composants React et à dupliquer du code comme les classes TailwindCSS. Traditionnellement, ce serait du "mauvais" code. Mais pendant l'implémentation d'une feature, c'est plus qu'ok de commencer simple. À la fin, tu demandes à Cursor de refactoriser en faisant des composants plus petits – et Cursor est bon là-dedans.

Quand je regarde le code généré par Cursor, je pourrais croire que je l'ai écrit moi-même. Pas parce qu'il est fancy, mais parce qu'il est direct, _straightforward_.

Cette simplicité est la clé. "Explicite et duplicatif" fonctionne mieux que "DRY et abstrait" quand l'IA a besoin de comprendre et de modifier plus tard. Un désordre temporaire qui peut être auto-refactorisé en 15 secondes bat l'abstraction prématurée.

## Notes pratiques

**Gestion des conversations :** J'ai démarré une nouvelle conversation pour chaque nouveau morceau de travail. Juste mentionner "dans le playground" suffisait pour qu'il attrape le contexte. Pas besoin de plans partagés élaborés.

**Screenshots :** Envoyer des screenshots d'erreurs de console est toujours déraisonnablement efficace.

**Mode planning :** Je ne l'ai utilisé que pour démarrer de gros morceaux. Le mode agent a géré 95% du travail.

**Les limites :** Cursor n'est toujours pas génial pour les raffinements UI – alignement pixel-perfect, utiliser les bons design tokens. C'est là que je prends le relais.

## Ce qui a vraiment changé

On a franchi un seuil. Quand tout, des petites corrections aux refactorisations complexes, se passe en secondes, pas en minutes :

- Pas de coût de changement de contexte
- "Essaie et vois" devient la norme
- L'expérimentation est essentiellement gratuite
- Tu maintiens ton modèle mental tout du long

Ce n'est le gain de productivité de 3x qui importe. C'est le fait que l'IA devient une extension de ton processus de pensée plutôt qu'un collaborateur asynchrone. Au-dessus de 20-30 secondes, tu changes de contexte. En dessous, tu restes en flow.

Peut-être qu'on entre dans une ère où on optimise pour la lisibilité IA comme on l'a fait pour la lisibilité humaine. Où la frontière entre le style de code humain et IA se dissout. Où "assez bon pour se maintenir lui-même" devient un nouveau principe architectural.

La vraie question n'est pas de savoir si l'IA nous rend plus rapides. C'est ce qui change quand la distinction entre le code humain et le code IA devient invisible.
