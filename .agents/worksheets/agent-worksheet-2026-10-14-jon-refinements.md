# Jammin Games Jon refinements — Oct 14 2026

- status: COMPLETE
- source: Discord thread `1546617890323566712`, trigger `1559941184145592443` (Jamon: "ready implement the rest")
- notes: Jon `1559569922928021504`–`1559576206805045318`
- starting commit: `968bb62`
- classification: MINOR (established-pattern visual and copy tweaks)
- implementer: native Grok high

## Authorization

Jamon tagged the bot with `ready implement the rest`. Deployment is authorized. No hold-deployment instruction.

## Outcome

Shipped Jon's Oct 13 follow-up batch. Local desktop/mobile captures checked. Push authorized.

## Files

- `css/styles.css`
- `index.html`
- `home/index.html`
- `gunship-history/index.html`
- `faq/index.html`
- `about/index.html`
- `privacy/index.html`
- `into-the-dawn/index.html`
- `js/site.js`

## Decisions

- Titles use `--fs-iconic`; subtitles scaled by the same 1.35/2 and 2.25/4 factors.
- Filled buttons: extra top padding for Binaria Black; hover `filter: brightness(1.1)` on top of existing `-hi` colors.
- Origins/FAQ/History banners: aspect `2557 / 690`, min-height 450 desktop / 320 mobile.
- Footer stacked logo: negative left margin so the yellow lightning aligns with the J of "Journey beyond code."
- `bg-grey` already used `background-attachment: scroll`; added `repeat-y` so the texture continues down the page.
- GTK Apache leader-line ends from verbal notes (Discord PNG expired). Gun end `445,368`. Apache art position unchanged. Kiowa `left: 10.5%; top: -14%`; Blackhawk `left: 10.5%; top: -1%`.
- `.gtk .kicker`/`.subhead` z-index 5 above `.gtk-stage` so overflowing Kiowa/Blackhawk art stays under the titles.
- `#kiowa` / `#blackhawk` on the panels; `site.js` shows those hangars from the hash.
- History '86 logo max-width 320px (−20% from 400px). "Sold together with…" is the last sentence of each descriptor.
- Cache-bust `?v=20261014` on shared CSS/JS.

## Validation

Local `php -S localhost:6464`. Chrome 1440 and 390 captures of Origins, Home, FAQ, History, Team. GTK Apache callouts, Kiowa/Blackhawk title stacking, circle arrows, footer logo, History copy, FAQ 18pt questions, Home title-to-carousel gap.
