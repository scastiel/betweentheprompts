# Interview — Not the Same Job

## Round 1
**Q:**
1. Was there a specific moment — a task, a day, a conversation — where you first thought "this isn't the same job anymore"? What were you doing?
2. If you compare a typical workday now to a typical workday a year ago, what's the most obvious difference in how you spend your time?
3. When you say "not the same job," is that exciting, unsettling, or both?

**A:**
1. It was more a progressive process: first when I started using Cursor and I mostly used Tab feature, then using agent mode in Codex, Claude Code or Cursor again, and now using exclusively Claude Code with custom skills for planning, shaping, building and compounding.
2. The main difference is that I don't write code anymore. I still deliver features, solve problems, tackle architecture challenges, even review code (LLM or other PRs), but it's been three months that I haven't written a line of code myself. Yet I still consider myself a developer; I'm not a PM, I'm not a tech lead with a team of agents.
3. Definitely exciting, because I'm learning new stuff everyday, and feel I can accomplish so much more than before. But at the same time, a bit weird not to know what I'll do in another year.

## Round 2
**Q:**
1. If you don't write code, what do you actually do all day? Walk me through what a productive morning looks like now — what are you typing, reading, deciding?
2. You mention "planning, shaping, building and compounding" as custom skills. That vocabulary sounds deliberate — when did you start thinking about your work in those terms? Did naming those phases change how you approach things?
3. "I'm not a tech lead with a team of agents" — what makes it different from managing a team? Because from the outside, "reviewing AI-generated code and directing what gets built" sounds a lot like leading.

**A:**
1 & 2: With my team, we created a skill named 'Conductor' with a set of subskills that reflect our workflow:
a. Research: I ask Claude Code to make a research on the feature I need to build. Research can extract info from the existing code, from our Notion pages, from Slack, from the web (if using a new library or infra feature for instance). The result is a Markdown document with all the research content, and more importantly a list of open questions.
b. Shaping: once the research is done, the next step is to shape the feature to make sure the problem we want to solve is clear, as well as the solution we chose to implement. At the end of the shaping, there should ideally be no more unknowns. The shaping document (still Markdown) should be understandable by any nontechnical person (i.e. stakeholders).
c. Planning: this is where from the shaping, we ask Claude to create a plan, split into tasks. Each task should contain a description of what needs to be done (usually the research phase identified already the places in the code to update, which services or modules), and a checklist of things to mark the task as done.
d. Building: this is when Claude executes the plan.
e. Compounding: after building (and usually after manual testing and using other skills for code review), Claude creates or updates a compound document that contains everything that was learned during the feature development. It can be good practices discovered, existing bugs fixed, mistakes made and how to avoid them, etc. The compound document is supposed to be used on later features. (At the end of a project, we usually consolidate all compound documents into a more condensed one to avoid obvious scalability issues.)

3: First, I usually work with only one agent. I know many people say they always have a bunch of agents running, but my brain is not wired for that. Each time I tried to work with two or three parallel agents, I ended up making mistakes, confusing agents, losing track, and switching context too much. One agent might not be the most efficient way, but it is still the best I found for my usage (plus, when I tried running several agents at the same time, my Claude Code quota exploded way too quickly). The only exception: sometimes I start a research phase for a feature while working on another one.
Secondly, I don't feel I'm _managing_ an agent. I execute it as a tool. If I really wanted to follow the 'leading' analogy, I could say that I lead a team of one developer, whose work I watch over the shoulder all day. That would be a terrible way to lead a team.

## Round 3
**Q:**
1. You described a five-phase workflow that looks very structured. A year ago, when you were writing code by hand, did you have anything like that structure — or is that something you built specifically because you needed it once the agent was doing the coding?
2. You mentioned reviewing code — LLM-generated or other PRs. Has what you look for in a code review changed? Do you read AI-generated code differently than you'd read a colleague's PR?
3. What's the hardest part of this new way of working — the thing that's still uncomfortable or that you haven't figured out yet?

**A:**
1. It is something we built about three months ago. We wanted to start using Claude Code not only for writing code, but also to help us plan better our development workflow. I was a bit skeptical at first (as I was with every document written with AI, because of AI slop), but it turns out I liked it instantly. I felt guided in my development. Even when sometimes I have something to build and I have no idea where to start, or even when I need to update a feature built by someone else that I know little about, the research phase will help me understand what it is about. It's like a solution to the 'blank page' syndrome, for developers.

2. I feel we have not nailed code review in an agentic world yet. We're all aware that it is not realistic anymore to expect each PR to be reviewed by another developer. Our velocity is too high, plus I don't always master 100% of the code of my PRs (because I haven't written it). A while ago, I would have read all the LLM generated code of my PRs, to make it my own. More and more I stopped doing that, and consider the code written by Claude the same as I would consider the code by another colleague: I want to understand the high-level overview, but not the technical implementation details. Although we haven't done it enough yet I think, we start improving our code review skills, to make them relevant specifically with our code base, and our practices. Some of my colleagues still take time to review my code for parts I am out of my comfort zone (backend services, infra), but then we try to extract their review process into skills to make Claude able to fix what it can even before sending the PR for review. More and more I think that PRs are not the best media for code reviews anymore. I don't have ideas about it, and it is another topic, but worth thinking about maybe for another post.

3. Unlearning what you know. As a senior developer, your skills are not only about coding: you learned how to challenge the requirements you get from stakeholders, you learned to protect the project you're working on from too complex requirements, and you learned how to estimate the necessary time to build something. Everything changes with AI: making a POC for using a new library and migrating all the code could be very scary a few months ago; but maybe now you can do it in a few hours with AI. My boss and CTO is a very ambitious person, who can come to you one morning telling you he'd like us to radically change a full module of the app that would require a full rewriting, learning how to use a new API, solving problems we had already with the previous one, etc. The first and second time, I may have reacted by pushing back, telling him that it was totally unrealistic in the given amount of time, and that it was basically a terrible idea. But as most of the time, he was right, convinced me to at least try with Claude, and it was always a success. Now I try to have the same mindset.

## Round 4
**Q:**
1. You said you "still consider yourself a developer." What makes you a developer if it's not writing code? What's the core of the identity that survived the transition?
2. The CTO story is great — you pushed back, he was right, and now you've recalibrated. Can you give a concrete example of one of those moments? What was the request, what was your gut reaction, and what actually happened when you tried it with Claude?
3. You mentioned the "blank page syndrome" being solved by the research phase. Has this changed which kinds of work feel hard? Like, if the blank page isn't the scary part anymore, what is?

**A:**
1. This is a tough one. For all my career I heard (and even said a lot) that being a developer was not mostly about writing code. It was about solving problems, technical or product-related, hearing requirements, making compromises, presenting solutions, working as teams, etc. Today I realize it more and more that it was true the whole time.

2. Two examples:
- First: migrating from one AI framework to another. We were not satisfied with the one we had, and we identified a great challenger; we all agreed we had to migrate. But my boss proposed we did it during a two-week period (that we call cooldowns) between feature-building cycles. At first I told him it was definitely not possible, that in two weeks the best we could do was to make a POC, and plan an actual project that would probably take four to five weeks building. Result: I did the full migration by myself during the two weeks, and everything went as smoothly as it could have. Turns out it was the first time I used the conductor skills for real, to plan the whole migration and assist me during.
- Second: to extract some information from other systems for our clients, we used to rely on a pipeline we already had built for our product. It worked okay, but was not really efficient because this is not what the pipeline had been designed for (we needed to extract metadata, which is a tiny part of what the pipeline had to deal with). So my CTO proposed us to query the systems directly, using their respective APIs. Again I pushed back, because it meant spending time we didn't have reimplementing something we had already. He convinced me that doing a POC was cheap, and it was: in one afternoon Claude had built a POC showing us it was more efficient, easier to maintain, and offered many advantages.

3. The hard parts arrive in the middle of building a feature. When Claude Code executed a plan, and you test manually, and nothing works as expected. This is a scenario we try to mitigate by caring a lot about shaping and planning features, but it still happens. In these scenarios, the first reflex can be to go have a look at the code; which can work for small features. What I try to do more and more: first tell Claude what doesn't work (basically doing QA), then ask it to explain me what the source of the issue can be. Sometimes, I even ask it to explain me how the feature works in the code; it can help me direct it to find the issue source. There is no magic recipe here, but this is where you understand that the debugging skills you learned for the past 10 years are still relevant. Maybe you don't read the code as much, but you still have to read the logs, ask for tests, etc.

## Round 5 (unprompted — closing thought from Sebastien)

I have some developer friends who haven't taken the AI-turn (yet). At best they use a bit the Tab autocomplete feature of Copilot or Cursor. When I tell them about these changes, they look at me weirdly and tell me something like "oh, you realized you actually didn't like coding". That couldn't be more wrong! I've always liked coding: I built many side projects, took pleasure in learning several languages even some I have never used to build an actual app (hello, Haskell!), wrote blog posts and even books about programming, etc. One thing is true: I take little pleasure in writing code now; but it is because I found other ways to build applications, solve problems and overcome technical challenges! More efficient ways, that let you focus on higher-level concerns. And more important: it is still a lot of fun, and probably even more!

## Round 6 (filling gaps)
**Q:** Three things from the outline flagged as missing: (1) the "what will I do in another year" uncertainty, (2) code review beyond PRs, (3) whether teammates are going through the same shift.

**A:**
1. My job has changed so much in the last year, but most of the changes happened in the last three months, so it is hard to know what it will become in another year. It will also depend on the technical improvements that'll happen in the industry. Any new Claude model could reshuffle everything. Exciting and FUD (fear-uncertainty-doubt) at the same time.

2. Yeah, if we want to maintain the quality of our application code, I think we'll still need some human review, but it can't stay at the PR level. Maybe architecture review at the end of a project...

3. Most of them are going through the same shift, and the ones that do not are not far behind. We spent energy on making shared skills (the conductor ones), improving our workflows with agents, establishing guidelines for Claude Code to use during code review, etc.
