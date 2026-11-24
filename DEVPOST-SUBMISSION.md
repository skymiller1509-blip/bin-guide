# Arbiter Hacks V1 — Devpost submission, filled template

Source template: Eddie's screenshots of the Devpost submission form from the
Kiroween Crypt submission (2026-11-18, devpost.com/submit-to...), same shape
as the SLAY submission. The field order below follows those screenshots.
Kiroween-only fields are marked and do NOT appear on the Arbiter form.

Deadline: 21 Dec 2026, 06:00 WAT (00:00 EST).
Project: Bin Guide (Phone-Based Bin Guide).
Form: https://arbiter-hacks-v1.devpost.com/
Track: Theme, "Rethinking Waste".

## 1. Project name

```
Bin Guide
```

## 2. Elevator pitch (tagline)

```
Type it in, get the right bin in seconds.
```

## 3. Inspiration

```
People want to recycle, but most sorting mistakes happen at the bin, in seconds, with no help in hand. A greasy pizza box in recycling can spoil a whole bale of card. A battery in general waste can catch fire in a bin truck. I wanted something on the phone, right there at the bin, that answers in seconds instead of leaving people to guess.
```

## 4. What it does

```
Type what you want to throw away, or tap Photo, take a picture, then type what it is, and the app tells you which bin it goes in: recycling, compost, general waste, or hazardous. The answer comes in big letters and colour, with a short plain-language reason why and one practical tip. You can also browse all 59 items by bin or tap a quick-pick chip. It works offline after the first load, and nothing leaves your phone.

The app does not read photos. There is no image-recognition model in it, and the app says so on screen. A photo is your own record. The words you type do the classifying.
```

## 5. How we built it

```
Plain HTML, CSS, and JavaScript. No build step, no server, no keys, no account. The guide is a built-in rules dataset of 59 common household items in data.js, each with a bin, a reason, and a tip. A small matcher in app.js normalises what you type, scores it against item names and keywords, and returns the best match. No network, no model, no API.
```

## 6. Challenges we ran into

```
Three honest ones. First, people phrase the same item many ways, so the matcher had to score names and keywords instead of exact matching. Second, an unknown item must never get a guessed bin, so it gets an honest "I do not know that one yet" with the closest matches instead. Third, bin rules vary by council, so every answer carries "check your council" instead of pretending one rule fits everywhere.
```

## 7. Accomplishments we are proud of

```
25 out of 25 tests pass: the five core items (plastic bottle, banana peel, battery, glass jar, pizza box), natural phrasing variants, unknown-item handling, and dataset sanity. All 59 items cover all four bins, and every item has a reason and a tip. The whole flow works end to end: type, answer, tip, check another item. And it works offline after the first load.
```

## 8. What we learned

```
Most sorting mistakes happen in seconds at the bin with no help in hand, so speed matters more than detail. A simple rules list with honest unknowns beats a guessed answer every time. And keeping everything local means the app works anywhere, with no account and no data leaving the phone.
```

## 9. What's next

```
Grow the dataset from the items people search for and get wrong most, and add council-specific rule sets so the answer matches the local rules. Image recognition is a later step, not in this build.
```

## 10. Built with

```
HTML, CSS, JavaScript
```

## 11. Public GitHub repo URL

LIVE 2026-11-24 (10 files, commit eaaaa314, verified by Mabel):

```
https://github.com/skymiller1509-blip/bin-guide
```

## 12. Demo URL (working demo, hosted application or test build)

TODO, GitHub Pages after the repo exists. It will be:

```
https://skymiller1509-blip.github.io/bin-guide/
```

## 13. Demo video URL

TODO, film 2 to 3 minutes from VIDEO-SCRIPT.md and upload to YouTube.

## 14. Testing instructions or credentials for judges

```
No account, no key, no setup. Open the demo link, type "plastic bottle", and you get Recycling with a reason and a tip. Try "banana peel" and "battery" too. Tap Photo, take a picture, type what it is, and the app answers from your words. Or browse all 59 items by bin from the list on the page.
```

## 15. How the project meets the technology requirement

```
Arbiter Hacks V1 has two tracks, General and Theme "Rethinking Waste", and no single required technology. This entry is for the Theme track. The official page lists a tool that identifies whether an item is recyclable as a Theme example, and that is exactly what Bin Guide does, on the phone, at the bin.
```

## 16. Pre-existing code disclosure

```
None. Built from scratch in this project. No frameworks, no libraries, no starter template, no copied code.
```

## 17. Sponsor / Special Prizes and track

Enter the Theme track, "Rethinking Waste". The prizes are 1st General $2,100, 1st Theme $2,100, 2nd General $1,550, 2nd Theme $1,550, and Participation $500, plus sponsor credits. Pick Theme on the form.

## 18. Submitter Country of Residence

```
Nigeria
```

## 19. Submitter Type

```
Individual
```

## 20. Organization name

Leave blank. Submitting as an individual, not for an organization.

## 21. Eligible jurisdiction checkbox

Tick it. Nigeria is not on the excluded list.

## Theme Track paragraph (required, paste where the form asks for it)

```
People want to recycle, but most sorting mistakes happen at the bin, in seconds, with no help in hand. A greasy pizza box in recycling can spoil a whole bale of card. A battery in general waste can catch fire in a bin truck. The problem Bin Guide targets is that moment of doubt at the bin: most people guess, and guessing wrong is worse than not recycling at all.

How to measure whether it worked: count correct answers on a fixed test set of 50 common items before and after using the app, and track how often users check a second item in the same visit (a sign they trust it enough to keep asking). A follow-up version would log which items people search for and get wrong most, and grow the dataset from that list.
```

## Kiroween-only fields (do NOT look for these on the Arbiter form)

- The Kiro questions: employee of the hackathon sponsor (AWS), how much the
  hackathon helped you develop new skills, how likely you are to use Kiro
  again. These were Kiroween survey questions.
- The Kiroween category picker: Resurrection, Frankenstein, Skeleton Crew,
  Costume Contest.
- The Kiro technology requirement: "Your project must use Kiro."

Note: the Arbiter form's exact additional questions may differ slightly from
Kiroween's. If the Arbiter form asks something extra, send Mabel a screenshot
of that field and she will write the answer.
