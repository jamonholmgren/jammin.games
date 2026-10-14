# Jammin Games Jon follow-up 2 — Oct 14 2026

- status: COMPLETE
- source: Discord thread `1546617890323566712`, trigger `1559956922625429705`
- starting commit: `1fe29e0`
- classification: MINOR (established-pattern visual and copy tweaks)
- implementer: native Grok high

## Authorization

Jon tagged the bot with “please implement”. Deployment is authorized. No hold-deployment instruction.

## Scope

- `bg-grey.png` fixed with scroll, not tiled
- Tighten GTK helicopter subtitle toward “Get to know your gunship”
- Move M230 chaingun hangar endpoint left onto the gun (reference PNG attached)
- Rename TADS to AN/ASQ-170 Arrowhead M-TADS
- History: 2000 logo left with text; 86 logo down toward text; slight space under Gunship!; consistent logo-to-text gap

## Decisions

- `bg-grey`: `background-attachment: fixed` and `background-repeat: no-repeat` (Jon’s correction; the earlier scroll+tile pass is reversed).
- GTK subtitle: kicker bottom margin 0.05rem, subhead top 0.
- Chaingun endpoint `418,366` (left from `445,368` onto the muzzle). Oct 13 PNG still expired.
- TADS label: AN/ASQ-170 Arrowhead M-TADS.
- 2000 logo PNG has ~43px left empty canvas at 426px wide; negative margin cancels it. 86 `margin-bottom: 0.2rem`; bang `1.05rem`.
- Cache-bust `?v=20261014b`.

## Validation

Local `php -S localhost:6465`. Chrome 1440 and 390 of Origins and History. 2000 G aligns with MICROPROSE. Chaingun dot on the muzzle. Subtitle tighter.
