# Killed by Bending Spoons

A public record of the software companies acquired by Bending Spoons: what was paid,
what was reported about the staff, and what changed for the people paying for it.

Every figure links to the reporting it came from. The site carries no score, rating or
estimate of its own.

**<https://nuclearconditioning.github.io/killedbybendingspoons/>**

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

## Contributing

Contributions are welcome. The bar is simple: **every claim needs a source**.

### What is most useful

1. **Corrections.** A wrong figure, date or price. Link the reporting that shows it.
2. **Filling the gaps.** Five entries carry a *No outcome reported* notice: Splice,
   Alight Motion, Issuu, MileIQ and Eventbrite. If you can source layoff numbers or
   pricing changes for any of them, that is the highest-value contribution here.
3. **New acquisitions.** Bending Spoons keeps buying. Add the entry when it closes.
4. **The company's side.** If Bending Spoons or an acquired company has responded on
   the record, that response belongs on the page. Public replies are as welcome as
   critical reporting.
5. **Translations and accessibility fixes.**

### What will be turned down

- Claims with no source, however plausible, including ones that make the picture worse.
- Reddit threads, tweets or forum posts standing alone as the sole source for a fact.
  They are fine as evidence that users reacted, attributed as such.
- Scores, ratings or estimates. The site deliberately has none.
- Loaded language in place of the reported figure. The numbers do the work.

### How to add or change an entry

1. Fork, then edit the entry object in `data.js`. Add your source to the `S` map at the
   top of the file and reference it by key, so it can be reused.
2. Put the figure in `facts` (with its own source), not only in the prose.
3. Run `node build.js` to regenerate `p/`.
4. Open `index.html` and check the card and the detail page.
5. Commit both `data.js` and the regenerated `p/*.html`, and open a pull request.

A pull request that changes prose but leaves `facts` and its source untouched will be
asked for the source before merging. That is not bureaucracy: the corrections policy is
the only thing that makes the site worth trusting.

### Reporting a problem without a pull request

Open an issue with the entry name, what is wrong, and a link. That is enough.

## Licence

- Code (`app.js`, `build.js`, `style.css`, templates): MIT, see `LICENSE`.
- The dataset and written entries in `data.js`: CC BY-SA 4.0, see `LICENSE-CONTENT`.

Not affiliated with Bending Spoons S.p.A. Inspired by
[Killed by Google](https://killedbygoogle.com).
