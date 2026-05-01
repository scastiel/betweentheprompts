---
title: "Si Claude écrit le code, qu'est-ce qui fait de moi un développeur ?"
slug: "si-claude-ecrit-le-code"
date: 2026-04-30
---

Ça fait trois mois que je n'ai pas écrit une seule ligne de code.

Je livre toujours des features. Je résous toujours des problèmes, je m'attaque à des défis d'architecture, je review des PRs. Je ne suis pas PM. Je ne suis pas tech lead avec une équipe d'agents. Je me considère toujours comme développeur. Mais je ne fais plus le même métier qu'il y a un an.

## Le dégradé, pas la falaise

Il n'y a pas eu un moment précis où je me suis dit « ce n'est plus le même métier ». C'était un processus progressif. D'abord Cursor, surtout l'autocomplétion Tab — et même ça, ça a [changé ma vision du développement avec l'IA](/deux-heures). Puis le mode agent — Codex, Claude Code, Cursor encore. J'ai [déjà écrit](/three-act-play) sur ces différentes approches. Aujourd'hui je travaille exclusivement avec Claude Code, avec des skills custom que mon équipe et moi avons construits pour la planification, le shaping, le building et le compounding.

Le changement a été assez progressif pour que je n'en mesure le poids qu'avec le recul. Si tu es quelque part sur ce spectre — tu utilises Copilot pour l'autocomplétion, ou tu as essayé le mode agent une ou deux fois — tu es sur le même dégradé. Tu n'as juste pas encore regardé en arrière.

## Ce que je fais de mes journées

Donc si je n'écris pas de code, je fais quoi ?

Avec mon équipe, on a construit un ensemble de skills Claude Code qu'on appelle le Conductor. C'est né de [mes premières expériences avec le développement guidé par un plan](/partenaire-design), et ça couvre tout notre workflow en cinq phases :

- **Research.** Je demande à Claude de faire des recherches sur la feature à construire. Il fouille dans le codebase existant, nos pages Notion, les conversations Slack, le web — tout ce qui est pertinent. Le résultat est un document Markdown avec tout le contenu de recherche, et surtout, une liste de questions ouvertes.
- **Shaping.** On cadre la feature pour s'assurer que le problème et la solution choisie sont clairs. À la fin du shaping, il ne devrait idéalement plus y avoir d'inconnues — le document doit être compréhensible par n'importe quelle personne non technique.
- **Planning.** À partir du shaping, Claude crée un plan découpé en tâches, chacune avec une description et une checklist pour la marquer comme terminée.
- **Building.** Claude exécute le plan.
- **Compounding.** Inspiré par l'idée de [compound engineering](https://every.to/guides/compound-engineering), Claude capture tout ce qui a été appris pendant le développement — bonnes pratiques, bugs corrigés, erreurs à éviter — dans un document qui nourrit le travail futur.

La phase qui m'a le plus surpris, c'est la recherche. Même quand je n'ai aucune idée par où commencer, ou quand je dois toucher à une feature construite par quelqu'un d'autre que je connais mal, la phase de recherche m'oriente. C'est un remède au syndrome de la « page blanche », pour les développeurs.

Je vais être honnête : j'étais sceptique au départ. Je suis sceptique face à tout document écrit par une IA, à cause du slop. Mais là, j'ai aimé ça tout de suite. Je me sentais guidé dans mon développement.

Et ce n'est pas que moi. La plupart de mes collègues vivent le même changement, et ceux qui ne l'ont pas encore fait ne sont pas loin derrière. On a investi du temps dans des skills partagés — le Conductor, des guidelines de review, des améliorations de workflow. C'est une transition d'équipe, pas une expérience personnelle.

## Un agent, pas une flotte

Je sais que beaucoup de gens disent qu'ils ont toujours plein d'agents qui tournent en parallèle. Mon cerveau n'est pas câblé pour ça. À chaque fois que j'ai essayé avec deux ou trois agents en même temps, j'ai fini par les confondre, perdre le fil, et faire trop de context switching. Un seul agent, ce n'est pas le plus efficace, mais c'est ce qui marche le mieux pour moi. En plus, les agents en parallèle, ça explose ton quota Claude Code à une vitesse terrifiante.

La seule exception : parfois je lance une phase de recherche pour une feature pendant que j'en construis une autre.

Certains présentent ça comme du management. Ce n'en est pas. Je ne manage pas un agent — je l'utilise comme un outil. Si je voulais vraiment filer l'analogie du « leadership », je dirais que je manage une équipe d'un seul développeur dont je surveille le travail par-dessus l'épaule toute la journée. Ce serait une façon terrible de manager une équipe.

## Désapprendre la séniorité

C'est la partie la plus difficile, et ce n'est pas celle qu'on imagine.

En tant que développeur senior, tes compétences vont au-delà du code. Tu as appris à challenger les exigences des stakeholders. Tu as appris à protéger le projet de la complexité inutile. Tu as appris à estimer combien de temps les choses prennent. Ces instincts sont ce qui fait de toi un senior.

Et ce sont exactement ceux qu'il faut désapprendre.

Tout change quand le coût d'essayer chute drastiquement. Quand le coding IA a [franchi le seuil de vitesse](/seuil-vitesse), faire un POC pour une nouvelle librairie et migrer tout le code a cessé d'être effrayant. Maintenant tu peux le faire en quelques heures.

Mon CTO est ambitieux. Il débarque un matin en proposant de changer radicalement un module entier de l'app — une réécriture complète, une nouvelle API, résoudre des problèmes qu'on avait déjà avec la précédente. Les première et deuxième fois, j'ai résisté. Je lui ai dit que c'était totalement irréaliste, que c'était une très mauvaise idée.

Il avait raison.

Un exemple : on devait migrer d'un framework d'IA à un autre. On était tous d'accord pour le faire, mais mon boss a proposé qu'on le fasse pendant un cooldown de deux semaines entre deux cycles de features. Je lui ai dit que c'était clairement impossible — en deux semaines, le mieux qu'on pouvait faire c'était un POC, puis planifier un vrai projet, probablement quatre à cinq semaines. Résultat : j'ai fait toute la migration seul en deux semaines. C'était la première fois que j'utilisais le Conductor pour de vrai.

Autre exemple : on utilisait un pipeline existant pour extraire des métadonnées d'autres systèmes pour nos clients. Ça marchait, mais ce n'était pas efficace — le pipeline n'avait pas été conçu pour ça. Mon CTO a proposé de requêter les systèmes directement via leurs APIs. J'ai résisté : on allait passer du temps qu'on n'avait pas à reimplémenter quelque chose qui marchait déjà. Il m'a convaincu qu'un POC ne coûtait pas cher. C'était vrai. En un après-midi, Claude en a construit un qui montrait que c'était plus rapide, plus facile à maintenir, et meilleur en tout point.

Maintenant j'essaie d'adopter le même état d'esprit. Par défaut, essayer plutôt qu'estimer.

## Ce qui est encore difficile

Je ne veux pas que ça sonne comme si tout était résolu. Ce n'est pas le cas.

Les moments difficiles arrivent en plein milieu du build. Claude exécute un plan, tu testes manuellement, et rien ne marche. On essaie d'atténuer ça avec un meilleur shaping et planning, mais ça arrive quand même. Le premier réflexe, c'est d'aller lire le code — ce qui marche pour les petites features. Ce que je fais de plus en plus à la place : dire à Claude ce qui ne marche pas (faire de la QA, en gros), puis lui demander d'expliquer ce qui pourrait causer le problème. Parfois je lui demande de m'expliquer comment la feature fonctionne dans le code, pour pouvoir le pointer dans la bonne direction.

Pas de recette magique. Mais c'est là qu'on réalise que les compétences de debugging construites pendant dix ans comptent encore. Tu lis moins le code, mais tu lis toujours les logs, tu demandes des tests, tu réfléchis à ce qui pourrait mal tourner.

La code review est un autre problème non résolu. Notre vélocité est trop élevée pour que chaque PR soit review par un humain. Je ne maîtrise pas toujours 100% du code de mes PRs — je ne l'ai pas écrit. Avant, j'aurais lu tout le code généré par le LLM pour me l'approprier. De plus en plus, j'ai arrêté. Je traite le code écrit par Claude comme celui d'un collègue : je veux la vision d'ensemble, pas chaque détail d'implémentation. On construit des skills de review spécifiques à notre codebase, on extrait les processus de review de nos collègues pour que Claude puisse corriger les problèmes avant même qu'une PR soit envoyée.

Aujourd'hui, le risque est gérable. Toutes nos features sont derrière des feature flags, donc le rayon d'impact d'une erreur est limité. Et on connaît toujours extrêmement bien le codebase — on sait repérer le code risqué, et on sait quelles pratiques maintenir pour garantir la qualité. Mais à long terme, je vois la tension : plus le code écrit par l'IA s'accumule, plus on risque de perdre le contrôle sur la qualité globale du codebase. C'est pour ça qu'on investit en permanence dans de meilleurs skills et guidelines — ce n'est pas un problème qu'on résout une fois, c'est un problème qu'il faut suivre en continu. Sûrement un autre post en soi.

Et puis il y a le futur. Mon métier a changé radicalement en un an, mais l'essentiel de ce changement s'est concentré sur les trois derniers mois. À quoi ça ressemble dans un an ? Aucune idée. Chaque nouveau modèle pourrait tout rebattre. Excitant et FUD en même temps.

## C'était vrai depuis le début

Alors qu'est-ce qui fait de moi un développeur si je n'écris pas de code ?

Question difficile. Pendant toute ma carrière, j'ai entendu — et même beaucoup dit — qu'être développeur, ce n'était pas principalement écrire du code. C'était résoudre des problèmes, comprendre les besoins, faire des compromis, présenter des solutions, travailler en équipe.

Il s'avère que c'était vrai depuis le début. Du moins, c'est ce que je crois aujourd'hui. Je suis aussi conscient que je dis ça en pleine transition — trois mois dans un changement qui continue de s'accélérer. Je relirai peut-être ce post dans un an en me disant que j'étais naïf sur ce qui allait suivre.

---

Certains de mes amis développeurs n'ont pas encore pris le virage de l'IA. Au mieux, ils utilisent l'autocomplétion Tab de Copilot ou Cursor. Quand je leur parle de ces changements, ils me regardent et me disent un truc du genre : « Ah, donc en fait tu t'es rendu compte que t'aimais pas coder. »

Rien ne pourrait être plus faux.

J'ai toujours aimé coder. J'ai construit plein de side projects, pris plaisir à apprendre plusieurs langages — même certains que je n'ai jamais utilisés pour construire une vraie app (coucou, Haskell !). J'ai écrit des articles de blog et même des livres sur la programmation.

Une chose est vraie : je prends peu de plaisir à écrire du code aujourd'hui. Mais c'est parce que j'ai trouvé d'autres façons de construire des applications, résoudre des problèmes et surmonter des défis techniques. Des façons plus efficaces, qui me permettent de me concentrer sur des préoccupations de plus haut niveau.

Et surtout : c'est toujours aussi fun. Probablement même plus.
