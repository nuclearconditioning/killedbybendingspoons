# Killed by Bending Spoons

A public record of the software companies acquired by Bending Spoons: what was paid,
what was reported about the staff, and what changed for the people paying for it.

Every figure links to the reporting it came from. The site carries no score, rating or
estimate of its own.

Live: <!-- add your URL after first deploy -->

## Evidence standard

- Each number carries its own source link, not a shared bibliography.
- Nothing is extrapolated. Where a company has no outcome reporting, its page says so
  rather than applying the pattern seen elsewhere.
- Where sources disagree, both figures appear (komoot's layoffs are reported at 75% and
  at about 85%).
- Where the company has responded on the record, the response is quoted on the page.
- Descriptions of events come from the linked reporting. Characterisations are opinion,
  offered as commentary on the facts shown.

## Structure

| Path | What it is |
| --- | --- |
| `data.js` | Every entry, one object each. The only place facts live. |
| `index.html` | The index: one card per acquisition. |
| `app.js` | Renders the index from `data.js`. Search, filter, sort. |
| `build.js` | Generates a static page per acquisition into `p/`. |
| `style.css` | All styling, shared by both. |
| `p/*.html` | Generated. Do not edit by hand. |

No dependencies, no build tooling, no framework. Open `index.html` in a browser.

## Making a change

1. Edit the entry in `data.js`.
2. Run `node build.js` to regenerate the pages in `p/`.
3. Open `index.html` and check it.

## Corrections

Corrections are welcome and will be applied when they come with a source. Open an issue
or a pull request with a link to the reporting. Claims without a source will not be
added, including ones that would make the picture look worse.

## Licence

- Code (`app.js`, `build.js`, `style.css`, templates): MIT, see `LICENSE`.
- The dataset and written entries in `data.js`: CC BY-SA 4.0, see `LICENSE-CONTENT`.

Not affiliated with Bending Spoons S.p.A. Inspired by
[Killed by Google](https://killedbygoogle.com).
