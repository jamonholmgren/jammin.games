# Jammin Games visual pass — Oct 13 2026

- status: COMPLETE
- source: Discord thread `1546617890323566712`, trigger `1559534084571664467` (Jon: "read all above, let me know if you have any queries and implement")
- starting commit: `912b2ab`
- shipped commit: `5299b28` (pushed to origin/main; verified live on jammin.games)
- classification: MAJOR (site-wide visual/layout pass + GTK callout redesign)
- Discord report: `1559560906214613072`

## Authorization

Jon (`361928100788830209`) tagged the bot and asked to implement all Oct 13 notes. Deployment is authorized by that implement request. No hold-deployment instruction.

## Scope

Apply Jon's 2026-10-13 notes across Home, Gunship Origins (`/`), FAQ, Gunship History, Our Team, plus shared nav/footer/buttons/backgrounds/images. Preserve Privacy and Into the Dawn archive. Restore original supplied PNGs (no extra JPEG downscale). Replace Gunship Origins PNG logo with supplied SVG.

## Planning sessions

- Claude Opus 5.5 xhigh planning `e3e33861-1f2a-4b3d-ad0d-c84dae8d05af`; visual review FRESH `cb855db7-70a8-40c9-9580-3c94f40dd1a7`
- GPT-6 Astra medium `01a13525-3bbb-7451-aa1b-c0891c3457c5` (plan + visual review)

## Evidence

Current screenshots are 1600x900 JPEG; originals are 1920x1080 PNG. Thumbs 480x270 JPEG vs 640x360 PNG. Background Grey original 2557x1705 PNG ~1.5MB vs current 1920x1297 JPEG 115KB. Header is not sticky. Buttons clip two corners only. GTK is a 3-column small-callout layout; mockup wants large outlined system tiles, titles above, notes inside, leader lines to Apache systems.

Original packs extracted at `/tmp/jammin-oct13-extract`. New refs at `/tmp/jammin-oct13-assets`.
