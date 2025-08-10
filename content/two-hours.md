---
title: "Two hours with Cursor changed my mind about AI coding"
slug: "two-hours"
date: 2025-08-09
draft: false
---

For the first time in my career, I have absolutely no idea what the software engineer job will look like in five or ten years.

I've always loved coding. All of it. I love making apps from scratch as much as understanding big, complex codebases. I take pleasure in taking a complex problem and finding a simple implementation, or taking a complex piece of code and making it simpler.

This love for the craft shaped my initial resistance to AI coding tools.

## Early Hype and Skepticism

It's not that I thought "I don't and will never need this." I was already a daily ChatGPT user for non-coding tasks. But I believed we were far from actually usable tools for programming. I thought it was just another hype.

My bias was reinforced by these stories about junior developers or even non-developers writing full apps with AI. "I built a todo list with one prompt only," they'd say. This made me think these people had no idea what an actual app looks like. Building software isn't just creating the first draft of a functional UI.

A couple of times, I tried GitHub Copilot, and my skepticism seemed justified. I was disappointed. The suggestions were sometimes irrelevant, and it took me more time to fix them than the time I gained from the relevant ones.

More importantly, I felt less productive and enjoyed my job less. I lost my flow state. Instead of thinking about the big picture, I was more focused on checking the generated code and fixing mistakes.

## My Turning Point

Then two friends told me to give Cursor a shot. Like, seriously. There was huge hype around Cursor at the time, so I thought it was good timing. I decided to try it for two hours, but I set myself a challenge: if I wanted to have a clear opinion about Cursor, I had to go all in with it.

For those two hours, I used exclusively the agent mode. I didn't write any code myself. I worked on basic features I needed to add to the app I work on at my job.

Holy shit.

I was blown away.

Cursor was able to deal with the complex codebase. I could tell it "take this file as an example," and the result was mostly okay. It was able to generate very relevant tests.

The agent mode wasn't perfect—it sometimes made assumptions it shouldn't have. But instead of fixing the code myself, I explained why it was wrong and gave it more precise instructions[^1]. When I told it "You misunderstood, it should..." and provided clearer guidance, I was impressed at how it could understand the problem and update the code accordingly.

## Discovering New Craft Skills

Today, I use both Claude Code and Cursor daily. Cursor's "Tab" feature is still the best time saver and the feature I use most. In parallel, I let Claude Code work on bigger features, but I document them thoroughly before letting it work for some time.

I've realized that writing precise prompts is actually very similar to writing code. You learn patterns, good practices, and ways to check that your prompts are correct. It's the same as when you learn programming—eventually you need to learn design patterns, testing, collaboration techniques, etc.

The difference is that using AI tools is so recent that there aren't many up-to-date resources. There's a lot of junk and outdated techniques. I try to maintain a document with good practices I've identified and tested, and we share them with colleagues.

## Still a Software Engineer

I'm still a Software Engineer, and I don't think that will change. Our role is still to make good software. No matter how good AI tools become, they're still just tools. Very good tools that you can delegate tasks to.

I give the agent tasks that I could do without thinking too much but that would take me a lot of time—very systematic tasks that a junior developer could do with the right explanations. When possible, I choose tasks that can be tested automatically through type checking, linting, or unit tests.

The best example I've found for the agent was migrating a huge app from one UI library to another. It's not hard work, but it takes a huge amount of time and is completely uninteresting. Claude Code does a pretty good job at this kind of migration.

Even when the agent writes good code, it takes expertise to ensure that it's actually good, and even more expertise to fix mistakes or debug when there are issues.

## The Uncertainty Ahead

I thought that using AI meant sacrificing my love for crafting code in exchange for productivity. Now I'm pretty sure I was wrong. I love interacting with Cursor, and even more with Claude Code.

So yes, I have absolutely no idea what my job will look like in five or ten years. It's both very exciting and gives me some anxiety.

AI tools are so recent that anyone starting with them today could probably gain up-to-date skills in a matter of weeks. Looking back, it's not clear whether my initial skepticism was actually reasonable given what the tools were like earlier, or whether I was missing something important.

What I do know is that I'm still very early in my journey of using AI tools, and I learn new things every day. The craft is evolving, and I'm evolving with it.

[^1]: I was inspired by John Rush's post [Building a Personal AI Factory](https://www.john-rush.com/posts/ai-20250701.html)
