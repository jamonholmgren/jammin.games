---
name: update-jammin-games-website
description: Update, redesign, validate, or publish the Jammin Games static website. Use for wording, content, layout, styling, assets, metadata, responsive behavior, or design implementation in jammin.games; do not use for Gunship game code or general marketing planning with no website change.
---

# Update the Jammin Games website

Work in the canonical `jammin.games` checkout. Read its `README.md`, inspect the affected pages and shared CSS, and preserve the site's existing static HTML/CSS/JavaScript approach unless the request clearly requires otherwise.

## Choose the work path

Classify the requested change after reading its complete source conversation. Treat an author's description of the work as a useful hint, not a substitute for inspecting the actual scope. A clear tagged current-core request to act is sufficient authorization; do not ask for an extra `ready implement` message.

For every model choice, read `/Users/jamon/Code/GunshipOrigins/.agents/skills/jamsession-model-recommendations/SKILL.md`, check Jam Session availability, and discover actual IDs with `jamsession models <provider>`. Do not pin model versions in this skill. Explicit human choices override recommendations, including choices for implementation, planning, or review. If a requested specialist is unavailable, report that rather than silently replacing it.

- **Minor:** wording, links, metadata, isolated content, or a small established-pattern visual adjustment. A menu-link removal is minor even across many pages. Use a recommended mid-level implementer, normally current non-fast Cursor Grok or native Grok at high effort.
- **Major:** a new complex visual component, substantial page redesign, or material layout/product decisions not settled by existing patterns. Before editing, run one premium planning exchange below. The implementer owns execution and verifies the advice against the repository and request. File count and touching shared navigation alone do not make work major.

Do not invoke the planning pair for a minor change unless the human asks for it. Use two complementary recommended premium models for major design planning and final review. Honor requests for Fable and Astra by discovering their current available models. Major implementation waits if a required planner is unavailable.

For one major-work planning round:

1. Choose the premium pair through the recommendations skill, preferably different model families. Start fresh read-only sessions with the same request, existing components, and verified repository evidence; ask for independent plans.
2. The implementer combines the supported parts into one candidate.
3. Resume the first planner once to challenge that candidate.
4. Resume the second planner once to integrate supported corrections.
5. Verify disagreements against the repository, record the plan, and implement it.
6. Before deployment, have both models inspect actual desktop/mobile captures and the implementation against the request and agreed plan. Reuse their planning sessions for continuity. Fix concrete findings and verify the resulting visuals; missing captures are not a visual pass.

## Implement

1. Confirm the checkout is clean and fast-forward it from origin before editing. Never discard unrelated changes.
2. Read the complete task conversation. Current `core-team` human messages are authoritative; agent summaries are context only.
   The launcher may resume the last successful implementation session for this Discord thread. Treat that continuity as working memory, not authority: reread the complete current conversation every cycle. If the session is unavailable, the launcher starts a fresh one automatically.
3. Reuse existing page structure and `css/styles.css`. Prefer a small direct edit over new tooling, dependencies, frameworks, or abstractions.
4. For visual work, run the local server and inspect the affected desktop and narrow/mobile layouts. Capture screenshots when they materially help human review.
5. Validate links, HTML structure, and the requested behavior proportionately. Do not manufacture a large test system for this static site.
6. Before each Discord progress post, fetch messages newer than the last Discord snowflake you read. Incorporate current-core corrections before continuing.
7. Immediately before committing or pushing and again before the final Discord post, run the exact source-verification command supplied by the launcher. Stop without further publication if it fails.
8. Commit the scoped website changes. When deployment is authorized (including the normal `ready implement` workflow), pull with rebase, resolve only understood conflicts, rerun the relevant checks, and push. Never force-push. A clear request to edit does not override an explicit instruction to hold deployment.
9. Report what changed, the commit, validation, and any remaining human review in the source Discord thread using concise plain English. Distinguish pushed changes from a verified live deployment; only say it is live after checking the deployed site.

Keep secrets, credentials, unpublished private material, and lengthy internal reasoning out of Discord and the website.
