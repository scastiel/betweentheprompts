---
name: translate-to-french
description: Translate the current or specified blog post to French, maintaining authenticity and natural flow for native French speakers.
---

Translate the specified blog post (or the most recently discussed one) from English to French.

Translation approach:
- Prioritize authenticity over literal accuracy — adapt idioms and cultural references, don't just convert words
- Keep English tech terms that are standard in French tech discourse (GitHub, pull request, API, workflow, prompt engineering, debugging, etc.)
- Use 'tu' form for direct reader address unless the original is very formal
- Maintain all Hugo frontmatter, shortcodes, markdown formatting, and code blocks exactly as-is
- Translate concepts rather than words when it improves clarity
- Match the original tone — if it's conversational, keep it conversational

Output the complete translated file content, ready to save. The translated file should be placed in the same `content/` directory with a `-fr` suffix or in a `content/fr/` subdirectory, matching the existing French content structure if any exists.
