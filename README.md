# Bin Guide — Phone-Based Bin Guide

Type it in, get the right bin in seconds.

## Demo video

> TODO — record the 2–3 minute demo video (see `VIDEO-SCRIPT.md`) and paste the public YouTube/Vimeo link here.

## What it does and why

**Arbiter Hacks V1, Theme Track: Rethinking Waste.**

A phone-first web app. Type what you want to throw away — or take a photo
and tell the app what it is — and it tells you which bin it goes in
(recycling / compost / general waste / hazardous), with a short
plain-language reason why.

## The one flow

1. Open the app on your phone.
2. Type the item (e.g. `plastic bottle`) or tap Photo, take a picture, then type what it is.
3. Get the bin, in big letters and colour, plus why, plus one practical tip.
4. Tap "Check another item" and go again.

You can also browse all 59 items by bin, or tap a quick-pick chip.

## Run it

No build step, no server, no keys, no account. Any static host works
(GitHub Pages included).

```bash
cd bin-guide
python3 -m http.server 8000
# open http://localhost:8000 on your phone or computer
```

Or open `index.html` directly in a browser. After the first load it works
offline — everything is local.

## Tests

```bash
node tests/test.js
```

25 checks, all passing: the five core items (plastic bottle, banana peel,
battery, glass jar, pizza box), natural phrasing variants, unknown-item
handling, and dataset sanity (59 items, every bin covered, every item has a
reason and keywords).

## How it works

- `data.js` — a built-in rules dataset: 59 common household items, each
  with a bin, a plain-language reason, and a tip. This file IS the guide.
- `app.js` — a small matcher: normalises the query, scores it against item
  names and keywords, returns the best match. No network, no model, no API.
- `index.html` / `style.css` — the phone-first UI.

## Tech stack

- Plain HTML, CSS and JavaScript — no build step, no server, no keys
- Built-in rules dataset: 59 household items in `data.js`
- Works offline after the first load; nothing leaves the phone

## Honest limits

- **The app does not read photos.** There is no image-recognition model
  in it, and the app says so on screen. A photo is attached as the user's
  own record; the classification uses the words the user types. Claiming
  otherwise would be fake AI.
- **The rules are the common ones, not your council's.** Bin colours and
  exact rules vary by area (cartons, yogurt pots and foil are the usual
  grey areas). Every answer carries "check your council" for this reason.
- **59 items, not everything.** An unknown item gets an honest "I do not
  know that one yet" with the closest matches, instead of a guessed bin.
- **No click-through test in a real phone browser was possible here.**
  The matcher was tested in Node (25/25) and the pages were served and
  fetched over HTTP (all 200). The tap flow was verified at code level only.

## The waste problem (Theme Track paragraph, for the submission)

People want to recycle, but most sorting mistakes happen at the bin, in
seconds, with no help in hand. A greasy pizza box in recycling can spoil a
whole bale of card. A battery in general waste can catch fire in a bin
truck. The problem Bin Guide targets is that moment of doubt at the bin:
most people guess, and guessing wrong is worse than not recycling at all.

How to measure whether it worked: count correct answers on a fixed test
set of 50 common items before and after using the app, and track how often
users check a second item in the same visit (a sign they trust it enough
to keep asking). A follow-up version would log which items people search
for and get wrong most, and grow the dataset from that list.

## Rules verified (live, 23 Nov 2026)

Official page: https://arbiter-hacks-v1.devpost.com/

- Deadline: 21 Dec 2026, 06:00 WAT (00:00 EST).
- Prizes: $7,800 cash (1st General $2,100, 1st Theme $2,100, 2nd General
  $1,550, 2nd Theme $1,550, Participation $500) plus sponsor credits.
- Solo allowed (teams of 1–4).
- Submission needs: public repo, demo video 2–3 minutes (YouTube/Vimeo),
  written description, plus the Theme paragraph above. Missing the repo or
  the video makes a submission ineligible.
- Theme rubric: Impact on waste 35%, Technical execution 25%,
  Feasibility 20%, Presentation 20%.

## Still needed (Eddie's steps)

1. Create the public GitHub repo and push this folder.
2. Host the demo on GitHub Pages.
3. Record the 2–3 minute demo video on his phone.
4. Fill the Devpost form and submit by 21 Dec 2026, 06:00 WAT.
