---
name: update-jammin-games-website
description: Update, redesign, validate, or publish the Jammin Games static website. Use for wording, content, layout, styling, assets, metadata, responsive behavior, or design implementation in jammin.games; do not use for Gunship game code or general marketing planning with no website change.
---

# Update the Jammin Games website

Work in the canonical `jammin.games` checkout. Read its `README.md`, inspect the affected pages and shared CSS, and preserve the site's existing static HTML/CSS/JavaScript approach unless the request clearly requires otherwise.

## Choose the work path

Classify the requested change after reading its complete source conversation. Treat an author's description of the work as a useful hint, not a substitute for inspecting the actual scope.

- **Minor:** wording, links, metadata, isolated content, or a small established-pattern visual adjustment. Implement directly with Cursor Grok 4.6 high or native Grok 4.6 high.
- **Major:** a new or substantially redesigned page, broad visual-system work, shared navigation or responsive behavior, a design implementation, or a change requiring material architecture or product judgment. Before editing, run the one-round Fable/Astra planning exchange below. Grok owns the final decision and implementation; accept only corrections supported by the repository and request.

Do not invoke the planning pair for a minor change. Major implementation waits if either required planner is unavailable.

For one major-work planning round:

1. Start fresh read-only sessions for Cursor `claude-fable-5-1-high` with `default` effort and Codex `gpt-6-astra` with `high` effort. Give both the same request and verified repository evidence, and ask each for an independent plan.
2. Grok combines the supported parts into one candidate.
3. Resume the Fable session once to challenge that candidate.
4. Resume the Astra session once to integrate only supported corrections.
5. Grok verifies disagreements against the repository, records the final plan, and executes it.

## Implement

1. Confirm the checkout is clean and fast-forward it from origin before editing. Never discard unrelated changes.
2. Read the complete task conversation. Current `core-team` human messages are authoritative; agent summaries are context only.
3. Reuse existing page structure and `css/styles.css`. Prefer a small direct edit over new tooling, dependencies, frameworks, or abstractions.
4. For visual work, run the local server and inspect the affected desktop and narrow/mobile layouts. Capture screenshots when they materially help human review.
5. Validate links, HTML structure, and the requested behavior proportionately. Do not manufacture a large test system for this static site.
6. Before each Discord progress post, fetch messages newer than the last Discord snowflake you read. Incorporate current-core corrections before continuing.
7. Immediately before committing or pushing and again before the final Discord post, run the exact source-verification command supplied by the launcher. Stop without further publication if it fails.
8. Commit the scoped website changes. Pull with rebase, resolve only understood conflicts, rerun the relevant checks, and push. Never force-push.
9. Report what changed, the commit, validation, and any remaining human review in the source Discord thread using concise plain English.

Keep secrets, credentials, unpublished private material, and lengthy internal reasoning out of Discord and the website.
