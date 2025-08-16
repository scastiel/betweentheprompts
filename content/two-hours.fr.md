---
title: "Deux heures avec Cursor ont changé ma vision du développement avec l'IA"
slug: "deux-heures"
date: 2025-08-10
draft: false
---

Pour la première fois de ma carrière, je n'ai absolument aucune idée de ce à quoi ressemblera le métier d'ingénieur logiciel dans cinq ou dix ans.

J'ai toujours adoré coder. Tout, dans le code. J'aime autant créer des apps from scratch que comprendre de grosses bases de code complexes. Je prends plaisir à prendre un problème complexe et trouver une implémentation simple, ou à prendre du code complexe et le simplifier.

Cet amour du métier a fondé mon scepticisme initial aux outils de coding IA.

## Hype précoce et scepticisme

Ce n'est pas que je pensais "Je n'en ai pas besoin et n'en aurai jamais besoin." J'utilisais déjà ChatGPT au quotidien pour des tâches non-techniques. Mais je pensais qu'on était loin d'avoir des outils vraiment utilisables pour programmer. Je pensais que c'était juste un énième hype.

Mon biais était renforcé par ces histoires de développeurs juniors ou même de non-développeurs qui créaient des apps complètes avec l'IA. "J'ai construit une todo list avec un seul prompt," disaient-ils. Ça me faisait penser que ces gens n'avaient aucune idée de ce à quoi ressemble vraiment une app. Développer du logiciel, ce n'est pas juste créer le premier draft d'une UI fonctionnelle.

Quelques fois, j'ai testé GitHub Copilot, et mon scepticisme semblait justifié. J'étais déçu. Les suggestions étaient parfois hors-sujet, et ça me prenait plus de temps de les corriger que le temps que je gagnais sur celles qui étaient pertinentes.

Plus important encore, je me sentais moins productif et j'aimais moins mon travail. Je perdais mon flow. Au lieu de réfléchir à la big picture, j'étais plus focalisé sur la vérification du code généré et la correction d'erreurs.

## Mon déclic

Puis deux amis m'ont dit de vraiment tester Cursor. Genre, sérieusement. Il y avait un énorme hype autour de Cursor à l'époque, donc je me suis dit que c'était le bon timing. J'ai décidé de l'essayer pendant deux heures, mais je me suis fixé un défi : si je voulais avoir un avis clair sur Cursor, je devais y aller à fond.

Pendant ces deux heures, j'ai utilisé exclusivement le mode agent. Je n'ai pas écrit une ligne de code moi-même. J'ai travaillé sur des fonctionnalités de base que je devais ajouter à l'app sur laquelle je bosse au travail.

Wow.

J'étais bluffé.

Cursor arrivait à gérer la base de code complexe. Je pouvais lui dire "prends ce fichier comme exemple," et le résultat était globalement correct. Il arrivait à générer des tests très pertinents.

Le mode agent n'était pas parfait — il faisait parfois des suppositions qu'il n'aurait pas dû faire. Mais au lieu de corriger le code moi-même, j'expliquais pourquoi c'était faux et je lui donnais des instructions plus précises[^1]. Quand je lui disais "Tu as mal compris, ça devrait..." et que je donnais des indications plus claires, j'étais impressionné de voir comme il pouvait comprendre le problème et mettre à jour le code en conséquence.

## Découvrir de nouvelles compétences du métier

Aujourd'hui, j'utilise Claude Code et Cursor tous les jours. La fonction "Tab" de Cursor reste le meilleur gain de temps et la fonctionnalité que j'utilise le plus. En parallèle, je laisse Claude Code travailler sur des fonctionnalités plus importantes, mais je les documente minutieusement avant de le laisser bosser pendant un moment.

J'ai réalisé qu'écrire des prompts précis ressemble énormément à écrire du code. Tu apprends des patterns, des bonnes pratiques, et des façons de vérifier que tes prompts sont corrects. C'est pareil que quand tu apprends la programmation — au final tu dois apprendre les design patterns, les tests, les techniques de collaboration, etc.

La différence, c'est que l'utilisation des outils IA est si récente qu'il n'y a pas beaucoup de ressources à jour. Il y a beaucoup de bruit et de techniques obsolètes. J'essaie de maintenir un document avec les bonnes pratiques que j'ai identifiées et testées, et on les partage avec les collègues.

## Toujours ingénieur logiciel

Je suis toujours Software Engineer, et je ne pense pas que ça changera. Notre rôle reste de faire du bon logiciel. Peu importe à quel point les outils IA deviennent bons, ce ne sont que des outils. De très bons outils auxquels tu peux déléguer des tâches.

Je donne à l'agent des tâches que je pourrais faire sans trop réfléchir mais qui me prendraient beaucoup de temps — des tâches très systématiques qu'un développeur junior pourrait faire avec les bonnes explications. Quand c'est possible, je choisis des tâches qui peuvent être testées automatiquement via le type checking, le linting, ou les tests unitaires.

Le meilleur exemple que j'ai trouvé pour l'agent était de migrer une énorme app d'une librairie UI à une autre. Ce n'est pas du travail difficile, mais ça prend énormément de temps et c'est complètement inintéressant. Claude Code fait du très bon travail sur ce genre de migration.

Même quand l'agent écrit du bon code, il faut de l'expertise pour s'assurer que c'est vraiment bon, et encore plus d'expertise pour corriger les erreurs ou débugger quand il y a des problèmes.

## L'incertitude qui nous attend

Je pensais qu'utiliser l'IA voulait dire sacrifier mon amour pour l'artisanat du code en échange de productivité. Maintenant je suis plutôt sûr que j'avais tort. J'adore interagir avec Cursor, et encore plus avec Claude Code.

Donc oui, je n'ai absolument aucune idée de ce à quoi ressemblera mon travail dans cinq ou dix ans. C'est à la fois très excitant et ça me donne un peu d'anxiété.

Les outils IA sont si récents que n'importe qui qui commence avec eux aujourd'hui pourrait probablement acquérir des compétences à jour en quelques semaines. Avec le recul, ce n'est pas clair si mon scepticisme initial était vraiment raisonnable vu ce que les outils étaient à l'époque, ou si je ratais quelque chose d'important.

Ce que je sais, c'est que je n'en suis qu'au début de mon parcours avec les outils IA, et j'apprends de nouvelles choses chaque jour. Le métier évolue, et j'évolue avec lui.

[^1]: Je me suis inspiré du post de John Rush [Building a Personal AI Factory](https://www.john-rush.com/posts/ai-20250701.html)
