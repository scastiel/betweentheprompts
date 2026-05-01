---
title: "If Claude Writes the Code, What Makes Me Still a Developer?"
slug: "if-claude-writes-the-code"
date: 2026-04-30
---

It's been three months since I last wrote a line of code.

I still deliver features. I still solve problems, tackle architecture challenges, review PRs. I'm not a PM. I'm not a tech lead with a team of agents. I still consider myself a developer. But I am not doing the same job I was doing a year ago.

## The gradient, not the cliff

There was no single moment where I thought "this isn't the same job anymore." It was a progressive process. First Cursor, mostly the Tab autocomplete — and even that [changed my mind about AI coding](/two-hours). Then agent mode — Codex, Claude Code, Cursor again. I've [written before](/three-act-play) about these different approaches. Now I work exclusively with Claude Code, with custom skills my team and I built for planning, shaping, building, and compounding.

The shift was gradual enough that I only felt the full weight of it in retrospect. If you're somewhere on that spectrum — using Copilot for autocomplete, or you've tried agent mode once or twice — you're on the same gradient. You just haven't looked back yet.

## What I actually do all day

So if I don't write code, what do I do?

With my team, we built a set of Claude Code skills we call the Conductor. It grew out of [my early experiments with plan-driven development](/design-partner), and it covers our entire workflow in five phases:

- **Research.** I ask Claude to research the feature I need to build. It pulls from the existing codebase, our Notion pages, Slack conversations, the web — whatever's relevant. The output is a Markdown document with all the research content, and more importantly, a list of open questions.
- **Shaping.** We shape the feature to make sure the problem and the chosen solution are clear. At the end of the shaping, there should ideally be no more unknowns — the document should be understandable by any non-technical person.
- **Planning.** From the shaping, Claude creates a plan split into tasks, each with a description and a checklist of things to mark it as done.
- **Building.** Claude executes the plan.
- **Compounding.** Inspired by the idea of [compound engineering](https://every.to/guides/compound-engineering), Claude captures everything learned during development — good practices, bugs fixed, mistakes to avoid — into a document that feeds future work.

The phase that surprised me most was research. Even when I have no idea where to start, or when I need to touch a feature someone else built that I know little about, the research phase gets me oriented. It's a cure for the "blank page" syndrome, for developers.

I'll be honest: I was skeptical at first. I'm skeptical of every document written with AI, because of AI slop. But I liked this instantly. I felt guided in my development.

And this isn't just me. Most of my teammates are going through the same shift, and the ones who haven't yet are not far behind. We spent energy on making shared skills — the Conductor, review guidelines, workflow improvements. This is a team transition, not a personal experiment.

## One agent, not a fleet

I know many people say they always have a bunch of agents running in parallel. My brain is not wired for that. Every time I tried two or three agents at once, I ended up confusing them, losing track, and switching context too much. One agent is not the most efficient way, but it's the best I've found for how I work. Plus, parallel agents burn through your Claude Code quota terrifyingly fast.

The only exception: sometimes I start a research phase for one feature while I'm building another.

People sometimes frame this as management. It's not. I don't manage an agent — I use it as a tool. If I really wanted to follow the "leading" analogy, I'd say I lead a team of one developer whose work I watch over the shoulder all day. That would be a terrible way to lead a team.

## Unlearning senior

This is the hardest part, and it's not what you'd expect.

As a senior developer, your skills go beyond coding. You learned to challenge requirements from stakeholders. You learned to protect the project from unnecessary complexity. You learned to estimate how long things take. These instincts are what make you senior.

And they're exactly what you need to unlearn.

Everything changes when the cost of trying drops dramatically. When AI coding [crossed the speed threshold](/speed-threshold), making a POC for a new library and migrating all the code stopped being terrifying. Now you can do it in a few hours.

My CTO is ambitious. He'll show up one morning proposing to radically change a full module of the app — a full rewrite, a new API, solving problems we already had with the previous one. The first and second time, I pushed back. I told him it was totally unrealistic, basically a terrible idea.

He was right.

One example: we needed to migrate from one AI framework to another. We all agreed it had to happen, but my boss proposed we do it during a two-week cooldown between feature-building cycles. I told him it was definitely not possible — in two weeks, the best we could do was a POC and then plan a real project, probably four to five weeks. Result: I did the full migration alone in those two weeks. It was the first time I used the Conductor for real.

Another: we were using an existing pipeline to extract metadata from other systems for our clients. It worked, but it wasn't efficient — the pipeline wasn't designed for that. My CTO proposed querying the systems directly through their APIs. I pushed back: we'd be spending time we didn't have reimplementing something that already worked. He convinced me a POC was cheap. It was. In one afternoon, Claude built one showing it was faster, easier to maintain, and better in every way.

Now I try to have the same mindset. Default to trying, not estimating.

## What's still hard

I don't want this to sound like everything is solved. It's not.

The hard parts hit mid-build. Claude executes a plan, you test manually, and nothing works. We try to mitigate this with better shaping and planning, but it still happens. The first reflex is to go read the code — which works for small features. What I do instead, more and more: tell Claude what's broken (basically QA), then ask it to explain what might be causing it. Sometimes I ask it to walk me through how the feature works in the code, so I can point it in the right direction.

No magic recipe. But this is where you realize the debugging skills you built over ten years still matter. You don't read the code as much, but you still read the logs, ask for tests, think about what could go wrong.

Code review is another unsolved problem. Our velocity is too high for every PR to get a human review. I don't always master 100% of the code in my PRs — I haven't written it. I used to read all the LLM-generated code to make it my own. Increasingly, I've stopped. I treat code written by Claude the way I'd treat code from a colleague: I want the high-level picture, not every implementation detail. We're building review skills specific to our codebase, extracting our colleagues' review processes so Claude can catch issues before a PR even goes out.

Today, the risk is manageable. All our features ship behind feature flags, so the blast radius of a mistake is limited. And we still know the codebase extremely well — we're good at spotting risky code, and we know which practices to enforce to maintain quality. But long-term, I see the tension: the more AI-written code accumulates, the more control we could lose over overall codebase quality. That's why we keep investing in better skills and guidelines — it's not a problem you solve once, it's one you have to keep up with. Probably another post in itself.

And then there's the future. My job changed dramatically in the past year, but most of that change landed in the last three months. What it looks like a year from now? No idea. Any new model could reshuffle everything. Exciting and FUD at the same time.

## It was true the whole time

So what makes me a developer if I don't write code?

Tough question. For my entire career, I heard — and even said, a lot — that being a developer wasn't mostly about writing code. It was about solving problems, hearing requirements, making compromises, presenting solutions, working as a team.

Turns out it was true the whole time. At least, that's what I believe today. I'm also aware I'm saying this mid-transition — three months into a shift that's still accelerating. I might read this post in a year and think I was naive about what was coming next.

---

Some developer friends of mine haven't taken the AI turn yet. At best they use Tab autocomplete in Copilot or Cursor. When I tell them about these changes, they look at me and say something like: "Oh, so you realized you actually didn't like coding."

That couldn't be more wrong.

I've always liked coding. I built many side projects, took pleasure in learning several languages — even some I have never used to build an actual app (hello, Haskell!). I wrote blog posts and even books about programming.

One thing is true: I take little pleasure in writing code now. But it is because I found other ways to build applications, solve problems, and overcome technical challenges. More efficient ways, that let me focus on higher-level concerns.

And more important: it is still a lot of fun. Probably even more.
