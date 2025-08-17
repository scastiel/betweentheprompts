---
title: "Faire de Claude Code mon meilleur partenaire de design"
slug: "partenaire-design"
date: 2025-08-18
draft: false
---

Quand j'ai commencé à utiliser Claude Code, j'avais une approche naïve pour travailler avec lui. Je décrivais la tâche directement dans le prompt, j'appuyais sur Entrée, et je croisais les doigts. Si l'agent faisait des erreurs, je lui expliquais comment les corriger. Pour les petites tâches, ça peut suffire, mais quand la complexité augmente, cette approche révèle plusieurs inconvénients majeurs.

## Quand la simplicité ne passe pas à l'échelle

Le premier problème, c'est que la conversation devient l'unique source de vérité sur la tâche. Cela signifie qu'un nouveau message peut écraser les instructions d'un ancien, mais on ne voit pas toujours quand cela arrive, ce qui peut causer des erreurs de la part de l'agent.

De plus, la taille du contexte pour l'agent est limitée. Plus la conversation s'allonge, plus les informations du début peuvent être "oubliées", même si Claude Code dispose d'une capacité de "compactage" de la conversation qui est censée améliorer ce problème.

Pour ces raisons, j'ai commencé à expérimenter avec une approche dont j'avais entendu parler : demander à Claude Code de commencer par écrire un document de plan. Ce document devient la source de vérité au lieu d'une conversation qui s'étale. Quand je trouve que le document de plan est assez bon, j'ai pris l'habitude de vider la conversation pour repartir à zéro avec juste le plan comme contexte.

## Créer le plan initial

Mon premier prompt consiste généralement à donner à Claude Code une description de la fonctionnalité qu'il doit implémenter (ou du bug qu'il doit corriger, ou du refactoring qu'il doit faire) avec tous les détails que j'ai en tête. Si j'ai déjà une idée de l'implémentation, je peux lui donner quelques pointeurs vers des fichiers existants pour référence. Cependant, j'essaie de ne pas lui donner trop d'instructions d'implémentation parce que je veux qu'il fasse des suggestions et contribue au processus de design.

> Je veux implémenter un query builder. La page sera affichée en deux colonnes. Dans la première, une première boîte permettra à l'utilisateur de sélectionner une vue (pour l'instant une seule vue : "Volume Metrics"), une deuxième boîte pour sélectionner des champs ("field 1", "field 2", "field 3"), et une troisième pour ajouter des filtres (ne la remplis pas encore). La colonne de droite affichera d'abord la requête en langage naturel, puis un tableau avec les résultats de la requête. (à suivre)

J'essaie aussi de faire référence aux plans existants pour les fonctionnalités implémentées précédemment. Je n'ai pas de template formel, mais je n'en ai pas vraiment besoin tant que j'ai d'autres plans à utiliser comme exemples.

> (suite) Consulte le plan précédent dans @plans/chat-playground.md pour connaître les détails de routage et d'architecture. (à suivre)

Je m'attends à voir plusieurs éléments clés dans le document. D'abord, une reformulation de la description de fonctionnalité que je lui ai donnée, ce qui aide à s'assurer qu'on est alignés sur les exigences. Ensuite, des détails sur comment la fonctionnalité sera implémentée — généralement ça inclut quelques morceaux de code ou de pseudo-code sans que j'aie besoin de lui dire de le faire. Enfin, les commandes à exécuter pour s'assurer que la qualité du code est acceptable, incluant la vérification de types, le linting, et les tests.

> (suite) Écris un plan dans @plans/query-builder.md, et laisse-moi le valider avant de commencer l'implémentation.

## Le processus de design collaboratif

Parfois, je ne suis pas satisfait de l'implémentation suggérée. Dans ce cas, au lieu de mettre à jour le plan, je lui explique pourquoi c'est incorrect, en m'attendant à ce qu'il change son approche.

> La page devrait être une sous-route de /explore, pas de /review. De plus, elle ne devrait être accessible qu'aux utilisateurs ayant le rôle "admin".

Il arrive aussi qu'après quelques échanges, je réalise que la première approche suggérée était meilleure que celle que j'avais en tête. Ce processus est beaucoup plus efficace que si j'avais commencé à écrire le code moi-même et réalisé que mon approche était mauvaise plus tard.

C'est un peu comme discuter du plan avec un collègue à chaque fois que je m'apprête à commencer une nouvelle fonctionnalité. Plus spécifiquement, c'est comme défier mon plan d'implémentation avec un collègue junior (ou qui ne connaît pas aussi bien la codebase) qui va questionner mes choix. La dynamique me rappelle la technique du _rubber duck debugging_, où expliquer ton approche t'aide à réfléchir aux problèmes. Cependant, il ne suggérera pas d'approche radicalement différente à moins que je ne le lui demande spécifiquement, ce que je n'ai jamais essayé.

Mais le document de plan n'est pas juste un blueprint pour l'implémentation. J'ai découvert que Claude Code est beaucoup plus efficace quand il le considère comme un document vivant.

## L'approche du document vivant

L'insight clé, c'est que je ne demande pas juste à Claude Code d'écrire le plan — je lui demande aussi d'en faire un document vivant pendant l'implémentation de la fonctionnalité. Je lui demande explicitement de mettre à jour le plan durant l'implémentation parce que le processus d'implémentation, et surtout les processus de vérification de types, de linting, ou de tests, peuvent révéler que certaines parties du plan original étaient incorrectes.

J'ai développé l'habitude de lui demander de vérifier que le plan est à jour à chaque fois qu'il commit du code, en traitant les mises à jour du plan de la même façon que l'exécution des vérifications qualité.

> Assure-toi que le plan est à jour, et commite les changements.

Cette approche de document vivant résout un problème fondamental du développement avec IA : les limites de contexte. Avec un document de plan à jour, je peux commencer une nouvelle conversation et simplement demander à Claude Code de continuer l'implémentation. Ça marche généralement très bien — juste le document suffit habituellement comme contexte pour qu'une nouvelle session reprenne exactement là où la précédente s'était arrêtée.

> Continue l'implémentation documentée dans @plans/query-builder.md.

## Mon processus de revue

Quand l'implémentation commence, je revois les changements en cours de route pour m'assurer que tout progresse correctement. Cependant, si je suis satisfait du progrès, je peux le laisser continuer sans vérifier aussi souvent. Quand je revois le code final, le document de plan mis à jour me donne des indices utiles sur les choix techniques qui ont été faits durant l'implémentation.

Étonnamment, je pense que le fait que je doive planifier mes fonctionnalités soigneusement avant de me précipiter dans l'implémentation fait de moi un meilleur développeur en général. Cela arrive simplement parce que ça me force à documenter l'implémentation et à bien y réfléchir avant de me lancer dans le code. Je me retrouve aussi à expliquer mon raisonnement plus clairement parce que je dois l'écrire pour l'IA, alors qu'avec des collègues je discuterais typiquement en personne ou par appel vidéo.

## Du chaos au système

Ce workflow adresse systématiquement les problèmes fondamentaux que j'ai rencontrés avec l'approche naïve : il crée une source de vérité claire, élimine les problèmes de limites de contexte, et force une meilleure réflexion architecturale. Le document vivant devient à la fois la spécification et le journal d'implémentation, créant un enregistrement complet non seulement de ce qui a été construit, mais pourquoi et comment ça a été construit.

Le résultat est un processus de développement plus réfléchi, mieux documenté, et plus fiable.

L'IA ne sert pas juste d'implémenteur.

Elle devient un partenaire de design collaboratif.
