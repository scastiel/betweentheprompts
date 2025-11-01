---
title: "The Paradox of AI-Ready Architecture"
slug: "ai-ready-architecture"
date: 2025-10-31
draft: true
---

I realized recently that while many of my daily developer tasks don't involve AI coding, they often lay the groundwork for using AI in future features.

Last month, I spent several days implementing a copilot feature for our app at work—a system where each page registers actions and context a chatbot can rely on. The irony wasn't lost on me: I was building infrastructure to help AI assist our users, yet I barely used AI assistance myself. It eventually clicked that the work was making life easier not just for other teams, but also for AI assistants.

## The Complexity Boundary

I tried using AI for the implementation at first, but the problem was too fuzzy. It's not that I think I'm smarter than today's models—it's that using AI means clearly framing the problem and the constraints. Here, even I didn't have a sharp picture of what the end state should be.

It needed some architecture work first, and I couldn't describe the vision clearly enough for an LLM to propose a satisfying plan. There were plenty of trials and errors, with decisions that would ripple through the system. [I wrote about implementing this copilot in my company blog.](https://engineering.vasco.app/articles/building-modular-ai-copilot)

The same pattern emerged when we implemented an MCP server for one of our microservices. We handled most of it without AI, because we were sorting out authentication, architecture, and test infrastructure. The ambiguity in the problem definition and the need for a coherent vision across multiple moving parts resisted AI help—not because it was technically impossible, but because it required holding an abstract mental model that's hard to articulate.

It reminded me that I still enjoy software engineering. There's something satisfying about wrestling with these architectural challenges and building the conceptual framework that makes everything else possible.

## The Convergence Principle

When you build this kind of feature, the goal is to let other teams extend it without getting lost in the plumbing. That's especially true on a platform team, and it's just as important when more junior developers will pick it up.

Now that same mindset applies to AI assistants.

For the copilot feature, I defined a clear contract API with high-level helpers and paired it with short, focused documentation—a README that could be referenced in prompts. The same abstraction principles that help humans now help machines.

The documentation felt delightfully meta. I asked my AI assistant to draft the README, mentioning that other AI assistants would rely on it, so it should include only what they truly need. An AI writing documentation for AI consumption felt like asking a translator who speaks both languages fluently.

Once the groundwork was laid, the payoff was immediate. I added new features with AI support, and it felt straightforward. The pattern repeated with the MCP server: once the architecture was in place, it was easy to add new tools. That case was even more striking—no extra documentation needed. AI assistants were able to take existing tools as examples and add new ones. Pattern matching at its finest.

Once the abstractions were in place, the prompts themselves became simple:

> Add copilot features to this page. The goal of this page is to update user information: first name, last name, and email address. After filling information, the user can save it. The copilot should be able to update the first name, last name, and email address, then save the information. When provided only an email address, the copilot should guess the first and last names if they're included in the address.

And on the MCP side:

> Add a tool to the MCP server that will be used to update user information. It should offer the same features as the `updateUser` tRPC procedure. Add unit tests as well.

## Engineering for Mixed Intelligence

Our role as software engineers now includes helping AI assistants use our code efficiently. It's not just about big platform features, but also about daily choices—skipping clever abstractions when they make things harder for an assistant to follow.

We haven't set any formal practices around this in my team, and I haven't heard of others doing it explicitly. Still, it feels like something that could become a design habit. Should "AI consumability" sit alongside maintainability and performance as a design principle?

There's a multiplier effect at work. The framework I built makes it easy for teams to extend the copilot, which in turn lets their features be AI-assistable for end users, while also making the implementation itself AI-assistable for developers. Good engineering decisions ripple through multiple layers of AI interaction.

The human role evolves but stays essential. We're becoming architects of possibility, creating the conceptual frameworks that make code writable by others—human or machine. There's a different kind of satisfaction now: knowing your work will help others, whether humans or AIs, move faster. We're building tools for toolmakers, regardless of species.

The boundary between human and AI work isn't disappearing—it's getting clearer. Complex architectural challenges that require vision and judgment remain in human territory. But once we lay that foundation with clear contracts and solid abstractions, we end up creating the perfect environment for AI to thrive. We didn't set out to build AI-friendly systems; we set out to build good systems. It turns out they're the same thing.
