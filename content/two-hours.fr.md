---
title: "Deux heures avec Cursor ont changé mon avis sur l'IA et le code"
slug: "deux-heures"
lang: "fr"
date: 2025-08-10
draft: false
---

Pour la première fois de ma carrière, je n'ai absolument aucune idée de ce à quoi ressemblera le métier d'ingénieur logiciel dans cinq ou dix ans.

J'ai toujours adoré coder. Tout. J'aime autant créer des applications from scratch que comprendre de grosses bases de code complexes. Je prends plaisir à prendre un problème complexe et trouver une implémentation simple, ou prendre un morceau de code complexe et le rendre plus simple.

Cet amour du métier a façonné ma résistance initiale aux outils d'IA pour le code.

## Hype précoce et scepticisme

Ce n'est pas que je pensais "Je n'en ai pas et n'en aurai jamais besoin." J'utilisais déjà ChatGPT quotidiennement pour des tâches non-liées au code. Mais je croyais qu'on était loin d'avoir des outils vraiment utilisables pour programmer. Je pensais que c'était juste encore du hype.

Mon biais était renforcé par ces histoires de développeurs juniors ou même de non-développeurs écrivant des apps complètes avec l'IA. "J'ai construit une todo list avec un seul prompt," disaient-ils. Ça me faisait penser que ces gens n'avaient aucune idée de ce à quoi ressemble vraiment une app. Construire du logiciel, ce n'est pas juste créer le premier brouillon d'une UI fonctionnelle.

Quelques fois, j'ai testé GitHub Copilot, et mon scepticisme semblait justifié. J'étais déçu. Les suggestions étaient parfois hors-sujet, et ça me prenait plus de temps de les corriger que le temps que je gagnais avec les pertinentes.

Plus important, je me sentais moins productif et j'appréciais moins mon travail. Je perdais mon état de flow. Au lieu de réfléchir à la vue d'ensemble, j'étais plus concentré sur la vérification du code généré et la correction des erreurs.

## Mon point de bascule

Puis deux amis m'ont dit d'essayer Cursor. Sérieusement. Il y avait énormément de hype autour de Cursor à l'époque, alors j'ai pensé que c'était le bon timing. J'ai décidé de l'essayer pendant deux heures, mais je me suis fixé un défi : si je voulais avoir une opinion claire sur Cursor, je devais m'y mettre à fond.

Pendant ces deux heures, j'ai utilisé exclusivement le mode agent. Je n'ai écrit aucun code moi-même. J'ai travaillé sur des fonctionnalités basiques que je devais ajouter à l'app sur laquelle je travaille à mon boulot.

Putain.

J'étais bluffé.

Cursor était capable de gérer la base de code complexe. Je pouvais lui dire "prends ce fichier comme exemple," et le résultat était globalement correct. Il était capable de générer des tests très pertinents.

Le mode agent n'était pas parfait—il faisait parfois des suppositions qu'il n'aurait pas dû faire. Mais au lieu de corriger le code moi-même, j'expliquais pourquoi c'était faux et je donnais des instructions plus précises[^1]. Quand je lui disais "Tu as mal compris, ça devrait..." et que je donnais des conseils plus clairs, j'étais impressionné de voir comment il pouvait comprendre le problème et mettre à jour le code en conséquence.

## Découvrir de nouvelles compétences artisanales

Aujourd'hui, j'utilise Claude Code et Cursor quotidiennement. La fonction "Tab" de Cursor reste le meilleur gain de temps et la fonctionnalité que j'utilise le plus. En parallèle, je laisse Claude Code travailler sur de plus grosses fonctionnalités, mais je les documente minutieusement avant de le laisser travailler pendant un moment.

J'ai réalisé qu'écrire des prompts précis ressemble en fait beaucoup à écrire du code. Tu apprends des patterns, de bonnes pratiques, et des façons de vérifier que tes prompts sont corrects. C'est pareil que quand tu apprends la programmation—au final tu dois apprendre les design patterns, les tests, les techniques de collaboration, etc.

La différence c'est que l'utilisation des outils d'IA est si récente qu'il n'y a pas beaucoup de ressources à jour. Il y a beaucoup de conneries et de techniques obsolètes. J'essaie de maintenir un document avec les bonnes pratiques que j'ai identifiées et testées, et on les partage avec les collègues.

## Toujours ingénieur logiciel

Je suis toujours ingénieur logiciel, et je ne pense pas que ça va changer. Notre rôle est toujours de faire du bon logiciel. Peu importe à quel point les outils d'IA deviennent bons, ce sont toujours juste des outils. De très bons outils auxquels tu peux déléguer des tâches.

Je donne à l'agent des tâches que je pourrais faire sans trop réfléchir mais qui me prendraient beaucoup de temps—des tâches très systématiques qu'un développeur junior pourrait faire avec les bonnes explications. Quand c'est possible, je choisis des tâches qui peuvent être testées automatiquement via le type checking, le linting, ou les tests unitaires.

Le meilleur exemple que j'ai trouvé pour l'agent était de migrer une énorme app d'une bibliothèque UI à une autre. Ce n'est pas du travail difficile, mais ça prend énormément de temps et c'est complètement inintéressant. Claude Code fait un plutôt bon travail sur ce genre de migration.

Même quand l'agent écrit du bon code, ça prend de l'expertise pour s'assurer que c'est vraiment bien, et encore plus d'expertise pour corriger les erreurs ou débugger quand il y a des problèmes.

## L'incertitude à venir

Je pensais qu'utiliser l'IA signifiait sacrifier mon amour pour l'artisanat du code en échange de la productivité. Maintenant je suis pretty sure que j'avais tort. J'adore interagir avec Cursor, et encore plus avec Claude Code.

Donc oui, je n'ai absolument aucune idée de ce à quoi ressemblera mon travail dans cinq ou dix ans. C'est à la fois très excitant et ça me donne un peu d'anxiété.

Les outils d'IA sont si récents que n'importe qui qui commence avec aujourd'hui pourrait probablement acquérir des compétences à jour en quelques semaines. Avec le recul, ce n'est pas clair si mon scepticisme initial était réellement raisonnable étant donné ce qu'étaient les outils plus tôt, ou si je loupais quelque chose d'important.

Ce que je sais, c'est que je suis encore très tôt dans mon parcours d'utilisation des outils d'IA, et j'apprends de nouvelles choses tous les jours. L'artisanat évolue, et j'évolue avec.

[^1]: Je me suis inspiré du post de John Rush [Building a Personal AI Factory](https://www.john-rush.com/posts/ai-20250701.html)
