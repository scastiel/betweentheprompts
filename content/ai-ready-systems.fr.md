---
title: "Concevoir des systèmes prêts pour l’IA : faciliter le travail des assistants"
slug: "systemes-ai-ready"
date: 2025-11-02
---

La plupart de la valeur tirée de l’IA ne vient pas d’écrire du code d’IA, mais d’écrire du code que l’IA peut utiliser. Quand ton système expose des contrats clairs et des exemples, les assistants peuvent l’étendre en toute sécurité.

Construire un copilote et un serveur MCP dans mon travail me l’a rendu évident : après avoir ajouté un contrat d'API et une documentation courte et ciblée, « écrire un prompt » a remplacé « écrire une spec » pour beaucoup de changements. Voilà pourquoi ça marche, et les patterns qui rendent ça répétable.

## La frontière de la complexité

J’ai d’abord essayé d’utiliser l’IA pour l’implémentation, mais le problème était trop flou. Ce n’est pas que je me pense plus malin que les modèles actuels — c’est qu’utiliser l’IA implique de cadrer clairement le problème et ses contraintes. Là, même moi je n’avais pas une image nette de l’état final souhaité.

Il fallait d’abord du travail d’architecture, et je ne pouvais pas décrire la vision assez précisément pour qu’un LLM propose un plan satisfaisant. Il y a eu pas mal d’essais-erreurs, avec des décisions qui allaient se répercuter dans tout le système. [J’ai raconté l’implémentation de ce copilote sur le blog de ma boîte.](https://engineering.vasco.app/articles/building-modular-ai-copilot)

Le même pattern est apparu quand on a implémenté un serveur MCP pour l’un de nos microservices. On a géré la plupart sans IA, parce qu’on devait définir l’authentification, l’architecture et l’infra de tests. L’ambiguïté de la définition du problème et le besoin d’une vision cohérente à travers plusieurs pièces mobiles résistaient à l’aide de l’IA — non pas parce que c’était techniquement impossible, mais parce que ça demandait de maintenir un modèle mental abstrait difficile à expliciter.

Ça m’a rappelé pourquoi j’aime encore l’ingénierie logicielle : il y a quelque chose de satisfaisant à se coltiner ces défis d’architecture et à construire le cadre conceptuel qui rend tout le reste possible.

## Le principe de convergence

Quand tu construis ce type de fonctionnalité, l’objectif est de permettre aux autres équipes de l’étendre sans se perdre dans la plomberie. C’est particulièrement vrai en équipe plateforme, et tout aussi important quand des développeurs plus juniors vont s’en emparer.

Cette même façon de penser s’applique désormais aux assistants IA.

Pour le copilote, j’ai défini une API contractuelle claire avec des helpers de haut niveau et je l’ai accompagnée d’une documentation courte et ciblée — un README référencable dans les prompts. Les mêmes principes d’abstraction qui aident les humains aident maintenant les machines.

La documentation avait un côté délicieusement méta. J’ai demandé à mon assistant IA de rédiger le README, en précisant que d’autres assistants IA s’y fieraient, donc qu’il ne devait contenir que l’essentiel. Une IA qui écrit de la doc pour consommation par des IA, c’est un peu comme demander à un traducteur bilingue.

Une fois les fondations posées, le retour sur investissement a été immédiat. J’ai ajouté de nouvelles fonctionnalités avec le support de l’IA, et c’était fluide. Le pattern s’est répété avec le serveur MCP : une fois l’architecture en place, ajouter de nouveaux outils était facile. Ce cas était même plus frappant — pas besoin de doc supplémentaire. Les assistants IA ont pu prendre les outils existants comme exemples et en ajouter de nouveaux. Du pattern matching dans toute sa splendeur.

Une fois les abstractions en place, les prompts eux-mêmes sont devenus simples :

> Ajoute des fonctionnalités de copilote à cette page. Le but de cette page est de mettre à jour les informations utilisateur : prénom, nom et adresse e‑mail. Après avoir rempli les informations, l’utilisateur peut les enregistrer. Le copilote doit pouvoir mettre à jour le prénom, le nom et l’adresse e‑mail, puis enregistrer les informations. Lorsqu’on ne fournit qu’une adresse e‑mail, le copilote doit deviner le prénom et le nom s’ils sont inclus dans l’adresse.

Et côté MCP :

> Ajoute un outil au serveur MCP pour mettre à jour les informations utilisateur. Il doit offrir les mêmes fonctionnalités que la procédure tRPC `updateUser`. Ajoute aussi des tests unitaires.

## Ingénierie pour intelligence mixte

Notre rôle d’ingénieurs logiciels inclut désormais d’aider les assistants IA à utiliser notre code efficacement. Ce n’est pas seulement pour les grosses features de plateforme, mais aussi pour les choix du quotidien — éviter les abstractions trop malines quand elles rendent les choses plus difficiles à suivre pour un assistant.

On n’a pas défini de pratiques formelles autour de ça dans mon équipe, et je n’ai pas entendu d’autres le faire explicitement. Pourtant, ça ressemble à quelque chose qui pourrait devenir une habitude de design. La « compatibilité IA » devrait‑elle figurer aux côtés de la maintenabilité et des performances comme principe de conception ?

Le rôle humain évolue mais reste essentiel. On devient des architectes des possibles, créant les cadres conceptuels qui rendent le code « écrivable » par d’autres — humains ou machines. La satisfaction est différente maintenant : savoir que ton travail aidera d’autres, humains comme IA, à aller plus vite. On construit des outils pour des faiseurs d’outils, quelle que soit l’espèce.

La frontière entre travail humain et travail de l’IA ne disparaît pas — elle s’éclaircit. Les défis architecturaux complexes, qui demandent vision et jugement, restent du domaine humain. Mais une fois qu’on a posé les fondations avec des contrats clairs et des abstractions solides, on crée l’environnement idéal pour que l’IA prospère.

On ne cherchait pas à construire des systèmes « IA‑friendly ».

On cherchait à construire de bons systèmes.

Il se trouve que c’est la même chose.
