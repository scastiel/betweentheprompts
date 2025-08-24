---
title: "Développement assisté par IA : une pièce en trois actes"
slug: "piece-trois-actes"
date: 2025-08-24
---

Les développeurs de mon équipe utilisent la fonction Tab de Cursor. Les designers utilisent des prototypes en Vibe Coding pour recueillir les retours des _stakeholders_. De mon côté, je m'appuie sur Claude Code pour planifier et construire des fonctionnalités plus conséquentes. Même technologie IA, approches complètement différentes.

La conversation autour des outils de développement assisté par IA suppose un choix binaire : soit tu utilises l'IA, soit tu ne l'utilises pas. Mais ça passe à côté de la façon dont les praticiens travaillent réellement.

Dans mon parcours avec les outils de développement assisté par IA, j'ai observé trois approches fondamentalement différentes qui émergent. Chacune a ses avantages et ses inconvénients, et convient à différentes tâches ou à différentes compétences.

## Trois approches émergentes

La première approche, le **Vibe Coding**, peut être décrite comme demander au LLM de construire une application, et itérer dessus via chat, jusqu'à ce qu'elle soit prête pour la production.

Pour moi, c'est similaire à être product manager. Idéalement, tu n'as qu'à te soucier des exigences du produit, et déléguer l'implémentation à quelqu'un d'autre.

Si j'ai besoin d'un prototype fonctionnel pour une application à laquelle je pense, je la bootstrap parfois en utilisant une approche Vibe Coding (généralement la partie UI de l'app).

Avec la deuxième approche, l'IA est ton **Copilote**. Tu demandes au LLM de construire des parties d'une application, souvent en utilisant une approche de planification, possiblement avec quelques instructions d'implémentation. Tu révises les changements, corrige manuellement ce qui est plus facile pour toi que pour le LLM, et approuves ou refuses les changements.

Tu es en gros un team lead. Tu as des développeurs junior ou de niveau intermédiaire à qui tu peux déléguer la plupart des fonctionnalités, tant que tu en sais assez sur leur travail pour en être responsable. Ça signifie planifier l'implémentation avec eux d'abord, faire de la revue de code et possiblement des tests manuels.

Mais en même temps, tu gardes le contrôle de certaines implémentations, surtout les détails les plus techniquement difficiles pour lesquels tu ne sens pas que les agents IA sont prêts.

Enfin, avec la troisième approche, les outils IA sont ton **HUD**[^hud] (ou "affichage tête haute"). Tu utilises le LLM uniquement comme un outil pour t'aider à écrire du code. C'est typiquement ce qu'offre la fonction "Tab" de Cursor, fonction que Cursor accomplit à merveille.

[^hud]: J'ai emprunté l'analogie _copilote/HUD_ à Geoffrey Litt et son blog post [Enough AI copilots! We need AI HUDs](https://www.geoffreylitt.com/2025/07/27/enough-ai-copilots-we-need-ai-huds).

{{< figure
src="/images/hud.jpg"
alt="Photo d'un HUD"
caption="Le HUD (heads-up display ou affichage tête haute) donne des informations précieuses aux pilotes, sans qu'ils aient à quitter le ciel des yeux. (Photo par Shawn d'Airdrie, Canada, CC BY-SA 2.0, via Wikimedia Commons)">}}

Tu es responsable de tout et ne peux pas déléguer beaucoup, mais tu as des outils fantastiques pour t'aider à rendre ta tâche plus efficace, robuste et agréable. Tu ne tires peut-être pas parti de toutes les fonctionnalités que l'IA offre, mais au moins tu ne peux pas lui reprocher d'aller dans la mauvaise direction.

## Modèles d'usage pour chaque approche

Il n'y a évidemment rien de mal avec aucune de ces approches, et aucune n'est meilleure que l'autre. Tout dépend de l'usage qu'on en fait.

Au travail, j'ai commencé à remarquer qu'on utilise les trois approches pour différentes tâches.

Notre équipe est composée de développeurs (principalement senior) et de designers UX/UI. Aucun de nous ne se considère comme expert avec les outils de développement assisté par IA (à peine quelques mois d'expérience), mais voici ce que j'ai remarqué dans notre façon de les utiliser :

- La plupart des développeurs utilisent l'approche HUD, c'est-à-dire la fonction "Tab" de Cursor, pour écrire du code. Parfois ils utilisent le mode agent de Cursor pour interagir via chat, mais seulement pour de petites tâches.

- Certains développeurs (moi y compris) expérimentent plus avec l'approche copilote, via Claude Code. On ne l'applique pas (encore) à toutes les tâches, mais au moins on peut planifier des fonctionnalités ou réviser le code, même si on retombe parfois sur l'approche HUD pour l'implémentation.

- Les développeurs n'utilisent pas vraiment l'approche Vibe Coding, mais les designers UI/UX adorent ça ! Ils l'utilisent pour prototyper des fonctionnalités, obtenir des retours des stakeholders ou même des utilisateurs, et itérer beaucoup plus rapidement que sur un design Figma statique.

## De nouvelles compétences à apprendre

Comme je l'ai déjà dit dans mon post [Faire de Claude Code mon meilleur partenaire de design](/fr/partenaire-design), utiliser des outils de développement assisté par IA (surtout avec les approches copilot et Vibe Coding) nécessite d'apprendre de nouvelles compétences comme la planification de fonctionnalités.

Mais en plus de ça, j'ai remarqué que gérer du code issu de Vibe Coding est aussi une compétence spécifique à apprendre. Que tu aimes l'idée du Vibe Coding ou pas, à un moment donné tu auras besoin de gérer du code "vibe", que ce soit de quelqu'un d'autre, ou de ton toi du passé qui voulait juste prototyper quelque chose rapidement.

Habituellement, les apps générées par Vibe Coding ne sont pas de qualité production, pas sans l'intervention d'un développeur. L'IA peut créer une app qui fonctionne, mais rapidement tu auras besoin de trouver quelqu'un pour la maintenir, la faire passer à l'échelle, corriger les bugs ou ajouter des fonctionnalités. Est-ce que l'IA sera prête pour ce rôle dans quelques années, mois ou semaines ? Nul ne sait…

En attendant, quand de telles situations arrivent, on doit reprendre le code, comprendre son architecture et le rendre facile à maintenir non seulement pour nous, mais aussi pour un agent IA.

## Du code Vibe Coding au code maintenable

Voici quelques exemples de problèmes courants que j'ai rencontrés lors de la transition d'un prototype vibe-codé vers du code maintenable :

- L'IA a créé de **mauvaises abstractions**, souvent trop complexes : elle essaie parfois de faire des composants trop génériques, parce qu'elle assume qu'elle/tu pourrais avoir besoin de les réutiliser. Ou elle fait passer des props de config globale à de nombreux composants, au lieu de les rendre globalement disponibles (par exemple l'URL de ton API, ou une clé API).

- L'IA **stocke l'état localement au lieu de globalement** : certains composants gèrent leur état localement alors qu'il devrait être global à l'app ; ou l'inverse, stocker les valeurs de formulaire globalement alors qu'elles pourraient appartenir uniquement au composant de formulaire.

Ce n'est pas que l'IA fait des erreurs dans ces cas. Elle a du mal à trouver la bonne approche, et sans quelqu'un pour lui dire comment bien faire les choses, elle fait juste une supposition et fait de son mieux. Je sais qu'avec l'expérience, tu peux mettre certaines règles communes dans le prompt initial (ou tout autre fichier de règles).

Au travail, quand on reçoit un prototype fonctionnel de l'équipe UX/UI, on n'essaie généralement même pas de l'utiliser tel quel. On repart de zéro, mais c'est très utile d'avoir un prototype fonctionnel de ce à quoi la fonctionnalité doit ressembler.

La raison pour laquelle on n'utilise pas le code généré pour le prototype est qu'il ne respecte pas notre stack technique complète (par exemple on utilise MobX pour la gestion d'état, là où le prototype s'appuie sur les states React classiques), et n'utilise pas les composants de notre design system (pour celui-là je suis sûr que ça ne va pas tarder à être possible).

Pour moi, ce n'est pas un problème, c'est même une bonne chose, tant que tu sais dès le début que l'objectif du prototype est d'avoir une idée du flow complet et de l'UX de la fonctionnalité, pas plus.

En plus, réimplémenter un prototype dans une app qui fonctionne n'est pas complexe. On peut parfois réutiliser quelques petits bouts de code du prototype, comme les animations.

L'IA peut même beaucoup aider à cette étape : Claude Code est bon pour comprendre une codebase, la refactoriser pour la rendre plus propre (par exemple extraire des composants UI dans différents fichiers), et la documenter (générer un README.md ou un fichier CLAUDE.md). L'idée de cette phase de refactoring n'est pas tant d'aider l'IA à comprendre (bien que je pense que ça ne peut pas faire de mal), mais plus d'aider les développeurs humains à comprendre, et guider les agents IA dans l'implémentation des prochaines fonctionnalités et la correction de bugs potentiels.

## Et maintenant ?

Les outils de développement assisté par IA en sont encore à leurs débuts, donc c'est difficile de deviner comment ils vont façonner l'avenir de l'ingénierie logicielle. Mais une chose est sûre : les trois approches que j'ai décrites dans ce post ne sont pas mutuellement exclusives.

J'ai déjà construit quelques fonctionnalités au travail en utilisant le workflow suivant :

1. Le designer crée un prototype vibe-codé, et nous le donne à nous développeurs après avoir itéré dessus avec les stakeholders (parfois, les stakeholders eux-mêmes font le prototype) ;
2. On implémente la fonctionnalité en utilisant le prototype (captures d'écran, extraits de code, etc.) en utilisant l'approche copilot avec Claude Code ;
3. On corrige les problèmes, nettoie le code et ajuste l'UI en s'appuyant sur l'extraordinaire fonction Tab de Cursor.

Ce workflow fonctionne très bien, et je peux facilement imaginer qu'il soit utilisé de plus en plus à l'avenir. Je suis même sûr que dans les mois qui viennent, on va découvrir de nouveaux endroits où l'IA peut nous aider encore plus quand on construit des fonctionnalités.

Ce qui m'excite le plus : on n'apprend pas juste de nouveaux outils.

On découvre de nouvelles façons de penser le métier lui-même.
