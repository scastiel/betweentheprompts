---
title: "The Paradox of AI-Ready Architecture"
slug: "ai-ready-architecture"
date: 2025-10-31
draft: true
---

I realized recently that my daily developer tasks did not all involve AI coding. But even those that don't often lead to making it easier to use AI for future features.

Last month, I spent several days implementing a copilot feature for our app at work - a complex system where each page could register actions and information to give a chatbot access to. The irony wasn't lost on me: here I was, building infrastructure to help AI assist our users, yet I barely used AI assistance myself during the implementation. It wasn't long until I realized that I had actually made things easy not only for other teams, but also and especially for AI assistants.

## The Complexity Boundary

Even though at first I tried to use AI for the implementation, I quickly realized that it was too complex a problem. Not that I think I'm smarter than today's models, but using AI requires being able to clearly formulate the problem you're trying to solve and the constraints you want to solve it in. In this case, it was hard to have a clear idea of what it would look like.

It needed architecture design first, and I wasn't able to clearly express my vision so the LLM could propose a satisfying implementation plan. There were many trials and errors, architectural decisions that would ripple through the system. [I wrote about implementing this copilot in my company blog.](https://engineering.vasco.app/articles/building-modular-ai-copilot)

The same pattern emerged when we implemented an MCP server for one of our microservices. This step was done mostly without AI, as it involved authentication issues, setting up architecture and test infrastructure. The ambiguity in the problem definition, the need for a coherent vision across multiple moving parts - these resist AI assistance not because they're technically difficult, but because they require holding an abstract mental model that's hard to articulate.

It's nice to see that I still enjoy software engineering a lot! There's something deeply satisfying about wrestling with these architectural challenges, about building the conceptual framework that makes everything else possible.

## The Convergence Principle

Usually when you develop such a feature, your goal is to provide what is necessary for other teams to expand it without having to care about technical implementation details. It is especially true if you're part of a platform team, providing the right components to make it easy to build new pages. It is also true if you expect your feature to be expanded by more junior developers.

And now, it becomes true to make it easy for AI assistants as well.

For the copilot feature, I defined a clear contract API, providing the right high-level helpers, associated with short and concise documentation - a README file that could be referenced in prompts. The same abstraction principles that help humans now help machines.

There's something delightfully meta about how I approached the documentation. To generate it, I actually used my AI assistant, mentioning that the README would be used by other AI assistants, so it should contain all and only necessary information. An AI writing documentation for AI consumption - it's like having a translator who speaks both languages fluently.

Once the groundwork was laid, the results were immediate. I added new features myself using AI, and it was pretty easy. The pattern repeated with the MCP server: once the architecture was in place, it became very easy to add new tools to the MCP. And here it was even more striking - there was no need to write any documentation. AI assistants are totally able to take existing tools as examples to add new ones. Pattern matching at its finest.

[Code example: Before/after showing how the abstraction enables AI assistance]

## Engineering for Mixed Intelligence

Our role as software engineers now includes making AI assistants use our code as efficiently as possible. It's not just about what I described with platform features, but also for daily code - like preferring to avoid certain abstractions when, although smart, they can make it more complicated for AI to deal with them.

We haven't established any practice in this matter with my team, and I don't recall hearing of other teams doing so explicitly. But I suspect it could become a new good practice, something to keep in mind when doing design. Should "AI consumability" become an explicit design principle alongside traditional concerns like maintainability and performance?

There's a multiplier effect at work here. The framework I built makes it easy for teams to extend the copilot, which in turn makes their features AI-assistable for end users, while also making the implementation AI-assistable for developers. Good engineering decisions ripple through multiple layers of AI interaction.

The human role evolves but remains essential. We're becoming architects of possibility, creating the conceptual frameworks that make code writable by others - human or machine. There's a different dimension to the satisfaction now: knowing your work will enable others, both humans and AIs, to be more productive. We're building tools for toolmakers, regardless of species.

The boundary between human and AI work isn't disappearing - it's becoming clearer. Complex architectural challenges that require vision and judgment remain firmly in human territory. But once we lay that foundation with clear contracts and good abstractions, we've accidentally created the perfect environment for AI to thrive. We didn't set out to build AI-friendly systems. We set out to build good systems. It turns out they're the same thing.
