# Still a Developer (I Think)

## Angle
The job title says "developer" but the job itself has quietly become something else — not management, not product, but a new kind of technical work where the hardest part isn't learning new tools, it's unlearning the instincts that made you senior.

## Hook
Three months without writing a single line of code. Still shipping features, still solving architecture problems, still reviewing PRs. Still a developer — but not doing the same job as a year ago.

## Sections

### 1. The Gradient, Not the Cliff
**Purpose:** Show this wasn't a sudden switch but a progressive shift, so readers who are somewhere on the spectrum can place themselves.
**Key points:**
- Started with Cursor Tab completions, moved to agent mode (Codex, Claude Code, Cursor), now exclusively Claude Code with custom skills
- The progression was gradual enough that the full weight of the change only hit in retrospect
**Quotes/phrases to use:** "it was more a progressive process"

### 2. What I Actually Do All Day
**Purpose:** Replace the abstract "I don't write code" with a concrete picture of the new workflow — the Conductor system.
**Key points:**
- The five phases: Research, Shaping, Planning, Building, Compounding
- Research pulls from code, Notion, Slack, the web — produces a doc with open questions; solves the "blank page syndrome" for developers
- Shaping produces a document any non-technical person could understand — no more unknowns
- Planning splits work into tasks with checklists
- Building is Claude executing the plan
- Compounding captures what was learned — good practices, bugs found, mistakes to avoid — and feeds future work
- This workflow was built specifically for the AI era, not inherited from before; was skeptical at first (AI slop concern) but liked it instantly — "I felt guided in my development"
- Not a solo journey: team invested in shared skills (the Conductor), shared workflows, shared review guidelines — most teammates going through the same shift, the rest not far behind
**Quotes/phrases to use:** "it's like a solution to the 'blank page' syndrome, for developers"; "I felt guided in my development"

### 3. One Agent, Not a Fleet
**Purpose:** Push back against the "swarm of agents" narrative and explain why this isn't management.
**Key points:**
- Works with one agent at a time — parallel agents led to mistakes, confusion, context-switching, and blown quotas
- Exception: sometimes starts a research phase for one feature while building another
- Doesn't feel like managing — "I execute it as a tool"
- The management analogy breaks down: "I lead a team of one developer, whose work I watch over the shoulder all day. That would be a terrible way to lead a team."
**Quotes/phrases to use:** "my brain is not wired for that"; "I execute it as a tool"; the "watching over the shoulder" line

### 4. Unlearning Senior
**Purpose:** The core tension — AI doesn't just add new skills, it invalidates instincts you spent years building. This is the hardest part.
**Key points:**
- Senior developer instincts: challenge requirements, protect the project from complexity, estimate conservatively
- These instincts become wrong when the cost of trying drops dramatically
- The CTO stories: framework migration estimated at 4-5 weeks, done in 2 weeks; API extraction POC built in one afternoon
- "The first and second time, I may have reacted by pushing back… But he was right"
- Now tries to adopt that same mindset — default to trying instead of estimating
**Quotes/phrases to use:** "it was definitely not possible"; "doing a POC was cheap, and it was"; "he was right, convinced me to at least try with Claude, and it was always a success"

### 5. What's Still Hard
**Purpose:** Honesty about the rough edges — this isn't a utopia post.
**Key points:**
- The hard part is mid-build: when Claude executes the plan and manual testing reveals nothing works as expected
- Mitigation: invest heavily in shaping and planning, but it still happens
- Debugging approach has changed: first do QA (tell Claude what's broken), then ask Claude to explain what the issue could be, sometimes ask it to explain how the feature works in the code
- Debugging skills from 10 years are still relevant — you still read logs, ask for tests
- Code review is unsolved: velocity too high for human review of every PR, stopped reading all LLM code line-by-line, starting to treat AI code like a colleague's code (understand high-level, not every detail), building review skills into Claude. Human review still needed for quality, but probably at the architecture level at end of project, not per-PR. (Flag as future post topic.)
- The future is genuinely unknown: most changes happened in the last three months, any new model could reshuffle everything. Exciting and FUD at the same time.
**Quotes/phrases to use:** "this is where you understand that the debugging skills you learned for the past 10 years are still relevant"; "I consider the code written by Claude the same as I would consider the code by another colleague"; "exciting and FUD at the same time"

### 6. It Was True the Whole Time
**Purpose:** The identity answer — what makes you a developer if not code.
**Key points:**
- "For all my career I heard that being a developer was not mostly about writing code" — solving problems, hearing requirements, making compromises, presenting solutions, working as teams
- "Today I realize it more and more that it was true the whole time"
- Brief bridge to the closing
**Quotes/phrases to use:** "it was true the whole time"

## Closing
**Purpose:** Address the skeptics directly and end on the emotional truth — this is more fun, not less.
**Key points:**
- Friends who haven't taken the AI turn say "oh, you realized you actually didn't like coding"
- Rebuttal: side projects, multiple languages (hello, Haskell!), blog posts, books about programming
- The honest admission: "I take little pleasure in writing code now"
- The reframe: found other ways to build, solve, and overcome — more efficient, higher-level, and still a lot of fun
**Quotes/phrases to use:** "that couldn't be more wrong!"; "hello, Haskell!"; "it is still a lot of fun, and probably even more!"

## What's Missing
All three gaps are now filled:
- ~~Uncertainty about the future~~ → Added to Section 5 ("What's Still Hard"): most changes happened in the last three months, any new model could reshuffle everything, exciting and FUD at the same time
- ~~Code review beyond PRs~~ → Brief mention in Section 5: human review still needed for quality, but maybe at the architecture level at end of project, not PR level
- ~~Team experience~~ → Woven into Section 2: this isn't a solo journey — shared skills, shared workflows, shared guidelines
